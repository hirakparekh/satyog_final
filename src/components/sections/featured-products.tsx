import Image from 'next/image';
import Link from 'next/link';

const brands = [
  {
    name: 'Ajay',
    imageSrc: '/brands/ajay.jpg',
    alt: 'Ajay Tools',
    url: 'https://www.satyogtrading.com/Brands/Ajay-Tools/',
  },
  {
    name: 'Ebro',
    imageSrc: '/brands/ebro.jpg',
    alt: 'Ebro Tools',
    url: 'https://www.satyogtrading.com/Brands/Ebro-Tools/',
  },
  {
    name: 'MSI',
    imageSrc: '/brands/msi.jpg',
    alt: 'MSI Tools',
    url: 'https://www.satyogtrading.com/Brands/MSI-Tools/',
  },
  {
    name: 'Summit',
    imageSrc: '/brands/summit.jpg',
    alt: 'Summit Tools',
    url: 'https://www.satyogtrading.com/Brands/Summit-Tools/',
  },
  {
    name: 'Taparia',
    imageSrc: '/brands/taparia.png',
    alt: 'Taparia Tools',
    url: 'https://www.satyogtrading.com/Brands/Taparia-Tools/',
  },
  {
    name: 'Totem',
    imageSrc: '/brands/totem.jpg',
    alt: 'Totem Tools',
    url: 'https://www.satyogtrading.com/Brands/Totem-Tools/',
  },
];

const FeaturedProducts = () => {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-end mb-16">
          <div>
            <h2 className="text-[2.25rem] leading-[2.5rem] font-bold text-black mb-4">Brands</h2>
            <p className="text-lg text-gray-600">Some of the brands working with us</p>
          </div>
          <a href="https://www.satyogtrading.com/Brands/" className="hidden md:block text-primary font-semibold hover:text-brand-orange-dark transition-colors">
            View All Brands →
          </a>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
          {brands.map((brand) => (
            <a 
              key={brand.name} 
              href={brand.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-white p-4 flex items-center justify-center h-40 border border-gray-200 hover:border-primary transition-all duration-300 rounded-lg hover:shadow-lg"
            >
              <div className="relative w-full h-full">
                <Image
                  src={brand.imageSrc}
                  alt={brand.alt}
                  fill
                  className="object-contain p-2 group-hover:scale-105 transition-transform duration-300"
                />
              </div>
            </a>
          ))}
        </div>
        <div className="text-center mt-12 md:hidden">
          <a href="https://www.satyogtrading.com/Brands/" className="text-primary font-semibold hover:text-brand-orange-dark transition-colors">
            View All Brands →
          </a>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;