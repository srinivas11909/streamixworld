const services = [
  {
    title: "Influencer Onboarding",
    desc: "We collaborate with influencers across niches to provide structured brand partnerships, growth opportunities, and professional support.",
    icon: "👥",
  },
  {
    title: "Brand Promotions",
    desc: "We design and manage promotional campaigns that elevate visibility, increase engagement, and drive measurable business growth.",
    icon: "📢",
  },
  {
    title: "Business Marketing Services",
    desc: "From restaurants and shops to clothing brands and local services, we create tailored campaigns to boost footfall, sales, and awareness.",
    icon: "🏬",
  },
  {
    title: "Line Production for Films & Music",
    desc: "Our dedicated team manages end-to-end production support for Telugu short films, songs, and branded video content with industry-standard professionalism.",
    icon: "🎬",
  },
];

export default function Services() {
  return (
    <section className="max-w-7xl mx-auto px-6 pb-20">
      <h2 className="text-2xl font-bold mb-8 text-center md:text-left">Our Core Interests</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {services.map((service) => (
          <div
            key={service.title}
            className="bg-white border rounded-lg p-6 shadow hover:shadow-lg transition text-center md:text-left"
          >
            <div className="text-3xl mb-3">{service.icon}</div>
            <h3 className="text-slate-800 font-semibold">{service.title}</h3>
            <p className="text-gray-600 text-sm mt-2">{service.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
