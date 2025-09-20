export async function GET() {
  const data = {
    title: "About StreamixWorld",
    description:
      "A digital marketing and video services company dedicated to building meaningful connections between brands and audiences. With expertise in influencer partnerships, promotional campaigns, and professional production management.",
    services: [
      {
        title: "Influencer Onboarding",
        desc: "We collaborate with influencers across niches to provide structured brand partnerships, growth opportunities, and professional support.",
        icon: "👤",
        image: null, // optional image (can be /images/influencer.png)
      },
      {
        title: "Brand Promotions",
        desc: "We design and manage promotional campaigns that elevate brand visibility, increase engagement, and drive measurable business growth.",
        icon: "📢",
        image: null,
      },
      {
        title: "Business Marketing Services",
        desc: "From restaurants and shops to clothing brands and local services, we create tailored campaigns to boost footfall, sales, and awareness.",
        icon: "🏬",
        image: null,
      },
      {
        title: "Line Production for Films & Music",
        desc: "Our dedicated team manages end-to-end production support for Telugu short films, songs, and branded video content with industry-standard professionalism.",
        icon: "🎬",
        image: null,
      },
    ],
  };

  return new Response(JSON.stringify(data), {
    status: 200,
    headers: { "Content-Type": "application/json" },
  });
}
