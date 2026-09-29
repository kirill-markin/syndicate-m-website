export interface TeamMember {
  id: string;
  name: string;
  fullName: string;
  location: string;
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
      fullName: "Kirill Markin",
      location: "Barcelona, Spain",
      bio: "Staff Software Engineer with 12+ years of technical leadership across AI products and data platforms. Built an LLM platform that accelerated enterprise integrations 7× and helped move SOAX from 15th to 3rd in an industry benchmark.",
      social_links: [
        {
          platform: "site",
          url: "https://kirill-markin.com/"
        },
        {
          platform: "linkedin",
          url: "https://www.linkedin.com/in/kirill-markin/"
        },
        {
          platform: "insta",
          url: "https://www.instagram.com/kirill.markin.kira/"
        },
        {
          platform: "github",
          url: "https://github.com/kirill-markin"
        },
        {
          platform: "x",
          url: "https://x.com/kirill_markin_"
        }
      ],
      photo: "/images/team/kirill.jpg"
    },
    {
      id: "kate",
      name: "Katerina",
      fullName: "Katerina Markina",
      location: "Plovdiv, Bulgaria",
      bio: "Operations manager with experience across B2B SaaS, adtech, theatre, education, and charity. Builds meaningful, predictable systems for team and product growth; certified neurointegration trainer and ICF-standard coach in training.",
      social_links: [
        {
          platform: "site",
          url: "https://www.markinakv.com/"
        },
        {
          platform: "insta",
          url: "https://www.instagram.com/markinakv"
        },
        {
          platform: "linkedin",
          url: "https://www.linkedin.com/in/katerina-markina/"
        },
        {
          platform: "telegram",
          url: "https://t.me/markinakv"
        },
        {
          platform: "email",
          url: "mailto:km@markinakv.com"
        }
      ],
      photo: "/images/team/kate.jpg"
    },
    {
      id: "andrey",
      name: "Andrey",
      fullName: "Andrey Markin",
      location: "Barcelona, Spain",
      bio: "Full-Stack AI Software Engineer specializing in AI-powered web applications. With 6+ years of experience and 40+ deployed apps, he helps businesses move from idea to production using modern TypeScript and AI tooling.",
      social_links: [
        {
          platform: "site",
          url: "https://andrey-markin.com/"
        },
        {
          platform: "github",
          url: "https://github.com/Mark-Life"
        },
        {
          platform: "linkedin",
          url: "https://www.linkedin.com/in/mark-life"
        },
        {
          platform: "x",
          url: "https://x.com/mark_life_108"
        }
      ],
      photo: "/images/team/andrey.jpg"
    },
    {
      id: "alex",
      name: "Alex",
      fullName: "Alex Markin",
      location: "Copenhagen, Denmark",
      bio: "High school student in the IB Diploma Programme. Artist focused on photography, painting, and video. Specialty coffee barista at Darcy's Kaffee in Copenhagen.",
      social_links: [
        {
          platform: "site",
          url: "https://alex-markin.com/"
        },
        {
          platform: "linkedin",
          url: "https://www.linkedin.com/in/alex-markin-1b1b1b234/"
        },
        {
          platform: "insta",
          url: "https://www.instagram.com/murlexander/"
        },
        {
          platform: "github",
          url: "https://github.com/murlexander"
        },
        {
          platform: "flickr",
          url: "https://www.flickr.com/photos/194911743@N06/"
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
