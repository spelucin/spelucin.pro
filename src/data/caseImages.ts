import type { ImageMetadata } from 'astro';

import torices2 from '../assets/portfolio/dashboard_torices-2.jpg';
import torices3 from '../assets/portfolio/dashboard_torices-3.jpg';
import torices7 from '../assets/portfolio/dashboard_torices-7.jpg';
import torices9 from '../assets/portfolio/dashboard_torices-9.jpg';
import torices12 from '../assets/portfolio/dashboard_torices-12.jpg';

import owlbox1 from '../assets/portfolio/ecommerce_owlbox-1.jpg';
import owlbox4 from '../assets/portfolio/ecommerce_owlbox-4.jpg';
import owlbox6 from '../assets/portfolio/ecommerce_owlbox-6.jpg';
import owlbox9 from '../assets/portfolio/ecommerce_owlbox-9.jpg';

import notebook1 from '../assets/portfolio/notebook_seo-1.jpg';
import notebook2 from '../assets/portfolio/notebook_seo-2.jpg';
import notebook7 from '../assets/portfolio/notebook_seo-7.jpg';
import notebook8 from '../assets/portfolio/notebook_seo-8.jpg';
import notebook14 from '../assets/portfolio/notebook_seo-14.jpg';
import notebook18 from '../assets/portfolio/notebook_seo-18.jpg';

export type CaseImage = ImageMetadata;

export const caseImages: Record<'torices' | 'owlbox' | 'notebook', CaseImage[]> = {
  torices: [torices2, torices3, torices7, torices9, torices12],
  owlbox: [owlbox1, owlbox4, owlbox6, owlbox9],
  notebook: [notebook1, notebook2, notebook7, notebook8, notebook14, notebook18],
};