import type { CSSProperties } from "react";
import { Route } from "next";
import Link from "next/link";
import Image from "next/image";
import { siteConfig } from "@/data/site-config";
import { teamMembers } from "@/data/team-members";
import { Button } from "@/app/components/ui/button";
import { Card, CardContent } from "@/app/components/ui/card";
import { absoluteUrl } from "@/lib/site-url";

// Click zones over each polaroid in the strip, as percentages of the image
const polaroidZones: Record<string, CSSProperties> = {
  kirill: { left: "5%", top: "10%", width: "22.3%", height: "77%" },
  kate: { left: "27.7%", top: "1%", width: "22.1%", height: "75%" },
  andrey: { left: "49.8%", top: "12.9%", width: "21.2%", height: "76.3%" },
  alex: { left: "71%", top: "3.8%", width: "23.3%", height: "84.5%" },
};

export default function Home() {
  const familyJsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        "@id": `${absoluteUrl("/")}#website`,
        url: absoluteUrl("/"),
        name: siteConfig.site.name,
        alternateName: "syndicate_m",
        description:
          "The family website of Kirill, Katerina, Andrey, and Alex Markin.",
        inLanguage: "en",
      },
      {
        "@type": "ItemList",
        "@id": `${absoluteUrl("/")}#family`,
        name: "The Markin family",
        numberOfItems: teamMembers.members.length,
        itemListElement: teamMembers.members.map((member, index) => {
          const personalSite = member.social_links.find(
            (link) => link.platform === "site"
          )?.url;
          const sameAs = member.social_links
            .map((link) => link.url)
            .filter((url) => url.startsWith("http"));

          return {
            "@type": "ListItem",
            position: index + 1,
            item: {
              "@type": "Person",
              name: member.fullName,
              description: member.bio,
              homeLocation: {
                "@type": "Place",
                name: member.location,
              },
              ...(personalSite ? { url: personalSite } : {}),
              sameAs,
            },
          };
        }),
      },
    ],
  };

  return (
    <div className="min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(familyJsonLd).replace(/</g, "\\u003c"),
        }}
      />
      <div className="md:flex md:min-h-[calc(100svh-4.25rem)] md:flex-col">
        {/* Polaroid Photos */}
        <div className="mb-6 flex justify-center md:mb-12">
          <div className="relative">
            <Image
              src="/polaroid-strip.png"
              alt="Polaroid portraits of Kirill, Katerina, Andrey, and Alex Markin"
              width={1000}
              height={400}
              sizes="(max-width: 1000px) 100vw, 1000px"
              priority
              className="object-contain"
            />
            {teamMembers.members.map((member) => {
              const websiteUrl = member.social_links.find(
                (link) => link.platform === "site"
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
        <section className="mb-10 px-6 text-center md:mb-0 md:flex md:flex-1 md:flex-col">
          <h1 className="text-4xl min-[360px]:text-5xl md:text-8xl lg:text-9xl font-bold mb-4 tracking-tight md:mb-0">
            {siteConfig.site.homepage.hero.title}
          </h1>
          <div className="mx-auto max-w-3xl pb-8 pt-4 md:flex md:w-full md:flex-1 md:flex-col md:justify-center md:py-4">
            <p className="text-base leading-relaxed">
              {siteConfig.site.homepage.hero.subtitle}
            </p>
            <p className="text-base leading-relaxed">
              {siteConfig.site.homepage.hero.description}
            </p>
          </div>
        </section>
      </div>

      <main className="px-6">
        {/* Team Members Sections */}
        <div className="max-w-4xl mx-auto space-y-16 mb-20">
          {teamMembers.members.map((member) => (
            <section key={member.id} className="text-center">
              <h2 className="text-2xl font-bold mb-3 uppercase tracking-wider">
                {member.name}
              </h2>
              <p className="font-system mb-4 text-sm text-muted-foreground">
                {member.location}
              </p>
              <p className="leading-relaxed max-w-2xl mx-auto mb-4 text-base">
                {member.bio}
              </p>
              <div className="flex flex-wrap justify-center gap-x-4 gap-y-2 sm:gap-x-5">
                {member.social_links.map((link) => (
                  <a
                    key={link.platform}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-system text-sm lowercase text-muted-foreground underline decoration-current underline-offset-4 transition-colors hover:text-link-accent"
                  >
                    {link.platform}
                  </a>
                ))}
              </div>
            </section>
          ))}
        </div>

        {/* People Section */}
        <Card className="bg-primary text-primary-foreground rounded-lg mb-12 max-w-6xl mx-auto py-0">
          <CardContent className="p-6 md:p-8">
            <div className="grid w-full grid-cols-1 items-center gap-6 sm:grid-cols-[minmax(0,1fr)_auto]">
              <div className="min-w-0">
                <h2 className="text-2xl font-bold uppercase tracking-wider">
                  {siteConfig.site.homepage.people_section.title}
                </h2>
                <p className="mt-3 text-base leading-relaxed text-primary-foreground/80">
                  {siteConfig.site.homepage.people_section.subtitle}
                </p>
              </div>
              <Button
                asChild
                variant="secondary"
                className="max-w-full justify-self-end rounded-full"
              >
                <Link
                  href={
                    siteConfig.site.homepage.people_section.cta_link as Route
                  }
                >
                  {siteConfig.site.homepage.people_section.cta_text} &gt;
                </Link>
              </Button>
            </div>
          </CardContent>
        </Card>
      </main>
    </div>
  );
}
