import { getPermalink } from './utils/permalinks';

const WHATSAPP_NUMBER = '919344095727';
const whatsappLink = (message: string) => `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;

export const headerData = {
  links: [
    {
      text: 'Features',
      href: getPermalink('/#features'),
    },
    {
      text: 'How it Works',
      href: getPermalink('/#how-it-works'),
    },
    {
      text: 'Pricing',
      href: getPermalink('/#pricing'),
    },
    {
      text: 'FAQs',
      href: getPermalink('/#faqs'),
    },
    {
      text: 'Contact',
      href: getPermalink('/contact'),
    },
  ],
  actions: [
    {
      text: 'Get Pricing on WhatsApp',
      href: whatsappLink('Hi, I want salon booking app pricing for my city'),
      target: '_blank',
      icon: 'tabler:brand-whatsapp',
    },
  ],
};

export const footerData = {
  links: [
    {
      title: 'Product',
      links: [
        { text: 'Features', href: getPermalink('/#features') },
        { text: 'How it Works', href: getPermalink('/#how-it-works') },
        { text: 'Pricing', href: getPermalink('/#pricing') },
        { text: 'FAQs', href: getPermalink('/#faqs') },
      ],
    },
    {
      title: 'Company',
      links: [
        { text: 'About BuildMyWeb', href: getPermalink('/about') },
        { text: 'Services', href: getPermalink('/services') },
        { text: 'Contact', href: getPermalink('/contact') },
      ],
    },
    {
      title: 'Get in Touch',
      links: [
        { text: 'buildmyweb2024@gmail.com', href: 'mailto:buildmyweb2024@gmail.com' },
        { text: '+91 93440 95727', href: 'tel:+919344095727' },
        { text: 'www.buildmyweb.info', href: 'https://www.buildmyweb.info' },
      ],
    },
  ],
  secondaryLinks: [
    { text: 'Terms', href: getPermalink('/terms') },
    { text: 'Privacy Policy', href: getPermalink('/privacy') },
  ],
  socialLinks: [
    { ariaLabel: 'WhatsApp', icon: 'tabler:brand-whatsapp', href: whatsappLink('Hi, I want salon booking app pricing for my city') },
    { ariaLabel: 'Instagram', icon: 'tabler:brand-instagram', href: '#' },
    { ariaLabel: 'Facebook', icon: 'tabler:brand-facebook', href: '#' },
  ],
  footNote: `
    Built by <a class="text-blue-600 underline dark:text-muted font-semibold" target="_blank" href="https://www.buildmyweb.info">BuildMyWeb</a> · All rights reserved.
  `,
};
