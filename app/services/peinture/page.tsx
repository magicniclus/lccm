import ServicePage from '@/components/ServicePage';
import { generateServiceMetadata } from '@/lib/service-metadata';
import { Metadata } from 'next';

// Configuration de la page peinture
const peintureConfig = {
  // SEO et métadonnées
  title: "Peinture PACA - Aix-en-Provence",
  description: "AYA PRO, spécialiste travaux de peinture en région PACA. Peinture intérieure et extérieure. Devis gratuit et personnalisé pour tous vos projets.",
  keywords: [
    "peinture PACA",
    "peintre Aix-en-Provence",
    "peinture intérieure",
    "peinture extérieure",
    "devis peinture gratuit",
    "travaux peinture PACA",
    "entrepreneur peintre",
    "peinture façade",
    "rénovation peinture"
  ],
  
  // Contenu principal
  serviceName: "Peinture",
  heroImage: "/plomberie.png",
  heroTitle: "Travaux de Peinture Professionnels",
  heroSubtitle: "Peinture intérieure et extérieure en région PACA. Application professionnelle avec devis gratuit et personnalisé.",
  
  // Secteur d'activité
  sector: "BTP - Peinture",
  location: "PACA",
  
  // Contenu détaillé
  mainDescription: "AYA PRO, entrepreneur spécialisé en travaux de peinture en région PACA, vous accompagne dans tous vos projets de peinture intérieure et extérieure. Que vous souhaitiez rafraîchir vos murs, rénover votre façade ou créer une ambiance personnalisée, nous vous proposons une prestation complète avec des finitions soignées. Notre expertise dans le secteur du BTP nous permet de vous conseiller sur le choix des couleurs et des finitions adaptées à vos besoins.",
  
  // Sous-prestations
  subServices: [
    {
      title: "Peinture intérieure",
      description: "Peinture de murs, plafonds, boiseries pour toutes les pièces de votre habitation"
    },
    {
      title: "Peinture extérieure",
      description: "Ravalement de façade, peinture de volets, portails et éléments extérieurs"
    },
    {
      title: "Préparation des supports",
      description: "Ponçage, rebouchage, lessivage et préparation minutieuse des surfaces"
    },
    {
      title: "Peinture décorative",
      description: "Effets décoratifs, patines, enduits à la chaux pour personnaliser vos espaces"
    },
    {
      title: "Peinture de rénovation",
      description: "Remise en état de peintures anciennes, traitement des fissures et défauts"
    },
    {
      title: "Conseil couleurs",
      description: "Aide au choix des couleurs et harmonies pour créer l'ambiance souhaitée"
    },
    {
      title: "Finitions spéciales",
      description: "Peintures spécialisées : anti-humidité, lessivable, écologique"
    },
    {
      title: "Protection des surfaces",
      description: "Bâchage soigné et protection de vos meubles et sols pendant les travaux"
    }
  ],
  
  // Avantages/Points forts
  advantages: [
    "Application professionnelle garantie",
    "Matériaux de qualité supérieure",
    "Finitions parfaites et durables",
    "Conseil personnalisé en couleurs",
    "Devis gratuit et personnalisé",
    "Respect des délais convenus",
    "Protection soignée de vos biens",
    "Garantie sur tous les travaux",
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
  }
  
  // Pas de section pricing selon les instructions
};

// Génération des métadonnées SEO
export const metadata: Metadata = generateServiceMetadata(
  peintureConfig.serviceName,
  peintureConfig.location,
  peintureConfig.description,
  peintureConfig.keywords
);

export default function PeinturePage() {
  return <ServicePage {...peintureConfig} />;
}
