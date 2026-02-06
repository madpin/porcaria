import Image from 'next/image';
import { Product } from '@/lib/types';
import Card from '@/components/ui/Card';

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  return (
    <Card className="h-full flex flex-col">
      {/* Image */}
      <div className="relative h-64 overflow-hidden">
        <Image
          src={product.image}
          alt={product.name}
          fill
          className="object-cover hover:scale-110 transition-transform duration-500"
        />
      </div>

      {/* Content */}
      <div className="p-6 flex-grow flex flex-col">
        <h3 className="text-2xl font-serif font-bold text-primary-800 mb-2">
          {product.name}
        </h3>
        <p className="text-primary-600 mb-4 flex-grow leading-relaxed">
          {product.description}
        </p>

        {/* Weight */}
        <p className="text-sm font-medium text-primary-700 mb-3">
          Peso: {product.weight}
        </p>

        {/* Badges */}
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
  );
}
