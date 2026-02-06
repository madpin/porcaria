import type { Metadata } from 'next';
import Image from 'next/image';
import { siteContent } from '@/data/content';

export const metadata: Metadata = {
  title: 'História',
  description: 'O leitão do Zé em imagens — tradição de família em cada mesa. Conheça a história em fotos.',
};

export default function HistoryPage() {
  const { history } = siteContent;

  return (
    <>
      {/* Hero Section */}
      <section className="relative h-96 flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/leitao_christmas_two_men.jpg"
            alt="Leitão do Zé em família"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-primary-900/60" />
        </div>
        <div className="relative z-10 section-container text-center">
          <h1 className="text-5xl md:text-6xl font-serif font-bold text-white mb-4 drop-shadow-lg">
            {history.title}
          </h1>
          <p className="text-xl text-primary-50 max-w-2xl mx-auto">
            {history.subtitle}
          </p>
        </div>
      </section>

      {/* Intro */}
      <section className="section-padding bg-primary-50">
        <div className="section-container max-w-3xl text-center">
          <h2 className="text-3xl font-serif font-bold text-primary-800 mb-4">
            {history.hero.title}
          </h2>
          <p className="text-xl text-primary-700 leading-relaxed">
            {history.hero.text}
          </p>
        </div>
      </section>

      {/* Timeline with images */}
      <section className="section-padding">
        <div className="section-container max-w-4xl">
          <div className="space-y-16">
            {history.timeline.map((item, index) => (
              <article
                key={index}
                className={`grid grid-cols-1 md:grid-cols-2 gap-8 items-center ${index % 2 === 1 ? 'md:flex-row-reverse' : ''}`}
              >
                <div className={index % 2 === 1 ? 'md:order-2' : ''}>
                  <div className="relative aspect-[4/3] rounded-lg overflow-hidden shadow-lg">
                    <Image
                      src={item.image}
                      alt={item.imageAlt}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                  </div>
                </div>
                <div className={index % 2 === 1 ? 'md:order-1' : ''}>
                  <span className="text-accent-600 font-semibold text-lg">
                    {item.year}
                  </span>
                  <h3 className="text-2xl font-serif font-bold text-primary-800 mt-2 mb-4">
                    {item.title}
                  </h3>
                  <p className="text-primary-700 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
