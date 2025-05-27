'use client';

import { useState, useMemo } from 'react';
import { TestimonialsData } from '@/lib/data-loader';

interface TestimonialsClientProps {
  testimonialsData: TestimonialsData;
}

const TestimonialsClient = ({ testimonialsData }: TestimonialsClientProps) => {
  const [searchQuery, setSearchQuery] = useState('');
  
  // Filter testimonials based on search query
  const filteredTestimonials = useMemo(() => {
    if (!searchQuery.trim()) {
      return testimonialsData.testimonials;
    }
    
    const query = searchQuery.toLowerCase();
    return testimonialsData.testimonials.filter(testimonial =>
      testimonial.name.toLowerCase().includes(query) ||
      testimonial.title.toLowerCase().includes(query) ||
      testimonial.description.toLowerCase().includes(query)
    );
  }, [searchQuery, testimonialsData.testimonials]);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header section */}
      <div className="relative">
        {/* Top navigation */}
        <div className="flex justify-between items-center p-6">
          <div className="font-bold text-lg">SYNDICATE_M</div>
          <div className="text-sm">testimonials</div>
        </div>

        {/* Hero section */}
        <div className="text-center py-16 px-6">
          <h1 className="text-5xl md:text-6xl font-normal mb-4 italic text-gray-600">
            The testimonials
          </h1>
          <h2 className="text-6xl md:text-7xl font-bold mb-8 tracking-tight">
            WE ADORE
          </h2>
          <p className="text-gray-600 text-lg max-w-md mx-auto mb-12">
            {testimonialsData.page_config.subtitle}
          </p>
          
          {/* Search bar */}
          {testimonialsData.page_config.search_enabled && (
            <div className="max-w-md mx-auto relative">
              <div className="relative">
                <svg 
                  className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400"
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
                <input
                  type="text"
                  placeholder={testimonialsData.page_config.search_placeholder}
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full py-4 pl-12 pr-6 rounded-full border border-gray-200 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent text-gray-600"
                />
              </div>
            </div>
          )}
        </div>

        {/* Orange accent dot */}
        <div className="absolute top-1/2 right-12 w-3 h-3 bg-orange-500 rounded-full"></div>
      </div>

      {/* Testimonials grid */}
      <div className="px-6 pb-12">
        <div className="max-w-4xl mx-auto space-y-16">
          {filteredTestimonials.map((testimonial, index) => (
            <div key={testimonial.id} className="relative">
              <div className={`${index % 2 === 0 ? 'text-left' : 'text-right'}`}>
                <h3 className={`text-4xl md:text-5xl font-normal mb-2 ${
                  index === 0 ? 'text-black' : 'text-gray-400'
                }`}>
                  {testimonial.name}
                </h3>
                <p className="text-gray-600 text-lg mb-4 max-w-lg">
                  {testimonial.title}, {testimonial.description}
                </p>
                <div className="inline-block px-4 py-2 border border-gray-300 rounded-full text-sm text-gray-600">
                  ~${testimonial.hourly_rate}+ per hour
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TestimonialsClient; 