import Image from "next/image";
import { siteConfig } from "@/data/site-config";
import { teamMembers } from "@/data/team-members";
import { cn } from "@/lib/utils";

const polaroidRotations = ["-rotate-3", "rotate-2", "-rotate-1", "rotate-3"];

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Polaroid Photos */}
      <div className="flex flex-wrap items-center justify-center gap-y-10 px-6 pt-10 mb-12">
        {teamMembers.members.map((member, index) => {
          const websiteUrl = member.social_links.find(
            (link) => link.platform === "website"
          )?.url;
          return (
            <a
              key={member.id}
              href={websiteUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Visit ${member.name}'s website`}
              className={cn(
                "relative block bg-[#f6f3ea] p-3 pb-14 shadow-lg transition-transform duration-300 hover:z-10 hover:rotate-0 hover:scale-105",
                polaroidRotations[index % polaroidRotations.length],
                index > 0 && "md:-ml-6"
              )}
            >
              <Image
                src={member.photo}
                alt={`Polaroid photo of ${member.name}`}
                width={400}
                height={400}
                className="aspect-square w-36 object-cover md:w-52"
              />
            </a>
          );
        })}
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
              <h2 className="text-2xl font-bold mb-8 uppercase tracking-wider">
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
