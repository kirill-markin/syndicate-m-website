import { getTestimonials } from '@/lib/data-loader';
import TestimonialsClient from './testimonials-client';

const TestimonialsPage = () => {
  const testimonialsData = getTestimonials();
  
  return <TestimonialsClient testimonialsData={testimonialsData} />;
};

export default TestimonialsPage; 