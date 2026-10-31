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

export type Tag = 'Popular' | 'New' | 'Spicy' | 'Vegetarian';

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

/** 0 = domingo ... 6 = sábado. null = fechado. Horários em "HH:MM" (fuso do restaurante). */
export type Hours = { open: string; close: string } | null;

export const restaurant = {
  name: 'Shiori', // DEMO
  fullName: 'Shiori Sushi', // DEMO
  tagline: 'Fish of the day, house rice, a steady hand.', // DEMO
  city: 'Portland', // DEMO
  neighborhood: 'Pearl District', // DEMO
  /** Domínio próprio do cliente. Vazio = usa o endereço de produção da Vercel. */
  siteUrl: '', // DEMO (ex.: 'https://shiorisushi.com')
  timezone: 'America/Los_Angeles', // DEMO
  foundedYear: 2014, // DEMO
  priceRange: '$$$',

  seo: {
    title: 'Shiori Sushi — Sushi Bar in Portland, OR', // DEMO
    description:
      'Counter-style sushi in the Pearl District, Portland. Fish delivered every morning, rice seasoned in house, and online ordering. Book your seat at the counter.', // DEMO
  },

  contact: {
    whatsapp: '5573998258544', // DEMO (somente números, com código do país e de área)
    phone: '(503) 555-0148', // DEMO
    phoneHref: '+15035550148', // DEMO
    instagram: 'shiorisushi', // DEMO (sem @)
    address: {
      street: '1120 NW Lovejoy St', // DEMO
      district: 'Pearl District', // DEMO
      city: 'Portland', // DEMO
      state: 'OR', // DEMO
      zip: '97209', // DEMO
      country: 'US',
    },
    mapsUrl: 'https://www.google.com/maps/search/?api=1&query=1120+NW+Lovejoy+St%2C+Portland%2C+OR+97209', // DEMO
    mapsEmbed: 'https://www.google.com/maps?q=1120+NW+Lovejoy+St,+Portland,+OR+97209&output=embed', // DEMO
  },

  /** Índice 0 = domingo */
  hours: [
    { open: '12:00', close: '21:00' }, // DEMO domingo
    null, // DEMO segunda (fechado)
    { open: '17:00', close: '22:00' }, // DEMO terça
    { open: '17:00', close: '22:00' }, // DEMO quarta
    { open: '17:00', close: '22:00' }, // DEMO quinta
    { open: '17:00', close: '23:00' }, // DEMO sexta
    { open: '17:00', close: '23:00' }, // DEMO sábado
  ] as Hours[],

  /** Avaliações reais do Google. Deixe null para esconder a seção de prova social. */
  google: null as null | {
    rating: number;
    count: number;
    url: string;
    reviews: { author: string; text: string }[];
  },

  nav: [
    { label: 'About', href: '#about' },
    { label: 'Menu', href: '#menu' },
    { label: 'Combos', href: '#combos' },
    { label: 'Gallery', href: '#gallery' },
    { label: 'Reservations', href: '#reservations' },
    { label: 'Visit', href: '#visit' },
  ],

  hero: {
    photo: {
      id: '1710945301326-d60727e4833a',
      alt: 'Salmon nigiri held up with chopsticks against a black background, side light on the fish',
    },
  },

  marquee: ['Fresh fish every morning', 'Rice seasoned in house', 'Made by hand', 'Eight seats at the counter'], // DEMO

  about: {
    label: 'Our story',
    title: 'A small counter, one fish at a time.', // DEMO
    paragraphs: [
      'Shiori opened in 2014 as an eight-seat counter in the Pearl District. The idea has not changed: buy a little, buy early, and serve the fish the same day it arrives.', // DEMO
      'Every piece is made to order, right in front of the guest who will eat it. Our rice is seasoned with vinegar we make here in small batches, and served warm, the way it should be.', // DEMO
    ],
    photos: [
      {
        id: '1711991022613-63df8929f311',
        alt: 'Sushi chef’s hands slicing a salmon loin with a yanagiba knife on a wooden board',
      },
      {
        id: '1681270496598-13c5365730c8',
        alt: 'Chef finishing a plate with long chopsticks, close up over the wooden counter',
      },
    ] as Photo[],
    pillars: [
      { title: 'Sourcing', text: 'Salmon, tuna and white fish delivered every morning from suppliers we visit ourselves.' }, // DEMO
      { title: 'Rice', text: 'Japanese short-grain rice, house vinegar, served at body temperature. It is half of every piece.' }, // DEMO
      { title: 'Technique', text: 'Every cut made to order, no rushing and no shortcuts, by chefs who trained for years to do it.' }, // DEMO
    ],
    stats: [
      { value: 12, suffix: '', label: 'years behind the counter' }, // DEMO
      { value: 900, suffix: '', label: 'pieces made every night' }, // DEMO
      { value: 8, suffix: '', label: 'seats at the counter' }, // DEMO
    ],
  },

  /** Pedido montado na sacola do site e enviado como mensagem de WhatsApp */
  order: {
    payment: ['Credit or debit card', 'Apple Pay / Google Pay', 'Cash'], // DEMO
    deliveryNote: 'Delivery fee depends on distance and is confirmed by message.', // DEMO
  },

  /** Títulos e textos curtos de cada seção */
  sections: {
    heroEyebrow: 'Sushi counter', // DEMO
    menu: {
      title: 'Fresh from the counter today.', // DEMO
      lead: 'Prices per order. Build your order here and send it all at once on WhatsApp.',
    },
    combos: {
      title: 'Made for sharing.', // DEMO
      lead: 'Set platters, made to order for pickup or delivery.', // DEMO
    },
    gallery: { title: 'Up close, unhurried.' }, // DEMO
    visit: { title: 'In the Pearl, steps from the park.' }, // DEMO
  },

  signature: {
    label: 'Chef’s signature',
    priceNote: 'per person', // DEMO
    cta: 'Book the omakase',
    kanji: '鮨',
    name: 'Counter Omakase', // DEMO
    description:
      'Sixteen courses chosen by the chef from the day’s catch: nigiri, sashimi and a dessert. Served at the counter, one piece at a time.', // DEMO
    details: ['16 courses', 'Counter seating only', 'Reservation required'], // DEMO
    price: 165, // DEMO
    photo: {
      id: '1635451778386-e5778e66f61e',
      alt: 'A single nigiri on a round dark stone plate, side lit on a wooden counter',
    },
    detail: {
      id: '1763943431214-275e64002f90',
      alt: 'Close up of tuna nigiri with ginger and wasabi on a light wooden board',
    },
  },

  menu: [
    {
      id: 'platters',
      label: 'Platters',
      featured: [
        {
          name: 'Kuro Platter',
          description: 'Chef’s selection of nigiri, uramaki and hosomaki of the day.',
          pieces: '16 pcs',
          price: 42, // DEMO
          photo: { id: '1617196034796-73dfa7b1fd56', alt: 'Row of assorted nigiri on a square black slate plate' },
        },
        {
          name: 'Seared Salmon Platter',
          description: 'Torched salmon nigiri and sesame uramaki.',
          pieces: '18 pcs',
          price: 48, // DEMO
          tags: ['Popular'],
          photo: { id: '1583623025817-d180a2221d0a', alt: 'Seared salmon nigiri with sesame next to uramaki and soy sauce on dark stone' },
        },
        {
          name: 'Gunkan Platter',
          description: 'Roe gunkan, tamago and white fish nigiri.',
          pieces: '14 pcs',
          price: 46, // DEMO
          tags: ['New'],
          photo: { id: '1514190051997-0f6f39ca5cde', alt: 'Fish roe gunkan and tamago nigiri lined up on a green leaf' },
        },
      ],
      more: [
        { name: 'Vegetarian Platter', description: 'Cucumber, avocado, shiitake and tamago.', pieces: '16 pcs', price: 32, tags: ['Vegetarian'] }, // DEMO
        { name: 'Kids Platter', description: 'Hosomaki and uramaki, nothing raw.', pieces: '12 pcs', price: 22 }, // DEMO
      ],
    },
    {
      id: 'sashimi',
      label: 'Sashimi',
      featured: [
        {
          name: 'Salmon Sashimi',
          description: 'Thick cut, served with freshly grated wasabi.',
          pieces: '10 slices',
          price: 28, // DEMO
          tags: ['Popular'],
          photo: { id: '1675870791718-a12568cfef43', alt: 'Thick slice of salmon sashimi held up with chopsticks against a dark background' },
        },
        {
          name: 'Moriawase',
          description: 'Salmon, tuna, white fish and shrimp of the day.',
          pieces: '15 slices',
          price: 48, // DEMO
          photo: { id: '1772285283419-b34f42b4a4df', alt: 'Selection of salmon, tuna and white fish sashimi arranged on a dark plate' },
        },
        {
          name: 'House Trio',
          description: 'Salmon, tuna and shrimp, with a complimentary nigiri.',
          pieces: '12 slices',
          price: 38, // DEMO
          photo: { id: '1791386809533-5c2e79e34665', alt: 'Salmon, tuna and shrimp sashimi and nigiri on a black plate' },
        },
      ],
      more: [
        { name: 'White Fish Sashimi', description: 'With citrus ponzu and scallions.', pieces: '10 slices', price: 26 }, // DEMO
        { name: 'Tuna Sashimi', description: 'Bluefin akami in a rectangular cut.', pieces: '8 slices', price: 32 }, // DEMO
      ],
    },
    {
      id: 'nigiri',
      label: 'Nigiri',
      featured: [
        {
          name: 'Salmon Nigiri',
          description: 'Warm rice and salmon cut on the bias.',
          pieces: '2 pcs',
          price: 9, // DEMO
          photo: { id: '1637074930269-089fde202b57', alt: 'Two salmon nigiri on a black plate with chopsticks resting beside them' },
        },
        {
          name: 'Torched Salmon',
          description: 'Seared with a torch and brushed with house tare.',
          pieces: '2 pcs',
          price: 10, // DEMO
          tags: ['New'],
          photo: { id: '1711480023277-9f27496f10e6', alt: 'Sushi chef brushing tare sauce over a freshly torched nigiri' },
        },
        {
          name: 'Tuna Nigiri',
          description: 'Fresh akami with a touch of wasabi.',
          pieces: '2 pcs',
          price: 11, // DEMO
          photo: { id: '1562707786-7d2b807961c4', alt: 'Close up of red tuna nigiri garnished with scallions' },
        },
      ],
      more: [
        { name: 'Yuzu White Fish', description: 'Citrus zest and flaky salt.', pieces: '2 pcs', price: 10 }, // DEMO
        { name: 'Ebi', description: 'Poached shrimp, butterflied.', pieces: '2 pcs', price: 9 }, // DEMO
        { name: 'Tamago', description: 'Sweet Japanese omelet, made in house.', pieces: '2 pcs', price: 7, tags: ['Vegetarian'] }, // DEMO
      ],
    },
    {
      id: 'hand-rolls',
      label: 'Hand Rolls',
      featured: [
        {
          name: 'Salmon Hand Roll',
          description: 'Crisp nori, warm rice and diced salmon.',
          pieces: '1 roll',
          price: 12, // DEMO
          tags: ['Popular'],
          photo: { id: '1791386809517-60f40f5372dd', alt: 'Two nori hand rolls filled with rice and salmon on a white plate' },
        },
      ],
      more: [
        { name: 'Spicy Tuna Hand Roll', description: 'Tuna, togarashi and scallions.', pieces: '1 roll', price: 13, tags: ['Spicy'] }, // DEMO
        { name: 'Salmon Skin Hand Roll', description: 'Crispy salmon skin and tare.', pieces: '1 roll', price: 10 }, // DEMO
        { name: 'Vegetable Hand Roll', description: 'Cucumber, mango, avocado and sesame.', pieces: '1 roll', price: 9, tags: ['Vegetarian'] }, // DEMO
      ],
    },
    {
      id: 'hosomaki',
      label: 'Hosomaki',
      featured: [
        {
          name: 'Salmon Hosomaki',
          description: 'The classic thin roll, salmon and nori.',
          pieces: '8 pcs',
          price: 11, // DEMO
          photo: { id: '1617196034738-26c5f7c977ce', alt: 'Salmon hosomaki lined up next to a soy sauce bottle on a dark background' },
        },
        {
          name: 'Tuna Hosomaki',
          description: 'Bluefin tuna with a line of wasabi.',
          pieces: '8 pcs',
          price: 12, // DEMO
          photo: { id: '1780291117619-c58ee7aa740e', alt: 'Plate of hosomaki with pickled ginger and chopsticks in low light' },
        },
        {
          name: 'Kappa Maki',
          description: 'Japanese cucumber and toasted sesame.',
          pieces: '8 pcs',
          price: 8, // DEMO
          tags: ['Vegetarian'],
          photo: { id: '1548907368-35e5ea8cbc8a', alt: 'Cucumber hosomaki wrapped in nori, arranged on a light plate' },
        },
      ],
      more: [
        { name: 'Crab Hosomaki', description: 'Kanikama and Japanese mayo.', pieces: '8 pcs', price: 9 }, // DEMO
      ],
    },
    {
      id: 'rolls',
      label: 'Rolls',
      featured: [
        {
          name: 'Shrimp Tempura Roll',
          description: 'Tempura shrimp, avocado and a salmon topping.',
          pieces: '8 pcs',
          price: 18, // DEMO
          tags: ['Popular'],
          photo: { id: '1582450871972-ab5ca641643d', alt: 'Avocado-topped uramaki with tempura shrimp sticking out of the ends' },
        },
        {
          name: 'Philadelphia Roll',
          description: 'Salmon, cream cheese and scallions.',
          pieces: '8 pcs',
          price: 15, // DEMO
          photo: { id: '1558985212-92c2ff0b56e7', alt: 'Salmon and cream cheese uramaki on a dark plate with wooden chopsticks' },
        },
        {
          name: 'Flamed Salmon Roll',
          description: 'Uramaki seared over the flame, with house sauce.',
          pieces: '8 pcs',
          price: 17, // DEMO
          tags: ['New'],
          photo: { id: '1761314025679-1bc4e2f6f7fe', alt: 'Uramaki being seared by an orange flame against a dark background' },
        },
      ],
      more: [
        { name: 'Salmon Skin Roll', description: 'Crispy salmon skin and tare.', pieces: '8 pcs', price: 13 }, // DEMO
        { name: 'California Roll', description: 'Crab, mango and cucumber.', pieces: '8 pcs', price: 13 }, // DEMO
      ],
    },
    {
      id: 'starters',
      label: 'Starters',
      featured: [
        {
          name: 'Gyoza',
          description: 'Pork dumplings, pan-seared on the griddle.',
          pieces: '6 pcs',
          price: 12, // DEMO
          photo: { id: '1738681336104-608b4e7dc3b0', alt: 'Golden pan-seared gyoza on a black plate over a wooden table' },
        },
        {
          name: 'Spicy Salmon Crispy Rice',
          description: 'Crispy rice topped with salmon and house chili.',
          pieces: '4 pcs',
          price: 15, // DEMO
          tags: ['Spicy'],
          photo: { id: '1712725214706-e564b8dd1bbe', alt: 'Two pieces topped with chopped salmon and a red spicy sauce' },
        },
        {
          name: 'Tuna Tataki',
          description: 'Seared tuna, ponzu and fresh sprouts.',
          price: 19, // DEMO
          photo: { id: '1681270507609-e2a5f21969b0', alt: 'Tuna tataki with sprouts being served on a white ceramic plate' },
        },
      ],
      more: [
        { name: 'Miso Soup', description: 'Miso broth, tofu and scallions.', price: 5, tags: ['Vegetarian'] }, // DEMO
        { name: 'Edamame', description: 'Steamed pods with flaky salt.', price: 7, tags: ['Vegetarian'] }, // DEMO
        { name: 'Sunomono', description: 'Sweet and sour cucumber with sesame.', price: 7, tags: ['Vegetarian'] }, // DEMO
      ],
    },
    {
      id: 'drinks',
      label: 'Drinks',
      featured: [],
      more: [
        { name: 'House Sake', description: 'Junmai, served chilled.', pieces: '6 oz', price: 14 }, // DEMO
        { name: 'Premium Sake', description: 'Junmai daiginjo, bottle.', pieces: '300 ml', price: 68 }, // DEMO
        { name: 'Iced Green Tea', description: 'Sencha brewed in house.', pieces: '14 oz', price: 5 }, // DEMO
        { name: 'Japanese Beer', description: 'Imported lager.', pieces: '12 oz', price: 8 }, // DEMO
        { name: 'Sparkling Water', description: 'Bottle.', pieces: '16 oz', price: 4 }, // DEMO
        { name: 'Soda', description: 'Can.', pieces: '12 oz', price: 4 }, // DEMO
      ],
    },
  ] as MenuCategory[],

  combos: [
    {
      name: 'Duo',
      pieces: 30,
      price: 59, // DEMO
      includes: ['10 nigiri', '10 uramaki', '10 hosomaki', 'Soy sauce, ginger and wasabi'], // DEMO
      photo: { id: '1607301406259-dfb186e15de8', alt: 'Sushi platter on a black plate with a dish of soy sauce beside it, seen from above' },
    },
    {
      name: 'Kuro',
      pieces: 45,
      price: 89, // DEMO
      featured: true,
      includes: ['15 nigiri', '10 sashimi', '20 uramaki', '2 miso soups'], // DEMO
      photo: { id: '1611143669185-af224c5e3252', alt: 'Dark table seen from above with uramaki, nigiri and sauces set out for sharing' },
    },
    {
      name: 'Banquet',
      pieces: 70,
      price: 139, // DEMO
      includes: ['20 nigiri', '15 sashimi', '35 assorted rolls', '4 gyoza'], // DEMO
      photo: { id: '1780236935125-0e730e303beb', alt: 'Wooden sushi boat with assorted sushi, sashimi and maki' },
    },
  ],

  gallery: [
    { id: '1730900737644-e146f78db8e7', alt: 'Vegetable uramaki held between chopsticks, isolated on a black background', span: 'tall' },
    { id: '1747471507235-5b5120a411cb', alt: 'Macro shot of shrimp nigiri on a stone surface in warm light', span: 'wide' },
    { id: '1675870791262-99ab4c09e2fd', alt: 'Tweezers lifting a thin slice of salmon in the dark', span: '' },
    { id: '1635452065566-9c89471bb86c', alt: 'Wooden box with tuna and salmon cuts ready for the counter', span: '' },
    { id: '1787504916858-ed4ee6f02348', alt: 'Sushi chef in a dark uniform behind the counter, with finished sushi in front', span: 'tall' },
    { id: '1633478062482-790e3b5dd810', alt: 'Chopsticks lifting a piece of sushi from a black plate', span: '' },
    { id: '1787589481636-a69533c81edb', alt: 'Uramaki topped with orange roe and a drizzle of sauce on a light plate', span: 'wide' },
    { id: '1761315413078-1fd73894fe0e', alt: 'Crispy avocado roll held up with chopsticks over a dark green background', span: '' },
    { id: '1681270543584-8e541a1bb056', alt: 'Chef in uniform plating dishes on the prep counter', span: 'wide' },
    { id: '1563245370-cd55e7c95ff4', alt: 'Assorted uramaki seen from above on a dark board', span: 'wide' },
  ] as (Photo & { span: '' | 'tall' | 'wide' })[],

  reservation: {
    title: 'Save your seat at the counter.', // DEMO
    text: 'Eight seats at the counter and a few tables in the dining room. For parties of more than 12, message us on WhatsApp.', // DEMO
    note: 'Our team will confirm your reservation on WhatsApp.',
    slotMinutes: 30,
    /** Última reserva aceita X minutos antes do fechamento */
    lastSlotBeforeClose: 60,
    photo: {
      id: '1783192485640-7f3b9cec167e',
      alt: 'Wooden counter in the dining room with the chef preparing small portions in bowls',
    },
  },

  footer: {
    copyright: 'Shiori Sushi', // DEMO
  },
};

export type Restaurant = typeof restaurant;
