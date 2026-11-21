import { DoctorProfile, ServiceItem } from './types';

export const DOCTOR_INFO: DoctorProfile = {
  name: "Dr. Jowela Elaine E. Roxas, DMD",
  title: "Doctor of Dental Medicine",
  nickname: "Denteetha",
  executiveTitle: "CEO of Hello po!",
  clinic: "Smiles Dental Hub",
  location: "147 Malipampang, San Ildefonso, Bulacan, Philippines",
  tagline: "Our lifetime mission is your lifetime smile",
  contacts: {
    phone: "09067915425",
    email: "ellaroxas_dmd@yahoo.com",
    clinicEmail: "smilesdentalhub@gmail.com",
    facebookDoctor: "https://www.facebook.com/ellaroxas",
    facebookClinic: "https://www.facebook.com/smilesdentalhub",
    tiktok: "https://www.tiktok.com/@ellarxsdmd",
    youtube: "https://www.youtube.com/@ellaroxasdmd",
    instagram: "https://www.instagram.com/ellaroxasdmd",
  },
  schedule: {
    days: ["Monday", "Tuesday", "Thursday", "Friday", "Saturday", "Sunday"],
    hours: "9:00 AM – 6:00 PM",
    note: "Special appointments and emergency consultations available upon advance request."
  }
};

export const CLINIC_SERVICES: ServiceItem[] = [
  {
    id: "oral-prophylaxis",
    title: "Comprehensive Oral Prophylaxis",
    category: "Preventive Care",
    tagline: "Deep teeth cleaning, plaque/tartar removal & polish",
    description: "Gentle yet thorough ultrasonic scaling that eliminates stubborn calculus, stains from coffee and tea, and preserves your gum health for a pristine breath and smile.",
    features: [
      "Ultrasonic gentle scaling",
      "Stain removal & micro-polishing",
      "Periodontal gum assessment",
      "Personalized oral hygiene counseling"
    ],
    duration: "45 - 60 mins",
    iconName: "Sparkles",
    popular: true
  },
  {
    id: "orthodontics",
    title: "Orthodontics & Braces",
    category: "Smile Alignment",
    tagline: "Metal, ceramic, self-ligating & clear aligners",
    description: "Personalized orthodontic therapy supervised by Dr. Ella to correct malocclusions, crowded teeth, spacing issues, and unlock your most harmonious facial profile.",
    features: [
      "Traditional & Ceramic brackets",
      "Self-ligating low-friction options",
      "Digital bite analysis",
      "Monthly progressive adjustments"
    ],
    duration: "12 - 24 months plan",
    iconName: "Smile",
    popular: true
  },
  {
    id: "esthetic-veneers",
    title: "Esthetic Dentistry & Veneers",
    category: "Cosmetic Makeover",
    tagline: "Porcelain & composite veneers for Hollywood smile",
    description: "Craft handcrafted smile architectures tailored to your facial harmony. Perfect for discolored, chipped, misaligned, or unevenly sized teeth.",
    features: [
      "Custom composite / porcelain veneers",
      "Direct composite bonding & edge contouring",
      "Diastema (gap) closure",
      "Natural shade matching"
    ],
    duration: "1 - 2 visits",
    iconName: "Gem",
    popular: true
  },
  {
    id: "teeth-whitening",
    title: "Laser & In-Office Teeth Whitening",
    category: "Cosmetic Makeover",
    tagline: "Instant 4 to 8 shades brighter in one session",
    description: "Medical-grade safe bleaching system that breaks down deep organic enamel discolorations with minimal tooth sensitivity and dazzling long-lasting shine.",
    features: [
      "Immediate visible results",
      "Desensitizing enamel protection",
      "Gingival barrier safety technique",
      "Take-home touch-up guidance"
    ],
    duration: "60 mins",
    iconName: "Sun",
    popular: true
  },
  {
    id: "restorations",
    title: "Tooth-Colored Restorations (Pasta)",
    category: "Restorative Dentistry",
    tagline: "Seamless composite tooth fillings & repairs",
    description: "High-strength bio-compatible light-cured composite resin restorations that replicate natural tooth translucency while arresting decay.",
    features: [
      "Tooth-colored resin matrix",
      "Minimally invasive cavity prep",
      "Bite alignment adjustment",
      "Long-lasting durability"
    ],
    duration: "30 - 45 mins",
    iconName: "ShieldCheck"
  },
  {
    id: "oral-surgery",
    title: "Wisdom Tooth Removal & Minor Surgery",
    category: "Surgical Care",
    tagline: "Painless extraction of impacted molars & surgical care",
    description: "Gentle surgical extractions performed with modern local anesthesia, atraumatic techniques, and attentive post-operative recovery monitoring.",
    features: [
      "Impacted 3rd molar removal",
      "Pre-surgical radiographic review",
      "Sterile infection-free protocol",
      "Comprehensive healing follow-up"
    ],
    duration: "45 - 90 mins",
    iconName: "Scissors"
  },
  {
    id: "root-canal",
    title: "Endodontic Root Canal Therapy",
    category: "Restorative Dentistry",
    tagline: "Save damaged or infected teeth from extraction",
    description: "Precision root canal therapy to eliminate acute toothache, disinfect internal nerve canals, and preserve your original tooth structure.",
    features: [
      "Micro-canal sanitization",
      "Pain-free modern anesthesia",
      "Hermetic canal obturation",
      "Post-and-core crown reinforcement"
    ],
    duration: "1 - 2 sessions",
    iconName: "HeartPulse"
  },
  {
    id: "pediatric-dentistry",
    title: "Pediatric Kiddie Dentistry",
    category: "Family Care",
    tagline: "Friendly, gentle, fear-free dental visits for kids",
    description: "Dr. Ella's signature warm 'Hello po!' approach makes children feel safe and excited. Includes fluoride varnish, pit & fissure sealants, and gentle monitoring.",
    features: [
      "Child-friendly gentle communication",
      "Fluoride therapy & pit fissure sealants",
      "Early orthodontic monitoring",
      "Fun oral habit training"
    ],
    duration: "30 - 45 mins",
    iconName: "Heart"
  },
  {
    id: "prosthodontics",
    title: "Dentures, Crowns & Bridges",
    category: "Prosthodontics",
    tagline: "Fixed & removable tooth replacement solutions",
    description: "Restore chewing efficiency and youthful facial contours with flexible dentures, full porcelain crowns, and precision dental bridges.",
    features: [
      "Zirconia and E-max ceramic crowns",
      "Valplast flexible & acrylic dentures",
      "Custom bite articulation",
      "Seamless natural feel"
    ],
    duration: "Custom laboratory workflow",
    iconName: "Activity"
  }
];

