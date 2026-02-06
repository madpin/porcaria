import Link from 'next/link';
import Image from 'next/image';
import Navigation from './Navigation';
import { siteContent } from '@/data/content';

export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm shadow-sm">
      <div className="section-container">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="relative w-16 h-16 rounded-full overflow-hidden border-2 border-primary-200 group-hover:border-primary-400 transition-colors">
              <Image
                src="/images/logo.jpeg"
                alt={siteContent.siteName}
                fill
                className="object-cover"
                priority
              />
            </div>
            <div className="flex flex-col">
              <span className="text-2xl font-serif font-bold text-primary-800">
                {siteContent.siteName}
              </span>
              <span className="text-sm text-primary-600 -mt-1">
                {siteContent.tagline}
              </span>
            </div>
          </Link>

          {/* Navigation */}
          <Navigation />
        </div>
      </div>
    </header>
  );
}
