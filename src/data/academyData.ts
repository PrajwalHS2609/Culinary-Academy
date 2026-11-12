import { IMAGES } from '../assets/images';

export interface CookingClass {
  id: string;
  title: string;
  category: 'beginner' | 'indian' | 'international' | 'baking' | 'healthy' | 'professional' | 'workshops';
  categoryLabel: string;
  tagline: string;
  description: string;
  longDescription: string;
  skillLevel: 'Beginner' | 'Intermediate' | 'Advanced' | 'All Levels';
  duration: string;
  format: string;
  price: number;
  instructor: string;
  maxStudents: number;
  image: string;
  featuredDish: string;
  skillsAcquired: string[];
  menuHighlights: string[];
  equipmentProvided: string[];
  schedule: string;
  isPopular?: boolean;
}

export interface UpcomingEvent {
  id: string;
  classId: string;
  title: string;
  date: string;
  time: string;
  duration: string;
  instructor: string;
  skillLevel: string;
  availableSeats: number;
  totalSeats: number;
  price: number;
  format: string;
}

export interface Chef {
  id: string;
  name: string;
  role: string;
  experience: string;
  portrait: string;
  bio: string;
  accolades: string[];
  specialty: string;
  teachingPhilosophy: string;
  signatureDish: string;
}

export interface PricingPackage {
  id: string;
  name: string;
  subtitle: string;
  price: number;
  duration: string;
  format: string;
  isPopular?: boolean;
  inclusions: string[];
  bookingConditions: string;
  bestFor: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  course: string;
  rating: number;
  date: string;
  quote: string;
  outcome: string;
}

export interface BlogPost {
  id: string;
  title: string;
  category: string;
  readTime: string;
  date: string;
  excerpt: string;
  image: string;
  content: string[];
}

