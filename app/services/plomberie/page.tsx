import ServicePage from '@/components/ServicePage';
import { generateServiceMetadata } from '@/lib/service-metadata';
import { Metadata } from 'next';

// Configuration de la page plomberie
const plomberieConfig = {
  // SEO et métadonnées
  title: "Plomberie PACA - Aix-en-Provence",
  description: "AYA PRO, services de plomberie professionnels en région PACA. Installation, réparation, dépannage urgent. Devis gratuit et intervention rapide.",
  keywords: [
    "plomberie PACA",
    "plombier Aix-en-Provence",
    "dépannage plomberie",
    "installation sanitaire",
    "réparation fuite",
    "plomberie urgence",
    "devis plomberie gratuit",
    "entrepreneur plombier",
    "travaux plomberie"
  ],
  
  // Contenu principal
  serviceName: "Plomberie",
  heroImage: "/plomberie.png",
  heroTitle: "Services de Plomberie Professionnels",
  heroSubtitle: "Installation, réparation et dépannage de tous vos équipements de plomberie en région PACA. Intervention rapide et devis gratuit.",
  
  // Secteur d'activité
  sector: "BTP - Plomberie",
  location: "PACA",
  
  // Contenu détaillé
  mainDescription: "AYA PRO vous propose ses services de plomberie dans toute la région PACA. Fort de plusieurs années d'expérience dans le secteur du BTP, nous intervenons pour tous vos travaux de plomberie, de l'installation neuve au dépannage d'urgence. Notre expertise couvre l'ensemble des équipements sanitaires et de chauffage pour particuliers et professionnels.",
  
  // Sous-prestations
  subServices: [
    {
      title: "Installation sanitaire",
      description: "Pose de lavabos, éviers, WC, douches, baignoires et tous équipements sanitaires"
    },
    {
      title: "Réparation de fuites",
      description: "Détection et réparation de fuites d'eau, joints défaillants, robinetterie"
    },
    {
      title: "Dépannage d'urgence",
      description: "Intervention rapide 7j/7 pour tous problèmes de plomberie urgents"
    },
    {
      title: "Installation chauffe-eau",
      description: "Pose et remplacement de chauffe-eau électrique, gaz ou thermodynamique"
    },
    {
      title: "Canalisation",
      description: "Installation, réparation et débouchage de canalisations et évacuations"
    },
    {
      title: "Robinetterie",
      description: "Installation et réparation de robinets, mitigeurs, vannes d'arrêt"
    }
  ],
  
  // Avantages/Points forts
  advantages: [
    "Intervention rapide sous 24h",
    "Devis gratuit et personnalisé",
    "Matériaux de qualité professionnelle",
    "Garantie sur tous les travaux",
    "Tarification transparente",
    "Artisan expérimenté et qualifié",
    "Respect des normes en vigueur",
    "Service après-vente assuré",
    "Estimation gratuite et sans engagement",
    "Conseil personnalisé"
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
  plomberieConfig.serviceName,
  plomberieConfig.location,
  plomberieConfig.description,
  plomberieConfig.keywords
);

export default function PlomberiePage() {
  return <ServicePage {...plomberieConfig} />;
}
