import type Lenis from 'lenis';

/* --------------------------------------------------------------------------
   Sacola de pedido: itens escolhidos no cardápio e nos combos viram uma
   única mensagem de WhatsApp, com quantidades, subtotal e dados de entrega
   -------------------------------------------------------------------------- */

interface Item {
  name: string;
  price: number;
  detail?: string;
  qty: number;
}

const STORAGE_KEY = 'shiori-bag-v1';
const brl = new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL', maximumFractionDigits: 0 });
const money = (v: number) => brl.format(v).replace(/\s/g, ' ');
const esc = (s: string) => s.replace(/[&<>"]/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' })[c]!);

function load(): Item[] {
  try {
    const raw = JSON.parse(localStorage.getItem(STORAGE_KEY) ?? '[]');
    return Array.isArray(raw) ? raw.filter((i) => i && typeof i.name === 'string' && i.qty > 0) : [];
  } catch {
    return [];
  }
}
function save(items: Item[]) {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
  } catch {
    /* navegação privada ou armazenamento bloqueado: a sacola vale só nesta visita */
  }
}

export function initBag(opts: { lenis: Lenis | null; whatsapp: string; restaurantName: string; reduced: boolean }) {
  const dlg = document.querySelector<HTMLDialogElement>('[data-bag]');
  if (!dlg) return;
  const $ = <T extends Element = HTMLElement>(s: string) => dlg.querySelector<T>(s)!;

  const list = $('[data-bag-items]');
  const empty = $('[data-bag-empty]');
  const form = $<HTMLFormElement>('[data-bag-form]');
  const totalEl = $('[data-bag-total]');
  const status = $('[data-bag-status]');
  const sendBtn = $<HTMLButtonElement>('[data-bag-send]');
  const clearBtn = $<HTMLButtonElement>('[data-bag-clear]');
  const addressField = $('[data-bag-address]');
  const name = $<HTMLInputElement>('#bg-name');
  const address = $<HTMLInputElement>('#bg-address');
  const announce = document.querySelector('[data-bag-announce]')!;
  const openers = [...document.querySelectorAll<HTMLElement>('[data-bag-open]')];
  const counts = [...document.querySelectorAll<HTMLElement>('[data-bag-count]')];
  const floatTotal = document.querySelector<HTMLElement>('[data-bag-float-total]');
  const genericLinks = [...document.querySelectorAll<HTMLAnchorElement>('[data-order-generic]')];
  const mobileWa = document.querySelector<HTMLElement>('[data-mobile-bar] [data-order-generic]');
  const waFloat = document.querySelector<HTMLElement>('[data-wa-float]');

  let items = load();
  let opener: HTMLElement | null = null;

  const count = () => items.reduce((n, i) => n + i.qty, 0);
  const total = () => items.reduce((n, i) => n + i.qty * i.price, 0);
  const mode = () => (form.elements.namedItem('mode') as RadioNodeList).value as 'entrega' | 'retirada';

  function render() {
    const n = count();
    list.innerHTML = items
      .map(
        (i, idx) => `
        <li class="bag-item">
          <div class="bag-item__info">
            <p class="bag-item__name">${esc(i.name)}</p>
            <p class="bag-item__meta">${i.detail ? `${esc(i.detail)} · ` : ''}${money(i.price)}</p>
          </div>
          <div class="stepper" role="group" aria-label="Quantidade de ${esc(i.name)}">
            <button type="button" data-step="-1" data-idx="${idx}" aria-label="${i.qty === 1 ? 'Remover' : 'Diminuir'} ${esc(i.name)}">
              <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5 12h14"/></svg>
            </button>
            <span class="stepper__qty" aria-live="polite">${i.qty}</span>
            <button type="button" data-step="1" data-idx="${idx}" aria-label="Aumentar ${esc(i.name)}">
              <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 5v14M5 12h14"/></svg>
            </button>
          </div>
          <p class="bag-item__total">${money(i.qty * i.price)}</p>
        </li>`
      )
      .join('');
    empty.hidden = n > 0;
    list.hidden = n === 0;
    form.hidden = n === 0;
    sendBtn.disabled = n === 0;
    clearBtn.hidden = n === 0;
    totalEl.textContent = money(total());

    // com itens na sacola, os botões genéricos de pedido passam a abrir a sacola
    counts.forEach((c) => (c.textContent = String(n)));
    if (floatTotal) floatTotal.textContent = money(total());
    openers.forEach((o) => (o.hidden = n === 0));
    if (mobileWa) mobileWa.hidden = n > 0;
    if (waFloat) waFloat.hidden = n > 0;
  }

  function add(btn: HTMLElement) {
    const nameAttr = btn.dataset.add!;
    const found = items.find((i) => i.name === nameAttr);
    if (found) found.qty += 1;
    else items.push({ name: nameAttr, price: Number(btn.dataset.price), detail: btn.dataset.detail || undefined, qty: 1 });
    save(items);
    render();
    announce.textContent = `${nameAttr} adicionado. ${count()} ${count() === 1 ? 'item' : 'itens'} no pedido.`;

    // confirmação no próprio botão e um leve pulso no contador
    btn.classList.add('is-added');
    const label = btn.querySelector<HTMLElement>('[data-add-label]');
    if (label) {
      label.dataset.original ??= label.textContent!;
      label.textContent = btn.classList.contains('btn') ? 'Adicionado ao pedido' : 'Adicionado';
    }
    clearTimeout(Number(btn.dataset.timer));
    btn.dataset.timer = String(
      setTimeout(() => {
        btn.classList.remove('is-added');
        if (label) label.textContent = label.dataset.original!;
      }, 1400)
    );
    if (!opts.reduced) counts.forEach((c) => c.animate([{ transform: 'scale(1.35)' }, { transform: 'scale(1)' }], { duration: 320, easing: 'cubic-bezier(0.22, 1, 0.36, 1)' }));
  }

  function open(from?: HTMLElement) {
    opener = from ?? (document.activeElement as HTMLElement);
    render();
    dlg!.classList.remove('is-closing');
    dlg!.showModal();
    opts.lenis?.stop();
    document.documentElement.classList.add('bag-open');
  }

  function close() {
    if (!dlg!.open || dlg!.classList.contains('is-closing')) return;
    if (opts.reduced) return dlg!.close();
    dlg!.classList.add('is-closing');
    setTimeout(() => dlg!.close(), 220);
  }

  dlg.addEventListener('close', () => {
    dlg.classList.remove('is-closing');
    opts.lenis?.start();
    document.documentElement.classList.remove('bag-open');
    opener?.focus();
  });
  // Esc: anima a saída em vez de fechar seco
  dlg.addEventListener('cancel', (e) => {
    e.preventDefault();
    close();
  });
  dlg.addEventListener('click', (e) => {
    if (e.target === dlg) close();
  });
  $('[data-bag-close]').addEventListener('click', close);

  document.addEventListener('click', (e) => {
    const t = e.target as HTMLElement;
    const addBtn = t.closest<HTMLElement>('[data-add]');
    if (addBtn) return add(addBtn);
    const openBtn = t.closest<HTMLElement>('[data-bag-open]');
    if (openBtn) return open(openBtn);
    const generic = t.closest<HTMLAnchorElement>('[data-order-generic]');
    if (generic && count() > 0) {
      e.preventDefault();
      open(generic);
    }
  });

  list.addEventListener('click', (e) => {
    const b = (e.target as HTMLElement).closest<HTMLButtonElement>('[data-step]');
    if (!b) return;
    const idx = Number(b.dataset.idx);
    const item = items[idx];
    item.qty += Number(b.dataset.step);
    if (item.qty <= 0) {
      items.splice(idx, 1);
      status.textContent = `${item.name} removido do pedido.`;
    }
    save(items);
    render();
    // mantém o foco no mesmo controle depois de redesenhar a lista
    const same = list.querySelector<HTMLButtonElement>(`[data-idx="${Math.min(idx, items.length - 1)}"][data-step="${b.dataset.step}"]`);
    (same ?? $('[data-bag-close]')).focus();
  });

  clearBtn.addEventListener('click', () => {
    items = [];
    save(items);
    render();
    status.textContent = 'Pedido esvaziado.';
    $<HTMLElement>('[data-bag-close]').focus();
  });

  const syncMode = () => {
    const delivery = mode() === 'entrega';
    addressField.hidden = !delivery;
    address.required = delivery;
  };
  form.addEventListener('change', (e) => {
    if ((e.target as HTMLInputElement).name === 'mode') syncMode();
  });
  syncMode();

  function setError(el: HTMLInputElement, msg: string) {
    document.getElementById(`${el.id}-err`)!.textContent = msg;
    if (msg) el.setAttribute('aria-invalid', 'true');
    else el.removeAttribute('aria-invalid');
  }

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    if (!items.length) return;
    const errors: HTMLInputElement[] = [];
    setError(name, '');
    setError(address, '');
    if (name.value.trim().length < 2) {
      setError(name, 'Informe seu nome.');
      errors.push(name);
    }
    if (mode() === 'entrega' && address.value.trim().length < 6) {
      setError(address, 'Informe rua, número e bairro para a entrega.');
      errors.push(address);
    }
    if (errors.length) {
      status.textContent = `Revise ${errors.length === 1 ? 'o campo destacado' : 'os campos destacados'}.`;
      errors[0].focus();
      return;
    }

    const f = new FormData(form);
    const notes = String(f.get('notes') ?? '').trim();
    const lines = [
      `Olá! Gostaria de fazer um pedido no ${opts.restaurantName}.`,
      '',
      '*Pedido*',
      ...items.map((i) => `${i.qty}x ${i.name}${i.detail ? ` (${i.detail})` : ''} — ${money(i.qty * i.price)}`),
      '',
      `*Subtotal:* ${money(total())}`,
      '',
      `*Nome:* ${name.value.trim()}`,
      mode() === 'entrega' ? `*Entrega:* ${address.value.trim()}` : '*Retirada no balcão*',
      `*Pagamento:* ${f.get('payment')}`,
    ];
    if (notes) lines.push(`*Observações:* ${notes}`);
    if (mode() === 'entrega') lines.push('', 'Aguardo a taxa de entrega e o tempo de preparo.');

    const url = `https://wa.me/${opts.whatsapp}?text=${encodeURIComponent(lines.join('\n'))}`;
    status.textContent = 'Abrindo o WhatsApp com o seu pedido.';
    // com 'noopener' o window.open sempre devolve null; corta o vínculo depois
    const win = window.open(url, '_blank');
    if (win) win.opener = null;
    else window.location.href = url;
  });

  render();
}
