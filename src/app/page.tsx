import Navigation from '@/components/sections/navigation';
import HeroCarousel from '@/components/sections/hero-carousel';
import CategoriesGrid from '@/components/sections/categories-grid';
import FeaturedProducts from '@/components/sections/featured-products';
import AboutStats from '@/components/sections/about-stats';
import Testimonials from '@/components/sections/testimonials';
import Footer from '@/components/sections/footer';

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <main>
        <HeroCarousel />
        <CategoriesGrid />
        <FeaturedProducts />
        <AboutStats />
        <Testimonials />
      </main>
      <Footer />
    </div>
  );
}