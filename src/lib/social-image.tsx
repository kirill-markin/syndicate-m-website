import { ImageResponse } from "next/og";

export const socialImageAlt =
  "SYNDICATE_M — Kirill, Katerina, Andrey, and Alex Markin";
export const socialImageSize = { width: 1200, height: 630 };
export const socialImageContentType = "image/png";

export function createSocialImage() {
  return new ImageResponse(
    (
      <div
        style={{
          alignItems: "stretch",
          background: "#efefef",
          color: "#111111",
          display: "flex",
          flexDirection: "column",
          height: "100%",
          justifyContent: "space-between",
          padding: "64px 72px",
          width: "100%",
        }}
      >
        <div
          style={{
            display: "flex",
            fontFamily: "monospace",
            fontSize: 30,
            justifyContent: "space-between",
          }}
        >
          <span>syndicate_m</span>
          <span>family site</span>
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div
            style={{
              fontFamily: "sans-serif",
              fontSize: 108,
              fontWeight: 700,
              letterSpacing: "-5px",
              lineHeight: 1,
            }}
          >
            SYNDICATE_M
          </div>
          <div
            style={{
              display: "flex",
              fontFamily: "sans-serif",
              fontSize: 34,
              marginTop: 36,
            }}
          >
            Kirill · Katerina · Andrey · Alex
          </div>
        </div>
        <div
          style={{
            alignSelf: "flex-start",
            background: "#efff72",
            borderRadius: 999,
            display: "flex",
            fontFamily: "monospace",
            fontSize: 26,
            padding: "16px 28px",
          }}
        >
          the Markin family
        </div>
      </div>
    ),
    socialImageSize
  );
}
