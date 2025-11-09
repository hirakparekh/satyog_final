import { Truck, RotateCcw, ShieldCheck, CreditCard, Headphones, Package, LucideIcon } from 'lucide-react';

interface Feature {
  Icon: LucideIcon;
  title: string;
  description: string;
}

const features: Feature[] = [
  {
    Icon: Truck,
    title: "Free Shipping",
    description: "On orders above ₹2000",
  },
  {
    Icon: RotateCcw,
    title: "Easy Returns",
    description: "30-day return policy",
  },
  {
    Icon: ShieldCheck,
    title: "Authentic Products",
    description: "100% genuine guarantee",
  },
  {
    Icon: CreditCard,
    title: "Secure Payment",
    description: "Multiple payment options",
  },
  {
    Icon: Headphones,
    title: "24/7 Support",
    description: "Expert assistance always",
  },
  {
    Icon: Package,
    title: "Track Order",
    description: "Real-time tracking",
  },
];

const FeaturesBar = () => {
  return (
    <section className="py-20 bg-gray-50 border-t border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="text-center group">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-orange-500 text-white mb-4 group-hover:bg-black transition-colors duration-300">
                <feature.Icon className="w-8 h-8" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-1 text-sm">{feature.title}</h3>
              <p className="text-xs text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesBar;