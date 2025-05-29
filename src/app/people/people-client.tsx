"use client";

import { useState, useMemo } from "react";
import { PeopleData } from "@/data/people";
import { Card, CardContent } from "@/app/components/ui/card";
import { Badge } from "@/app/components/ui/badge";
import { Search } from "lucide-react";

interface PeopleClientProps {
  peopleData: PeopleData;
  // siteConfig: SiteConfig;
  // teamData: TeamMembersData;
}

const PeopleClient = ({ peopleData }: PeopleClientProps) => {
  const [searchQuery, setSearchQuery] = useState("");

  // Filter people based on search query
  const filteredPeople = useMemo(() => {
    if (!searchQuery.trim()) {
      return peopleData.people;
    }

    const query = searchQuery.toLowerCase();
    return peopleData.people.filter(
      (person) =>
        person.name.toLowerCase().includes(query) ||
        person.title.toLowerCase().includes(query) ||
        person.description.toLowerCase().includes(query)
    );
  }, [searchQuery, peopleData.people]);

  return (
    <div className="min-h-screen">
      {/* Header section */}
      <div className="relative">
        {/* Top navigation */}
        {/* <Header /> */}

        {/* Hero section */}
        <div className="text-center py-16 px-6">
          <h1 className="text-5xl md:text-6xl font-normal mb-4 italic text-muted-foreground">
            The people
          </h1>
          <h2 className="text-6xl md:text-7xl font-bold mb-8 tracking-tight">
            WE ADORE
          </h2>
          <p className="text-muted-foreground text-lg max-w-md mx-auto mb-12">
            {peopleData.page_config.subtitle}
          </p>

          {/* Search bar */}
          {peopleData.page_config.search_enabled && (
            <div className="max-w-md mx-auto relative">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                <input
                  type="text"
                  placeholder={peopleData.page_config.search_placeholder}
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full py-2 pl-12 pr-6 rounded-full border border-input bg-background focus:outline-none focus:ring-2 focus:ring-ring focus:border-transparent text-foreground placeholder:text-muted-foreground"
                />
              </div>
            </div>
          )}
        </div>
      </div>

      {/* People grid */}
      <div className="px-6 pb-12">
        <div className="max-w-4xl mx-auto space-y-8">
          {filteredPeople.map((person) => (
            <Card
              key={person.id}
              className="border-none shadow-none bg-transparent"
            >
              <CardContent className="p-6">
                <div className="text-left">
                  <h3 className="text-4xl md:text-5xl font-normal mb-2">
                    {person.name}
                  </h3>
                  <p className="text-muted-foreground text-lg mb-4 max-w-lg">
                    {person.title}, {person.description}
                  </p>
                  <Badge variant="outline" className="rounded-full">
                    ~${person.hourly_rate}+ per hour
                  </Badge>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Footer */}
      {/* <Footer teamData={teamData} siteConfig={siteConfig} /> */}
    </div>
  );
};

export default PeopleClient;
