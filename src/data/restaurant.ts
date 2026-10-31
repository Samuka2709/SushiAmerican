/**
 * Arquivo único de configuração do site.
 * Todo texto comercial, contato, horário, preço e foto vem daqui.
 * Para trocar de cliente, edite somente este arquivo.
 *
 * Valores marcados com // DEMO são dados de demonstração e devem ser
 * substituídos pelos dados reais do cliente antes de publicar.
 *
 * Fotos: IDs de fotos gratuitas do Unsplash (https://unsplash.com/photos/...).
 * Troque pelo ID de outra foto do Unsplash ou adapte `src/lib/img.ts`
 * para apontar para as fotos próprias do restaurante.
 */

export type Tag = 'Più richiesto' | 'Novità' | 'Piccante' | 'Vegetariano';

export interface Photo {
  /** ID da foto no Unsplash (parte depois de "photo-") */
  id: string;
  /** Texto alternativo descritivo e único */
  alt: string;
}

export interface Dish {
  name: string;
  description: string;
  price: number;
  pieces?: string;
  tags?: Tag[];
  photo?: Photo;
}

export interface MenuCategory {
  id: string;
  label: string;
  /** Pratos com foto (cartões 4:5) */
  featured: Dish[];
  /** Demais itens da categoria, em lista de texto */
  more?: Dish[];
}

/** Um turno de abertura, em "HH:MM" (fuso do restaurante). */
export type Shift = { open: string; close: string };
/** 0 = domingo ... 6 = sábado. Cada dia tem um ou mais turnos (almoço e jantar). null = fechado. */
export type Hours = Shift[] | null;

const lunch = { open: '12:00', close: '15:00' }; // DEMO
const dinner = { open: '19:00', close: '23:30' }; // DEMO

