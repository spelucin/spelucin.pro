import type { ImageMetadata } from 'astro';

import owlbox1 from '../assets/portfolio/ecommerce_owlbox-1.jpg';
import owlbox4 from '../assets/portfolio/ecommerce_owlbox-4.jpg';
import owlbox6 from '../assets/portfolio/ecommerce_owlbox-6.jpg';
import owlbox9 from '../assets/portfolio/ecommerce_owlbox-9.jpg';

export type CaseImage = ImageMetadata;

export const caseImages: Record<'owlbox', CaseImage[]> = {
  owlbox: [owlbox1, owlbox4, owlbox6, owlbox9],
};
