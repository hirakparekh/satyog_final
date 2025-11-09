import { Award, Trophy, CheckCircle, Users } from "lucide-react";

const AboutStats = () => {
  return (
    <section className="py-24 bg-gradient-to-b from-gray-900 to-black text-white relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-orange-500/20 via-transparent to-transparent w-full h-full"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="relative">
            <span className="absolute -top-6 -left-6 w-24 h-24 bg-orange-500/10 rounded-full filter blur-3xl -z-10"></span>
            <h2 className="text-4xl md:text-5xl font-bold mb-8 leading-tight">
              Building <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-600">Excellence</span>,
              <span className="block">One Tool at a Time</span>
            </h2>
            <div className="space-y-6">
              <p className="text-gray-300 text-lg leading-relaxed">
                For over 17 years, Satyog Trading has been the trusted partner for professionals across industries. We take pride in curating only the finest tools and hardware, ensuring every product meets our rigorous standards of quality and durability.
              </p>
              <p className="text-gray-300 text-lg leading-relaxed">
                Our commitment extends beyond selling tools. We empower craftsmen, builders, and creators with reliable equipment, backed by our expertise and exceptional service.
              </p>
            </div>
            <div className="mt-10">
              <a 
                href="https://www.satyogtrading.com/Aboutus/" 
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-orange-500 to-orange-600 text-white px-8 py-4 font-semibold rounded-lg hover:shadow-lg hover:shadow-orange-500/20 transition-all duration-300 transform hover:-translate-y-1"
              >
                <span>Our Story</span>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </a>
            </div>
          </div>
          
          <div className="grid grid-cols-2 gap-6">
            <StatCard 
              icon={<Award className="w-8 h-8" />} 
              value="17+" 
              label="Years Experience"
              delay="100"
            />
            <StatCard 
              icon={<Trophy className="w-8 h-8" />} 
              value="93" 
              label="Awards Won"
              delay="200"
            />
            <StatCard 
              icon={<CheckCircle className="w-8 h-8" />} 
              value="760+" 
              label="Projects Completed"
              delay="300"
            />
            <StatCard 
              icon={<Users className="w-8 h-8" />} 
              value="800+" 
              label="Happy Customers"
              delay="400"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

interface StatCardProps {
  icon: React.ReactNode;
  value: string;
  label: string;
  delay?: string;
}

const StatCard = ({ icon, value, label, delay = '0' }: StatCardProps) => (
  <div 
    className="group relative bg-gradient-to-br from-gray-800/50 to-gray-900/80 backdrop-blur-sm border border-gray-800 rounded-xl p-6 hover:border-orange-500/50 transition-all duration-500 hover:shadow-xl hover:shadow-orange-500/10 overflow-hidden"
    data-aos="fade-up"
    data-aos-delay={delay}
  >
    <div className="absolute inset-0 bg-gradient-to-br from-orange-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
    <div className="relative z-10">
      <div className="w-14 h-14 bg-orange-500/10 rounded-xl flex items-center justify-center text-orange-400 mb-4 group-hover:bg-orange-500/20 transition-colors duration-300">
        {icon}
      </div>
      <div className="text-3xl font-bold text-white mb-1">{value}</div>
      <div className="text-sm font-medium text-gray-400">{label}</div>
    </div>
  </div>
);

export default AboutStats;