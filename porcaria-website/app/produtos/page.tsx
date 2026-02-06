import type { Metadata } from 'next';
import Image from 'next/image';
import { siteContent } from '@/data/content';
import { productsByCategory } from '@/data/products';
import ProductGrid from '@/components/products/ProductGrid';

export const metadata: Metadata = {
  title: 'Produtos',
  description: 'Explore nossa seleção de bacon e carnes artesanais no Cambuci, São Paulo. Produtos curados seguindo a tradição italiana de José, sem conservantes.',
};

export default function ProductsPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative h-96 flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/products.png"
            alt="Produtos Porca-Ria"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-primary-900/60" />
        </div>
        <div className="relative z-10 section-container text-center">
          <h1 className="text-5xl md:text-6xl font-serif font-bold text-white mb-4 drop-shadow-lg">
            {siteContent.products.title}
          </h1>
          <p className="text-xl text-primary-50 max-w-2xl mx-auto">
            {siteContent.products.subtitle}
          </p>
        </div>
      </section>

      {/* Bacon Section */}
      <section className="section-padding">
        <div className="section-container">
          <div className="mb-12">
            <h2 className="text-4xl font-serif font-bold text-primary-800 mb-4">
              {siteContent.products.categories.bacon.title}
            </h2>
            <p className="text-xl text-primary-600 max-w-3xl">
              {siteContent.products.categories.bacon.description}
            </p>
          </div>
          <ProductGrid products={productsByCategory.bacon} />
        </div>
      </section>

      {/* Divider */}
      <div className="h-px bg-gradient-to-r from-transparent via-primary-300 to-transparent" />

      {/* Carnes Curadas Section */}
      <section className="section-padding bg-primary-50">
        <div className="section-container">
          <div className="mb-12">
            <h2 className="text-4xl font-serif font-bold text-primary-800 mb-4">
              {siteContent.products.categories.carnes.title}
            </h2>
            <p className="text-xl text-primary-600 max-w-3xl">
              {siteContent.products.categories.carnes.description}
            </p>
          </div>
          <ProductGrid products={productsByCategory.carnes} />
        </div>
      </section>

      {/* Divider */}
      <div className="h-px bg-gradient-to-r from-transparent via-primary-300 to-transparent" />

      {/* Especialidades Section */}
      <section className="section-padding">
        <div className="section-container">
          <div className="mb-12">
            <h2 className="text-4xl font-serif font-bold text-primary-800 mb-4">
              {siteContent.products.categories.especialidades.title}
            </h2>
            <p className="text-xl text-primary-600 max-w-3xl">
              {siteContent.products.categories.especialidades.description}
            </p>
          </div>
          <ProductGrid products={productsByCategory.especialidades} />
        </div>
      </section>
    </>
  );
}