export const restaurant = {
  name: 'Shiori', // DEMO
  fullName: 'Shiori Sushi', // DEMO
  tagline: 'Pesce del giorno, riso della casa, mano ferma.', // DEMO
  city: 'Caserta', // DEMO
  neighborhood: 'Centro', // DEMO
  /** Domínio próprio do cliente. Vazio = usa o endereço de produção da Vercel. */
  siteUrl: '', // DEMO (ex.: 'https://kikkosan.it')
  timezone: 'Europe/Rome', // DEMO
  foundedYear: 2014, // DEMO
  priceRange: '€€',

  seo: {
    title: 'Shiori Sushi — Sushi a Caserta, all you can eat e alla carta', // DEMO
    description:
      'Sushi nel centro di Caserta: all you can eat a pranzo e a cena, menù alla carta, asporto e consegna. Ordina e prenota su WhatsApp.', // DEMO
  },

  contact: {
    whatsapp: '5573998258544', // DEMO (somente números, com código do país). Na venda, troque pelo WhatsApp do restaurante
    phone: '+39 0823 000000', // DEMO
    phoneHref: '+390823000000', // DEMO
    instagram: 'shiorisushi', // DEMO (sem @)
    address: {
      street: 'Corso Trieste, 120', // DEMO
      district: 'Centro', // DEMO
      city: 'Caserta', // DEMO
      state: 'CE', // DEMO
      zip: '81100', // DEMO
      country: 'IT',
    },
    mapsUrl: 'https://www.google.com/maps/search/?api=1&query=Corso+Trieste%2C+120%2C+81100+Caserta+CE', // DEMO
    mapsEmbed: 'https://www.google.com/maps?q=Corso+Trieste,+120,+81100+Caserta+CE&output=embed', // DEMO
  },

  /** Índice 0 = domingo */
  hours: [
    [lunch, dinner], // DEMO domenica
    null, // DEMO lunedì (chiuso)
    [lunch, dinner], // DEMO martedì
    [lunch, dinner], // DEMO mercoledì
    [lunch, dinner], // DEMO giovedì
    [lunch, dinner], // DEMO venerdì
    [lunch, { open: '19:00', close: '24:00' }], // DEMO sabato
  ] as Hours[],

  /** Avaliações reais do Google. Deixe null para esconder a seção de prova social. */
  google: null as null | {
    rating: number;
    count: number;
    url: string;
    reviews: { author: string; text: string }[];
  },

  nav: [
    { label: 'Chi siamo', href: '#chi-siamo' },
    { label: 'Menù', href: '#menu' },
    { label: 'Barche', href: '#barche' },
    { label: 'Galleria', href: '#galleria' },
    { label: 'Prenota', href: '#prenota' },
    { label: 'Contatti', href: '#contatti' },
  ],

  hero: {
    photo: {
      id: '1710945301326-d60727e4833a',
      alt: 'Nigiri di salmone sollevato con le bacchette su sfondo nero, con luce laterale sul pesce',
    },
  },

  marquee: ['Pesce fresco ogni giorno', 'Riso condito in casa', 'Fatto a mano', 'All you can eat a pranzo e a cena'], // DEMO

  about: {
    label: 'La nostra storia',
    title: 'Un bancone piccolo, un pesce alla volta.', // DEMO
    paragraphs: [
      'Shiori è nato nel 2014 come un bancone da otto posti nel centro di Caserta. L’idea è rimasta la stessa: comprare poco, comprare presto e servire il pesce il giorno stesso in cui arriva.', // DEMO
      'Ogni pezzo viene preparato al momento, davanti a chi lo mangia. Il riso è condito con un aceto che prepariamo qui, in piccole quantità, e servito tiepido, come si deve.', // DEMO
    ],
    photos: [
      {
        id: '1711991022613-63df8929f311',
        alt: 'Mani dell’itamae che tagliano un filetto di salmone con un coltello yanagiba su un tagliere di legno',
      },
      {
        id: '1681270496598-13c5365730c8',
        alt: 'Chef che completa un piatto con bacchette lunghe, in primo piano sul bancone di legno',
      },
    ] as Photo[],
    pillars: [
      { title: 'Il pesce', text: 'Salmone, tonno e pesce bianco consegnati ogni mattina da fornitori che conosciamo di persona.' }, // DEMO
      { title: 'Il riso', text: 'Riso giapponese, aceto della casa e temperatura giusta. È metà di ogni pezzo.' }, // DEMO
      { title: 'La tecnica', text: 'Tagli fatti al momento, senza fretta e senza scorciatoie, da chi si è formato per anni.' }, // DEMO
    ],
    stats: [
      { value: 12, suffix: '', label: 'anni al bancone' }, // DEMO
      { value: 900, suffix: '', label: 'pezzi preparati ogni sera' }, // DEMO
      { value: 8, suffix: '', label: 'posti al bancone' }, // DEMO
    ],
  },

  /** Pedido montado na sacola do site e enviado como mensagem de WhatsApp */
  order: {
    payment: ['Carta o bancomat alla consegna', 'Contanti', 'Satispay'], // DEMO
    deliveryNote: 'Il costo della consegna dipende dalla zona e te lo confermiamo su WhatsApp.', // DEMO
  },

  /** Títulos e textos curtos de cada seção */
  sections: {
    heroEyebrow: 'Sushi e all you can eat', // DEMO
    menu: {
      title: 'Cosa esce oggi dal bancone.', // DEMO
      lead: 'Prezzi alla carta, per asporto e consegna. Componi l’ordine qui e invialo tutto insieme su WhatsApp.',
    },
    combos: {
      title: 'Da dividere a tavola.', // DEMO
      lead: 'Barche e vassoi pronti, preparati al momento per asporto o consegna.', // DEMO
    },
    gallery: { title: 'Da vicino, senza fretta.' }, // DEMO
    visit: { title: 'Nel centro di Caserta, a due passi dalla Reggia.' }, // DEMO
  },

  /** Destaque: o rodízio (all you can eat), que é o principal na Itália */
  signature: {
    label: 'All you can eat',
    priceNote: 'a persona, a cena', // DEMO
    cta: 'Prenota un tavolo',
    kanji: '鮨',
    name: 'Tutto il menù, quante volte vuoi', // DEMO
    description:
      'Ordini al tavolo dal nostro menù di oltre cento piatti: nigiri, uramaki, sashimi, tempura e cucina calda. I piatti arrivano a giri, preparati al momento.', // DEMO
    details: ['Pranzo 17,90 € (mar–ven)', 'Cena e festivi 27,90 €', 'Bevande e dolci esclusi'], // DEMO
    price: 27.9, // DEMO
    photo: {
      id: '1635451778386-e5778e66f61e',
      alt: 'Un singolo nigiri su un piatto rotondo di pietra scura, illuminato di lato su un bancone di legno',
    },
    detail: {
      id: '1763943431214-275e64002f90',
      alt: 'Dettaglio di nigiri di tonno con zenzero e wasabi su un tagliere di legno chiaro',
    },
  },

  menu: [
    {
      id: 'misti',
      label: 'Misti',
      featured: [
        {
          name: 'Misto Kuro',
          description: 'Nigiri, uramaki e hosomaki del giorno, scelti dallo chef.',
          pieces: '16 pezzi',
          price: 18.9, // DEMO
          photo: { id: '1617196034796-73dfa7b1fd56', alt: 'Fila di nigiri misti su una lastra quadrata di ardesia nera' },
        },
        {
          name: 'Misto salmone scottato',
          description: 'Nigiri di salmone scottato e uramaki al sesamo.',
          pieces: '18 pezzi',
          price: 21.9, // DEMO
          tags: ['Più richiesto'],
          photo: { id: '1583623025817-d180a2221d0a', alt: 'Nigiri di salmone scottato con sesamo accanto a uramaki e salsa di soia su pietra scura' },
        },
        {
          name: 'Misto gunkan',
          description: 'Gunkan di uova di pesce, tamago e nigiri di pesce bianco.',
          pieces: '14 pezzi',
          price: 19.9, // DEMO
          tags: ['Novità'],
          photo: { id: '1514190051997-0f6f39ca5cde', alt: 'Gunkan di uova di pesce e nigiri di tamago in fila su una foglia verde' },
        },
      ],
      more: [
        { name: 'Misto vegetariano', description: 'Cetriolo, avocado, shiitake e tamago.', pieces: '16 pezzi', price: 14.9, tags: ['Vegetariano'] }, // DEMO
        { name: 'Misto bambini', description: 'Hosomaki e uramaki senza pesce crudo.', pieces: '12 pezzi', price: 11.9 }, // DEMO
      ],
    },
    {
      id: 'sashimi',
      label: 'Sashimi',
      featured: [
        {
          name: 'Sashimi di salmone',
          description: 'Taglio spesso, servito con wasabi grattugiato al momento.',
          pieces: '10 fette',
          price: 13.9, // DEMO
          tags: ['Più richiesto'],
          photo: { id: '1675870791718-a12568cfef43', alt: 'Fetta spessa di sashimi di salmone sollevata con le bacchette su sfondo scuro' },
        },
        {
          name: 'Moriawase',
          description: 'Salmone, tonno, pesce bianco e gambero del giorno.',
          pieces: '15 fette',
          price: 21.9, // DEMO
          photo: { id: '1772285283419-b34f42b4a4df', alt: 'Selezione di sashimi di salmone, tonno e pesce bianco disposta su un piatto scuro' },
        },
        {
          name: 'Tris della casa',
          description: 'Salmone, tonno e gambero, con un nigiri in omaggio.',
          pieces: '12 fette',
          price: 17.9, // DEMO
          photo: { id: '1791386809533-5c2e79e34665', alt: 'Sashimi e nigiri di salmone, tonno e gambero su un piatto nero' },
        },
      ],
      more: [
        { name: 'Sashimi di pesce bianco', description: 'Con ponzu agli agrumi ed erba cipollina.', pieces: '10 fette', price: 13.9 }, // DEMO
        { name: 'Sashimi di tonno', description: 'Tonno rosso in taglio rettangolare.', pieces: '8 fette', price: 16.9 }, // DEMO
      ],
    },
    {
      id: 'nigiri',
      label: 'Nigiri',
      featured: [
        {
          name: 'Nigiri di salmone',
          description: 'Riso tiepido e salmone tagliato in diagonale.',
          pieces: '2 pezzi',
          price: 4.5, // DEMO
          photo: { id: '1637074930269-089fde202b57', alt: 'Due nigiri di salmone su un piatto nero, con le bacchette appoggiate accanto' },
        },
        {
          name: 'Salmone scottato',
          description: 'Scottato al cannello e spennellato con salsa teriyaki della casa.',
          pieces: '2 pezzi',
          price: 5.5, // DEMO
          tags: ['Novità'],
          photo: { id: '1711480023277-9f27496f10e6', alt: 'Itamae che spennella la salsa su un nigiri appena scottato' },
        },
        {
          name: 'Nigiri di tonno',
          description: 'Akami fresco con un tocco di wasabi.',
          pieces: '2 pezzi',
          price: 6, // DEMO
          photo: { id: '1562707786-7d2b807961c4', alt: 'Nigiri di tonno rosso con erba cipollina, in primo piano' },
        },
      ],
      more: [
        { name: 'Pesce bianco allo yuzu', description: 'Scorza di agrumi e sale grosso.', pieces: '2 pezzi', price: 5 }, // DEMO
        { name: 'Ebi', description: 'Gambero cotto e aperto a farfalla.', pieces: '2 pezzi', price: 5 }, // DEMO
        { name: 'Tamago', description: 'Frittata dolce giapponese, fatta in casa.', pieces: '2 pezzi', price: 3.5, tags: ['Vegetariano'] }, // DEMO
      ],
    },
    {
      id: 'temaki',
      label: 'Temaki',
      featured: [
        {
          name: 'Temaki di salmone',
          description: 'Alga croccante, riso tiepido e salmone a cubetti.',
          pieces: '1 pezzo',
          price: 6.5, // DEMO
          tags: ['Più richiesto'],
          photo: { id: '1791386809517-60f40f5372dd', alt: 'Due coni di alga ripieni di riso e salmone su un piatto bianco' },
        },
      ],
      more: [
        { name: 'Temaki tonno piccante', description: 'Tonno, peperoncino togarashi ed erba cipollina.', pieces: '1 pezzo', price: 7.5, tags: ['Piccante'] }, // DEMO
        { name: 'Temaki skin', description: 'Pelle di salmone croccante e salsa teriyaki.', pieces: '1 pezzo', price: 5.5 }, // DEMO
        { name: 'Temaki vegetariano', description: 'Cetriolo, mango, avocado e sesamo.', pieces: '1 pezzo', price: 5, tags: ['Vegetariano'] }, // DEMO
      ],
    },
    {
      id: 'hosomaki',
      label: 'Hosomaki',
      featured: [
        {
          name: 'Hosomaki di salmone',
          description: 'Il classico sottile, con salmone e alga nori.',
          pieces: '8 pezzi',
          price: 6.5, // DEMO
          photo: { id: '1617196034738-26c5f7c977ce', alt: 'Hosomaki di salmone in fila accanto a una bottiglia di salsa di soia, su sfondo scuro' },
        },
        {
          name: 'Hosomaki di tonno',
          description: 'Tonno rosso con un filo di wasabi.',
          pieces: '8 pezzi',
          price: 7.5, // DEMO
          photo: { id: '1780291117619-c58ee7aa740e', alt: 'Piatto di hosomaki con zenzero marinato e bacchette, in luce soffusa' },
        },
        {
          name: 'Kappa maki',
          description: 'Cetriolo giapponese e sesamo tostato.',
          pieces: '8 pezzi',
          price: 4.5, // DEMO
          tags: ['Vegetariano'],
          photo: { id: '1548907368-35e5ea8cbc8a', alt: 'Hosomaki di cetriolo avvolti nell’alga, disposti su un piatto chiaro' },
        },
      ],
      more: [
        { name: 'Hosomaki di surimi', description: 'Surimi e maionese giapponese.', pieces: '8 pezzi', price: 5 }, // DEMO
      ],
    },
    {
      id: 'uramaki',
      label: 'Uramaki',
      featured: [
        {
          name: 'Ebi tempura roll',
          description: 'Gambero in tempura, avocado e copertura di salmone.',
          pieces: '8 pezzi',
          price: 11.9, // DEMO
          tags: ['Più richiesto'],
          photo: { id: '1582450871972-ab5ca641643d', alt: 'Uramaki ricoperto di avocado con gambero in tempura che esce dalle estremità' },
        },
        {
          name: 'Philadelphia',
          description: 'Salmone, formaggio spalmabile ed erba cipollina.',
          pieces: '8 pezzi',
          price: 9.9, // DEMO
          photo: { id: '1558985212-92c2ff0b56e7', alt: 'Uramaki di salmone e formaggio su un piatto scuro con bacchette di legno' },
        },
        {
          name: 'Salmone flambé',
          description: 'Uramaki scottato alla fiamma, con salsa della casa.',
          pieces: '8 pezzi',
          price: 10.9, // DEMO
          tags: ['Novità'],
          photo: { id: '1761314025679-1bc4e2f6f7fe', alt: 'Uramaki scottati da una fiamma arancione su sfondo scuro' },
        },
      ],
      more: [
        { name: 'Skin roll', description: 'Pelle di salmone croccante e salsa teriyaki.', pieces: '8 pezzi', price: 8.9 }, // DEMO
        { name: 'California', description: 'Surimi, mango e cetriolo.', pieces: '8 pezzi', price: 8.5 }, // DEMO
      ],
    },
    {
      id: 'antipasti',
      label: 'Antipasti',
      featured: [
        {
          name: 'Gyoza',
          description: 'Ravioli giapponesi di maiale, scottati sulla piastra.',
          pieces: '6 pezzi',
          price: 6.5, // DEMO
          photo: { id: '1738681336104-608b4e7dc3b0', alt: 'Gyoza dorati alla piastra serviti in un piatto nero su un tavolo di legno' },
        },
        {
          name: 'Gunkan di salmone piccante',
          description: 'Salmone con peperoncino della casa sopra il riso.',
          pieces: '4 pezzi',
          price: 7.5, // DEMO
          tags: ['Piccante'],
          photo: { id: '1712725214706-e564b8dd1bbe', alt: 'Due gunkan con salmone tritato e salsa rossa piccante' },
        },
        {
          name: 'Tataki di tonno',
          description: 'Tonno scottato, ponzu e germogli freschi.',
          price: 12.9, // DEMO
          photo: { id: '1681270507609-e2a5f21969b0', alt: 'Tataki di tonno con germogli servito su un piatto di ceramica bianca' },
        },
      ],
      more: [
        { name: 'Zuppa di miso', description: 'Brodo di miso, tofu ed erba cipollina.', price: 3.5, tags: ['Vegetariano'] }, // DEMO
        { name: 'Edamame', description: 'Baccelli di soia bolliti con sale grosso.', price: 4.5, tags: ['Vegetariano'] }, // DEMO
        { name: 'Insalata di alghe', description: 'Alghe wakame al sesamo.', price: 4.5, tags: ['Vegetariano'] }, // DEMO
      ],
    },
    {
      id: 'bevande',
      label: 'Bevande',
      featured: [],
      more: [
        { name: 'Sake della casa', description: 'Junmai, servito freddo.', pieces: '180 ml', price: 8 }, // DEMO
        { name: 'Sake premium', description: 'Junmai daiginjo, bottiglia.', pieces: '300 ml', price: 28 }, // DEMO
        { name: 'Tè verde freddo', description: 'Sencha preparato in casa.', pieces: '400 ml', price: 3.5 }, // DEMO
        { name: 'Birra giapponese', description: 'Lager importata.', pieces: '330 ml', price: 4.5 }, // DEMO
        { name: 'Acqua frizzante', description: 'Bottiglia.', pieces: '500 ml', price: 2 }, // DEMO
        { name: 'Bibita', description: 'Lattina.', pieces: '330 ml', price: 2.5 }, // DEMO
      ],
    },
  ] as MenuCategory[],

  combos: [
    {
      name: 'Duo',
      pieces: 30,
      price: 32.9, // DEMO
      includes: ['10 nigiri', '10 uramaki', '10 hosomaki', 'Salsa di soia, zenzero e wasabi'], // DEMO
      photo: { id: '1607301406259-dfb186e15de8', alt: 'Vassoio di sushi su un piatto nero con ciotolina di salsa di soia accanto, visto dall’alto' },
    },
    {
      name: 'Kuro',
      pieces: 45,
      price: 46.9, // DEMO
      featured: true,
      includes: ['15 nigiri', '10 sashimi', '20 uramaki', '2 zuppe di miso'], // DEMO
      photo: { id: '1611143669185-af224c5e3252', alt: 'Tavolo scuro visto dall’alto con uramaki, nigiri e salse pronti da dividere' },
    },
    {
      name: 'Banchetto',
      pieces: 70,
      price: 69.9, // DEMO
      includes: ['20 nigiri', '15 sashimi', '35 roll misti', '4 gyoza'], // DEMO
      photo: { id: '1780236935125-0e730e303beb', alt: 'Barca di legno con sushi, sashimi e maki misti' },
    },
  ],

  gallery: [
    { id: '1730900737644-e146f78db8e7', alt: 'Uramaki ripieno di verdure tenuto tra le bacchette, isolato su sfondo nero', span: 'tall' },
    { id: '1747471507235-5b5120a411cb', alt: 'Nigiri di gambero in macro su una superficie di pietra, con luce calda', span: 'wide' },
    { id: '1675870791262-99ab4c09e2fd', alt: 'Pinzetta che solleva una fetta sottile di salmone al buio', span: '' },
    { id: '1635452065566-9c89471bb86c', alt: 'Cassetta di legno con tagli di tonno e salmone pronti per il bancone', span: '' },
    { id: '1787504916858-ed4ee6f02348', alt: 'Itamae in divisa scura dietro il bancone, con sushi pronti davanti', span: 'tall' },
    { id: '1633478062482-790e3b5dd810', alt: 'Bacchette che sollevano un pezzo di sushi da un piatto nero', span: '' },
    { id: '1787589481636-a69533c81edb', alt: 'Uramaki ricoperti di uova arancioni e un filo di salsa su un piatto chiaro', span: 'wide' },
    { id: '1761315413078-1fd73894fe0e', alt: 'Roll di avocado in tempura sollevato con le bacchette su sfondo verde scuro', span: '' },
    { id: '1681270543584-8e541a1bb056', alt: 'Chef in divisa che impiatta sul bancone di preparazione', span: 'wide' },
    { id: '1563245370-cd55e7c95ff4', alt: 'Uramaki misti visti dall’alto su un tagliere scuro', span: 'wide' },
  ] as (Photo & { span: '' | 'tall' | 'wide' })[],

  reservation: {
    title: 'Prenota il tuo tavolo.', // DEMO
    text: 'Otto posti al bancone e una sala per l’all you can eat. Per gruppi di più di 12 persone, scrivici su WhatsApp.', // DEMO
    note: 'La prenotazione viene confermata dal nostro staff su WhatsApp.',
    slotMinutes: 30,
    /** Última reserva aceita X minutos antes do fechamento de cada turno */
    lastSlotBeforeClose: 60,
    photo: {
      id: '1783192485640-7f3b9cec167e',
      alt: 'Bancone di legno della sala con lo chef che prepara piccole porzioni in ciotole',
    },
  },

  footer: {
    copyright: 'Shiori Sushi', // DEMO
  },
};

export type Restaurant = typeof restaurant;
