import { GlimmerRoute } from '@ash-js/glimmer-router';

export default function getRoutes(element) {
  return [
    new GlimmerRoute('about', element, () => import('./pages/About.gjs')),
    new GlimmerRoute('contact', element, () => import('./pages/Contact.gjs')),
    new GlimmerRoute('*', element, () => import('./pages/Home.gjs')),
  ];
}
