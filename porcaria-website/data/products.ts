import { Product } from '@/lib/types';

export const products: Product[] = [
  {
    id: 'bacon-artesanal',
    name: 'Bacon Artesanal',
    category: 'bacon',
    description: 'O verdadeiro sabor da fazenda na sua mesa. Nosso bacon é feito com muito amor e um diferencial importante: zero conservantes. É um produto natural, pensado para levar o cuidado da nossa família diretamente para a sua. Já disponível para pronta entrega!',
    weight: '300g',
    badges: ['Artesanal', 'Sem Conservantes', 'Pronta Entrega'],
    image: '/images/cured_pork_product_showcase.png',
  },
  {
    id: 'leitao-do-ze',
    name: 'O Famoso Leitão do Zé',
    category: 'especialidades',
    description: 'Quer surpreender em um evento ou jantar especial? A técnica exclusiva de assar o leitão inteiro e de pé está disponível sob encomenda. Consulte nossos prazos e garanta essa experiência única.',
    weight: 'Sob encomenda',
    badges: ['Exclusivo', 'Sob Encomenda'],
    image: '/images/leitao_roasted_centerpiece.png',
  },
];

export const featuredProducts = products;

export const productsByCategory = {
  bacon: products.filter(p => p.category === 'bacon'),
  carnes: products.filter(p => p.category === 'carnes'),
  especialidades: products.filter(p => p.category === 'especialidades'),
};
