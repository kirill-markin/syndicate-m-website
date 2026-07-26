import { TeamMembersData } from "@/data/team-members";
import { SiteConfig } from "@/data/site-config";
import CopyAsMarkdown from "./CopyAsMarkdown";

interface FooterProps {
  teamData: TeamMembersData;
  siteConfig: SiteConfig;
}

function buildMarkdown(teamData: TeamMembersData, siteConfig: SiteConfig) {
  const lines = [
    `# ${siteConfig.site.name}`,
    "",
    siteConfig.site.tagline,
    siteConfig.site.description,
    "",
  ];
  for (const member of teamData.members) {
    lines.push(`## ${member.name}`, "");
    if (member.location) {
      lines.push(member.location, "");
    }
    if (member.bio) {
      lines.push(member.bio, "");
    }
    for (const link of member.social_links ?? []) {
      lines.push(`- ${link.platform}: ${link.url}`);
    }
    lines.push("");
  }
  return lines.join("\n");
}

export default function Footer({ teamData, siteConfig }: FooterProps) {
  return (
    <footer className="font-system px-6 pb-8">
      {/* Bottom Footer */}
      <div className="mx-auto grid max-w-6xl grid-cols-2 items-center gap-x-0 gap-y-3 border-t border-border pt-8 text-sm text-muted-foreground min-[420px]:grid-cols-[1fr_auto_1fr] min-[500px]:gap-x-4">
        <div className="col-span-2 col-start-1 row-start-1 justify-self-center min-[420px]:col-span-1 min-[420px]:col-start-2">
          <CopyAsMarkdown markdown={buildMarkdown(teamData, siteConfig)} />
        </div>
        <span className="col-start-1 row-start-2 justify-self-start min-[420px]:row-start-1">
          {siteConfig.site.footer.copyright}
        </span>
        <div className="col-start-2 row-start-2 justify-self-end min-[420px]:col-start-3 min-[420px]:row-start-1">
          {siteConfig.site.footer.update_text}
        </div>
      </div>
    </footer>
  );
}
