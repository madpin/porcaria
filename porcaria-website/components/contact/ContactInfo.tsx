import { Mail, Phone, MapPin, Clock } from 'lucide-react';
import { siteContent } from '@/data/content';

export default function ContactInfo() {
  const info = siteContent.contact.info;

  return (
    <div className="space-y-6">
      <h2 className="text-3xl font-serif font-bold text-primary-800 mb-6">
        {info.title}
      </h2>

      {/* Address */}
      <div className="flex items-start gap-4">
        <div className="w-12 h-12 rounded-full bg-accent-100 flex items-center justify-center flex-shrink-0">
          <MapPin className="w-6 h-6 text-accent-600" />
        </div>
        <div>
          <h3 className="font-semibold text-primary-800 mb-1">{info.address.label}</h3>
          <p className="text-primary-600 whitespace-pre-line">{info.address.value}</p>
        </div>
      </div>

      {/* Email */}
      <div className="flex items-start gap-4">
        <div className="w-12 h-12 rounded-full bg-accent-100 flex items-center justify-center flex-shrink-0">
          <Mail className="w-6 h-6 text-accent-600" />
        </div>
        <div>
          <h3 className="font-semibold text-primary-800 mb-1">{info.email.label}</h3>
          <a
            href={`mailto:${info.email.value}`}
            className="text-accent-600 hover:text-accent-700 transition-colors"
          >
            {info.email.value}
          </a>
        </div>
      </div>

      {/* Phone */}
      <div className="flex items-start gap-4">
        <div className="w-12 h-12 rounded-full bg-accent-100 flex items-center justify-center flex-shrink-0">
          <Phone className="w-6 h-6 text-accent-600" />
        </div>
        <div>
          <h3 className="font-semibold text-primary-800 mb-1">{info.phone.label}</h3>
          <a
            href={`tel:${info.phone.value.replace(/\s/g, '')}`}
            className="text-accent-600 hover:text-accent-700 transition-colors"
          >
            {info.phone.value}
          </a>
        </div>
      </div>

      {/* Hours */}
      <div className="flex items-start gap-4">
        <div className="w-12 h-12 rounded-full bg-accent-100 flex items-center justify-center flex-shrink-0">
          <Clock className="w-6 h-6 text-accent-600" />
        </div>
        <div>
          <h3 className="font-semibold text-primary-800 mb-1">{info.hours.label}</h3>
          <p className="text-primary-600 whitespace-pre-line">{info.hours.value}</p>
        </div>
      </div>
    </div>
  );
}
