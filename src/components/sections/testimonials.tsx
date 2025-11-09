import Image from 'next/image';
import { Quote, Star } from 'lucide-react';

interface Testimonial {
  name: string;
  title: string;
  text: string;
  avatar: string;
}

const testimonialsData: Testimonial[] = [
  {
    name: "Rajesh Kumar",
    title: "Construction Contractor",
    text: "Satyog Trading has been my go-to supplier for over 5 years. The quality of their products is unmatched, and the customer service is exceptional.",
    avatar: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/04e0de38-3a3a-485f-a728-e66c75424389-satyog-trading-manta-a1s5-bolt-host/assets/images/pexels-photo-1222271-13.jpeg",
  },
  {
    name: "Priya Sharma",
    title: "Interior Designer",
    text: "I trust Satyog Trading for all my hardware needs. Their range is extensive and every product I have purchased has been of premium quality.",
    avatar: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/04e0de38-3a3a-485f-a728-e66c75424389-satyog-trading-manta-a1s5-bolt-host/assets/images/pexels-photo-733872-14.jpeg",
  },
  {
    name: "Amit Patel",
    title: "Manufacturing Unit Owner",
    text: "Reliable, efficient, and professional. Satyog Trading delivers on time, every time. Their industrial tools have significantly improved our productivity.",
    avatar: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/04e0de38-3a3a-485f-a728-e66c75424389-satyog-trading-manta-a1s5-bolt-host/assets/images/pexels-photo-1516680-15.jpeg",
  },
];

const Testimonials = () => {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">What Our Customers Say</h2>
          <p className="text-lg text-gray-600">
            Trusted by thousands of professionals across the country
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonialsData.map((testimonial, index) => (
            <div key={index} className="bg-gray-50 p-8 shadow-sm">
              <Quote className="w-10 h-10 text-orange-500 mb-6" />
              <div className="flex items-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-orange-500" fill="currentColor" />
                ))}
              </div>
              <p className="text-gray-800 mb-6 leading-relaxed">
                {testimonial.text}
              </p>
              <div className="flex items-center">
                <Image
                  src={testimonial.avatar}
                  alt={testimonial.name}
                  width={48}
                  height={48}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div className="ml-4">
                  <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                  <p className="text-sm text-gray-600">{testimonial.title}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;