import Link from "next/link";
import Image from "next/image";
import { getSiteConfig, getTeamMembers } from "@/lib/data-loader";

export default function Home() {
  const siteConfig = getSiteConfig();
  const teamData = getTeamMembers();

  return (
    <div className="min-h-screen bg-gray-50 text-black">
      {/* Header */}
      <header className="flex justify-between items-center p-6">
        <div className="text-lg font-medium">syndicate_m</div>
                  <Link href="/testimonials" className="text-lg hover:underline">
            Testimonials
        </Link>
      </header>

      {/* Polaroid Photos */}
      <div className="flex justify-center mb-8">
        <Image
          src="/polaroid-strip.png"
          alt="Team polaroid photos"
          width={600}
          height={200}
          className="object-contain"
        />
      </div>

      {/* Hero Section */}
      <main className="px-6">
        <div className="text-center mb-20">
          <h1 className="text-6xl md:text-7xl font-bold mb-4 tracking-tight">
            {siteConfig.site.homepage.hero.title}
          </h1>
          <p className="text-lg mb-2">{siteConfig.site.homepage.hero.subtitle}</p>
          <p className="text-gray-600">{siteConfig.site.homepage.hero.description}</p>
        </div>

        {/* Team Members Sections */}
        <div className="max-w-4xl mx-auto space-y-20 mb-24">
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

        {/* Testimonials Section */}
        <section className="bg-gray-900 text-white rounded-lg p-8 mb-12 max-w-6xl mx-auto">
          <div className="max-w-3xl">
            <p className="text-sm mb-6 text-gray-300">
              {siteConfig.site.homepage.testimonials_section.subtitle}
            </p>
            <div className="flex justify-between items-end">
              <h2 className="text-4xl font-bold">
                {siteConfig.site.homepage.testimonials_section.title}
              </h2>
              <Link 
                href={siteConfig.site.homepage.testimonials_section.cta_link}
                className="bg-white text-black px-6 py-2 rounded-full text-sm hover:bg-gray-100 transition-colors font-medium"
              >
                {siteConfig.site.homepage.testimonials_section.cta_text}
              </Link>
            </div>
          </div>
        </section>
      </main>

      {/* Footer with Social Links */}
      <footer className="px-6 pb-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-sm max-w-6xl mx-auto">
          {teamData.members.map((member) => (
            <div key={member.id}>
              <div className="font-bold uppercase mb-3 tracking-wider">{member.name}</div>
              <div className="space-y-1">
                {member.social_links.map((link, index) => (
                  <div key={index}>
                    <a 
                      href={link.url} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="hover:underline capitalize text-gray-700"
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
        <div className="flex justify-between items-center mt-12 pt-8 border-t border-gray-200 text-sm max-w-6xl mx-auto">
          <div className="text-gray-600">{siteConfig.site.footer.copyright}</div>
          <div className="font-bold text-lg italic">
            {siteConfig.site.footer.update_text}
          </div>
        </div>
      </footer>
    </div>
  );
}
