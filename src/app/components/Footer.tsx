import { TeamMembersData } from "@/data/team-members";
import { SiteConfig } from "@/data/site-config";

interface FooterProps {
  teamData: TeamMembersData;
  siteConfig: SiteConfig;
}

export default function Footer({ teamData, siteConfig }: FooterProps) {
  return (
    <footer className="px-6 pb-8">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-sm max-w-6xl mx-auto">
        {teamData.members.map((member) => (
          <div key={member.id}>
            <div className="font-bold uppercase mb-3 tracking-wider">
              {member.name}
            </div>
            <div className="space-y-1">
              {member.social_links.map((link, index) => (
                <div key={index}>
                  <a
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:underline capitalize text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {link.platform}
                  </a>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Bottom Footer */}
      <div className="flex justify-between items-center mt-12 pt-8 border-t border-border text-sm max-w-6xl mx-auto">
        <div className="text-muted-foreground">
          {siteConfig.site.footer.copyright}
        </div>
        <div className="font-bold text-lg italic">
          {siteConfig.site.footer.update_text}
        </div>
      </div>
    </footer>
  );
}