export const ACADEMY_CLASSES: CookingClass[] = [
  {
    id: 'knife-skills-fundamentals',
    title: 'Essential Knife Skills & Kitchen Fundamentals',
    category: 'beginner',
    categoryLabel: 'Beginner Cooking Classes',
    tagline: 'The bedrock of every confident cook.',
    description: 'Master hand anatomy, blade geometry, precision cuts (julienne, brunoise, chiffonade), and safe station maintenance.',
    longDescription: 'Before greatness comes precision. In this foundational workshop, you will work with German and Japanese forged steel, learning proper grip, honing methods, speed drills, and classical French vegetable fabrications. You will transform everyday produce into uniform, evenly-cooking cuts and leave with lifelong confidence.',
    skillLevel: 'Beginner',
    duration: '3.5 Hours',
    format: 'Hands-on Kitchen Studio',
    price: 135,
    instructor: 'Chef Elena Vance',
    maxStudents: 8,
    image: IMAGES.hero,
    featuredDish: 'Hand-Cut Velouté & Mirepoix Reduction',
    skillsAcquired: [
      'Pinch grip and rolling chop ergonomics',
      'Classical cuts: Brunoise, Julienne, Batonnet, Tourné',
      'Whetstone honing & steel edge maintenance',
      'Mise en place station efficiency'
    ],
    menuHighlights: [
      'Silky French Onion Soup with Gruyère crouton',
      'Carrot & Ginger Velouté with herb infusion',
      'Seasonal Garden Crudité with emulsified vinaigrette'
    ],
    equipmentProvided: ['Messermeister 8-inch chef knife', 'End-grain maple butcher block', 'Cut-resistant practice glove'],
    schedule: 'Every Tuesday & Saturday, 10:00 AM – 1:30 PM',
    isPopular: true
  },
  {
    id: 'regional-indian-spices',
    title: 'Regional Indian Gastronomy & Spice Tempering',
    category: 'indian',
    categoryLabel: 'Indian Cooking Classes',
    tagline: 'Demystifying the science of whole toasted aromatics and layered gravies.',
    description: 'Explore the regional nuance of North and South Indian cooking, tempering (tadka), layered spice pastes, and authentic flatbreads.',
    longDescription: 'Indian cooking is not heat; it is alchemy. Under Master Chef Rohan Kapoor, explore cold-pressed oils, slow onion caramelization (bhuna), seed blooming, and regional souring agents like kokum and amchur. Prepare silky slow-simmered gravies and pillowy hand-rolled breads from scratch.',
    skillLevel: 'All Levels',
    duration: '4 Hours',
    format: 'Hands-on Kitchen Studio',
    price: 155,
    instructor: 'Chef Rohan Kapoor',
    maxStudents: 8,
    image: IMAGES.curry,
    featuredDish: 'Slow-Simmered Old Delhi Murgh Makhani & Garlic Naan',
    skillsAcquired: [
      'The chemistry of Tadka (hot oil spice blooming)',
      'Balancing souring, astringency, and umami in masala blends',
      'Clay tandoor and cast iron skillet bread baking',
      'Fresh ghee extraction and spice roasting temperatures'
    ],
    menuHighlights: [
      'Heritage Old Delhi Butter Chicken with fenugreek smoke',
      'Dal Bukhara simmered over coals for 18 hours',
      'Cast-iron garlic butter naan & flaky lachha paratha',
      'Cardamom & Saffron Kheer with pistachios'
    ],
    equipmentProvided: ['Heavy hammered copper karahi', 'Spice mortar and pestle', 'Tawa flatbread skillet'],
    schedule: 'Thursdays 5:30 PM – 9:30 PM & Sundays 11:00 AM – 3:00 PM',
    isPopular: true
  },
  {
    id: 'fresh-pasta-masterclass',
    title: 'Artisanal Handmade Pasta & Italian Mother Sauces',
    category: 'international',
    categoryLabel: 'International Cuisine',
    tagline: 'The tactile poetry of semolina, yolk, and rolling pin.',
    description: 'Learn the golden ratio of Italian pasta dough, hand-extruded shapes, filled tortelloni, and silky emulsified pan sauces.',
    longDescription: 'From egg-rich Emilia-Romagnolo dough to southern water-and-semolina cavatelli, this class teaches the texture and tension of authentic pasta. Master filled ravioli al plin, tortelloni with ricotta and herbs, and finish with glossy pan emulsions that cling flawlessly without heavy cream.',
    skillLevel: 'All Levels',
    duration: '3.5 Hours',
    format: 'Hands-on Kitchen Studio',
    price: 160,
    instructor: 'Chef Marco Valenti',
    maxStudents: 8,
    image: IMAGES.pasta,
    featuredDish: 'Ricotta & Wild Herb Tortelloni with Sage Brown Butter',
    skillsAcquired: [
      'Gluten development and rest cycles in pasta sheets',
      'Hand-forming tagliatelle, garganelli, and agnolotti',
      'Airing and sealing filled pastas without air pockets',
      'Starchy pasta-water emulsion dynamics (Mantecare)'
    ],
    menuHighlights: [
      'Handmade Tortelloni in crisp sage butter with aged Reggiano',
      'Silk Tagliatelle with 6-hour Bolognese ragù',
      'Tuscan kale and burnt lemon salad',
      'Classic espresso-soaked tiramisu with mascarpone sabayon'
    ],
    equipmentProvided: ['Marcato Atlas 150 pasta roller', 'Brass fluted pastry wheel', 'Beechwood pasta board'],
    schedule: 'Wednesdays 6:00 PM – 9:30 PM & Saturdays 4:00 PM – 7:30 PM',
    isPopular: true
  },
  {
    id: 'french-patisserie-baking',
    title: 'Classical French Pâtisserie & Laminated Dough',
    category: 'baking',
    categoryLabel: 'Baking & Desserts',
    tagline: 'Precision baking, butter blocks, and architectural viennoiserie.',
    description: 'Master the art of folding laminated croissant dough, temper single-origin chocolate, and pipe delicate choux pastries.',
    longDescription: 'Baking is edible physics. Chef Amara Chen leads you through temperature-controlled dough turns, European high-fat butter lock-ins, puff lamination, choux pastry aeration, and glossy mirror glazes. You take home a full pastry box of your handcrafted creations.',
    skillLevel: 'Intermediate',
    duration: '4.5 Hours',
    format: 'Temperature-Controlled Pastry Atelier',
    price: 175,
    instructor: 'Chef Amara Chen',
    maxStudents: 8,
    image: IMAGES.studio,
    featuredDish: 'Honeycomb Croissants & Dark Chocolate Éclairs',
    skillsAcquired: [
      'Tourage (lamination turns) and butter elasticity',
      'Choux batter consistency and steam expansion physics',
      'Valrhona chocolate tempering on marble slabs',
      'Pastry cream (Crème Pâtissière) flavor infusions'
    ],
    menuHighlights: [
      'Flaky butter croissants with honeycombed interior',
      'Tahitian vanilla bean mille-feuille',
      'Craquelin choux buns filled with salted hazelnut praline',
      'Fruit tarts with sweet shortcrust (Pâte Sablée)'
    ],
    equipmentProvided: ['French rolling pins', 'Marble tempering slab', 'De Buyer perforated tart rings'],
    schedule: 'Fridays 1:00 PM – 5:30 PM & Sundays 9:30 AM – 2:00 PM'
  },
  {
    id: 'farm-to-table-healthy',
    title: 'Modern Plant-Forward & Nutrition-Conscious Cooking',
    category: 'healthy',
    categoryLabel: 'Healthy Cooking Classes',
    tagline: 'Vibrant, nutrient-dense cuisine that never compromises on decadence.',
    description: 'Craft bold plant-based sauces, master high-heat vegetable roasting, fermented dressings, and balanced macro pairings.',
    longDescription: 'Elevate seasonal greens, heirloom legumes, and cold-pressed botanical oils into restaurant-grade dishes. You will learn culinary techniques that maximize micronutrient bio-availability while achieving rich caramelization, complex acid structures, and layered textures.',
    skillLevel: 'All Levels',
    duration: '3 Hours',
    format: 'Hands-on Kitchen Studio',
    price: 140,
    instructor: 'Chef Elena Vance',
    maxStudents: 8,
    image: IMAGES.hero,
    featuredDish: 'Miso-Glazed Roasted Cauliflower Steak & Green Tahini',
    skillsAcquired: [
      'Maillard browning on vegetable surfaces without excess fat',
      'Fermented dressings, vinegars, and nut-milk emulsification',
      'Grain hydration and ancient seed cooking ratios',
      'Balancing fiber, healthy fats, and umami in everyday meals'
    ],
    menuHighlights: [
      'Charred Romanesco with pistachios and pomegranate molasses',
      'Wild mushroom and black barley risotto with cashew cream',
      'Avocado and matcha chocolate mousse with flaked sea salt'
    ],
    equipmentProvided: ['Vitamix professional blenders', 'Cast iron plancha pans', 'Mandoline slicers'],
    schedule: 'Tuesdays 6:00 PM – 9:00 PM'
  },
  {
    id: 'professional-culinary-diploma-intensive',
    title: 'Professional Kitchen Immersion & Saucier Foundations',
    category: 'professional',
    categoryLabel: 'Professional Culinary Training',
    tagline: 'Rigorous brigade training for aspiring culinary professionals and serious food creators.',
    description: 'The 5 classical mother sauces, protein butchery (fish & poultry fabrication), pan deglazing, and service plating.',
    longDescription: 'Step into an authentic brigade de cuisine. You will learn commercial kitchen discipline, stock reductions (demi-glace, fond blanc), round and flat fish filleting, poultry trussing, and service-window timing. Designed for students seeking professional career pivots or master-level home prowess.',
    skillLevel: 'Advanced',
    duration: 'Full Day (6.5 Hours)',
    format: 'Professional Masterclass Studio',
    price: 320,
    instructor: 'Chef Elena Vance',
    maxStudents: 6,
    image: IMAGES.chef,
    featuredDish: 'Pan-Roasted Duck Breast with Cherry Port Reduction',
    skillsAcquired: [
      'The 5 French Mother Sauces & secondary compound derivatives',
      'Round fish skin descaling, filleting, and pin-bone removal',
      'Whole bird fabrication and precision trussing',
      'Plating geometry, negative space, and temperature discipline'
    ],
    menuHighlights: [
      'Crisp-skinned duck breast with demi-glace and parsnip purée',
      'Seared wild sea bass with sauce vierge and fennel pollen',
      'Classical beef consommé clarified with egg-white raft'
    ],
    equipmentProvided: ['Global GF-33 heavy chef knife', 'De Buyer copper sauté pans', 'Plating tweezers and offset spatulas'],
    schedule: 'Selected Saturdays 9:00 AM – 3:30 PM'
  },
  {
    id: 'weekend-family-corporate',
    title: 'Private & Corporate Culinary Atelier: The Feast',
    category: 'workshops',
    categoryLabel: 'Special Workshops',
    tagline: 'Collaborative kitchen experiences designed for teams, couples, and family celebrations.',
    description: 'A 3-course interactive cooking challenge followed by a seated communal dinner with curated wine pairings.',
    longDescription: 'Cooking together builds connections that ordinary dining cannot match. Your group takes over the entire studio kitchen with dedicated chef guidance. Together you chop, sauté, roast, and plate a lavish seasonal three-course feast, culminating in a celebration at our walnut dining table.',
    skillLevel: 'All Levels',
    duration: '4 Hours',
    format: 'Private Studio Takeover',
    price: 195,
    instructor: 'Chef Marco Valenti & Team',
    maxStudents: 16,
    image: IMAGES.studio,
    featuredDish: 'Wood-Fired Herb Roasted Porchetta & Artisanal Focaccia',
    skillsAcquired: [
      'Coordinated kitchen station division and brigade timing',
      'Collaborative menu execution and simultaneous prep',
      'Wine and food pairing fundamentals',
      'Artisanal table styling and family-style banquet presentation'
    ],
    menuHighlights: [
      'Handcrafted rosemary and sea salt focaccia',
      'Braised short ribs with polenta concia',
      'Dark chocolate tart with Maldon sea salt and blood orange coulis'
    ],
    equipmentProvided: ['Full private studio access', 'Communal dining salon', 'Sommelier wine service'],
    schedule: 'Available on request Thursday through Sunday evenings'
  }
];

