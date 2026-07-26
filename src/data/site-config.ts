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
      people_section: {
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

export const siteConfig: SiteConfig = {
  site: {
    name: "SYNDICATE_M",
    tagline: "This is our family site",
    description: "We have no idea what it's for",
    
    navigation: [
      {
        label: "Home",
        href: "/"
      },
      {
        label: "people",
        href: "/people"
      }
    ],
    
    footer: {
      copyright: "2026",
      update_text: "stay updated"
    },
    
    homepage: {
      hero: {
        title: "SYNDICATE_M",
        subtitle: "This is our family site",
        description: "We have no idea what it's for"
      },

      people_section: {
        title: "PEOPLE",
        subtitle: "People we've worked with. We vouch for all of them.",
        cta_text: "all cool people",
        cta_link: "/people"
      }
    },
    
    social_platforms: {
      linkedin: {
        name: "LinkedIn",
        icon: "linkedin"
      },
      instagram: {
        name: "Instagram",
        icon: "instagram"
      },
      site: {
        name: "Site",
        icon: "website"
      }
    }
  }
};
