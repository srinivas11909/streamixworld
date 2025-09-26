import TalentContent from "../components/TalentContent";

export const metadata = {
  title: "For Talent | StreamixWorld Influencer Network",
  description:
    "Join StreamixWorld’s influencer network. Collaborate with verified brands, get paid securely, and grow your audience with meaningful opportunities.",
  keywords: [
    "StreamixWorld influencers",
    "influencer collaborations",
    "join influencer network",
    "brand deals",
    "Telugu influencers",
    "fashion influencers",
    "food influencers",
  ],
  openGraph: {
    title: "For Talent | StreamixWorld Influencer Network",
    description:
      "Collaborate, grow, and succeed with StreamixWorld’s influencer partnerships across industries.",
    url: "https://www.streamixworld.com/talent",
    siteName: "StreamixWorld",
    images: [
      {
        url: "https://www.streamixworld.com/og-talent.jpg",
        width: 1200,
        height: 630,
        alt: "StreamixWorld For Talent",
      },
    ],
  },
};

export default function TalentPage() {
  return <TalentContent />;
}