export const UPCOMING_SCHEDULE: UpcomingEvent[] = [
  {
    id: 'evt-01',
    classId: 'knife-skills-fundamentals',
    title: 'Essential Knife Skills & Kitchen Fundamentals',
    date: 'Saturday, Nov 14',
    time: '10:00 AM – 1:30 PM',
    duration: '3.5 Hours',
    instructor: 'Chef Elena Vance',
    skillLevel: 'Beginner',
    availableSeats: 3,
    totalSeats: 8,
    price: 135,
    format: 'Morning Studio Atelier'
  },
  {
    id: 'evt-02',
    classId: 'regional-indian-spices',
    title: 'Regional Indian Gastronomy & Spice Tempering',
    date: 'Sunday, Nov 15',
    time: '11:00 AM – 3:00 PM',
    duration: '4.0 Hours',
    instructor: 'Chef Rohan Kapoor',
    skillLevel: 'All Levels',
    availableSeats: 2,
    totalSeats: 8,
    price: 155,
    format: 'Afternoon Immersion'
  },
  {
    id: 'evt-03',
    classId: 'fresh-pasta-masterclass',
    title: 'Artisanal Handmade Pasta & Italian Mother Sauces',
    date: 'Wednesday, Nov 18',
    time: '6:00 PM – 9:30 PM',
    duration: '3.5 Hours',
    instructor: 'Chef Marco Valenti',
    skillLevel: 'All Levels',
    availableSeats: 4,
    totalSeats: 8,
    price: 160,
    format: 'Evening Supper Club'
  },
  {
    id: 'evt-04',
    classId: 'french-patisserie-baking',
    title: 'Classical French Pâtisserie & Laminated Dough',
    date: 'Friday, Nov 20',
    time: '1:00 PM – 5:30 PM',
    duration: '4.5 Hours',
    instructor: 'Chef Amara Chen',
    skillLevel: 'Intermediate',
    availableSeats: 1,
    totalSeats: 8,
    price: 175,
    format: 'Pastry Lab Intensive'
  },
  {
    id: 'evt-05',
    classId: 'farm-to-table-healthy',
    title: 'Modern Plant-Forward & Nutrition-Conscious Cooking',
    date: 'Tuesday, Nov 24',
    time: '6:00 PM – 9:00 PM',
    duration: '3.0 Hours',
    instructor: 'Chef Elena Vance',
    skillLevel: 'All Levels',
    availableSeats: 5,
    totalSeats: 8,
    price: 140,
    format: 'Evening Workshop'
  },
  {
    id: 'evt-06',
    classId: 'professional-culinary-diploma-intensive',
    title: 'Professional Kitchen Immersion & Saucier Foundations',
    date: 'Saturday, Nov 28',
    time: '9:00 AM – 3:30 PM',
    duration: '6.5 Hours',
    instructor: 'Chef Elena Vance',
    skillLevel: 'Advanced',
    availableSeats: 2,
    totalSeats: 6,
    price: 320,
    format: 'Full-Day Masterclass'
  }
];

