import { type CategorySlug, photoByFile, photosByCategory } from './gallery';

export type Faq = { q: string; a: string };

export type Service = {
  slug: string;
  name: string;
  category: CategorySlug;
  /** original filename in gallery.json used for the card and page hero */
  heroFile: string;
  /** optional different photo for the service card (defaults to heroFile) */
  cardFile?: string;
  /** short line for cards */
  summary: string;
  /** keyword phrase this page targets, e.g. "SS gate in Vaniyambadi" */
  keyword: string;
  seoTitle: string;
  seoDescription: string;
  headline: string;
  intro: string[];
  uses: { home: string; shop: string; factory: string };
  /** presented as questions to confirm with the client / customer, not as facts */
  options: { question: string; detail: string }[];
  process: string[];
  faqs: Faq[];
};

const area = 'Vaniyambadi and Tirupathur district';

export const services: Service[] = [
  {
    slug: 'ss-gates',
    name: 'SS Gates',
    category: 'ss-gates',
    heroFile: 'service-11.jpg',
    summary: 'Stainless steel main gates and compound gates, plain or with laser-cut panels.',
    keyword: 'SS gate in Vaniyambadi',
    seoTitle: 'SS Gate in Vaniyambadi & Tirupathur District | Veenus Engineering',
    seoDescription: 'Custom stainless steel gates made and installed in Vaniyambadi and Tirupathur district. Swing and sliding SS gates for homes and shops. Get a free quote on WhatsApp.',
    headline: 'Stainless steel gates, made to fit your entrance',
    intro: [
      'A stainless steel gate is the first thing people see at your house or shop. We design, fabricate and install SS gates in ' + area + ', measured to your opening and finished the way you choose.',
      'Pick a clean modern look with horizontal bars, or add laser-cut floral and geometric panels, wood-finish infill and decorative handles. Send us a photo of the entrance and a design you like, and we will take it from there.',
    ],
    uses: {
      home: 'Main gates and compound gates for independent houses and villas, swing or sliding.',
      shop: 'Entrance gates for showrooms, clinics, schools and small offices.',
      factory: 'Boundary and yard gates where a rust-resistant finish matters.',
    },
    options: [
      { question: 'Which stainless steel grade: 202 or 304?', detail: 'Grade affects cost and how well the gate resists rust. Ask us which grades we use for your job and where each makes sense.' },
      { question: 'Swing or sliding?', detail: 'Depends on the space in front of and beside the opening. We check this on the site visit.' },
      { question: 'Plain, laser-cut or wood-finish panels?', detail: 'Laser-cut and infill panels change the look and the privacy of the gate.' },
      { question: 'Mirror, satin or coloured finish?', detail: 'Finish options available are confirmed with the quotation.' },
    ],
    process: ['Share the entrance size and a reference photo', 'Site visit, measurement and design choice', 'Quotation, then fabrication in the workshop', 'Installation and hand-over inspection'],
    faqs: [
      { q: 'How much does an SS gate cost?', a: 'It depends on the size, stainless steel grade, design and finish, so we do not quote a price without the details. Send a photo and approximate width on WhatsApp and we will tell you what we need to prepare a quotation.' },
      { q: 'Do you install the gate as well?', a: 'Yes. We design, fabricate and install, so one team is responsible for the finished gate.' },
      { q: 'Can you copy a gate design I have seen?', a: 'Send us the photo. We will tell you whether we can build it as shown and what would need to change for your opening.' },
      { q: 'What does the warranty cover?', a: 'Warranty covers manufacturing defects only. It does not cover misuse, accidents, weather damage or poor maintenance. The full terms are on our Terms & Conditions page.' },
    ],
  },
  {
    slug: 'ss-railings',
    name: 'SS Railing Works',
    category: 'ss-railings',
    heroFile: 'service-24.jpg',
    summary: 'Staircase, balcony and terrace railings in stainless steel, with glass or decorative balusters.',
    keyword: 'SS railing in Vaniyambadi',
    seoTitle: 'SS Railing Works in Vaniyambadi & Tirupathur District | Veenus Engineering',
    seoDescription: 'Stainless steel staircase, balcony and terrace railings fabricated and installed in Vaniyambadi and Tirupathur district. Free quote on WhatsApp.',
    headline: 'Stainless steel railings for stairs, balconies and terraces',
    intro: [
      'Railings need to be safe first and good-looking second. We fabricate and install stainless steel railings for staircases, balconies and terraces across ' + area + '.',
      'Choose plain bar balusters, ornamental scrollwork, etched glass panels or a modern open-frame design. Each railing is measured on site so the posts, rails and balusters line up with your staircase.',
    ],
    uses: {
      home: 'Interior staircases, first-floor balconies, terraces and compound walls.',
      shop: 'Mezzanine floors, showroom staircases and entrance ramps.',
      factory: 'Platform and staircase railings in offices, canteens and production areas.',
    },
    options: [
      { question: 'Which stainless steel grade: 202 or 304?', detail: 'Outdoor and coastal-humidity locations are often more demanding on the material. We advise on this during the site visit.' },
      { question: 'Bar balusters, glass or decorative panels?', detail: 'Each gives a different look, safety profile and cleaning routine.' },
      { question: 'Handrail shape and size?', detail: 'Round, square or flat handrails in a thickness that suits the staircase and who will use it.' },
      { question: 'Mirror or satin finish?', detail: 'Mirror shows fingerprints more, satin hides them. Confirmed with the quotation.' },
    ],
    process: ['Share the staircase or balcony length and photos', 'Site visit and measurement of each flight or run', 'Quotation, then fabrication', 'Installation, fixing and finishing'],
    faqs: [
      { q: 'Can you fit a railing on a staircase that is already built?', a: 'Yes. We measure the finished staircase and make the railing to fit, including angles and landings.' },
      { q: 'Do you make glass railings?', a: 'We fabricate stainless steel railings with glass or etched glass panels. Tell us what you have in mind and we will confirm on the site visit.' },
      { q: 'How long does a staircase railing take?', a: 'It depends on the length and design. We give a timeline with the quotation and tell you early if material supply could change it.' },
    ],
  },
  {
    slug: 'ms-gates',
    name: 'MS Gates',
    category: 'ms-gates',
    heroFile: 'service-33.jpg',
    summary: 'Strong mild steel gates, painted or powder-coated, with plain bars or decorative panels.',
    keyword: 'MS gate in Vaniyambadi',
    seoTitle: 'MS Gate in Vaniyambadi & Tirupathur District | Veenus Engineering',
    seoDescription: 'Mild steel gates fabricated and installed in Vaniyambadi and Tirupathur district. Custom designs for homes, shops and factories. Free quote on WhatsApp.',
    headline: 'Mild steel gates built for security and everyday use',
    intro: [
      'Mild steel gives you a strong, secure gate at a lower cost than stainless steel. We fabricate MS gates for houses, shops and factories in ' + area + ', welded to your measurements and painted for the weather.',
      'Go with simple vertical bars, a louvred gate for airflow and privacy, or decorative laser-cut panels. We can match a colour to your house.',
    ],
    uses: {
      home: 'Compound gates, main gates and side gates for houses.',
      shop: 'Entrance gates and collapsible gates for shops and godowns.',
      factory: 'Heavy-duty gates for yards, plots and industrial premises.',
    },
    options: [
      { question: 'Paint or powder coating?', detail: 'Powder coating gives a harder surface, paint is easier to touch up. Ask us which we offer and what each costs.' },
      { question: 'Pipe, square tube or flat bar?', detail: 'Section size and wall thickness decide how heavy and how strong the gate is.' },
      { question: 'Swing or sliding, manual or motorised?', detail: 'Space, gate weight and how often it opens decide this. Confirm motorisation options with us.' },
      { question: 'Decorative panels or plain?', detail: 'Laser-cut panels add detail and can reduce visibility into the property.' },
    ],
    process: ['Share the opening width and a reference photo', 'Site visit and measurement', 'Quotation, then fabrication and painting', 'Installation and hand-over inspection'],
    faqs: [
      { q: 'What is the difference between an MS gate and an SS gate?', a: 'MS is mild steel: strong and economical, but it needs paint or coating to protect it from rust. SS is stainless steel: it resists rust better and costs more. We can quote both so you can compare.' },
      { q: 'Will the paint last outdoors?', a: 'Finish durability depends on the coating, the weather and maintenance. We explain the options when we quote. Warranty covers manufacturing defects only.' },
      { q: 'Do you repair or modify an existing gate?', a: 'Send us photos and we will tell you whether repair or a new gate makes more sense.' },
    ],
  },
  {
    slug: 'ms-grills',
    name: 'MS Grill Works',
    category: 'ms-grills',
    heroFile: 'service-45.jpg',
    summary: 'Window grills, door grills and collapsible gates in mild steel, plain or patterned.',
    keyword: 'MS grill work in Vaniyambadi',
    seoTitle: 'MS Grill Works in Vaniyambadi & Tirupathur District | Veenus Engineering',
    seoDescription: 'Window grills, door grills and collapsible gates in mild steel, made and fitted in Vaniyambadi and Tirupathur district. Free quote on WhatsApp.',
    headline: 'Window grills and door grills with a clean finish',
    intro: [
      'A grill keeps a window or door secure without blocking light and air. We fabricate MS grills in ' + area + ', welded and finished to fit your frames.',
      'Choose a classic bar grill, a geometric pattern, a sunburst or a collapsible gate. Patterns are cut and welded by hand, so you can bring a design or pick from our past work.',
    ],
    uses: {
      home: 'Window grills, balcony grills, main door grills and staircase openings.',
      shop: 'Collapsible gates and shutter-front grills.',
      factory: 'Ventilator and window grills, store-room and godown doors.',
    },
    options: [
      { question: 'Bar spacing and thickness?', detail: 'Closer spacing and heavier sections are more secure. We recommend based on the opening.' },
      { question: 'Pattern or plain bars?', detail: 'Patterned grills look better but take longer to fabricate.' },
      { question: 'Fixed, openable or collapsible?', detail: 'Openable grills help with emergency exit and cleaning.' },
      { question: 'Paint or powder coating?', detail: 'Choose based on where the grill sits and how much weather it sees.' },
    ],
    process: ['Share window or door sizes and a reference photo', 'Site visit and measurement', 'Quotation, then fabrication and finishing', 'Fitting on site'],
    faqs: [
      { q: 'Can you make a grill for an odd-shaped window?', a: 'Yes. We measure the actual opening and fabricate to it.' },
      { q: 'Do you fit grills on existing windows?', a: 'Yes. Fitting is part of the job, whether the window is new or old.' },
      { q: 'Can I choose my own pattern?', a: 'Send us a sketch or photo. We will tell you if it can be built as shown.' },
    ],
  },
  {
    slug: 'rolling-shutters',
    name: 'Rolling Shutter Works',
    category: 'rolling-shutters',
    heroFile: 'service-54.jpg',
    summary: 'Rolling shutters for shops, godowns and garages, made and installed with smooth operation.',
    keyword: 'rolling shutter in Tirupathur',
    seoTitle: 'Rolling Shutter in Vaniyambadi & Tirupathur District | Veenus Engineering',
    seoDescription: 'Rolling shutters for shops, godowns and garages, made and installed in Vaniyambadi and Tirupathur district. Free quote on WhatsApp.',
    headline: 'Rolling shutters that open smoothly and lock securely',
    intro: [
      'A rolling shutter protects the shop or godown you open every morning, so it has to work every day. We fabricate and install rolling shutters in ' + area + ', measured to the opening.',
      'We build the shutter, guide rails and roller assembly to suit the width and height of your opening, and fit it so it runs smoothly.',
    ],
    uses: {
      home: 'Garage and car-porch shutters.',
      shop: 'Shop fronts, showrooms and offices that need secure daily opening.',
      factory: 'Godowns, loading bays and workshops where large openings need a heavy-duty shutter.',
    },
    options: [
      { question: 'Manual, spring-assisted or motorised?', detail: 'Large openings are heavy to lift. Ask us about the options for your width.' },
      { question: 'Slat profile and thickness?', detail: 'Affects strength, noise and how much the shutter weighs.' },
      { question: 'Colour and finish?', detail: 'Plain, painted or coated. Confirmed with the quotation.' },
      { question: 'Lock type?', detail: 'Centre lock, side lock or both. Tell us how the shop is used.' },
    ],
    process: ['Share the opening width, height and type of use', 'Site visit and measurement, including headroom', 'Quotation, then fabrication', 'Installation, adjustment and operation check'],
    faqs: [
      { q: 'How much headroom does a rolling shutter need?', a: 'It needs space above the opening for the rolled-up shutter. We check this on the site visit and tell you what is possible.' },
      { q: 'Can you service or repair an existing shutter?', a: 'Tell us on WhatsApp what the problem is and send a short video if you can. We will advise.' },
      { q: 'Do you make motorised shutters?', a: 'Ask us when you enquire. We will confirm what we can supply for your opening.' },
    ],
  },
  {
    slug: 'roofing',
    name: 'Roofing Works',
    category: 'roofing',
    heroFile: 'carousel-3.jpg',
    cardFile: 'gallery4.jpg',
    summary: 'Steel roof structures, carports and industrial sheds, designed, fabricated and installed.',
    keyword: 'roofing work in Vaniyambadi',
    seoTitle: 'Roofing Works in Vaniyambadi & Tirupathur District | Veenus Engineering',
    seoDescription: 'Steel roof trusses, industrial sheds, carports and sheet roofing in Vaniyambadi and Tirupathur district. Designed, fabricated and installed. Free quote on WhatsApp.',
    headline: 'Steel roofing for sheds, carports and industrial buildings',
    intro: [
      'From a carport at home to a large factory hall, the roof has to carry its load and keep the weather out. We fabricate and install steel roof structures and sheet roofing in ' + area + '.',
      'We build the trusses, purlins and supports, fix the roofing sheets and finish the work, so you do not have to coordinate several contractors.',
    ],
    uses: {
      home: 'Carports, terrace covers, utility sheds and extensions.',
      shop: 'Canopies, parking sheds and open-air display areas.',
      factory: 'Industrial sheds, godowns, workshop halls and loading areas.',
    },
    options: [
      { question: 'Span and load?', detail: 'Roof span, height and what the roof must carry decide the truss design and steel section. We confirm this on the site visit.' },
      { question: 'Roofing sheet type and thickness?', detail: 'Profile, thickness and colour affect cost, heat and noise.' },
      { question: 'Do you need a structural drawing?', detail: 'For large sheds you may need drawings. Tell us if you do.' },
      { question: 'Finishing: paint or galvanised?', detail: 'Choose based on exposure and budget.' },
    ],
    process: ['Share the plot or building size and use', 'Site visit, measurement and structure design', 'Quotation, then fabrication of trusses and supports', 'Erection, sheeting and finishing on site'],
    faqs: [
      { q: 'Do you do large industrial sheds?', a: 'Yes. We work on industrial roofing as well as small residential structures. Send us the dimensions and use and we will tell you what we need to quote.' },
      { q: 'Can you roof over an existing building?', a: 'Often yes. We inspect the walls and supports on the site visit before we confirm.' },
      { q: 'How long does a roofing job take?', a: 'It depends on size, design and material availability. We give a timeline with the quotation.' },
    ],
  },
  {
    slug: 'kerala-roofing',
    name: 'Kerala Type Roofing',
    category: 'kerala-roofing',
    heroFile: 'service-7.jpg',
    summary: 'Traditional Kerala-style sloped roofs on a steel frame, with tile finish.',
    keyword: 'Kerala type roofing in Vaniyambadi',
    seoTitle: 'Kerala Type Roofing in Vaniyambadi & Tirupathur District | Veenus Engineering',
    seoDescription: 'Kerala-style sloped roofing on a steel frame, fabricated and installed in Vaniyambadi and Tirupathur district. Free quote on WhatsApp.',
    headline: 'Kerala-style sloped roofs on a strong steel frame',
    intro: [
      'The sloped, tiled Kerala look suits verandahs, gazebos, porches and whole homes. We build the roof on a steel frame so it stays strong for years, serving ' + area + '.',
      'We fabricate the rafters and supports, set the slope you want and finish the roof in the tile or sheet style you choose.',
    ],
    uses: {
      home: 'Porches, verandahs, gazebos, terrace pavilions and full house roofs.',
      shop: 'Entrance canopies and outdoor seating areas for restaurants and resorts.',
      factory: 'Rest areas, offices and gate cabins within industrial premises.',
    },
    options: [
      { question: 'Tile type and colour?', detail: 'Clay, concrete or tile-profile sheet each have a different weight, look and cost.' },
      { question: 'Roof pitch and shape?', detail: 'Gable, hip or multi-slope. This affects the frame design.' },
      { question: 'Ceiling finish?', detail: 'Exposed rafters, wood-look cladding or a false ceiling.' },
      { question: 'Gutters and edge trim?', detail: 'Decorative edge trim and rainwater gutters can be added.' },
    ],
    process: ['Share the area, shape and a reference photo', 'Site visit, measurement and roof design', 'Quotation, then frame fabrication', 'Erection, tiling or sheeting and finishing'],
    faqs: [
      { q: 'Why build Kerala-style roofing on a steel frame?', a: 'A steel frame is strong, can span wide areas and does not have the problems wood has with termites and moisture.' },
      { q: 'Can I get the tile look on a lighter roof?', a: 'Tile-profile sheets give a similar look at lower weight. We can discuss the options on the site visit.' },
      { q: 'Can you build a small gazebo?', a: 'Yes. Gazebos and pavilions are among the roofs we fabricate. Send us the size and a photo of what you like.' },
    ],
  },
  {
    slug: 'ss-furniture',
    name: 'SS Furniture',
    category: 'ss-furniture',
    heroFile: 'service-81.jpg',
    summary: 'Stainless steel dining tables, canteen tables, work tables and wash troughs.',
    keyword: 'SS dining table in Vaniyambadi',
    seoTitle: 'SS Dining Tables & Furniture in Vaniyambadi | Veenus Engineering',
    seoDescription: 'Custom stainless steel dining tables, canteen tables, work tables and wash troughs fabricated in Vaniyambadi, Tirupathur district. Free quote on WhatsApp.',
    headline: 'Stainless steel tables and furniture for homes and kitchens',
    intro: [
      'Stainless steel furniture is easy to clean and holds up to daily use. We fabricate dining tables, canteen tables and benches, work tables and wash troughs to your size in ' + area + '.',
      'Tell us how the piece will be used and how many people it needs to seat or serve, and we will propose a size, frame and top.',
    ],
    uses: {
      home: 'Dining tables with stools or benches, outdoor tables and utility counters.',
      shop: 'Restaurant, bakery and tea-shop tables and counters.',
      factory: 'Canteen tables and benches, work tables and hand-wash troughs.',
    },
    options: [
      { question: 'Which stainless steel grade: 202 or 304?', detail: 'For food areas, ask us which grade is suitable and what it costs.' },
      { question: 'Tabletop thickness and finish?', detail: 'Affects strength and how the surface looks with daily use.' },
      { question: 'Fixed or folding?', detail: 'Folding tables save space but need more careful design.' },
      { question: 'Stools, benches or chairs?', detail: 'Seating can be built into the frame or made separately.' },
    ],
    process: ['Share the size, seating and use', 'Design and measurement, with a site visit for large jobs', 'Quotation, then fabrication in the workshop', 'Delivery and set-up'],
    faqs: [
      { q: 'Can you make a table to a specific size?', a: 'Yes. All our furniture is made to order, so you give the size and we build to it.' },
      { q: 'Do you make canteen tables for factories and schools?', a: 'Yes. We have fabricated canteen tables and benches. Tell us how many people and the room size.' },
      { q: 'Is stainless steel safe for food?', a: 'Grade matters for food-contact surfaces. Ask us which grade we recommend for your use.' },
    ],
  },
];

export const serviceBySlug = (slug: string) => services.find((s) => s.slug === slug);
export const serviceHero = (s: Service) => photoByFile(s.heroFile);
export const serviceCardPhoto = (s: Service) => photoByFile(s.cardFile ?? s.heroFile);
export const servicePhotos = (s: Service) => photosByCategory(s.category);
