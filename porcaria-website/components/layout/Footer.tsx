import Link from 'next/link';
import { Mail, Phone } from 'lucide-react';
import { siteContent } from '@/data/content';

export default function Footer() {
  return (
    <footer className="bg-primary-900 text-primary-50">
      <div className="section-container py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* About */}
          <div>
            <h3 className="text-xl font-serif font-bold mb-4">
              {siteContent.footer.about.title}
            </h3>
            <p className="text-primary-200 leading-relaxed">
              {siteContent.footer.about.text}
            </p>
          </div>

          {/* Links */}
          <div>
            <h3 className="text-xl font-serif font-bold mb-4">
              {siteContent.footer.links.title}
            </h3>
            <ul className="space-y-2">
              {siteContent.footer.links.items.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-primary-200 hover:text-white transition-colors inline-block"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-xl font-serif font-bold mb-4">
              {siteContent.footer.contact.title}
            </h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2 text-primary-200">
                <Mail size={20} className="mt-0.5 flex-shrink-0" />
                <a
                  href={`mailto:${siteContent.footer.contact.email}`}
                  className="hover:text-white transition-colors"
                >
                  {siteContent.footer.contact.email}
                </a>
              </li>
              <li className="flex items-start gap-2 text-primary-200">
                <Phone size={20} className="mt-0.5 flex-shrink-0" />
                <a
                  href={`tel:${siteContent.footer.contact.phone.replace(/\s/g, '')}`}
                  className="hover:text-white transition-colors"
                >
                  {siteContent.footer.contact.phone}
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 pt-8 border-t border-primary-800 text-center text-primary-300">
          <p>{siteContent.footer.copyright}</p>
        </div>
      </div>
    </footer>
  );
}
