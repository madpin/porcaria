'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { siteContent } from '@/data/content';
import { cn } from '@/lib/utils';

const navItems = [
  { label: siteContent.nav.home, href: '/' },
  { label: siteContent.nav.about, href: '/sobre' },
  { label: siteContent.nav.products, href: '/produtos' },
  { label: siteContent.nav.contact, href: '/contacto' },
];

export default function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  const isActive = (href: string) => {
    if (href === '/') {
      return pathname === '/';
    }
    return pathname.startsWith(href);
  };

  return (
    <>
      {/* Desktop Navigation */}
      <nav className="hidden md:flex items-center gap-8">
        {navItems.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className={cn(
              'text-lg font-medium transition-colors duration-200 relative',
              isActive(item.href)
                ? 'text-primary-800'
                : 'text-primary-700 hover:text-primary-800'
            )}
          >
            {item.label}
            {isActive(item.href) && (
              <span className="absolute -bottom-1 left-0 right-0 h-0.5 bg-accent-500" />
            )}
          </Link>
        ))}
      </nav>

      {/* Mobile Menu Button */}
      <button
        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        className="md:hidden p-2 text-primary-800 hover:bg-primary-50 rounded-lg transition-colors"
        aria-label="Toggle menu"
      >
        {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className="absolute top-full left-0 right-0 bg-white shadow-lg border-t border-primary-200 md:hidden z-50">
          <nav className="flex flex-col p-4">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className={cn(
                  'py-3 px-4 text-lg font-medium rounded-lg transition-colors',
                  isActive(item.href)
                    ? 'text-primary-800 bg-primary-50'
                    : 'text-primary-700 hover:bg-primary-50'
                )}
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </>
  );
}
