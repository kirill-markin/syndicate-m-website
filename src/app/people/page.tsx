import type { Metadata } from "next";
import { peopleData } from "@/data/people";
import { absoluteUrl } from "@/lib/site-url";
import PeopleClient from "./people-client";

const description =
  "Friends, collaborators, and clients recommended by the Markin family.";

export const metadata: Metadata = {
  title: "People we adore",
  description,
  alternates: {
    canonical: "/people/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "/people/",
    siteName: "SYNDICATE_M",
    title: "People we adore | SYNDICATE_M",
    description,
  },
  twitter: {
    card: "summary_large_image",
    title: "People we adore | SYNDICATE_M",
    description,
  },
};

const PeoplePage = () => {
  const peopleJsonLd = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    url: absoluteUrl("/people/"),
    name: "People we adore",
    description,
    mainEntity: {
      "@type": "ItemList",
      numberOfItems: peopleData.people.length,
      itemListElement: peopleData.people.map((person, index) => ({
        "@type": "ListItem",
        position: index + 1,
        item: {
          "@type": "Person",
          name: person.name,
          jobTitle: person.title,
          description: person.description,
        },
      })),
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(peopleJsonLd).replace(/</g, "\\u003c"),
        }}
      />
      <PeopleClient peopleData={peopleData} />
    </>
  );
};

export default PeoplePage;
