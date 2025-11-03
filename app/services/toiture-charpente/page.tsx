import ServicePage from '@/components/ServicePage';
import { generateServiceMetadata } from '@/lib/service-metadata';
import { Metadata } from 'next';

// Configuration de la page toiture et charpente
const toitureCharpente = {
  // SEO et métadonnées
  title: "Toiture & Charpente PACA - Aix-en-Provence",
  description: "AYA PRO, spécialiste travaux de toiture et charpente en région PACA. Réfection, réparation, entretien. Devis gratuit et personnalisé.",
  keywords: [
    "toiture PACA",
    "charpente Aix-en-Provence",
    "réfection toiture",
    "réparation charpente",
    "devis toiture gratuit",
    "couverture PACA",
    "entrepreneur toiture",
    "travaux charpente",
    "entretien toiture"
  ],
  
  // Contenu principal
  serviceName: "Toiture & Charpente",
  heroImage: "/mur.png",
  heroTitle: "Travaux de Toiture et Charpente",
  heroSubtitle: "Expertise en toiture et charpente en région PACA. Réfection, réparation et entretien avec devis gratuit et personnalisé.",
  
  // Secteur d'activité
  sector: "BTP - Toiture & Charpente",
  location: "PACA",
  
  // Contenu détaillé
  mainDescription: "AYA PRO, entrepreneur spécialisé en travaux de toiture et charpente en région PACA, vous accompagne dans tous vos projets de couverture. Que vous souhaitiez rénover votre toiture, réparer votre charpente ou effectuer un entretien préventif, nous vous proposons une prestation complète avec des matériaux de qualité. Notre expertise dans le secteur du BTP nous permet de diagnostiquer précisément l'état de votre couverture et de vous proposer les solutions adaptées.",
  
  // Sous-prestations
  subServices: [
    {
      title: "Réfection de toiture",
      description: "Remplacement complet de la couverture : tuiles, ardoises, zinc selon vos besoins"
    },
    {
      title: "Réparation charpente",
      description: "Traitement et réparation des éléments de charpente endommagés ou vieillissants"
    },
    {
      title: "Étanchéité toiture",
      description: "Mise en œuvre de l'étanchéité pour toitures terrasses et toitures plates"
    },
    {
      title: "Isolation sous toiture",
      description: "Amélioration de l'isolation thermique et phonique de votre habitation"
    },
    {
      title: "Gouttières et évacuation",
      description: "Installation et réparation de gouttières, chéneaux et systèmes d'évacuation"
    },
    {
      title: "Traitement préventif",
      description: "Traitement anti-parasites et protection du bois contre les insectes et l'humidité"
    },
    {
      title: "Diagnostic toiture",
      description: "Inspection complète et diagnostic de l'état de votre toiture et charpente"
    },
    {
      title: "Entretien régulier",
      description: "Maintenance préventive pour prolonger la durée de vie de votre couverture"
    }
  ],
  
  // Avantages/Points forts
  advantages: [
    "Expertise professionnelle certifiée",
    "Matériaux de qualité supérieure",
    "Respect des normes de sécurité",
    "Diagnostic précis et détaillé",
    "Devis gratuit et personnalisé",
    "Intervention rapide en urgence",
    "Garantie décennale sur les travaux",
    "Conseil technique personnalisé",
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
  toitureCharpente.serviceName,
  toitureCharpente.location,
  toitureCharpente.description,
  toitureCharpente.keywords
);

export default function ToitureCharpentePage() {
  return <ServicePage {...toitureCharpente} />;
}
