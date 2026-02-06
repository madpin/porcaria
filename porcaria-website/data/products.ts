import { Product } from '@/lib/types';

export const products: Product[] = [
  // Bacon Artesanal
  {
    id: 'bacon-tradicional',
    name: 'Bacon Tradicional',
    category: 'bacon',
    description: 'Bacon curado de forma artesanal, com tempero tradicional italiano da família de José. Ideal para café da manhã ou para dar sabor aos seus pratos favoritos.',
    weight: '300g',
    badges: ['Artesanal', 'Sem Conservantes'],
    image: '/images/products.png',
  },
  {
    id: 'bacon-defumado',
    name: 'Bacon Defumado',
    category: 'bacon',
    description: 'Bacon curado e levemente defumado, com aroma irresistível e sabor intenso. Perfeito para adicionar profundidade aos seus pratos.',
    weight: '300g',
    badges: ['Artesanal', 'Defumado'],
    image: '/images/hero-2.png',
  },
  {
    id: 'bacon-ervas',
    name: 'Bacon com Ervas',
    category: 'bacon',
    description: 'Bacon temperado com alecrim, tomilho e alho. Perfeito para os amantes de sabores marcantes e aromáticos.',
    weight: '300g',
    badges: ['Artesanal', 'Produção Local'],
    image: '/images/hero-1.png',
  },

  // Carnes Curadas
  {
    id: 'pancetta',
    name: 'Pancetta Artesanal',
    category: 'carnes',
    description: 'Barriga de porco curada com sal marinho e especiarias tradicionais italianas. Versátil e saborosa, perfeita para massas e risotos italianos.',
    weight: '400g',
    badges: ['Artesanal', 'Sem Conservantes'],
    image: '/images/products.png',
  },
  {
    id: 'lombo-curado',
    name: 'Lombo Curado',
    category: 'carnes',
    description: 'Lombo de porco curado lentamente, macio e suculento. Um clássico da charcutaria italiana trazido por José.',
    weight: '350g',
    badges: ['Artesanal', 'Produção Local'],
    image: '/images/hero-1.png',
  },
  {
    id: 'paio',
    name: 'Paio Tradicional',
    category: 'carnes',
    description: 'Enchido tradicional italiano, feito com carne de porco temperada e fumada seguindo receitas ancestrais. Sabor autêntico e inconfundível.',
    weight: '250g',
    badges: ['Tradicional', 'Defumado'],
    image: '/images/hero-2.png',
  },

  // Especialidades
  {
    id: 'toucinho',
    name: 'Toucinho Fumado',
    category: 'especialidades',
    description: 'Toucinho curado e fumado de forma tradicional italiana, ideal para sopas, feijões e receitas tradicionais.',
    weight: '500g',
    badges: ['Artesanal', 'Defumado'],
    image: '/images/products.png',
  },
  {
    id: 'presunto',
    name: 'Presunto Artesanal',
    category: 'especialidades',
    description: 'Presunto curado de forma tradicional italiana, com sabor único e textura delicada. Uma iguaria inspirada nas receitas da família de José.',
    weight: '200g',
    badges: ['Artesanal', 'Premium'],
    image: '/images/hero-1.png',
  },
];

export const featuredProducts = products.slice(0, 3);

export const productsByCategory = {
  bacon: products.filter(p => p.category === 'bacon'),
  carnes: products.filter(p => p.category === 'carnes'),
  especialidades: products.filter(p => p.category === 'especialidades'),
};
