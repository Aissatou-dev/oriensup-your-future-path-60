export type Etablissement = {
  id: string;
  nom: string;
  sigle: string;
  ville: string;
  type: "Public" | "Privé";
  note: number;
  cout: string;
  coutValue: number;
  description: string;
  descriptionLongue: string;
  image: string;
  logo: string;
  filieres: string[];
  accreditations: string[];
  debouches: string[];
  tauxInsertion: number;
  domaines: string[];
  galerie: string[];
};

export const etablissements: Etablissement[] = [
  {
    id: "esp",
    nom: "École Supérieure Polytechnique",
    sigle: "ESP",
    ville: "Dakar",
    type: "Public",
    note: 4.6,
    cout: "Gratuit (concours)",
    coutValue: 0,
    description: "École d'ingénieurs de référence au Sénégal, formant l'élite technique.",
    descriptionLongue:
      "L'ESP est rattachée à l'UCAD et forme depuis 1964 les ingénieurs de conception, ingénieurs technologues et techniciens supérieurs dans les domaines de l'industrie, du numérique et du génie civil.",
    image: "https://images.unsplash.com/photo-1562774053-701939374585?w=800&q=80",
    logo: "https://images.unsplash.com/photo-1562774053-701939374585?w=200&q=80",
    filieres: ["Génie Informatique", "Génie Logiciel", "Télécommunications", "Génie Civil", "Génie Électrique"],
    accreditations: ["ANAQ-Sup", "CAMES"],
    debouches: ["Ingénieur logiciel", "Ingénieur réseaux", "Chef de projet IT", "Ingénieur BTP"],
    tauxInsertion: 92,
    domaines: ["Ingénierie", "Informatique"],
    galerie: [
      "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=600&q=80",
      "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=600&q=80",
      "https://images.unsplash.com/photo-1498243691581-b145c3f54a5a?w=600&q=80",
    ],
  },
  {
    id: "ucad",
    nom: "Université Cheikh Anta Diop",
    sigle: "UCAD",
    ville: "Dakar",
    type: "Public",
    note: 4.3,
    cout: "Faible (public)",
    coutValue: 25000,
    description: "Plus grande université du Sénégal, pluridisciplinaire et historique.",
    descriptionLongue:
      "Fondée en 1957, l'UCAD accueille plus de 90 000 étudiants à travers ses facultés de lettres, sciences, médecine, droit et économie.",
    image: "https://images.unsplash.com/photo-1607237138185-eedd9c632b0b?w=800&q=80",
    logo: "https://images.unsplash.com/photo-1607237138185-eedd9c632b0b?w=200&q=80",
    filieres: ["Droit", "Médecine", "Lettres modernes", "Mathématiques", "Économie"],
    accreditations: ["ANAQ-Sup", "CAMES"],
    debouches: ["Juriste", "Médecin", "Enseignant-chercheur", "Économiste"],
    tauxInsertion: 78,
    domaines: ["Droit", "Santé", "Lettres", "Sciences"],
    galerie: [
      "https://images.unsplash.com/photo-1571260899304-425eee4c7efc?w=600&q=80",
      "https://images.unsplash.com/photo-1576495199011-eb94736d05d6?w=600&q=80",
      "https://images.unsplash.com/photo-1562774053-701939374585?w=600&q=80",
    ],
  },
  {
    id: "ism",
    nom: "Institut Supérieur de Management",
    sigle: "ISM",
    ville: "Dakar",
    type: "Privé",
    note: 4.5,
    cout: "2 500 000 FCFA / an",
    coutValue: 2500000,
    description: "École de management privée reconnue à l'international.",
    descriptionLongue:
      "L'ISM est l'une des plus grandes business schools d'Afrique francophone, avec des partenariats internationaux et un fort taux d'insertion.",
    image: "https://images.unsplash.com/photo-1568992687947-868a62a9f521?w=800&q=80",
    logo: "https://images.unsplash.com/photo-1568992687947-868a62a9f521?w=200&q=80",
    filieres: ["Management", "Marketing Digital", "Finance", "Commerce International", "Communication"],
    accreditations: ["ANAQ-Sup", "AACSB partenaire"],
    debouches: ["Manager", "Chargé de marketing", "Analyste financier", "Entrepreneur"],
    tauxInsertion: 88,
    domaines: ["Commerce", "Communication"],
    galerie: [
      "https://images.unsplash.com/photo-1497366216548-37526070297c?w=600&q=80",
      "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=600&q=80",
      "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=600&q=80",
    ],
  },
  {
    id: "iam",
    nom: "Institut Africain de Management",
    sigle: "IAM",
    ville: "Dakar",
    type: "Privé",
    note: 4.2,
    cout: "1 800 000 FCFA / an",
    coutValue: 1800000,
    description: "Formation en management, finance et entrepreneuriat panafricain.",
    descriptionLongue:
      "L'IAM propose des cursus du Bachelor au MBA, avec un focus sur l'entrepreneuriat africain et la transformation digitale.",
    image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=800&q=80",
    logo: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=200&q=80",
    filieres: ["Management", "Finance", "Entrepreneuriat", "RH", "Digital Business"],
    accreditations: ["ANAQ-Sup", "CAMES"],
    debouches: ["Manager", "Consultant", "Entrepreneur", "Banquier"],
    tauxInsertion: 84,
    domaines: ["Commerce", "Finance"],
    galerie: [
      "https://images.unsplash.com/photo-1517502884422-41eaead166d4?w=600&q=80",
      "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=600&q=80",
      "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=600&q=80",
    ],
  },
  {
    id: "supdeco",
    nom: "Sup de Co Dakar",
    sigle: "Supdeco",
    ville: "Dakar",
    type: "Privé",
    note: 4.4,
    cout: "2 200 000 FCFA / an",
    coutValue: 2200000,
    description: "Grande école de commerce avec un réseau alumni puissant.",
    descriptionLongue:
      "Le Groupe Sup de Co Dakar forme depuis 1985 les futurs cadres et dirigeants africains, avec des doubles diplômes européens.",
    image: "https://images.unsplash.com/photo-1605007493699-af65834f8a00?w=800&q=80",
    logo: "https://images.unsplash.com/photo-1605007493699-af65834f8a00?w=200&q=80",
    filieres: ["Commerce", "Marketing", "Audit & Contrôle", "Logistique", "Banque-Assurance"],
    accreditations: ["ANAQ-Sup", "CAMES"],
    debouches: ["Auditeur", "Commercial", "Logisticien", "Chargé d'affaires"],
    tauxInsertion: 90,
    domaines: ["Commerce"],
    galerie: [
      "https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=600&q=80",
      "https://images.unsplash.com/photo-1543269865-cbf427effbad?w=600&q=80",
      "https://images.unsplash.com/photo-1531545514256-b1400bc00f31?w=600&q=80",
    ],
  },
];

