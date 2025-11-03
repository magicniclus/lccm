import ServicePage from '@/components/ServicePage';
import { generateServiceMetadata } from '@/lib/service-metadata';
import { Metadata } from 'next';

// Configuration de la page salle de bain
const salleDeBainConfig = {
  // SEO et métadonnées
  title: "Rénovation Salle de Bain PACA - Aix-en-Provence",
  description: "AYA PRO, spécialiste rénovation salle de bain en région PACA. Création, aménagement, carrelage, plomberie. Devis gratuit et réalisation clé en main.",
  keywords: [
    "rénovation salle de bain PACA",
    "salle de bain Aix-en-Provence",
    "carrelage salle de bain",
    "aménagement salle de bain",
    "douche italienne",
    "rénovation sanitaire",
    "entrepreneur salle de bain",
    "devis salle de bain gratuit",
    "travaux salle de bain"
  ],
  
  // Contenu principal
  serviceName: "Rénovation Salle de Bain",
  heroImage: "/maison-work.png",
  heroTitle: "Rénovation de Salle de Bain sur Mesure",
  heroSubtitle: "Création et rénovation complète de salles de bain en région PACA. Du design à la réalisation, nous vous accompagnons dans votre projet.",
  
  // Secteur d'activité
  sector: "BTP - Rénovation Sanitaire",
  location: "PACA",
  
  // Contenu détaillé
  mainDescription: "AYA PRO, spécialiste de la rénovation de salle de bain en région PACA, vous accompagne dans la transformation de votre espace sanitaire. Que vous souhaitiez moderniser une salle de bain existante ou créer un nouvel espace, nous vous proposons une prestation complète incluant la conception, la plomberie, le carrelage et les finitions. Notre expertise dans le secteur du BTP nous permet de réaliser des projets sur mesure, alliant fonctionnalité et esthétique.",
  
  // Sous-prestations
  subServices: [
    {
      title: "Conception et design",
      description: "Étude de votre projet, plans 3D, conseils en aménagement et choix des matériaux"
    },
    {
      title: "Plomberie sanitaire",
      description: "Installation complète de la plomberie, évacuations, arrivées d'eau"
    },
    {
      title: "Carrelage et faïence",
      description: "Pose de carrelage au sol et mural, faïence, mosaïque, étanchéité"
    },
    {
      title: "Installation sanitaires",
      description: "Pose de douche, baignoire, WC, lavabo, meuble vasque"
    },
    {
      title: "Douche à l'italienne",
      description: "Création de douche plain-pied, receveur extra-plat, paroi vitrée"
    },
    {
      title: "Finitions",
      description: "Peinture, éclairage, miroirs, accessoires, ventilation"
    }
  ],
  
  // Avantages/Points forts
  advantages: [
    "Projet clé en main de A à Z",
    "Devis gratuit et personnalisé",
    "Matériaux haut de gamme",
    "Respect des délais convenus",
    "Garantie sur tous les travaux",
    "Conseils personnalisés et suivi",
    "Finitions soignées et durables",
    "Suivi post-travaux assuré",
    "Tarification transparente",
    "Estimation gratuite et sans engagement"
  ],
  
  // Zone d'intervention
  serviceArea: [
    "Aix-en-Provence",
    "Région PACA",
    "Bouches-du-Rhône",
    "Marseille",
    "Salon-de-Provence",
    "Gardanne",
    "Vitrolles",
    "50 km autour d'Aix"
  ],
  
  // Informations de contact
  contactInfo: {
    phone: "06 68 92 45 79",
    email: "mraihi_7777@yahoo.com",
    address: "Aix-en-Provence, PACA"
  },
  
};

// Génération des métadonnées SEO
export const metadata: Metadata = generateServiceMetadata(
  salleDeBainConfig.serviceName,
  salleDeBainConfig.location,
  salleDeBainConfig.description,
  salleDeBainConfig.keywords
);

export default function SalleDeBainPage() {
  return <ServicePage {...salleDeBainConfig} />;
}
