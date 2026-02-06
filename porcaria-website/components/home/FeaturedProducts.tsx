import Image from 'next/image';
import { featuredProducts } from '@/data/products';
import { siteContent } from '@/data/content';
import Card from '@/components/ui/Card';
import Button from '@/components/ui/Button';

export default function FeaturedProducts() {
  return (
    <section className="section-padding">
      <div className="section-container">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-primary-800 mb-4">
            {siteContent.home.productsSection.title}
          </h2>
          <p className="text-xl text-primary-600 max-w-2xl mx-auto">
            {siteContent.home.productsSection.subtitle}
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {featuredProducts.map((product) => (
            <Card key={product.id}>
              <div className="relative h-64 overflow-hidden">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-cover hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-serif font-bold text-primary-800 mb-2">
                  {product.name}
                </h3>
                <p className="text-primary-600 mb-4 line-clamp-2">
                  {product.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {product.badges.map((badge, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 bg-accent-100 text-accent-700 text-sm font-medium rounded-full"
                    >
                      {badge}
                    </span>
                  ))}
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <Button href="/produtos" variant="secondary" className="text-lg">
            {siteContent.home.productsSection.cta}
          </Button>
        </div>
      </div>
    </section>
  );
}
