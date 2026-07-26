import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "SYNDICATE_M — The Markin family",
    short_name: "SYNDICATE_M",
    description:
      "The family website of Kirill, Katerina, Andrey, and Alex Markin.",
    start_url: "/",
    display: "browser",
    background_color: "#efefef",
    theme_color: "#efefef",
    icons: [
      {
        src: "/favicon.ico",
        sizes: "any",
        type: "image/x-icon",
      },
    ],
  };
}
