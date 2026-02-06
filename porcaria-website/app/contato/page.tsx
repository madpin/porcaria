import type { Metadata } from 'next';
import { siteContent } from '@/data/content';
import ContactForm from '@/components/contact/ContactForm';
import ContactInfo from '@/components/contact/ContactInfo';

export const metadata: Metadata = {
  title: 'Contato',
  description: 'Entre em contato com a Porca-Ria no Cambuci, São Paulo. Estamos aqui para responder suas dúvidas e encomendas.',
};

export default function ContactPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-800 to-primary-900 text-white section-padding">
        <div className="section-container text-center">
          <h1 className="text-5xl md:text-6xl font-serif font-bold mb-4">
            {siteContent.contact.title}
          </h1>
          <p className="text-xl text-primary-100 max-w-2xl mx-auto">
            {siteContent.contact.subtitle}
          </p>
        </div>
      </section>

      {/* Contact Form and Info Section */}
      <section className="section-padding bg-primary-50">
        <div className="section-container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h2 className="text-3xl font-serif font-bold text-primary-800 mb-6">
                Envie uma Mensagem
              </h2>
              <ContactForm />
            </div>

            {/* Contact Info */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <ContactInfo />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
