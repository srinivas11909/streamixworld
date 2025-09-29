"use client";
import { useState } from "react";
import { FaUsers, FaBullhorn, FaStore, FaFilm } from "react-icons/fa";

const tabs = [
  {
    id: "influencers",
    label: "For Influencers",
    services: [
      {
        title: "Influencer Onboarding",
        desc: "We collaborate with influencers across niches to provide structured brand partnerships, growth opportunities, and professional support.",
        icon: <FaUsers className="text-4xl text-blue-600" />,
      },
      {
        title: "Brand Promotions",
        desc: "We design and manage promotional campaigns that elevate visibility, increase engagement, and drive measurable business growth.",
        icon: <FaBullhorn className="text-4xl text-indigo-600" />,
      },
      {
        title: "Business Marketing Services",
        desc: "From restaurants and shops to clothing brands and local services, we create tailored campaigns to boost footfall, sales, and awareness.",
        icon: <FaStore className="text-4xl text-purple-600" />,
      }
    ],
  },
  {
    id: "talent",
    label: "For Talent",
    services: [
      {
        title: "Brand Promotions",
        desc: "We design and manage promotional campaigns that elevate visibility, increase engagement, and drive measurable business growth.",
        icon: <FaBullhorn className="text-4xl text-indigo-600" />,
      },
      {
        title: "Business Marketing Services",
        desc: "From restaurants and shops to clothing brands and local services, we create tailored campaigns to boost footfall, sales, and awareness.",
        icon: <FaStore className="text-4xl text-purple-600" />,
      },
    ],
  },
  {
    id: "brands",
    label: "For Brands",
    services: [
      {
        title: "Line Production for Films & Music",
        desc: "Our dedicated team manages end-to-end production support for Telugu short films, songs, and branded video content with industry-standard professionalism.",
        icon: <FaFilm className="text-4xl text-pink-600" />,
      },
      {
        title: "Brand Promotions",
        desc: "We design and manage promotional campaigns that elevate visibility, increase engagement, and drive measurable business growth.",
        icon: <FaBullhorn className="text-4xl text-indigo-600" />,
      },
      {
        title: "Business Marketing Services",
        desc: "From restaurants and shops to clothing brands and local services, we create tailored campaigns to boost footfall, sales, and awareness.",
        icon: <FaStore className="text-4xl text-purple-600" />,
      }
    ],
  },
];

export default function TabsSection() {
  const [activeTab, setActiveTab] = useState("influencers");
  const activeServices =
    tabs.find((tab) => tab.id === activeTab)?.services || [];

  return (
    <section className="relative bg-blue-50 py-16 w-full">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Title */}
        <h2 className="text-4xl font-extrabold mb-8 text-center text-blue-800">
          Our Core Interests
        </h2>

        {/* Tabs */}
        <div className="flex justify-center gap-4 mb-10 flex-wrap">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-6 py-2 rounded-full text-sm font-semibold transition shadow-sm ${
                activeTab === tab.id
                  ? "bg-blue-600 text-white shadow-md"
                  : "bg-white text-gray-700 hover:bg-gray-100"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Active Tab Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {activeServices.map((service) => (
            <div
              key={service.title}
              className="bg-white border rounded-xl p-8 shadow-lg hover:shadow-2xl transition transform hover:-translate-y-2 text-center md:text-left"
            >
              <div className="mb-4 flex justify-center md:justify-start">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-800">
                {service.title}
              </h3>
              <p className="text-gray-600 mt-3 leading-relaxed text-sm">
                {service.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