export const ACADEMY_CHEFS: Chef[] = [
  {
    id: 'chef-elena-vance',
    name: 'Elena Vance',
    role: 'Executive Culinary Director & Founder',
    experience: '22 Years of Culinary Leadership',
    portrait: IMAGES.chef,
    bio: 'Trained at Le Cordon Bleu Paris with executive chef tenures across Michelin-starred kitchens in Lyon and San Francisco. Elena founded Vance Culinary Academy to strip away the intimidation of haute cuisine and replace it with joyful, rigorous, hands-on mastery.',
    accolades: ['Grand Diplôme Le Cordon Bleu Paris', 'James Beard Nominee (Best Regional Chef 2018)', 'Author of "The Instinctive Cook" (2022)'],
    specialty: 'Classical French Technique, Sauce Architecture & Modern Gastronomy',
    teachingPhilosophy: 'Recipes are guidelines; technique is freedom. Once you understand the physical behavior of heat, fat, and acid, you can cook anything without fear.',
    signatureDish: 'Pan-Roasted Duck with Blood Orange Reduction & Crispy Skin'
  },
  {
    id: 'chef-rohan-kapoor',
    name: 'Rohan Kapoor',
    role: 'Master Chef of Indian Gastronomy & Spice Science',
    experience: '16 Years Master of Regional Indian Cuisines',
    portrait: IMAGES.hero,
    bio: 'Born in Lucknow and trained in historic royal kitchens before helming acclaimed modern Indian restaurants in London and Mumbai. Rohan specializes in the micro-chemistry of whole spice blooming and authentic slow-cooked dum techniques.',
    accolades: ['Culinary Heritage Fellow, New Delhi', 'Guest Lecturer at World Gastronomy Congress', 'Former Head Chef, Tamarind London'],
    specialty: 'Dum Pukht, Artisanal Masala Architecture & Tandoor Baking',
    teachingPhilosophy: 'Spices are not perfume sprayed at the end; they are structural chords struck in sequence at specific temperatures.',
    signatureDish: 'Awadhi Smoked Lamb Shank with 24-Spice Nihari Gravy'
  },
  {
    id: 'chef-marco-valenti',
    name: 'Marco Valenti',
    role: 'Head of Artisanal Pasta & Mediterranean Studies',
    experience: '14 Years Master Pasta Maker & Trattoria Executive',
    portrait: IMAGES.pasta,
    bio: 'Hailing from Bologna, Marco spent childhood summers at his nonna’s pasta bench before working in Modena and Florence. He brings an infectious passion for Italian regional biodiversity and grain heritage.',
    accolades: ['Bologna Pasta Guild Certified Master', 'Slow Food International Ambassador', 'Featured in "Cucina Contemporanea"'],
    specialty: 'Hand-Rolled Egg Pasta, Wild Herb Fillings & Emulsified Pan Sauces',
    teachingPhilosophy: 'Pasta dough talks to your hands. It tells you when it needs more moisture, another minute of kneading, or 10 minutes of rest.',
    signatureDish: 'Hand-Pinched Culurgiones with Mint, Pecorino & Burnt Butter'
  },
  {
    id: 'chef-amara-chen',
    name: 'Amara Chen',
    role: 'Executive Pâtissière & Pastry Instructor',
    experience: '13 Years Viennoiserie & Confectionery Specialist',
    portrait: IMAGES.studio,
    bio: 'Former pastry chef at three-star establishments in Tokyo and New York, Amara bridges European classical lamination with delicate Asian botanical infusions.',
    accolades: ['Pastry Champion, Coupe du Monde Regional 2021', 'Certified Master Chocolatier', 'Pastry Arts Magazine Top 10 Educator'],
    specialty: 'Viennoiserie, Laminated Doughs & Single-Origin Chocolate Sculpting',
    teachingPhilosophy: 'Pastry teaches patience and precision. A half-gram or one degree Celsius can transform a good bake into perfection.',
    signatureDish: 'Cardamom & Yuzu Honeycomb Cruffin with Gianduja Core'
  }
];

