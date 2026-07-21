import type { CSSProperties } from "react";
import Image from "next/image";
import { siteConfig } from "@/data/site-config";
import { teamMembers } from "@/data/team-members";

// Click zones over each polaroid in the strip, as percentages of the image
const polaroidZones: Record<string, CSSProperties> = {
  kirill: { left: "5%", top: "10%", width: "22.3%", height: "77%" },
  kate: { left: "27.7%", top: "1%", width: "22.1%", height: "75%" },
  andrey: { left: "49.8%", top: "12.9%", width: "21.2%", height: "76.3%" },
  alex: { left: "71%", top: "3.8%", width: "23.3%", height: "84.5%" },
};

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Polaroid Photos */}
      <div className="flex justify-center mb-12">
        <div className="relative">
          <Image
            src="/polaroid-strip.png"
            alt="Team polaroid photos"
            width={1000}
            height={400}
            className="object-contain"
          />
          {teamMembers.members.map((member) => {
            const websiteUrl = member.social_links.find(
              (link) => link.platform === "website"
            )?.url;
            const zone = polaroidZones[member.id];
            if (!websiteUrl || !zone) return null;
            return (
              <a
                key={member.id}
                href={websiteUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Visit ${member.name}'s website`}
                className="absolute focus-visible:outline-2 focus-visible:outline-ring"
                style={zone}
              />
            );
          })}
        </div>
      </div>

      {/* Hero Section */}
      <main className="px-6">
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-8xl lg:text-9xl font-bold mb-4 tracking-tight">
            {siteConfig.site.homepage.hero.title}
          </h1>
          <div className="max-w-3xl py-16 mx-auto">
            <p className="text-lg mb-2">
              {siteConfig.site.homepage.hero.subtitle}
            </p>
            <p className="text-muted-foreground">
              {siteConfig.site.homepage.hero.description}
            </p>
          </div>
        </div>

        {/* Team Members Sections */}
        <div className="max-w-4xl mx-auto space-y-16 mb-20">
          {teamMembers.members.map((member) => (
            <section key={member.id} className="text-center">
              <h2 className="text-2xl font-bold mb-6 uppercase tracking-wider">
                About {member.name}
              </h2>
              <p className="text-muted-foreground leading-relaxed max-w-2xl mx-auto text-base">
                {member.bio}
              </p>
            </section>
          ))}
        </div>
      </main>
    </div>
  );
}
