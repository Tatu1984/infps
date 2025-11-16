'use client';

import Link from 'next/link';
import { COMPANY_INFO, NAVIGATION_LINKS, SOCIAL_LINKS } from '@/lib/constants';
import { Mail, Linkedin, Twitter, Github, Instagram } from 'lucide-react';

const socialIcons = {
  linkedin: Linkedin,
  twitter: Twitter,
  github: Github,
  instagram: Instagram,
};

export default function Footer() {
  return (
    <footer className="border-t border-border bg-background" style={{ marginLeft: '6px' }}>
      <div className="max-w-[1400px] mx-auto px-16 py-12">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-8 rounded-md bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
                <span className="text-xl font-bold text-white">∞</span>
              </div>
              <span className="text-lg font-semibold">{COMPANY_INFO.name}</span>
            </div>
            <p className="text-muted-foreground text-sm leading-relaxed mb-4 max-w-md">
              {COMPANY_INFO.description}
            </p>
            <a
              href={`mailto:${COMPANY_INFO.email}`}
              className="inline-flex items-center gap-2 text-sm text-primary hover:text-primary/80 transition-colors"
            >
              <Mail size={16} />
              {COMPANY_INFO.email}
            </a>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold mb-4">Quick Links</h3>
            <ul className="grid grid-cols-2 gap-x-8 gap-y-3">
              <li>
                <Link href="/" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/team" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Team
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/portfolio" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Portfolio
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h3 className="font-semibold mb-4">Follow Us</h3>
            <div className="flex gap-3">
              {SOCIAL_LINKS.map((social) => {
                const Icon = socialIcons[social.icon as keyof typeof socialIcons];
                return (
                  <a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full bg-muted hover:bg-primary/20 flex items-center justify-center transition-all hover:scale-110"
                    aria-label={social.name}
                  >
                    <Icon size={18} className="text-foreground hover:text-primary transition-colors" />
                  </a>
                );
              })}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground text-center md:text-left">
            © {new Date().getFullYear()} {COMPANY_INFO.name}. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm text-muted-foreground">
            <Link href="/privacy" className="hover:text-primary transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-primary transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