export const TESTIMONIALS = [
  {
    name: "Patricia M. Gomez",
    role: "Teacher, San Ildefonso",
    comment: "Dr. Ella (Denteetha) is so gentle and accommodating! I used to have severe dental anxiety, but her warm 'Hello po!' atmosphere and gentle hands during my wisdom tooth surgery completely removed my fear. Truly our lifetime smile dentist!",
    rating: 5,
    service: "Wisdom Tooth Extraction"
  },
  {
    name: "Engr. Mark Kenneth Santos",
    role: "Project Manager, Bulacan",
    comment: "Smiles Dental Hub is the most modern and pristine clinic along Malipampang! Had my braces and teeth whitening done here. The results were stellar, and the cyan aesthetic of the clinic is so calming.",
    rating: 5,
    service: "Orthodontics & Whitening"
  },
  {
    name: "Mary Anne Dela Cruz",
    role: "Content Creator & Mom",
    comment: "Brought my two young kids for dental cleaning and sealant. Doc Ella is a natural with kids! My children didn't cry at all and even asked when we can visit Denteetha again. 10/10 recommendation!",
    rating: 5,
    service: "Pediatric Dentistry"
  }
];

export const CLINIC_AMENITIES = [
  {
    title: "Hospital-Grade Sterilization",
    description: "Autoclave class-B sterilization, pouch sealing, and medical barrier infection control protocols.",
    icon: "ShieldAlert"
  },
  {
    title: "High-Definition Dental Imaging",
    description: "Digital intraoral cameras and diagnostics to show you exactly what is happening in real-time.",
    icon: "Scan"
  },
  {
    title: "Relaxing Ergonomic Lounge",
    description: "Fully air-conditioned reception with complimentary WiFi, warm lighting, and calming music.",
    icon: "Coffee"
  },
  {
    title: "Gentle Anesthesia System",
    description: "Computerized and buffered local anesthetics for virtually painless injections and procedures.",
    icon: "Activity"
  }
];