export const filieres = [
  "Génie Logiciel", "Informatique", "Réseaux & Télécommunications", "Génie Civil", "Génie Électrique",
  "Médecine", "Pharmacie", "Droit", "Économie", "Marketing Digital",
  "Finance", "Management", "Commerce International", "Communication", "Ressources Humaines",
];

export type Temoignage = {
  id: string;
  nom: string;
  photo: string;
  promotion: string;
  etablissement: string;
  note: number;
  commentaire: string;
};

export const temoignages: Temoignage[] = [
  { id: "1", nom: "Awa Diop", photo: "https://i.pravatar.cc/150?img=47", promotion: "Promo 2022", etablissement: "ESP", note: 5, commentaire: "Formation exigeante mais qui ouvre toutes les portes. J'ai été recrutée 2 mois avant la fin de mes études." },
  { id: "2", nom: "Mamadou Sow", photo: "https://i.pravatar.cc/150?img=12", promotion: "Promo 2021", etablissement: "ISM", note: 5, commentaire: "Le réseau alumni de l'ISM est exceptionnel. Les stages à l'international sont un vrai plus." },
  { id: "3", nom: "Fatou Ndiaye", photo: "https://i.pravatar.cc/150?img=44", promotion: "Promo 2023", etablissement: "UCAD", note: 4, commentaire: "Une université historique avec une grande richesse intellectuelle. Les amphis sont chargés mais l'expérience est unique." },
  { id: "4", nom: "Cheikh Fall", photo: "https://i.pravatar.cc/150?img=15", promotion: "Promo 2020", etablissement: "Supdeco", note: 5, commentaire: "Excellente école pour ceux qui visent le monde du commerce et de l'audit. Les profs sont des pros du terrain." },
  { id: "5", nom: "Aissatou Ba", photo: "https://i.pravatar.cc/150?img=49", promotion: "Promo 2022", etablissement: "IAM", note: 4, commentaire: "Très bonne formation en entrepreneuriat. J'ai lancé ma startup grâce à l'incubateur de l'école." },
  { id: "6", nom: "Ibrahima Sy", photo: "https://i.pravatar.cc/150?img=33", promotion: "Promo 2023", etablissement: "ESP", note: 5, commentaire: "Les projets pratiques en génie logiciel m'ont préparé directement au métier de développeur." },
  { id: "7", nom: "Mariama Diallo", photo: "https://i.pravatar.cc/150?img=25", promotion: "Promo 2021", etablissement: "ISM", note: 4, commentaire: "Cadre d'études moderne et beaucoup d'opportunités de networking." },
  { id: "8", nom: "Ousmane Kane", photo: "https://i.pravatar.cc/150?img=11", promotion: "Promo 2019", etablissement: "UCAD", note: 4, commentaire: "Faculté de droit très réputée. Les enseignants chercheurs apportent une vraie profondeur." },
  { id: "9", nom: "Nafissatou Thiam", photo: "https://i.pravatar.cc/150?img=48", promotion: "Promo 2022", etablissement: "Supdeco", note: 5, commentaire: "J'ai été embauchée avant même de soutenir mon mémoire. Merci Supdeco !" },
  { id: "10", nom: "Modou Gueye", photo: "https://i.pravatar.cc/150?img=8", promotion: "Promo 2023", etablissement: "IAM", note: 4, commentaire: "L'approche pratique du programme MBA m'a beaucoup apporté professionnellement." },
];

export const mockUser = {
  nom: "Aminata Sarr",
  email: "aminata.sarr@oriensup.sn",
  serieBac: "S2",
  photo: "https://i.pravatar.cc/150?img=45",
  quizResult: {
    filiere: "Génie Logiciel",
    compatibilite: 92,
  },
  favoris: ["esp", "ism"],
};
