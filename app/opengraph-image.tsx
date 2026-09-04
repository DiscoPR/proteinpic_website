import { ImageResponse } from "next/og";

export const alt = "Protein Pic: snap a meal, hit your protein";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#F4EFE6",
          padding: "64px 72px",
          fontFamily: "Georgia, serif",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 16,
            color: "#1A1612",
            fontSize: 28,
            fontFamily: "sans-serif",
            fontWeight: 600,
          }}
        >
          <div
            style={{
              width: 48,
              height: 48,
              borderRadius: 12,
              background: "#0B7F7B",
            }}
          />
          Protein Pic
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
          <div
            style={{
              fontSize: 64,
              lineHeight: 1.05,
              color: "#1A1612",
              fontWeight: 650,
              maxWidth: 900,
            }}
          >
            Protect the muscle. Track protein, not every calorie.
          </div>
          <div
            style={{
              fontSize: 28,
              color: "#5E574E",
              maxWidth: 780,
              fontFamily: "sans-serif",
            }}
          >
            Snap a meal. Get a protein count. Hit one daily target.
          </div>
        </div>
        <div
          style={{
            display: "flex",
            color: "#0B7F7B",
            fontSize: 22,
            fontFamily: "sans-serif",
            fontWeight: 600,
          }}
        >
          proteinpic.app \u00b7 iPhone
        </div>
      </div>
    ),
    { ...size },
  );
}
