import { Route } from "next";
import Link from "next/link";
import Image from "next/image";
import { siteConfig } from "@/data/site-config";
import { teamMembers } from "@/data/team-members";
import { Button } from "@/app/components/ui/button";
import { Card, CardContent } from "@/app/components/ui/card";

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Polaroid Photos */}
      <div className="flex justify-center mb-12">
        <Image
          src="/polaroid-strip.png"
          alt="Team polaroid photos"
          width={1000}
          height={400}
          className="object-contain"
        />
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

        {/* People Section */}
        <Card className="bg-primary text-primary-foreground rounded-lg mb-12 max-w-6xl mx-auto">
          <CardContent className="p-8">
            <div className="max-w-3xl">
              <p className="text-sm mb-6 text-primary-foreground/70">
                {siteConfig.site.homepage.people_section.subtitle}
              </p>
              <div className="flex justify-between items-end">
                <h2 className="text-4xl font-bold">
                  {siteConfig.site.homepage.people_section.title}
                </h2>
                <Button asChild variant="secondary" className="rounded-full">
                  <Link
                    href={
                      siteConfig.site.homepage.people_section.cta_link as Route
                    }
                  >
                    {siteConfig.site.homepage.people_section.cta_text}
                  </Link>
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </main>
    </div>
  );
}
