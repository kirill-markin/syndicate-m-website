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
      bio: "AI Strategy Advisor and Digital Transformation Expert. Staff Software Engineer and founder with 12+ years in engineering, writing and speaking on AI and data — a Cursor IDE workflow guide with 108,000+ views, conference talks on AI web scraping, a merged PR to an OpenAI repository — and running AI tech mentorship.",
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
      bio: "Operations manager with experience across B2B SaaS, adtech, theatre, education, and charity — building work so that meaning, a predictable system, and continuous growth stand behind the team and the product. Certified neurointegration trainer, currently training as an ICF-standard coach, with charitable projects helping children.",
      social_links: [
        {
          platform: "website",
          url: "https://www.markinakv.com/"
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
      bio: "Full-stack AI development at Mark Life Ltd: AI products and apps shipped end to end — agents, RAG, chat and voice, SaaS and marketplaces, bots and data pipelines — taking a business idea to proof of concept in 3 days and MVP in 2 weeks. Also runs AI coding transformation for engineering teams and IT mentorship.",
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
      bio: "Artist, student, and specialty barista, based in Copenhagen.",
      social_links: [
        {
          platform: "website",
          url: "https://alex-markin.com/"
        },
        {
          platform: "linkedin",
          url: "https://www.linkedin.com/in/alex-markin-1b1b1b234/"
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