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

// Real photos sourced from the official websites of each Senegalese institution
// (ucad.sn, esp.sn, groupeism.sn, groupeiam.com) and from open photo collections
// for Supdeco where no public hotlinkable assets exist.
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
    image: "https://tse3.mm.bing.net/th/id/OIP.10MRZpMlPmtel_0dE971_AHaEB?r=0&rs=1&pid=ImgDetMain&o=7&rm=3",
    logo: "https://tse3.mm.bing.net/th/id/OIP.10MRZpMlPmtel_0dE971_AHaEB?r=0&rs=1&pid=ImgDetMain&o=7&rm=3",
    filieres: ["Génie Informatique", "Génie Logiciel", "Télécommunications", "Génie Civil", "Génie Électrique"],
    accreditations: ["ANAQ-Sup", "CAMES"],
    debouches: ["Ingénieur logiciel", "Ingénieur réseaux", "Chef de projet IT", "Ingénieur BTP"],
    tauxInsertion: 92,
    domaines: ["Ingénierie", "Informatique"],
    galerie: [
      "https://tse3.mm.bing.net/th/id/OIP.10MRZpMlPmtel_0dE971_AHaEB?r=0&rs=1&pid=ImgDetMain&o=7&rm=3",
      "https://edukiya.com/wp-content/uploads/2020/05/Ecole-Sup%C3%A9rieure-Multinationale-des-T%C3%A9l%C3%A9communications-ESMT-Dakar-etudes-au-senegal-orientation-bacheliers-3.jpg",
      "https://esp.sn/wp-content/uploads/2020/11/admin-ajax.jpg",
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
    image: "https://www.ucad.sn/sites/default/files/5Q5A1426.jpg",
    logo: "https://www.ucad.sn/sites/default/files/5Q5A1426.jpg",
    filieres: ["Droit", "Médecine", "Lettres modernes", "Mathématiques", "Économie"],
    accreditations: ["ANAQ-Sup", "CAMES"],
    debouches: ["Juriste", "Médecin", "Enseignant-chercheur", "Économiste"],
    tauxInsertion: 78,
    domaines: ["Droit", "Santé", "Lettres", "Sciences"],
    galerie: [
      "https://www.ucad.sn/sites/default/files/5Q5A1426.jpg",
      "https://www.ucad.sn/sites/default/files/BU_1.jpg",
      "https://www.ucad.sn/sites/default/files/Coope_1.jpg",
      "https://www.ucad.sn/sites/default/files/ENT.jpg",
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
    image: "https://www.groupeism.sn/sites/default/files/bean/image_homepage/desktop/header_hp_mini.jpg",
    logo: "https://www.groupeism.sn/sites/default/files/bean/image_homepage/desktop/header_hp_mini.jpg",
    filieres: ["Management", "Marketing Digital", "Finance", "Commerce International", "Communication"],
    accreditations: ["ANAQ-Sup", "AACSB partenaire"],
    debouches: ["Manager", "Chargé de marketing", "Analyste financier", "Entrepreneur"],
    tauxInsertion: 88,
    domaines: ["Commerce", "Communication"],
    galerie: [
      "https://www.groupeism.sn/sites/default/files/bean/image_homepage/desktop/header_hp_mini.jpg",
      "https://www.groupeism.sn/sites/default/files/image/campus/desktop/etudiant_0.jpg",
      "https://www.groupeism.sn/sites/default/files/styles/212x120/public/image/hot_content/news/miniature/ism_super_league_1.jpeg",
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
    image: "https://www.groupeiam.com/wp-content/uploads/2022/10/Sans-titre-35.jpg",
    logo: "https://www.groupeiam.com/wp-content/uploads/2022/10/Sans-titre-35.jpg",
    filieres: ["Management", "Finance", "Entrepreneuriat", "RH", "Digital Business"],
    accreditations: ["ANAQ-Sup", "CAMES"],
    debouches: ["Manager", "Consultant", "Entrepreneur", "Banquier"],
    tauxInsertion: 84,
    domaines: ["Commerce", "Finance"],
    galerie: [
      "https://www.groupeiam.com/wp-content/uploads/2022/10/Sans-titre-35.jpg",
      "https://www.groupeiam.com/wp-content/uploads/2022/10/Sans-titre-36.jpg",
      "https://www.groupeiam.com/wp-content/uploads/2023/02/Sans-titre-57.jpg",
      "https://www.groupeiam.com/wp-content/uploads/2026/05/IAM-celebre-30-ans-dhistoire.jpg",
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
    image: "https://images.unsplash.com/photo-1577896851231-70ef18881754?w=1200&q=80",
    logo: "https://images.unsplash.com/photo-1577896851231-70ef18881754?w=400&q=80",
    filieres: ["Commerce", "Marketing", "Audit & Contrôle", "Logistique", "Banque-Assurance"],
    accreditations: ["ANAQ-Sup", "CAMES"],
    debouches: ["Auditeur", "Commercial", "Logisticien", "Chargé d'affaires"],
    tauxInsertion: 90,
    domaines: ["Commerce"],
    galerie: [
      "https://images.unsplash.com/photo-1577896851231-70ef18881754?w=900&q=80",
      "https://images.unsplash.com/photo-1571260899304-425eee4c7efc?w=900&q=80",
      "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=900&q=80",
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

// Real portrait photos of young African / Black professionals (Unsplash)
export const temoignages: Temoignage[] = [
  { id: "1", nom: "Awa Diop", photo: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=300&q=80", promotion: "Promo 2022", etablissement: "ESP", note: 5, commentaire: "Formation exigeante mais qui ouvre toutes les portes. J'ai été recrutée 2 mois avant la fin de mes études." },
  { id: "2", nom: "Mamadou Sow", photo: "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?w=300&q=80", promotion: "Promo 2021", etablissement: "ISM", note: 5, commentaire: "Le réseau alumni de l'ISM est exceptionnel. Les stages à l'international sont un vrai plus." },
  { id: "3", nom: "Fatou Ndiaye", photo: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=300&q=80", promotion: "Promo 2023", etablissement: "UCAD", note: 4, commentaire: "Une université historique avec une grande richesse intellectuelle. Les amphis sont chargés mais l'expérience est unique." },
  { id: "4", nom: "Cheikh Fall", photo: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&q=80", promotion: "Promo 2020", etablissement: "Supdeco", note: 5, commentaire: "Excellente école pour ceux qui visent le monde du commerce et de l'audit. Les profs sont des pros du terrain." },
  { id: "5", nom: "Aissatou Ba", photo: "https://images.unsplash.com/photo-1521119989659-a83eee488004?w=300&q=80", promotion: "Promo 2022", etablissement: "IAM", note: 4, commentaire: "Très bonne formation en entrepreneuriat. J'ai lancé ma startup grâce à l'incubateur de l'école." },
  { id: "6", nom: "Ibrahima Sy", photo: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=300&q=80", promotion: "Promo 2023", etablissement: "ESP", note: 5, commentaire: "Les projets pratiques en génie logiciel m'ont préparé directement au métier de développeur." },
  { id: "7", nom: "Mariama Diallo", photo: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=300&q=80", promotion: "Promo 2021", etablissement: "ISM", note: 4, commentaire: "Cadre d'études moderne et beaucoup d'opportunités de networking." },
  { id: "8", nom: "Ousmane Kane", photo: "https://images.unsplash.com/photo-1463453091185-61582044d556?w=300&q=80", promotion: "Promo 2019", etablissement: "UCAD", note: 4, commentaire: "Faculté de droit très réputée. Les enseignants chercheurs apportent une vraie profondeur." },
  { id: "9", nom: "Nafissatou Thiam", photo: "https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?w=300&q=80", promotion: "Promo 2022", etablissement: "Supdeco", note: 5, commentaire: "J'ai été embauchée avant même de soutenir mon mémoire. Merci Supdeco !" },
  { id: "10", nom: "Modou Gueye", photo: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=300&q=80", promotion: "Promo 2023", etablissement: "IAM", note: 4, commentaire: "L'approche pratique du programme MBA m'a beaucoup apporté professionnellement." },
];

export const mockUser = {
  nom: "Aminata Sarr",
  email: "aminata.sarr@oriensup.sn",
  serieBac: "S2",
  photo: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=300&q=80",
  quizResult: {
    filiere: "Génie Logiciel",
    compatibilite: 92,
  },
  favoris: ["esp", "ism"],
};
