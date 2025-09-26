import {
  FaUsers,
  FaBullhorn,
  FaStore,
  FaFilm,
  FaUtensils,
  FaTshirt,
  FaDumbbell,
  FaCheckCircle,
} from "react-icons/fa";

export const metadata = {
  title: "Business Marketing Services | StreamixWorld",
  description:
    "StreamixWorld offers influencer onboarding, brand promotion campaigns, business marketing services, and line production for Telugu short films & music videos.",
  keywords: [
    "Influencer onboarding",
    "Brand promotions",
    "Business marketing",
    "Telugu line production",
    "Music video production",
    "StreamixWorld services",
  ],
  openGraph: {
    title: "Business Marketing Services | StreamixWorld",
    description:
      "Discover StreamixWorld services: influencer management, brand promotions, local business marketing, and professional line production.",
    url: "https://www.streamixworld.com/business",
    siteName: "StreamixWorld",
    images: [
      {
        url: "https://www.streamixworld.com/og-business.jpg",
        width: 1200,
        height: 630,
        alt: "StreamixWorld Business Services",
      },
    ],
  },
};

export default function BusinessPage() {
  return (
    <section className="bg-gray-50 text-gray-800">
    <div className="relative bg-gradient-to-r from-blue-700 via-indigo-700 to-purple-700 text-white overflow-hidden shadow-lg">
          <div className="absolute inset-0 bg-black/30"></div>
          <div className="relative px-8 py-16 md:px-16 flex flex-col lg:flex-row items-center gap-10">
            {/* Left Content */}
            <div className="flex-1 text-center lg:text-left">
              <div className="flex items-center justify-center lg:justify-start gap-3 mb-4">
                {/* <FaUsers className="text-4xl text-yellow-300" /> */}
                <h1 className="text-4xl md:text-5xl font-extrabold">
                  Influencer Onboarding & Management
                </h1>
              </div>
              <p className="text-lg md:text-xl text-gray-200 leading-relaxed mb-6 max-w-2xl">
                We collaborate with influencers in food, fashion, lifestyle, tech,
                and entertainment. Our onboarding ensures professional partnerships
                that deliver results for both brands and creators.
              </p>
              <ul className="space-y-2 text-left inline-block">
                <li className="flex items-center gap-2">
                  <FaCheckCircle className="text-green-400" />
                  Influencer recruitment & profile evaluation
                </li>
                <li className="flex items-center gap-2">
                  <FaCheckCircle className="text-green-400" />
                  Campaign alignment with brand goals
                </li>
                <li className="flex items-center gap-2">
                  <FaCheckCircle className="text-green-400" />
                  Structured contracts & timely payouts
                </li>
                <li className="flex items-center gap-2">
                  <FaCheckCircle className="text-green-400" />
                  Growth through consistent collaborations
                </li>
              </ul>
              <div className="mt-8">
                <a
                  href="/contact-us"
                  className="bg-yellow-400 hover:bg-yellow-500 text-blue-900 font-semibold px-6 py-3 rounded-lg shadow-lg transition"
                >
                  Work With Us
                </a>
              </div>
            </div>

            {/* Right Illustration */}
            <div className="flex-1">
              <img
                src="/images/influencers-team.svg"
                alt="Influencers working with brands"
                className="w-full max-w-md mx-auto lg:max-w-lg drop-shadow-lg"
              />
            </div>
          </div>
        </div>
      <div className="max-w-7xl mx-auto px-6 py-16 space-y-20">
        {/* HERO: Influencer Onboarding */}


        {/* Brand Promotion Campaigns */}
        <div>
          <h2 className="text-3xl font-bold text-blue-700 mb-10 text-center">
            Brand Promotion Campaigns
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                icon: <FaBullhorn className="text-3xl text-blue-600" />,
                title: "Campaign Strategy",
                desc: "Audience research, influencer selection, and creative strategy tailored to your brand goals.",
              },
              {
                icon: <FaUsers className="text-3xl text-blue-600" />,
                title: "Content Production",
                desc: "End-to-end campaign management with engaging influencer-led content.",
              },
              {
                icon: <FaCheckCircle className="text-3xl text-blue-600" />,
                title: "Performance Tracking",
                desc: "Transparent reporting and measurable KPIs for every campaign.",
              },
              {
                icon: <FaBullhorn className="text-3xl text-blue-600" />,
                title: "Ideal For",
                desc: "Product launches, seasonal promotions, and regional campaigns.",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="bg-white shadow-md hover:shadow-xl rounded-xl p-8 transition transform hover:-translate-y-2"
              >
                <div className="mb-4">{item.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Business Marketing Services */}
        <div>
          <h2 className="text-3xl font-bold text-blue-700 mb-10 text-center">
            Business Marketing Services
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: <FaUtensils className="text-3xl text-blue-600" />,
                title: "Restaurant & Café Promotions",
                desc: "Menu showcases, influencer dine-ins, reels, and customer engagement strategies.",
              },
              {
                icon: <FaTshirt className="text-3xl text-blue-600" />,
                title: "Retail & Clothing Promotions",
                desc: "Try-on campaigns, lookbooks, and creative content to drive sales and visibility.",
              },
              {
                icon: <FaDumbbell className="text-3xl text-blue-600" />,
                title: "Local Business Campaigns",
                desc: "Awareness strategies for gyms, salons, and local businesses to boost footfall.",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="bg-white shadow-md hover:shadow-xl rounded-xl p-8 transition transform hover:-translate-y-2"
              >
                <div className="mb-4">{item.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Line Production */}
        <div>
          <h2 className="text-3xl font-bold text-blue-700 mb-10 text-center">
            Line Production for Short Films & Music Videos
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                icon: <FaFilm className="text-3xl text-blue-600" />,
                title: "Full Production Support",
                desc: "From script breakdown to budgeting, casting, and scheduling.",
              },
              {
                icon: <FaCheckCircle className="text-3xl text-blue-600" />,
                title: "On-Set Management",
                desc: "Crew coordination, equipment rentals, and location scouting.",
              },
              {
                icon: <FaFilm className="text-3xl text-blue-600" />,
                title: "Post-Production",
                desc: "Editing, sound design, and color grading for professional delivery.",
              },
              {
                icon: <FaFilm className="text-3xl text-blue-600" />,
                title: "Specialization",
                desc: "Expertise in Telugu short films, music videos, and branded content.",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="bg-white shadow-md hover:shadow-xl rounded-xl p-8 transition transform hover:-translate-y-2"
              >
                <div className="mb-4">{item.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-xl p-12 shadow-lg">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Let’s Build Together
          </h2>
          <p className="max-w-2xl mx-auto mb-6 opacity-90">
            Partner with StreamixWorld to elevate your brand, grow your audience, and
            bring creative projects to life.
          </p>
          <a
            href="/contact-us"
            className="inline-block bg-white text-blue-600 font-semibold px-6 py-3 rounded-lg shadow hover:bg-gray-100 transition"
          >
            Get in Touch
          </a>
        </div>
      </div>
    </section>
  );
}
