import Image from 'next/image';

const categories = [
  {
    title: 'Hand Tools',
    image: '/hand_tools.png',
    url: 'https://www.satyogtrading.com/Products/HAND-TOOLS/'
  },
  {
    title: 'Cutting Tools',
    image: '/cutting_tools.jpg',
    url: 'https://www.satyogtrading.com/Products/CUTTING-TOOLS/'
  },
  {
    title: 'Fasteners',
    image: '/fasteners.jpg',
    url: 'https://www.satyogtrading.com/Products/FASTENERS-GROUP/'
  },
  {
    title: 'Lubrication Equipment',
    image: '/lubrication_equipment.jpg',
    url: 'https://www.satyogtrading.com/Products/LUBRICATION-EQUIPMENT/'
  },
];

const CategoriesGrid = () => {
  return (
    <section className="bg-gray-50 py-24">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Product Range
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Premium tools and hardware for professionals
          </p>
        </div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {categories.map((category) => (
              <a
                key={category.title}
                href={category.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative bg-white overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 block"
              >
                <div className="relative aspect-square overflow-hidden">
                  <Image
                    src={category.image}
                    alt={category.title}
                    width={800}
                    height={600}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <h3 className="text-2xl font-bold text-white">{category.title}</h3>
                  </div>
                </div>
              </a>
          ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CategoriesGrid;