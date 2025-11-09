'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { NAVIGATION_LINKS } from '@/lib/constants';
import { useState, useEffect } from 'react';

export default function Navbar() {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-[9998] transition-all duration-300 ${
        isScrolled ? 'bg-background/95 backdrop-blur-xl border-b border-border' : 'bg-transparent'
      }`}
      style={{ marginLeft: '6px' }}
    >
      <div className="max-w-[1400px] mx-auto px-16 py-6 flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3 group">
          <div className="w-10 h-10 rounded-lg bg-primary/10 border border-primary/30 flex items-center justify-center transition-all group-hover:bg-primary/20 group-hover:border-primary/50">
            <span className="text-2xl font-bold text-primary">∞</span>
          </div>
          <span className="text-xl font-semibold">Infinititech</span>
        </Link>

        {/* Navigation Links */}
        <div className="flex gap-10 items-center">
          {NAVIGATION_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`text-[15px] transition-colors relative group ${
                pathname === link.href
                  ? 'text-primary font-semibold'
                  : 'text-foreground/80 hover:text-foreground'
              }`}
            >
              {link.label}
              <span
                className={`absolute -bottom-1 left-0 h-0.5 bg-primary transition-all duration-300 ${
                  pathname === link.href ? 'w-full' : 'w-0 group-hover:w-full'
                }`}
              />
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}