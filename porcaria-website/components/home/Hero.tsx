import Image from 'next/image';
import { siteContent } from '@/data/content';
import Button from '@/components/ui/Button';

export default function Hero() {
  return (
    <section className="relative h-[600px] md:h-[700px] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/rustic_still_life_pig_bread_bacon.png"
          alt="Porca-Ria: mesa rústica com bacon, pão e mostarda"
          fill
          className="object-cover"
          priority
        />
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-primary-900/70 via-primary-900/60 to-primary-900/70" />
      </div>

      {/* Content */}
      <div className="relative z-10 section-container text-center">
        <div className="max-w-4xl mx-auto">
          {/* Logo */}
          <div className="mb-8 flex justify-center">
            <div className="relative w-40 h-40 md:w-48 md:h-48 rounded-full overflow-hidden border-4 border-white shadow-2xl">
              <Image
                src="/images/porca_ria_brand_logo.jpeg"
                alt={siteContent.siteName}
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>

          {/* Text */}
          <h1 className="text-4xl md:text-6xl font-serif font-bold text-white mb-6 drop-shadow-lg">
            {siteContent.home.hero.title}
          </h1>
          <p className="text-xl md:text-2xl text-primary-50 mb-8 max-w-2xl mx-auto">
            {siteContent.home.hero.subtitle}
          </p>

          {/* CTA */}
          <Button
            href="/produtos"
            variant="primary"
            className="text-lg bg-accent-500 hover:bg-accent-600 shadow-xl"
          >
            {siteContent.home.hero.cta}
          </Button>
        </div>
      </div>

      {/* Decorative Bottom Wave */}
      <div className="absolute bottom-0 left-0 right-0 z-10">
        <svg
          className="w-full h-12 md:h-16 fill-white"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" />
        </svg>
      </div>
    </section>
  );
}
