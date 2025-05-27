import fs from 'fs';
import path from 'path';
import yaml from 'js-yaml';

// Types for our data structures
export interface TeamMember {
  id: string;
  name: string;
  bio: string;
  social_links: Array<{
    platform: string;
    url: string;
  }>;
  photo: string;
}

export interface Testimonial {
  id: string;
  name: string;
  title: string;
  description: string;
  hourly_rate: number;
  featured: boolean;
}

export interface SiteConfig {
  site: {
    name: string;
    tagline: string;
    description: string;
    navigation: Array<{
      label: string;
      href: string;
    }>;
    footer: {
      copyright: string;
      update_text: string;
    };
    homepage: {
      hero: {
        title: string;
        subtitle: string;
        description: string;
      };
      testimonials_section: {
        title: string;
        subtitle: string;
        cta_text: string;
        cta_link: string;
      };
    };
    social_platforms: Record<string, {
      name: string;
      icon: string;
    }>;
  };
}

export interface TestimonialsData {
  testimonials: Testimonial[];
  page_config: {
    title: string;
    subtitle: string;
    search_enabled: boolean;
    search_placeholder: string;
  };
}

export interface TeamMembersData {
  members: TeamMember[];
}

// Data loader functions
const getDataPath = (filename: string): string => {
  return path.join(process.cwd(), 'src', 'data', filename);
};

const loadYamlFile = <T>(filename: string): T => {
  const filePath = getDataPath(filename);
  const fileContents = fs.readFileSync(filePath, 'utf8');
  return yaml.load(fileContents) as T;
};

// Exported data loaders
export const getTeamMembers = (): TeamMembersData => {
  return loadYamlFile<TeamMembersData>('team-members.yaml');
};

export const getTestimonials = (): TestimonialsData => {
  return loadYamlFile<TestimonialsData>('testimonials.yaml');
};

export const getSiteConfig = (): SiteConfig => {
  return loadYamlFile<SiteConfig>('site-config.yaml');
};

// Helper functions for filtering and searching
export const getFeaturedTestimonials = (): Testimonial[] => {
  const data = getTestimonials();
  return data.testimonials.filter(testimonial => testimonial.featured);
};

export const searchTestimonials = (query: string): Testimonial[] => {
  const data = getTestimonials();
  const searchTerm = query.toLowerCase();
  
  return data.testimonials.filter(testimonial => 
    testimonial.name.toLowerCase().includes(searchTerm) ||
    testimonial.title.toLowerCase().includes(searchTerm) ||
    testimonial.description.toLowerCase().includes(searchTerm)
  );
};

export const getTeamMemberById = (id: string): TeamMember | undefined => {
  const data = getTeamMembers();
  return data.members.find(member => member.id === id);
}; 