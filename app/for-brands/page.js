import {
  FaBullhorn,
  FaVideo,
  FaChartLine,
  FaHandshake,
  FaUsers,
  FaUtensils,
  FaTshirt,
  FaStore,
  FaRocket,
  FaCheckCircle,
} from "react-icons/fa";

export const metadata = {
  title: "For Brands | StreamixWorld",
  description:
    "Promote your brand with StreamixWorld. We design influencer campaigns, professional content, and measurable marketing strategies tailored for growth.",
  keywords: [
    "brand promotion",
    "influencer marketing",
    "video content",
    "Telugu brand campaigns",
    "retail marketing",
    "product launch campaigns",
    "StreamixWorld",
  ],
  openGraph: {
    title: "For Brands | StreamixWorld",
    description:
      "StreamixWorld helps businesses grow with influencer collaborations, professional content, and targeted marketing campaigns.",
    url: "https://www.streamixworld.com/brands",
    siteName: "StreamixWorld",
    images: [
      {
        url: "https://www.streamixworld.com/og-brands.jpg",
        width: 1200,
        height: 630,
        alt: "StreamixWorld For Brands",
      },
    ],
  },
};

export default function BrandsPage() {
  return (
    <section className="bg-gray-50 text-gray-800">
                {/* Hero Section */}
        <div className="relative bg-gradient-to-r from-blue-700 via-indigo-700 to-purple-700 text-white shadow-lg overflow-hidden">
          <div className="absolute inset-0 bg-black/30"></div>
          <div className="relative px-8 py-20 text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-extrabold mb-4">
              Promote Your Brand with Confidence
            </h1>
            <p className="text-lg md:text-xl text-gray-200 leading-relaxed">
              At StreamixWorld, we help businesses build meaningful connections
              through influencer collaborations and professional video content.
              Our campaigns deliver visibility, engagement, and measurable growth.
            </p>
            <div className="mt-8">
              <a
                href="/contact-us"
                className="bg-yellow-400 hover:bg-yellow-500 text-blue-900 font-semibold px-6 py-3 rounded-lg shadow-lg transition"
              >
                Start Your Campaign Today
              </a>
            </div>
          </div>
        </div>
      <div className="max-w-7xl mx-auto px-6 py-16 space-y-20">


        {/* Why Partner */}
        <div>
          <h2 className="text-3xl font-bold text-blue-700 mb-10 text-center">
            Why Partner with StreamixWorld?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: <FaUsers className="text-3xl text-blue-600" />,
                title: "Targeted Campaigns",
                desc: "Reach the right audience with carefully selected influencers.",
              },
              {
                icon: <FaVideo className="text-3xl text-blue-600" />,
                title: "Professional Content",
                desc: "High-quality videos, photos, and branded creatives.",
              },
              {
                icon: <FaHandshake className="text-3xl text-blue-600" />,
                title: "Transparent Processes",
                desc: "Clear communication, structured contracts, and reports.",
              },
              {
                icon: <FaBullhorn className="text-3xl text-blue-600" />,
                title: "Local Expertise",
                desc: "Proven success in Telugu & regional campaigns.",
              },
              {
                icon: <FaChartLine className="text-3xl text-blue-600" />,
                title: "Measurable Results",
                desc: "Analytics and performance tracking for every campaign.",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="bg-white shadow-md hover:shadow-xl rounded-xl p-8 transition transform hover:-translate-y-2 text-center"
              >
                <div className="mb-4">{item.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Campaign Process */}
        <div className="bg-blue-50 rounded-xl p-10 shadow-inner">
          <h2 className="text-3xl font-bold text-blue-700 mb-10 text-center">
            Our Campaign Process
          </h2>
          <ol className="grid grid-cols-1 md:grid-cols-5 gap-6">
            {[
              "Consultation & Strategy – Understand brand goals and audience.",
              "Influencer Selection – Match with aligned creators.",
              "Content Creation – Authentic, engaging brand content.",
              "Campaign Execution – From scheduling to publishing.",
              "Performance Tracking – Reports on reach, engagement & ROI.",
            ].map((step, i) => (
              <li
                key={i}
                className="bg-white shadow-md hover:shadow-xl p-6 rounded-xl text-center transition"
              >
                <span className="block text-3xl font-extrabold text-blue-600 mb-2">
                  {i + 1}
                </span>
                <p className="text-gray-700">{step}</p>
              </li>
            ))}
          </ol>
        </div>

        {/* Industries We Serve */}
        <div>
          <h2 className="text-3xl font-bold text-blue-700 mb-10 text-center">
            Industries We Serve
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              {
                icon: <FaUtensils className="text-3xl text-blue-600" />,
                title: "Restaurants & Cafés",
                desc: "Footfall growth with showcases, visits & reels.",
              },
              {
                icon: <FaTshirt className="text-3xl text-blue-600" />,
                title: "Retail & Clothing Brands",
                desc: "Collection highlights, seasonal promotions.",
              },
              {
                icon: <FaStore className="text-3xl text-blue-600" />,
                title: "Shops & Local Services",
                desc: "Awareness & customer visits with influencer outreach.",
              },
              {
                icon: <FaRocket className="text-3xl text-blue-600" />,
                title: "Product Launches",
                desc: "Generate excitement & visibility for new products.",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="bg-white shadow-md hover:shadow-xl rounded-xl p-8 transition transform hover:-translate-y-2 text-center"
              >
                <div className="mb-4">{item.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Deliverables */}
        <div className="bg-white shadow-md rounded-xl p-10">
          <h2 className="text-3xl font-bold text-blue-700 mb-6 text-center">
            Deliverables You Can Expect
          </h2>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 text-gray-700">
            <li className="flex items-center gap-2">
              <FaCheckCircle className="text-green-500" /> Short-form videos
              (Instagram Reels, YouTube Shorts, etc.)
            </li>
            <li className="flex items-center gap-2">
              <FaCheckCircle className="text-green-500" /> Influencer-led reviews
              & testimonials
            </li>
            <li className="flex items-center gap-2">
              <FaCheckCircle className="text-green-500" /> Professional product
              photography
            </li>
            <li className="flex items-center gap-2">
              <FaCheckCircle className="text-green-500" /> Campaign-specific
              landing pages & creatives
            </li>
            <li className="flex items-center gap-2">
              <FaCheckCircle className="text-green-500" /> Detailed reports &
              insights
            </li>
          </ul>
        </div>

        {/* CTA */}
        <div className="text-center bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-xl p-12 shadow-lg">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Your Growth, Our Priority
          </h2>
          <p className="max-w-2xl mx-auto mb-6 opacity-90">
            At StreamixWorld, we go beyond simple promotions—we create experiences
            that resonate with your audience and strengthen your brand identity.
          </p>
          <a
            href="/contact-us"
            className="inline-block bg-white text-blue-600 font-semibold px-6 py-3 rounded-lg shadow hover:bg-gray-100 transition"
          >
            Start Your Campaign Today
          </a>
        </div>
      </div>
    </section>
  );
}
