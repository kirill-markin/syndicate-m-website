export interface Person {
  id: string;
  name: string;
  title: string;
  description: string;
  hourly_rate: number;
  featured: boolean;
}

export interface PeopleData {
  people: Person[];
  page_config: {
    title: string;
    subtitle: string;
    search_enabled: boolean;
    search_placeholder: string;
  };
}

export const peopleData: PeopleData = {
  people: [
    {
      id: "tijana-ostojic",
      name: "Tijana Ostojic",
      title: "Operations Manager",
      description: "constantly pushing boundaries of what's possible.",
      hourly_rate: 40,
      featured: true
    },
    {
      id: "paula-espinosa-valarezo",
      name: "Paula Espinosa Valarezo",
      title: "Brand Strategist & Copywriter",
      description: "bringing fresh perspectives to every project.",
      hourly_rate: 55,
      featured: true
    },
    {
      id: "marco-rinke",
      name: "Marco Rinke",
      title: "UX Designer",
      description: "approaches challenges with optimism and determination.",
      hourly_rate: 60,
      featured: true
    },
    {
      id: "maria-podobrazhnykh",
      name: "Maria Podobrazhnykh",
      title: "Product, UX/UI designer",
      description: "approaches challenges with optimism and determination.",
      hourly_rate: 42,
      featured: true
    },
    {
      id: "caio-rossatto",
      name: "Caio Rossatto",
      title: "Design Lead",
      description: "approaches challenges with optimism and determination.",
      hourly_rate: 70,
      featured: true
    },
    {
      id: "sebastian-degenhart",
      name: "Sebastian Degenhart",
      title: "Co-founder, Strategy & Sales",
      description: "dedicated to excellence in every aspect of work.",
      hourly_rate: 75,
      featured: true
    }
  ],
  
  page_config: {
    title: "The people WE ADORE",
    subtitle: "Here are all the people from clients we've ever worked with. They're all just divine.",
    search_enabled: true,
    search_placeholder: "search by title"
  }
};

// Helper functions
export const getFeaturedPeople = (): Person[] => {
  return peopleData.people.filter(person => person.featured);
};

export const searchPeople = (query: string): Person[] => {
  const searchTerm = query.toLowerCase();
  
  return peopleData.people.filter(person => 
    person.name.toLowerCase().includes(searchTerm) ||
    person.title.toLowerCase().includes(searchTerm) ||
    person.description.toLowerCase().includes(searchTerm)
  );
}; 