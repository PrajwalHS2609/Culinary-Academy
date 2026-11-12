import React, { useState, useMemo } from 'react';
import { CookingClass, ACADEMY_CLASSES } from '../data/academyData';
import { Search, Clock, Users, ArrowUpRight, ChefHat, Check, Sparkles } from 'lucide-react';

interface ClassesSectionProps {
  onSelectClass: (c: CookingClass) => void;
  onBookClass: (classId: string) => void;
}

export const ClassesSection: React.FC<ClassesSectionProps> = ({
  onSelectClass,
  onBookClass,
}) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [selectedLevel, setSelectedLevel] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const categories = [
    { id: 'all', label: 'All Experiences' },
    { id: 'beginner', label: 'Beginner Cooking' },
    { id: 'indian', label: 'Indian Regional' },
    { id: 'international', label: 'International & Pasta' },
    { id: 'baking', label: 'Baking & Pâtisserie' },
    { id: 'healthy', label: 'Plant-Forward & Healthy' },
    { id: 'professional', label: 'Professional Training' },
    { id: 'workshops', label: 'Special Workshops' },
  ];

  const levels = ['all', 'Beginner', 'Intermediate', 'Advanced', 'All Levels'];

  const filteredClasses = useMemo(() => {
    return ACADEMY_CLASSES.filter((c) => {
      const matchesCategory = selectedCategory === 'all' || c.category === selectedCategory;
      const matchesLevel = selectedLevel === 'all' || c.skillLevel === selectedLevel;
      const matchesSearch =
        searchQuery === '' ||
        c.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        c.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        c.instructor.toLowerCase().includes(searchQuery.toLowerCase()) ||
        c.categoryLabel.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesLevel && matchesSearch;
    });
  }, [selectedCategory, selectedLevel, searchQuery]);

  return (
    <section id="classes" className="w-full bg-[#FAF5EC] py-16 lg:py-24 border-b border-[#252525]/10">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-10 border-b border-[#252525]/10">
          <div className="space-y-3">
            <div className="flex items-center gap-2 text-xs font-medium tracking-widest text-[#66734A] uppercase">
              <span>Curated Culinary Curriculum</span>
              <span aria-hidden="true" className="text-[#C66B45]">·</span>
              <span>Individual Stations</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-[#252525] text-balance">
              Find Your Perfect <br />
              <span className="italic font-normal text-[#C66B45]">Cooking Experience.</span>
            </h2>
          </div>

          <p className="text-sm text-[#252525]/75 max-w-md">
            Whether mastering your first knife cut or perfecting multi-layer puff lamination, each workshop is strictly limited to 8 students for dedicated mentor guidance.
          </p>
        </div>

        {/* Filter Controls: Interactive Category Tabs + Search + Skill Level */}
        <div className="py-8 space-y-5">
          
          {/* Category Tabs (Segmented Button Controls) */}
          <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-4 py-2 text-xs font-medium rounded-md whitespace-nowrap shrink-0 transition-all cursor-pointer ${
                  selectedCategory === cat.id
                    ? 'bg-[#252525] text-white shadow-xs font-semibold'
                    : 'bg-[#FFFFFF] text-[#252525]/70 hover:text-[#252525] border border-[#252525]/10'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* Search bar and Skill Level Selector */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4 pt-2">
            
            {/* Search Input */}
            <div className="relative flex-1 max-w-md">
              <Search size={16} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-[#252525]/50" />
              <input
                type="text"
                placeholder="Search by cuisine, dish, technique, or instructor..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2 text-xs bg-[#FFFFFF] border border-[#252525]/15 rounded-md focus:outline-none focus:border-[#C66B45] text-[#252525]"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-stone-400 hover:text-stone-700"
                >
                  ✕
                </button>
              )}
            </div>

            {/* Level Filter */}
            <div className="flex items-center gap-2 text-xs text-[#252525]/70">
              <span className="whitespace-nowrap shrink-0">Skill Level:</span>
              <div className="flex items-center gap-1">
                {levels.map((lvl) => (
                  <button
                    key={lvl}
                    onClick={() => setSelectedLevel(lvl)}
                    className={`px-2.5 py-1 text-xs rounded transition-colors whitespace-nowrap cursor-pointer ${
                      selectedLevel === lvl
                        ? 'bg-[#66734A] text-white font-medium'
                        : 'bg-white/60 text-[#252525]/70 hover:bg-white border border-[#252525]/10'
                    }`}
                  >
                    {lvl === 'all' ? 'All' : lvl}
                  </button>
                ))}
              </div>
            </div>

          </div>
        </div>

        {/* Dynamic Class Showcase – Varied Editorial Layouts */}
        {filteredClasses.length === 0 ? (
          <div className="p-12 text-center bg-[#FFFFFF] rounded-lg border border-[#252525]/10 my-8">
            <ChefHat size={32} className="mx-auto text-stone-400 mb-3" />
            <h3 className="text-base font-serif text-[#252525]">No culinary sessions found</h3>
            <p className="text-xs text-[#252525]/60 mt-1 max-w-sm mx-auto">
              Try adjusting your category filter, clearing your search query, or selecting "All Experiences".
            </p>
            <button
              onClick={() => {
                setSelectedCategory('all');
                setSelectedLevel('all');
                setSearchQuery('');
              }}
              className="mt-4 px-4 py-2 text-xs font-medium text-white bg-[#252525] rounded-md hover:bg-[#3a3a3a]"
            >
              Reset Filters
            </button>
          </div>
        ) : (
          <div className="space-y-10">
            
            {/* Featured Marquee Class (First item in prominent asymmetrical split card) */}
            {filteredClasses[0] && (
              <div className="bg-[#FFFFFF] rounded-lg border border-[#252525]/10 overflow-hidden shadow-xs hover:border-[#252525]/25 transition-all">
                <div className="grid grid-cols-1 lg:grid-cols-12">
                  <div className="lg:col-span-7 relative h-72 lg:h-auto min-h-[300px]">
                    <img
                      src={filteredClasses[0].image}
                      alt={filteredClasses[0].title}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute top-4 left-4 bg-[#FAF5EC]/95 backdrop-blur-xs px-3 py-1 rounded text-xs font-medium text-[#66734A] border border-[#252525]/10">
                      {filteredClasses[0].categoryLabel}
                    </div>
                  </div>

                  <div className="lg:col-span-5 p-8 lg:p-10 flex flex-col justify-between space-y-6">
                    <div className="space-y-4">
                      {/* Quiet unboxed metadata */}
                      <div className="flex items-center gap-2 text-xs text-[#252525]/60">
                        <span>{filteredClasses[0].skillLevel}</span>
                        <span aria-hidden="true">·</span>
                        <span>{filteredClasses[0].duration}</span>
                        <span aria-hidden="true">·</span>
                        <span>Max {filteredClasses[0].maxStudents} per class</span>
                      </div>

                      <h3 className="text-2xl sm:text-3xl font-serif text-[#252525] leading-tight">
                        {filteredClasses[0].title}
                      </h3>

                      <p className="text-xs text-[#66734A] font-medium italic">
                        {filteredClasses[0].tagline}
                      </p>

                      <p className="text-sm text-[#252525]/80 leading-relaxed">
                        {filteredClasses[0].description}
                      </p>

                      <div className="pt-2">
                        <div className="text-xs font-semibold text-[#252525] uppercase tracking-wider mb-2">
                          Key Techniques:
                        </div>
                        <ul className="grid grid-cols-1 gap-1.5 text-xs text-[#252525]/75">
                          {filteredClasses[0].skillsAcquired.slice(0, 3).map((skill, idx) => (
                            <li key={idx} className="flex items-center gap-2">
                              <span className="w-1.5 h-1.5 rounded-full bg-[#C66B45]" />
                              <span>{skill}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    <div className="pt-4 border-t border-[#252525]/10 flex items-center justify-between gap-4">
                      <div>
                        <span className="text-xs text-[#252525]/50 block">Investment</span>
                        <span className="text-2xl font-serif text-[#252525] tabular-nums font-semibold">
                          ${filteredClasses[0].price}
                        </span>
                        <span className="text-[11px] text-[#252525]/60 ml-1">all-inclusive</span>
                      </div>

                      <div className="flex items-center gap-2">
                        <button
                          onClick={() => onSelectClass(filteredClasses[0])}
                          className="px-4 py-2.5 text-xs font-medium text-[#252525] hover:text-[#C66B45] transition-colors cursor-pointer"
                        >
                          View Details
                        </button>
                        <button
                          onClick={() => onBookClass(filteredClasses[0].id)}
                          className="px-5 py-2.5 text-xs font-semibold uppercase tracking-wider text-white bg-[#C66B45] hover:bg-[#a95633] rounded-md transition-colors cursor-pointer"
                        >
                          Book Now
                        </button>
                      </div>
                    </div>

                  </div>
                </div>
              </div>
            )}

            {/* Editorial Grid for Subsequent Classes */}
            {filteredClasses.length > 1 && (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredClasses.slice(1).map((c) => (
                  <div
                    key={c.id}
                    className="bg-[#FFFFFF] rounded-lg border border-[#252525]/10 overflow-hidden shadow-xs hover:shadow-md hover:border-[#252525]/25 transition-all flex flex-col justify-between group"
                  >
                    <div>
                      {/* Class Image Container */}
                      <div className="relative h-52 overflow-hidden bg-stone-100">
                        <img
                          src={c.image}
                          alt={c.title}
                          referrerPolicy="no-referrer"
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                        <div className="absolute top-3 left-3 bg-[#FAF5EC]/90 backdrop-blur-xs px-2.5 py-0.5 rounded text-[11px] font-medium text-[#66734A] border border-[#252525]/10">
                          {c.categoryLabel}
                        </div>
                      </div>

                      {/* Content Body */}
                      <div className="p-6 space-y-3">
                        <div className="flex items-center gap-2 text-xs text-[#252525]/60">
                          <span>{c.skillLevel}</span>
                          <span aria-hidden="true">·</span>
                          <span>{c.duration}</span>
                          <span aria-hidden="true">·</span>
                          <span>Cap: {c.maxStudents}</span>
                        </div>

                        <h3 className="text-xl font-serif text-[#252525] group-hover:text-[#C66B45] transition-colors line-clamp-2">
                          {c.title}
                        </h3>

                        <p className="text-xs text-[#252525]/75 line-clamp-2 leading-relaxed">
                          {c.description}
                        </p>

                        <div className="pt-2 text-xs text-[#66734A]">
                          <span className="font-medium">Instructor: </span>
                          <span>{c.instructor}</span>
                        </div>
                      </div>
                    </div>

                    {/* Bottom Pricing & Actions */}
                    <div className="p-6 pt-0">
                      <div className="pt-4 border-t border-[#252525]/10 flex items-center justify-between">
                        <div>
                          <span className="text-xl font-serif text-[#252525] tabular-nums font-semibold">
                            ${c.price}
                          </span>
                          <span className="text-[11px] text-[#252525]/60 ml-1">per student</span>
                        </div>

                        <div className="flex items-center gap-2">
                          <button
                            onClick={() => onSelectClass(c)}
                            className="p-2 text-[#252525] hover:text-[#C66B45] text-xs font-medium cursor-pointer"
                            aria-label={`View details for ${c.title}`}
                          >
                            <ArrowUpRight size={18} />
                          </button>
                          <button
                            onClick={() => onBookClass(c.id)}
                            className="px-3.5 py-1.5 text-xs font-semibold uppercase tracking-wider text-white bg-[#252525] hover:bg-[#C66B45] rounded transition-colors cursor-pointer"
                          >
                            Reserve
                          </button>
                        </div>
                      </div>
                    </div>

                  </div>
                ))}
              </div>
            )}

          </div>
        )}

      </div>
    </section>
  );
};
