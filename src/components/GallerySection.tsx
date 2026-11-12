import React, { useState } from 'react';
import { Camera, Sparkles, Utensils } from 'lucide-react';

export const GallerySection: React.FC = () => {
  const [filter, setFilter] = useState<'all' | 'pasta' | 'spices' | 'studio'>('all');

  const galleryItems = [
    {
      id: 'g-01',
      title: 'Handmade Ricotta & Herb Tortelloni',
      author: 'Student Creation · Italian Pasta Cohort',
      category: 'pasta',
      image: '/src/assets/images/dish_handmade_pasta_1794379323716.jpg',
      aspect: 'tall',
      note: 'Plated with crispy mountain sage and 24-month Parmigiano emulsified butter.',
    },
    {
      id: 'g-02',
      title: 'Old Delhi Dum Murgh Makhani & Naan',
      author: 'Student Creation · Regional Spices Cohort',
      category: 'spices',
      image: '/src/assets/images/dish_indian_curry_1794379325869.jpg',
      aspect: 'wide',
      note: 'Finished with toasted star anise, cream swirl, and scorched garlic naan.',
    },
    {
      id: 'g-03',
      title: 'Student Vegetable Fabrication Drills',
      author: 'Action Shot · Knife Skills Atelier',
      category: 'studio',
      image: '/src/assets/images/hero_culinary_academy_1794379322666.jpg',
      aspect: 'wide',
      note: 'Mastering uniform brunoise cuts under the guidance of Chef Elena Vance.',
    },
    {
      id: 'g-04',
      title: 'Morning Prep at the Induction Islands',
      author: 'Behind the Scenes · San Francisco Studio',
      category: 'studio',
      image: '/src/assets/images/studio_kitchen_interior_1794379324599.jpg',
      aspect: 'tall',
      note: 'Individual marble stations ready for the morning viennoiserie turn.',
    },
  ];

  const filteredItems = galleryItems.filter((item) => filter === 'all' || item.category === filter);

  return (
    <section className="w-full bg-[#FFFFFF] py-16 lg:py-24 border-b border-[#252525]/10">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="space-y-4">
            <div className="flex items-center gap-2 text-xs font-medium tracking-widest text-[#66734A] uppercase">
              <span>Student Plating & Craft</span>
              <span aria-hidden="true" className="text-[#C66B45]">·</span>
              <span>100% Student-Prepared</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-[#252525] text-balance">
              Made with Passion. <br />
              <span className="italic font-normal text-[#C66B45]">Served with Creativity.</span>
            </h2>
          </div>

          {/* Interactive Filter Controls */}
          <div className="flex items-center gap-1.5 p-1 bg-[#FAF5EC] rounded-md border border-[#252525]/10">
            <button
              onClick={() => setFilter('all')}
              className={`px-3 py-1.5 text-xs font-medium rounded transition-colors cursor-pointer ${
                filter === 'all' ? 'bg-[#252525] text-white shadow-xs' : 'text-[#252525]/70 hover:text-[#252525]'
              }`}
            >
              All Creations
            </button>
            <button
              onClick={() => setFilter('pasta')}
              className={`px-3 py-1.5 text-xs font-medium rounded transition-colors cursor-pointer ${
                filter === 'pasta' ? 'bg-[#252525] text-white shadow-xs' : 'text-[#252525]/70 hover:text-[#252525]'
              }`}
            >
              Pasta & Dough
            </button>
            <button
              onClick={() => setFilter('spices')}
              className={`px-3 py-1.5 text-xs font-medium rounded transition-colors cursor-pointer ${
                filter === 'spices' ? 'bg-[#252525] text-white shadow-xs' : 'text-[#252525]/70 hover:text-[#252525]'
              }`}
            >
              Spices & Curries
            </button>
            <button
              onClick={() => setFilter('studio')}
              className={`px-3 py-1.5 text-xs font-medium rounded transition-colors cursor-pointer ${
                filter === 'studio' ? 'bg-[#252525] text-white shadow-xs' : 'text-[#252525]/70 hover:text-[#252525]'
              }`}
            >
              Inside Studio
            </button>
          </div>
        </div>

        {/* Magazine-Inspired Masonry Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              className="bg-[#FAF5EC] rounded-lg border border-[#252525]/10 overflow-hidden shadow-xs hover:border-[#252525]/30 transition-all flex flex-col justify-between group"
            >
              <div className="relative h-72 sm:h-80 overflow-hidden bg-stone-100">
                <img
                  src={item.image}
                  alt={item.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-700"
                />
                <div className="absolute top-3 right-3 bg-[#FAF5EC]/95 backdrop-blur-xs px-2.5 py-1 rounded text-[11px] font-mono text-[#66734A] border border-[#252525]/10">
                  {item.author}
                </div>
              </div>

              <div className="p-6 space-y-2">
                <h3 className="text-xl font-serif text-[#252525] group-hover:text-[#C66B45] transition-colors">
                  {item.title}
                </h3>
                <p className="text-xs text-[#252525]/75 leading-relaxed">
                  {item.note}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Studio Note */}
        <div className="mt-12 p-6 bg-[#FAF5EC] rounded-lg border border-[#252525]/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#252525]/75">
          <div className="flex items-center gap-3">
            <Camera size={18} className="text-[#66734A] shrink-0" />
            <span>
              All dishes shown are prepared by students within their 3.5-hour workshop sessions at Vance Culinary Academy.
            </span>
          </div>
          <span className="font-mono text-[#C66B45] whitespace-nowrap">
            Zero food stylists · Pure student craft
          </span>
        </div>

      </div>
    </section>
  );
};
