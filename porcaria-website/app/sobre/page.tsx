import type { Metadata } from 'next';
import Image from 'next/image';
import { siteContent } from '@/data/content';

export const metadata: Metadata = {
  title: 'Sobre Nós',
  description: 'Conheça a história de José Américo e da Porca-Ria. Uma herança de família, do leitão da avó ao famoso leitão do Zé e ao bacon artesanal sem conservantes.',
};

export default function AboutPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative h-96 flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/rustic_pig_bacon_herbs.png"
            alt="Sobre a Porca-Ria"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-primary-900/60" />
        </div>
        <div className="relative z-10 section-container text-center">
          <h1 className="text-5xl md:text-6xl font-serif font-bold text-white mb-4 drop-shadow-lg">
            {siteContent.about.title}
          </h1>
        </div>
      </section>

      {/* José Américo + Portrait */}
      <section className="section-padding bg-primary-50">
        <div className="section-container max-w-4xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="relative aspect-[3/4] max-h-[480px] rounded-lg overflow-hidden shadow-lg">
              <Image
                src="/images/portrait_man_white_beard_glasses.png"
                alt="José Américo"
                fill
                className="object-cover"
              />
            </div>
            <div>
              <h2 className="text-4xl font-serif font-bold text-primary-800 mb-6">
                {siteContent.about.joseAmerico.title}
              </h2>
              <p className="text-xl text-primary-700 leading-relaxed">
                {siteContent.about.joseAmerico.bio}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Story Section - Herança de Família */}
      <section className="section-padding">
        <div className="section-container max-w-4xl">
          <div className="mb-12">
            <h2 className="text-4xl font-serif font-bold text-primary-800 mb-6">
              {siteContent.about.hero.title}
            </h2>
            <p className="text-xl text-primary-700 leading-relaxed mb-8">
              {siteContent.about.hero.text}
            </p>
          </div>

          <div className="space-y-6">
            <h3 className="text-3xl font-serif font-bold text-primary-800 mb-4">
              {siteContent.about.story.title}
            </h3>
            <p className="text-lg text-primary-700 leading-relaxed mb-6">
              {siteContent.about.story.intro}
            </p>
            <ul className="space-y-4">
              {siteContent.about.story.steps.map((step, index) => (
                <li key={index} className="text-lg text-primary-700 leading-relaxed">
                  <strong className="text-primary-800">{step.who}:</strong> {step.text}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Image Divider */}
      <section className="relative h-80 overflow-hidden">
        <Image
          src="/images/raw_pork_cuts_herbs_spices.png"
          alt="Cortes de carne e temperos artesanais"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-primary-900/40" />
      </section>

      {/* Process Section */}
      <section className="section-padding bg-primary-50">
        <div className="section-container">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-serif font-bold text-primary-800 mb-4">
              {siteContent.about.process.title}
            </h2>
            <p className="text-xl text-primary-600">
              {siteContent.about.process.subtitle}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {siteContent.about.process.steps.map((step) => (
              <div
                key={step.number}
                className="bg-white rounded-lg p-6 shadow-md hover:shadow-xl transition-shadow"
              >
                <div className="w-12 h-12 rounded-full bg-accent-500 text-white flex items-center justify-center text-2xl font-bold mb-4">
                  {step.number}
                </div>
                <h3 className="text-xl font-serif font-bold text-primary-800 mb-3">
                  {step.title}
                </h3>
                <p className="text-primary-600 leading-relaxed">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Commitment Section */}
      <section className="section-padding">
        <div className="section-container max-w-4xl text-center">
          <h2 className="text-4xl font-serif font-bold text-primary-800 mb-6">
            {siteContent.about.commitment.title}
          </h2>
          <p className="text-xl text-primary-700 leading-relaxed">
            {siteContent.about.commitment.text}
          </p>
        </div>
      </section>
    </>
  );
}