import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

interface LogoProps {
  className?: string;
  showSubtitle?: boolean;
  linkTo?: string;
  variant?: 'light' | 'dark';
}

const Logo: React.FC<LogoProps> = ({ className = '', showSubtitle = false, linkTo = '/', variant = 'light' }) => {
  const isDark = variant === 'dark';
  const logoContent = (
    <div className={`flex items-center ${className}`}>
      {/* Logo Image */}
      <div className="flex-shrink-0 mr-4">
        <Image
          src="/satyogtradinglogo206.png"
          alt="Satyog Trading Co. Logo"
          width={200}
          height={80}
          className="h-16 md:h-20 w-auto object-contain"
          priority
        />
      </div>
    </div>
  );

  if (linkTo) {
    return (
      <Link href={linkTo} className="hover:opacity-90 transition-opacity">
        {logoContent}
      </Link>
    );
  }

  return logoContent;
};

export default Logo;

