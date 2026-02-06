import { Award, Leaf, Heart } from 'lucide-react';
import { siteContent } from '@/data/content';
import Card from '@/components/ui/Card';

const iconMap = {
  Award,
  Leaf,
  Heart,
};

export default function Features() {
  return (
    <section className="section-padding bg-primary-50">
      <div className="section-container">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {siteContent.home.features.map((feature, index) => {
            const Icon = iconMap[feature.icon as keyof typeof iconMap];

            return (
              <Card key={index} className="p-8 text-center hover:-translate-y-2 transition-transform duration-300">
                <div className="flex justify-center mb-4">
                  <div className="w-16 h-16 rounded-full bg-accent-100 flex items-center justify-center">
                    <Icon className="w-8 h-8 text-accent-500" />
                  </div>
                </div>
                <h3 className="text-2xl font-serif font-bold text-primary-800 mb-3">
                  {feature.title}
                </h3>
                <p className="text-primary-600 leading-relaxed">
                  {feature.description}
                </p>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
