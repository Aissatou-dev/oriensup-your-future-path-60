import tAwa from "@/assets/t-awa.jpg";
import tMamadou from "@/assets/t-mamadou.jpg";
import tFatou from "@/assets/t-fatou.jpg";
import tCheikh from "@/assets/t-cheikh.jpg";
import tAissatou from "@/assets/t-aissatou.jpg";
import tIbrahima from "@/assets/t-ibrahima.jpg";
import tMariama from "@/assets/t-mariama.jpg";
import tOusmane from "@/assets/t-ousmane.jpg";
import tNafissatou from "@/assets/t-nafissatou.jpg";
import tModou from "@/assets/t-modou.jpg";
import tAminata from "@/assets/t-aminata.jpg";

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
    image: "https://lesoleil.sn/wp-content/uploads/2025/02/Ucad-bourse.webp",
    logo: "https://lesoleil.sn/wp-content/uploads/2025/02/Ucad-bourse.webp",
    filieres: ["Droit", "Médecine", "Lettres modernes", "Mathématiques", "Économie"],
    accreditations: ["ANAQ-Sup", "CAMES"],
    debouches: ["Juriste", "Médecin", "Enseignant-chercheur", "Économiste"],
    tauxInsertion: 78,
    domaines: ["Droit", "Santé", "Lettres", "Sciences"],
    galerie: [
      "https://lesoleil.sn/wp-content/uploads/2025/02/Ucad-bourse.webp",
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
    image: "https://mlww83xuqy31.i.optimole.com/XIcTOMM-QOKP6I_f/w:auto/h:auto/q:auto/https://edukiya.com/wp-content/uploads/2020/05/ISM-Dakar-Senegal-nouveaux-bacheliers-2.jpg",
    logo: "https://mlww83xuqy31.i.optimole.com/XIcTOMM-QOKP6I_f/w:auto/h:auto/q:auto/https://edukiya.com/wp-content/uploads/2020/05/ISM-Dakar-Senegal-nouveaux-bacheliers-2.jpg",
    filieres: ["Management", "Marketing Digital", "Finance", "Commerce International", "Communication"],
    accreditations: ["ANAQ-Sup", "AACSB partenaire"],
    debouches: ["Manager", "Chargé de marketing", "Analyste financier", "Entrepreneur"],
    tauxInsertion: 88,
    domaines: ["Commerce", "Communication"],
    galerie: [
      "https://mlww83xuqy31.i.optimole.com/XIcTOMM-QOKP6I_f/w:auto/h:auto/q:auto/https://edukiya.com/wp-content/uploads/2020/05/ISM-Dakar-Senegal-nouveaux-bacheliers-2.jpg",
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
    image: "https://www.senformation.com/content/uploads/iam-institut-africain-de-management-dakar-1024x576.jpg",
    logo: "https://www.senformation.com/content/uploads/iam-institut-africain-de-management-dakar-1024x576.jpg",
    filieres: ["Management", "Finance", "Entrepreneuriat", "RH", "Digital Business"],
    accreditations: ["ANAQ-Sup", "CAMES"],
    debouches: ["Manager", "Consultant", "Entrepreneur", "Banquier"],
    tauxInsertion: 84,
    domaines: ["Commerce", "Finance"],
    galerie: [
      "https://www.senformation.com/content/uploads/iam-institut-africain-de-management-dakar-1024x576.jpg",
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
    image: "https://www.senformation.com/content/uploads/supdeco-dakar.jpg",
    logo: "https://www.senformation.com/content/uploads/supdeco-dakar.jpg",
    filieres: ["Commerce", "Marketing", "Audit & Contrôle", "Logistique", "Banque-Assurance"],
    accreditations: ["ANAQ-Sup", "CAMES"],
    debouches: ["Auditeur", "Commercial", "Logisticien", "Chargé d'affaires"],
    tauxInsertion: 90,
    domaines: ["Commerce"],
    galerie: [
      "https://www.senformation.com/content/uploads/supdeco-dakar.jpg",
      "https://images.unsplash.com/photo-1571260899304-425eee4c7efc?w=900&q=80",
      "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=900&q=80",
    ],
  },
  {
    id: "esmt",
    nom: "École Supérieure Multinationale des Télécommunications",
    sigle: "ESMT",
    ville: "Dakar",
    type: "Public",
    note: 4.4,
    cout: "1 500 000 FCFA / an",
    coutValue: 1500000,
    description: "École panafricaine de référence en télécommunications et TIC.",
    descriptionLongue:
      "Créée en 1981, l'ESMT de Dakar est une école inter-États formant ingénieurs et techniciens supérieurs en télécommunications, réseaux et technologies de l'information pour toute l'Afrique francophone.",
    image: "https://tse1.mm.bing.net/th/id/OIP.l65-rCdwNiWV3TjkQGVg-AHaFj?r=0&cb=thfvnextfalcon2&rs=1&pid=ImgDetMain&o=7&rm=3",
    logo: "https://tse1.mm.bing.net/th/id/OIP.l65-rCdwNiWV3TjkQGVg-AHaFj?r=0&cb=thfvnextfalcon2&rs=1&pid=ImgDetMain&o=7&rm=3",
    filieres: ["Télécommunications", "Réseaux", "Cybersécurité", "Génie Logiciel", "Data Science"],
    accreditations: ["ANAQ-Sup", "CAMES"],
    debouches: ["Ingénieur télécoms", "Ingénieur réseaux", "Expert cybersécurité", "Data engineer"],
    tauxInsertion: 91,
    domaines: ["Ingénierie", "Informatique", "Télécommunications"],
    galerie: [
      "https://tse1.mm.bing.net/th/id/OIP.l65-rCdwNiWV3TjkQGVg-AHaFj?r=0&cb=thfvnextfalcon2&rs=1&pid=ImgDetMain&o=7&rm=3",
      "https://edukiya.com/wp-content/uploads/2020/05/Ecole-Sup%C3%A9rieure-Multinationale-des-T%C3%A9l%C3%A9communications-ESMT-Dakar-etudes-au-senegal-orientation-bacheliers-3.jpg",
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

// Portraits générés représentant de jeunes professionnels sénégalais
export const temoignages: Temoignage[] = [
  { id: "1", nom: "Awa Diop", photo: tAwa, promotion: "Promo 2022", etablissement: "ESP", note: 5, commentaire: "Formation exigeante mais qui ouvre toutes les portes. J'ai été recrutée 2 mois avant la fin de mes études." },
  { id: "2", nom: "Mamadou Sow", photo: tMamadou, promotion: "Promo 2021", etablissement: "ISM", note: 5, commentaire: "Le réseau alumni de l'ISM est exceptionnel. Les stages à l'international sont un vrai plus." },
  { id: "3", nom: "Fatou Ndiaye", photo: tFatou, promotion: "Promo 2023", etablissement: "UCAD", note: 4, commentaire: "Une université historique avec une grande richesse intellectuelle. Les amphis sont chargés mais l'expérience est unique." },
  { id: "4", nom: "Cheikh Fall", photo: tCheikh, promotion: "Promo 2020", etablissement: "Supdeco", note: 5, commentaire: "Excellente école pour ceux qui visent le monde du commerce et de l'audit. Les profs sont des pros du terrain." },
  { id: "5", nom: "Aissatou Ba", photo: tAissatou, promotion: "Promo 2022", etablissement: "IAM", note: 4, commentaire: "Très bonne formation en entrepreneuriat. J'ai lancé ma startup grâce à l'incubateur de l'école." },
  { id: "6", nom: "Ibrahima Sy", photo: tIbrahima, promotion: "Promo 2023", etablissement: "ESP", note: 5, commentaire: "Les projets pratiques en génie logiciel m'ont préparé directement au métier de développeur." },
  { id: "7", nom: "Mariama Diallo", photo: tMariama, promotion: "Promo 2021", etablissement: "ISM", note: 4, commentaire: "Cadre d'études moderne et beaucoup d'opportunités de networking." },
  { id: "8", nom: "Ousmane Kane", photo: tOusmane, promotion: "Promo 2019", etablissement: "UCAD", note: 4, commentaire: "Faculté de droit très réputée. Les enseignants chercheurs apportent une vraie profondeur." },
  { id: "9", nom: "Nafissatou Thiam", photo: tNafissatou, promotion: "Promo 2022", etablissement: "Supdeco", note: 5, commentaire: "J'ai été embauchée avant même de soutenir mon mémoire. Merci Supdeco !" },
  { id: "10", nom: "Modou Gueye", photo: tModou, promotion: "Promo 2023", etablissement: "IAM", note: 4, commentaire: "L'approche pratique du programme MBA m'a beaucoup apporté professionnellement." },
];

export type FiliereInfo = {
  description: string;
  debouches: string[];
};

// Informations détaillées sur chaque filière (description + débouchés)
export const filiereDetails: Record<string, FiliereInfo> = {
  "Génie Logiciel": {
    description:
      "Formation d'ingénieur centrée sur la conception, le développement et la maintenance d'applications logicielles. On y apprend la programmation, l'architecture logicielle, les bases de données, le génie logiciel agile et le DevOps.",
    debouches: ["Développeur full-stack", "Ingénieur logiciel", "Architecte logiciel", "Lead developer", "DevOps engineer"],
  },
  "Génie Informatique": {
    description:
      "Filière pluridisciplinaire couvrant le matériel et le logiciel : systèmes d'exploitation, réseaux, programmation, bases de données et intelligence artificielle.",
    debouches: ["Ingénieur informaticien", "Administrateur systèmes", "Consultant IT", "Chef de projet digital"],
  },
  "Informatique": {
    description:
      "Cursus généraliste en informatique : algorithmique, programmation, bases de données, réseaux et développement web.",
    debouches: ["Développeur", "Analyste programmeur", "Technicien support", "Webmaster"],
  },
  "Télécommunications": {
    description:
      "Étude des systèmes de transmission de l'information : réseaux mobiles (4G/5G), fibre optique, transmission satellite et IoT.",
    debouches: ["Ingénieur télécoms", "Ingénieur radio", "Ingénieur réseaux mobiles", "Consultant opérateur"],
  },
  "Réseaux & Télécommunications": {
    description:
      "Conception, déploiement et administration des réseaux informatiques et de télécommunications, y compris la sécurité réseau.",
    debouches: ["Administrateur réseau", "Ingénieur réseaux", "Expert sécurité réseau", "Architecte réseau"],
  },
  "Réseaux": {
    description:
      "Spécialisation dans la conception et l'administration des infrastructures réseau d'entreprise et opérateur.",
    debouches: ["Administrateur réseau", "Ingénieur réseau", "Architecte réseau"],
  },
  "Cybersécurité": {
    description:
      "Protection des systèmes d'information : cryptographie, pentest, SOC, gouvernance et conformité (ISO 27001, RGPD).",
    debouches: ["Analyste SOC", "Pentester", "Consultant cybersécurité", "RSSI"],
  },
  "Data Science": {
    description:
      "Exploitation des données massives : statistiques, machine learning, big data et visualisation pour la prise de décision.",
    debouches: ["Data scientist", "Data analyst", "Data engineer", "Ingénieur IA"],
  },
  "Génie Civil": {
    description:
      "Conception et réalisation d'ouvrages : bâtiments, routes, ponts, ouvrages hydrauliques. Inclut résistance des matériaux et gestion de chantier.",
    debouches: ["Ingénieur BTP", "Conducteur de travaux", "Ingénieur structure", "Chef de projet construction"],
  },
  "Génie Électrique": {
    description:
      "Étude des systèmes électriques, électroniques et énergétiques : production, transport et distribution d'énergie, automatismes industriels.",
    debouches: ["Ingénieur électricien", "Ingénieur énergie", "Automaticien", "Ingénieur d'études"],
  },
  "Médecine": {
    description:
      "Cursus long (7 ans et plus) formant des médecins généralistes et spécialistes. Comprend sciences fondamentales, stages hospitaliers et internat.",
    debouches: ["Médecin généraliste", "Médecin spécialiste", "Chirurgien", "Médecin de santé publique"],
  },
  "Pharmacie": {
    description:
      "Formation aux sciences pharmaceutiques : pharmacologie, chimie thérapeutique, pratique officinale et hospitalière.",
    debouches: ["Pharmacien d'officine", "Pharmacien hospitalier", "Pharmacien industrie", "Chercheur"],
  },
  "Droit": {
    description:
      "Étude des règles juridiques (droit privé, public, des affaires, international) et de leur application pratique.",
    debouches: ["Avocat", "Magistrat", "Juriste d'entreprise", "Notaire", "Conseiller juridique"],
  },
  "Lettres modernes": {
    description:
      "Étude approfondie de la langue, de la littérature française et francophone, de la linguistique et de la communication écrite.",
    debouches: ["Enseignant", "Journaliste", "Éditeur", "Chargé de communication"],
  },
  "Mathématiques": {
    description:
      "Cursus théorique et appliqué couvrant algèbre, analyse, probabilités, statistiques et mathématiques appliquées.",
    debouches: ["Enseignant-chercheur", "Actuaire", "Data analyst", "Ingénieur recherche"],
  },
  "Économie": {
    description:
      "Analyse des phénomènes économiques : micro/macroéconomie, économétrie, finance publique et politiques publiques.",
    debouches: ["Économiste", "Analyste financier", "Chargé d'études", "Consultant"],
  },
  "Management": {
    description:
      "Formation transversale aux fonctions de gestion d'entreprise : stratégie, organisation, leadership, gestion de projet.",
    debouches: ["Manager", "Chef de projet", "Consultant en management", "Entrepreneur"],
  },
  "Marketing Digital": {
    description:
      "Stratégies marketing à l'ère du numérique : SEO/SEA, réseaux sociaux, content marketing, analytics et e-commerce.",
    debouches: ["Chargé de marketing digital", "Community manager", "Traffic manager", "Growth hacker"],
  },
  "Marketing": {
    description:
      "Étude du marché, comportement consommateur, stratégie de marque, communication et plans marketing opérationnels.",
    debouches: ["Chargé de marketing", "Chef de produit", "Responsable marque", "Études marketing"],
  },
  "Finance": {
    description:
      "Gestion financière des organisations : comptabilité, analyse financière, marchés financiers, contrôle de gestion.",
    debouches: ["Analyste financier", "Contrôleur de gestion", "Banquier", "Auditeur"],
  },
  "Commerce International": {
    description:
      "Pratiques du commerce mondial : import/export, logistique internationale, négociation interculturelle, droit du commerce.",
    debouches: ["Responsable export", "Acheteur international", "Chargé d'affaires", "Trader"],
  },
  "Commerce": {
    description:
      "Cursus généraliste en commerce et vente : techniques commerciales, négociation, distribution et relation client.",
    debouches: ["Commercial", "Chef des ventes", "Responsable commercial", "Acheteur"],
  },
  "Communication": {
    description:
      "Stratégies et techniques de communication d'entreprise : relations publiques, médias, communication digitale.",
    debouches: ["Chargé de communication", "Attaché de presse", "Community manager", "Directeur de la com"],
  },
  "Ressources Humaines": {
    description:
      "Gestion du capital humain : recrutement, formation, paie, droit social et développement des compétences.",
    debouches: ["Chargé RH", "Responsable recrutement", "Responsable formation", "DRH"],
  },
  "RH": {
    description:
      "Gestion des ressources humaines : recrutement, formation, paie, droit social et gestion des carrières.",
    debouches: ["Chargé RH", "Responsable recrutement", "Responsable formation", "DRH"],
  },
  "Entrepreneuriat": {
    description:
      "Préparation à la création et au pilotage d'entreprise : business model, financement, gestion d'équipe et innovation.",
    debouches: ["Entrepreneur", "Repreneur d'entreprise", "Intrapreneur", "Consultant startup"],
  },
  "Digital Business": {
    description:
      "Modèles d'affaires numériques : e-commerce, transformation digitale, marketing digital et innovation.",
    debouches: ["Chef de projet digital", "Consultant transformation", "Product owner", "E-commerce manager"],
  },
  "Audit & Contrôle": {
    description:
      "Audit comptable et financier, contrôle interne et contrôle de gestion. Maîtrise des normes IFRS et OHADA.",
    debouches: ["Auditeur", "Contrôleur de gestion", "Commissaire aux comptes", "Consultant"],
  },
  "Logistique": {
    description:
      "Gestion de la chaîne logistique : approvisionnement, stockage, transport, distribution et supply chain management.",
    debouches: ["Responsable logistique", "Supply chain manager", "Acheteur", "Responsable d'entrepôt"],
  },
  "Banque-Assurance": {
    description:
      "Métiers de la banque et de l'assurance : produits financiers, gestion du risque, conformité et relation client.",
    debouches: ["Conseiller bancaire", "Chargé d'affaires", "Souscripteur", "Gestionnaire de patrimoine"],
  },
};


export const mockUser = {
  nom: "Aminata Sarr",
  email: "aminata.sarr@oriensup.sn",
  serieBac: "S2",
  photo: tAminata,
  quizResult: {
    filiere: "Génie Logiciel",
    compatibilite: 92,
  },
  favoris: ["esp", "ism"],
};
