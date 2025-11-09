import React from 'react';
import Link from 'next/link';
import { Facebook, Instagram, Linkedin, Twitter, MapPin, Phone, Mail, CreditCard } from 'lucide-react';
import Logo from '@/components/Logo';

const SocialLink = ({ href, icon: Icon }: { href: string; icon: React.ElementType }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="bg-gray-800 text-gray-400 p-2 hover:bg-primary hover:text-white transition-colors duration-200"
  >
    <Icon size={20} />
  </a>
);

const FooterLink = ({ href, children }: { href: string; children: React.ReactNode }) => (
  <li>
    <Link href={href} className="hover:text-primary transition-colors text-sm">
      {children}
    </Link>
  </li>
);

const Footer = () => {
  // Quick Links and Support sections removed as requested

  return (
    <footer className="bg-black text-gray-400">
      <div className="container py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {/* Column 1: Brand Info */}
          <div>
            <div className="mb-4">
              <Logo showSubtitle={true} linkTo="/" variant="dark" />
            </div>
            <p className="mt-4 text-sm leading-relaxed">
              We SATYOG TRADING CO established in year 1968. We deal retail business in Tools, Fasteners, engineering workshop tools and many items which need industries surrounding Surat.
            </p>
            {/* Social media links removed as requested */}
          </div>

          {/* Support section removed as requested */}

          {/* Column 4: Contact Us */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-6">Contact Us</h4>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start">
                <MapPin className="text-primary mt-1 mr-3 flex-shrink-0" size={16} />
                <span>A10/7 Paikee, Rd No 3, Beside Dharti Namkeen, Udhna Udhyog Nagar, Udhna, Surat, Gujarat 394210.</span>
              </li>
              <li className="flex items-center">
                <Phone className="text-primary mr-3 flex-shrink-0" size={16} />
                <a href="tel:02612277421" className="hover:text-primary transition-colors">
                  02612277421
                </a>
              </li>
              <li className="flex items-center">
                <Mail className="text-primary mr-3 flex-shrink-0" size={16} />
                <a href="mailto:satyogtrading@gmail.com" className="hover:text-primary transition-colors">
                  satyogtrading@gmail.com
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="container py-6">
          <p className="text-sm text-gray-500 text-center">
            © 2024 Satyog Trading. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;