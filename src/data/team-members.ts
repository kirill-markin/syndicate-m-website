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

export interface TeamMembersData {
  members: TeamMember[];
}

export const teamMembers: TeamMembersData = {
  members: [
    {
      id: "kirill",
      name: "Kirill",
      bio: "Over 12 years of experience in data engineering and leadership roles, with a strong background in founding startups, B2B, and SaaS: HR tech, business automation and data extraction software. Accelerated query performance by 5x on the system with over 3 billion rows of data daily and boosted proxy speed for data collection company from 15th to the Top 4 globally.",
      social_links: [
        {
          platform: "website",
          url: "https://kirill-markin.com/"
        },
        {
          platform: "linkedin",
          url: "https://www.linkedin.com/in/kirill-markin/"
        },
        {
          platform: "instagram",
          url: "https://www.instagram.com/kirill.markin.kira/"
        },
        {
          platform: "github",
          url: "https://github.com/kirill-markin"
        },
        {
          platform: "X",
          url: "https://x.com/kirill_markin_"
        }
      ],
      photo: "/images/team/kirill.jpg"
    },
    {
      id: "kate",
      name: "Katerina",
      bio: "B2B SaaS, leading operations and strategic projects that help teams collaborate effectively and grow.",
      social_links: [
        {
          platform: "website",
          url: "https://www.katerina-markina.com/"
        },
        {
          platform: "linkedin",
          url: "https://www.linkedin.com/in/katerina-markina/"
        },
        {
          platform: "telegram",
          url: "https://t.me//markinakv"
        },
        {
          platform: "email",
          url: "mailto:markinakv@gmail.com"
        }
      ],
      photo: "/images/team/kate.jpg"
    },
    {
      id: "andrey",
      name: "Andrey",
      bio: "Full-Stack AI Software Engineer and Consultant, helping businesses integrate AI and web technologies, specializing in custom AI solutions, pipelines, and automation.",
      social_links: [
        {
          platform: "website",
          url: "https://andrey-markin.com/"
        },
        {
          platform: "linkedin",
          url: "https://www.linkedin.com/in/mark-life"
        },
        {
          platform: "X",
          url: "https://x.com/mark_life_108"
        }
      ],
      photo: "/images/team/andrey.jpg"
    },
    {
      id: "alex",
      name: "Alex",
      bio: "IB high school student at Nyborg Gymnasium, Denmark. Future Liberal Arts entrant (Poli sci + literature studies); interested in populism, authoritarianism, and Arctic policy.",
      social_links: [
        {
          platform: "website",
          url: "https://alexander-markin.com/"
        },
        {
          platform: "linkedin",
          url: "https://www.linkedin.com/in/alexander-markin-1b1b1b234"
        },
        {
          platform: "instagram",
          url: "https://www.instagram.com/murlexander/"
        }
      ],
      photo: "/images/team/alex.jpg"
    }
  ]
};

// Helper functions
export const getTeamMemberById = (id: string): TeamMember | undefined => {
  return teamMembers.members.find(member => member.id === id);
}; 