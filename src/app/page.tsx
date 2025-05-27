import Link from "next/link";
import Image from "next/image";
import { getSiteConfig, getTeamMembers } from "@/lib/data-loader";
import { Route } from "next";

export default function Home() {
  const siteConfig = getSiteConfig();
  const teamData = getTeamMembers();

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
          <h1 className="text-7xl md:text-8xl lg:text-9xl font-bold mb-4 tracking-tight">
            {siteConfig.site.homepage.hero.title}
          </h1>
          <p className="text-lg mb-2">
            {siteConfig.site.homepage.hero.subtitle}
          </p>
          <p className="text-gray-600">
            {siteConfig.site.homepage.hero.description}
          </p>
        </div>

        {/* Team Members Sections */}
        <div className="max-w-4xl mx-auto space-y-16 mb-20">
          {teamData.members.map((member) => (
            <section key={member.id} className="text-center">
              <h2 className="text-2xl font-bold mb-8 uppercase tracking-wider">
                About {member.name}
              </h2>
              <p className="text-gray-700 leading-relaxed max-w-2xl mx-auto text-base">
                {member.bio}
              </p>
            </section>
          ))}
        </div>

        {/* People Section */}
        <section className="bg-gray-900 text-white rounded-lg p-8 mb-12 max-w-6xl mx-auto">
          <div className="max-w-3xl">
            <p className="text-sm mb-6 text-gray-300">
              {siteConfig.site.homepage.people_section.subtitle}
            </p>
            <div className="flex justify-between items-end">
              <h2 className="text-4xl font-bold">
                {siteConfig.site.homepage.people_section.title}
              </h2>
              <Link
                href={siteConfig.site.homepage.people_section.cta_link as Route}
                className="bg-white text-black px-6 py-2 rounded-full text-sm hover:bg-gray-100 transition-colors font-medium"
              >
                {siteConfig.site.homepage.people_section.cta_text}
              </Link>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