export const PRICING_PACKAGES: PricingPackage[] = [
  {
    id: 'single-class',
    name: 'Single Masterclass',
    subtitle: 'The focused single-session workshop',
    price: 145,
    duration: '3.5 to 4 Hours',
    format: 'In-Person Studio',
    inclusions: [
      'Individual marble cooking station',
      'All premium organic & imported ingredients',
      'Take-home custom Vance cotton apron',
      'Printed recipe dossier with technique notes',
      'Seated dining feast with paired boutique wines',
      'Certificate of class completion'
    ],
    bookingConditions: 'Full refund or reschedule up to 72 hours prior to class.',
    bestFor: 'Food lovers, date nights, and home cooks exploring new cuisines.'
  },
  {
    id: 'weekend-immersion',
    name: 'Weekend Culinary Immersion',
    subtitle: 'Two full days of intensive culinary mastery',
    price: 380,
    duration: '2 Days (10 Total Hours)',
    format: 'Weekend Atelier',
    isPopular: true,
    inclusions: [
      'Two consecutive intensive 5-hour workshops',
      'Comprehensive knife techniques & multi-course fabrication',
      'Private studio breakfast & multi-course lunches included',
      'Vance Culinary Academy chef kit & Japanese whetstone',
      'Cellar tasting with resident sommelier',
      'Priority booking access for future seasonal workshops'
    ],
    bookingConditions: 'Flexible rescheduling within 6 months with 5 days advance notice.',
    bestFor: 'Passionate enthusiasts seeking a complete skill jump in one weekend.'
  },
  {
    id: 'foundations-program',
    name: '4-Week Culinary Foundations',
    subtitle: 'Structured progression from novice to confident chef',
    price: 720,
    duration: '4 Weeks (1 Session per Week)',
    format: 'Weekly Evening Cohort',
    inclusions: [
      '4 progressive modules: Knife Skills, Sauces, Heat, Plating',
      'Dedicated instructor 1-on-1 feedback each week',
      'Mid-week kitchen practice support via private portal',
      'Comprehensive leather recipe binder & textbook',
      'Graduation banquet hosting a personal guest',
      'Vance Academy Foundations Diploma'
    ],
    bookingConditions: 'Installment payment option available (2 x $360).',
    bestFor: 'Home cooks wanting to eliminate recipe reliance forever.'
  },
  {
    id: 'professional-diploma',
    name: '8-Week Professional Culinary Course',
    subtitle: 'Commercial brigade preparation & culinary arts certification',
    price: 2400,
    duration: '8 Weeks (16 Studio Sessions)',
    format: 'Semi-Private (Cap 6 Students)',
    inclusions: [
      'Full commercial brigade kitchen stations',
      'Protein fabrication (whole fish, poultry, primal meat cuts)',
      'Classical French saucier & modern gastronomy mastery',
      'Food safety & sanitation manager certification curriculum',
      'Externship placement counseling & portfolio review',
      'Professional Vance Culinary Academy Diploma'
    ],
    bookingConditions: 'Application & culinary interview required. Small cohort guaranteed.',
    bestFor: 'Aspiring restaurant chefs, private caterers, and food entrepreneurs.'
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 't-01',
    name: 'Claire Montgomery',
    role: 'Creative Director & Home Gourmet',
    course: 'Handmade Pasta & Italian Mother Sauces',
    rating: 5,
    date: 'October 2026',
    quote: 'Before Vance, pasta was something I bought in a cardboard box. Chef Marco taught us the tactile language of dough in three hours. Last weekend I hosted twelve guests for agnolotti with sage butter, and not a single bite was left.',
    outcome: 'Now makes weekly fresh pasta from scratch without recipes.'
  },
  {
    id: 't-02',
    name: 'David Thorne',
    role: 'Software Architect & Amateur Cook',
    course: 'Essential Knife Skills & Kitchen Fundamentals',
    rating: 5,
    date: 'September 2026',
    quote: 'The level of instruction is extraordinary. Chef Elena broke down knife anatomy, posture, and blade angles with the precision of an engineer. Meal prep that used to take me an hour now takes twelve minutes.',
    outcome: 'Halved dinner prep time and eliminated kitchen hand fatigue.'
  },
  {
    id: 't-03',
    name: 'Priya Narayanan',
    role: 'Nutritionist & Wellness Author',
    course: 'Regional Indian Gastronomy & Spice Tempering',
    rating: 5,
    date: 'August 2026',
    quote: 'Chef Rohan’s breakdown of spice thermodynamics was revelatory. Even coming from an Indian household, I never understood the chemical science behind oil bloom temperatures until this masterclass.',
    outcome: 'Integrated authentic spice chemistry into her published recipes.'
  },
  {
    id: 't-04',
    name: 'Julian Mercer',
    role: 'Commercial Real Estate Broker',
    course: 'Weekend Culinary Immersion',
    rating: 5,
    date: 'October 2026',
    quote: 'The studio environment feels like a high-end French country kitchen merged with a Michelin laboratory. Beautiful copper pans, pristine marble, and genuine encouragement from every instructor.',
    outcome: 'Cooks complete 3-course dinners for clients with absolute ease.'
  }
];

