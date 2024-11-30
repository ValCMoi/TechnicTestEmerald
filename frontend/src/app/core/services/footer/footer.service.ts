import { Injectable } from '@angular/core';
import { GroupLink } from '../../models/links';

@Injectable({
  providedIn: 'root',
})
export class FooterService {
  private footerGroupLink: GroupLink[] = [
    {
      label: 'Destinations',
      links: [
        {
          label: 'Morzine',
          url: 'emeraldstay.com/morzine/rental-accommodation',
        },
        {
          label: 'Chamonix',
          url: 'emeraldstay.com/chamonix/rental-accommodation',
        },
        {
          label: 'Les Gets',
          url: 'emeraldstay.com/les-gets/rental-accommodation',
        },
        {
          label: "Alpe d'Huez",
          url: 'emeraldstay.com/alpe-dhuez/rental-accommodation',
        },
        {
          label: 'Courchevel',
          url: 'emeraldstay.com/courchevel/rental-accommodation',
        },
        {
          label: 'Megeve',
          url: 'emeraldstay.com/megeve/rental-accommodation',
        },
        {
          label: 'Meribel',
          url: 'emeraldstay.com/meribel/rental-accommodation',
        },
        {
          label: "Les Carroz d'Araches",
          url: 'emeraldstay.com/les-carroz-d-araches/rental-accommodation',
        },
        {
          label: 'Saint-Gervais',
          url: 'emeraldstay.com/saint-gervais/rental-accommodation',
        },
        {
          label: 'Saint-Martin-de-Belleville',
          url: 'emeraldstay.com/saint-martin-de-belleville/rental-accommodation',
        },
        {
          label: 'Baqueira Beret',
          url: 'emeraldstay.com/baqueira-beret/rental-accommodation',
        },
        {
          label: 'Chatel',
          url: 'emeraldstay.com/chatel/rental-accommodation',
        },
        {
          label: 'Combloux',
          url: 'emeraldstay.com/combloux/rental-accommodation',
        },
        {
          label: 'Les Arcs',
          url: 'emeraldstay.com/les-arcs/rental-accommodation',
        },
        {
          label: 'La Plagne',
          url: 'emeraldstay.com/la-plagne/rental-accommodation',
        },
        {
          label: 'Peisey-Vallandry',
          url: 'emeraldstay.com/peisey-vallandry/rental-accommodation',
        },
        {
          label: 'Tignes',
          url: 'emeraldstay.com/tignes/rental-accommodation',
        },
        {
          label: "Val d'Isere",
          url: 'emeraldstay.com/val-d-isere/rental-accommodation',
        },
        {
          label: 'La Clusaz',
          url: 'emeraldstay.com/la-clusaz/rental-accommodation',
        },
        {
          label: 'Samoëns',
          url: 'emeraldstay.com/samoens/rental-accommodation',
        },
        {
          label: 'Les Saisies',
          url: 'emeraldstay.com/les-saisies/rental-accommodation',
        },
        {
          label: 'Flaine',
          url: 'emeraldstay.com/flaine/rental-accommodation',
        },
        {
          label: 'Verbier',
          url: 'emeraldstay.com/verbier/rental-accommodation',
        },
        {
          label: 'Mallorca',
          url: 'emeraldstay.com/mallorca/rental-accommodation',
        },
        {
          label: 'Costa Brava',
          url: 'emeraldstay.com/costa-brava/rental-accommodation',
        },
        {
          label: 'Ibiza',
          url: 'emeraldstay.com/ibiza/rental-accommodation',
        },
        {
          label: 'Marrakech',
          url: 'emeraldstay.com/marrakech',
        },
      ],
    },
    {
      label: 'GUESTS',
      links: [
        {
          label: 'Corporate events',
          url: 'emeraldstay.com/corporate-events',
        },
        {
          label: 'Blog',
          url: 'emeraldstay.com/blog',
        },
        {
          label: 'Faq',
          url: 'emeraldstay.com/faq',
        },
      ],
    },
    {
      label: 'OWNERS',
      links: [
        {
          label: 'Property management',
          url: 'emeraldstay.com/lease-your-property',
        },
        {
          label: 'Owner dashboard',
          url: 'emeraldstay.com/',
        },
        {
          label: 'Get an estimate',
          url: 'emeraldstay.com/lease-your-property/rental-proposal/',
        },
      ],
    },
    {
      label: 'About us',
      links: [
        {
          label: 'About us',
          url: 'emeraldstay.com/about-us',
        },
        {
          label: 'Our team',
          url: 'emeraldstay.com/our-team',
        },
        {
          label: 'Careers',
          url: 'emeraldstay.com/careers',
        },
        {
          label: 'Contact',
          url: 'emeraldstay.com/contact-us',
        },
        {
          label: 'Safety measures',
          url: 'emeraldstay.com/safety-measures',
        },
        {
          label: 'Privacy Policy',
          url: 'emeraldstay.com/privacy-policy',
        },
        {
          label: 'Terms and conditions',
          url: 'emeraldstay.com/terms-and-conditions',
        },
        {
          label: 'Sitemap',
          url: 'emeraldstay.com/sitemap',
        },
      ],
    },
  ];

  getFooterGroupLink(): GroupLink[] {
    return this.footerGroupLink;
  }
}