export const FREQUENTLY_ASKED_QUESTIONS = [
  {
    question: 'Are the classes suitable for complete beginners?',
    answer: 'Yes, absolutely. Our Beginner Cooking Classes and single-session workshops require zero prior experience. Each student works at their own dedicated station with step-by-step guidance from our chef instructors. We teach fundamental ergonomics, safety, and core principles from the ground up.'
  },
  {
    question: 'Do I need previous cooking experience?',
    answer: 'Only our "Professional Kitchen Immersion" and advanced masterclasses recommend basic familiarity with kitchen tools. All our foundational, international, and regional courses welcome all culinary backgrounds.'
  },
  {
    question: 'Are ingredients and equipment included in the class fee?',
    answer: 'Everything is included. We provide all organic seasonal produce, artisanal pantry items, premium proteins, hand-forged knives, custom aprons, and professional equipment. You also enjoy a seated meal of everything prepared, accompanied by curated wine pairings or non-alcoholic botanical beverages.'
  },
  {
    question: 'Do students receive hands-on practice, or is it a demonstration?',
    answer: 'Our philosophy is 100% hands-on. Every student has an individual or paired induction cooktop, cutting station, and cookware set. While our chefs demonstrate key cuts and techniques at the central chef island, you immediately execute every step yourself.'
  },
  {
    question: 'What is the duration of each class?',
    answer: 'Most single masterclasses run between 3.5 and 4 hours. This includes 2.5 hours of active hands-on cooking and 1 hour of relaxed, seated dining and communal conversation. Our full-day professional masterclasses run 6.5 hours.'
  },
  {
    question: 'Do you offer weekend classes?',
    answer: 'Yes. We run morning, afternoon, and evening sessions every Saturday and Sunday, including our popular Weekend Culinary Immersion workshops and Sunday Pâtisserie labs.'
  },
  {
    question: 'Are online cooking classes available?',
    answer: 'While our flagship focus is our in-person kitchen studio in the Culinary Arts Quarter, enrolled students receive access to high-definition video recaps, printable recipe formulas, and live monthly digital Q&A sessions with our chef directors.'
  },
  {
    question: 'Do you provide certificates upon completion?',
    answer: 'Yes. All single masterclasses include a verified Certificate of Attendance. Our 4-Week Foundations and 8-Week Professional Training programs confer the recognized Vance Culinary Academy Certificate of Culinary Arts.'
  },
  {
    question: 'Can I book a private cooking session or corporate event?',
    answer: 'Yes. We frequently host private studio takeovers for company offsites, birthday celebrations, wedding parties, and private client dinners for groups of 6 to 24 guests. Contact our admissions team for custom menus.'
  },
  {
    question: 'What is your cancellation and rescheduling policy?',
    answer: 'We understand schedules change. Individual class bookings can be rescheduled or refunded up to 72 hours prior to the session. Within 72 hours, tickets can be transferred to a friend or family member, or credited toward a future open session upon request.'
  }
];

export const BLOG_POSTS: BlogPost[] = [
  {
    id: 'knife-honing-vs-sharpening',
    title: 'The Art of the Edge: Honing Steel vs. Japanese Whetstone',
    category: 'Kitchen Techniques',
    readTime: '5 min read',
    date: 'Nov 8, 2026',
    excerpt: 'Why dragging a dull blade through a countertop pull-through ruins your steel, and how 1,000-grit whetstone water sharpening transforms your cutting precision.',
    image: IMAGES.hero,
    content: [
      'Most home cooks believe their knives are made of indestructible metal. In reality, a sharp edge is a microscopic row of teeth only microns thick.',
      'A honing steel does not remove metal; it realigns microscopic rolled teeth back into a straight line. Whetstones, conversely, abrade steel at precise 15-degree angles to produce a hair-splitting apex.',
      'In our foundational knife classes, we spend the first 30 minutes training your muscle memory to feel the burr with your thumb pad. Once you feel that wire edge, you never push a dull blade again.'
    ]
  },
  {
    id: 'science-of-spice-blooming',
    title: 'Thermodynamics of Tadka: Extracting Essential Spice Oils',
    category: 'Culinary Traditions',
    readTime: '6 min read',
    date: 'Oct 30, 2026',
    excerpt: 'Why cold water destroys spice aromatics, and how hot fat unlocks fat-soluble terpenes in cumin, mustard seed, and cardamom.',
    image: IMAGES.curry,
    content: [
      'Spices are storage capsules of delicate volatile oils. When dropped into water, these compounds remain trapped within cellulose plant walls.',
      'By heating ghee or mustard oil to exactly 175°C (350°F) and introducing whole seeds for 8 to 12 seconds, the outer seed jacket cracks and releases fat-soluble esters directly into the cooking medium.',
      'Chef Rohan demonstrates this split-second technique in our Regional Indian Gastronomy course, teaching students to listen to the pitch of the popping seeds.'
    ]
  },
  {
    id: 'hydration-rules-handmade-pasta',
    title: 'The Golden Ratio: Semolina, Egg Yolk & Dough Hydration',
    category: 'Baking & Pasta',
    readTime: '4 min read',
    date: 'Oct 21, 2026',
    excerpt: 'How humidity, yolk protein, and bench resting govern whether your tagliatelle will have that coveted al dente toothsome bite.',
    image: IMAGES.pasta,
    content: [
      'The biggest mistake beginner pasta makers commit is rushing the gluten relaxation stage. After vigorous 10-minute kneading, gluten strands are coiled tight like steel springs.',
      'A minimum 30-minute rest wrapped tightly in parchment allows hydration to equalize through the starch granules and relaxes the gluten matrix.',
      'Chef Marco shows how dough should spring back gently under your fingertip like a soft earlobe before it ever touches a rolling pin.'
    ]
  }
];

export const STUDIO_FEATURES = [
  {
    title: 'Individual Induction Stations',
    description: 'Each student commands a commercial-grade German induction cooktop with instant 1-degree precision temperature response.'
  },
  {
    title: 'Hand-Forged Culinary Cutlery',
    description: 'Work with German Messermeister and Japanese VG-10 damascus steel blades, hand-sharpened before every session.'
  },
  {
    title: 'Temperature-Controlled Pastry Lab',
    description: 'A dedicated 18°C pastry atelier with Carrara marble slabs engineered for delicate lamination turns and chocolate work.'
  },
  {
    title: 'Organic Apothecary Spice Library',
    description: 'Over 120 single-origin whole spices, heirloom peppercorns, and cold-pressed cold-extracted oils sourced directly from growers.'
  },
  {
    title: 'Communal Walnut Tasting Salon',
    description: 'Where every class ends: seated together around a handcrafted 16-seat walnut table to dine, toast, and review techniques.'
  },
  {
    title: 'All-Inclusive Sustainable Kitchen',
    description: 'Zero food-waste composting program, non-toxic eco-cleaning systems, and locally sourced organic California produce.'
  }
];
