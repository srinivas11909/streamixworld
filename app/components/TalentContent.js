"use client";

import { useState } from "react";
import {
  FaHandshake,
  FaMoneyBillWave,
  FaChartLine,
  FaLightbulb,
  FaBullhorn,
  FaUtensils,
  FaTshirt,
  FaLaptop,
  FaMusic,
  FaGlobe,
  FaCheckCircle,
} from "react-icons/fa";

export default function TalentContent() {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      q: "Do I need a minimum number of followers to join?",
      a: "We work with influencers of all sizes, from nano to macro. Engagement quality matters more than just follower count.",
    },
    {
      q: "How will I be paid?",
      a: "Payments are processed securely and directly, according to the agreed terms for each campaign.",
    },
    {
      q: "Do I have to work exclusively with StreamixWorld?",
      a: "No. We do not require exclusivity. You are free to explore other collaborations as well.",
    },
  ];

  return (
    <section className="bg-gray-50 text-gray-800">
                {/* Hero Section */}
        <div className="relative bg-gradient-to-r from-blue-700 via-indigo-700 to-purple-700 text-white  shadow-lg overflow-hidden">
          <div className="absolute inset-0 bg-black/30"></div>
          <div className="relative px-8 py-20 text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-extrabold mb-4">
              Collaborate. Grow. Succeed.
            </h1>
            <p className="text-lg md:text-xl text-gray-200 leading-relaxed">
              At StreamixWorld, influencers are more than content creators—they are
              partners in building powerful brand stories. Work with trusted brands,
              grow your reach, and get rewarded fairly.
            </p>
            <div className="mt-8">
              <a
                href="/contact-us"
                className="bg-yellow-400 hover:bg-yellow-500 text-blue-900 font-semibold px-6 py-3 rounded-lg shadow-lg transition"
              >
                Apply to Join
              </a>
            </div>
          </div>
        </div>
      <div className="max-w-7xl mx-auto px-6 py-16 space-y-20">


        {/* Why Join */}
        <div>
          <h2 className="text-3xl font-bold text-blue-700 mb-10 text-center">
            Why Join StreamixWorld?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: <FaHandshake className="text-3xl text-blue-600" />,
                title: "Verified Collaborations",
                desc: "Work with trusted companies across industries.",
              },
              {
                icon: <FaMoneyBillWave className="text-3xl text-blue-600" />,
                title: "Secure Payments",
                desc: "Professional contracts and guaranteed payouts.",
              },
              {
                icon: <FaChartLine className="text-3xl text-blue-600" />,
                title: "Growth Opportunities",
                desc: "Regular campaigns and long-term partnerships.",
              },
              {
                icon: <FaLightbulb className="text-3xl text-blue-600" />,
                title: "Creative Support",
                desc: "Guidance to improve content quality and engagement.",
              },
              {
                icon: <FaBullhorn className="text-3xl text-blue-600" />,
                title: "Exposure",
                desc: "Collaborations that expand your reach to wider audiences.",
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

        {/* Who We Work With */}
        <div className="bg-blue-50 rounded-xl p-10 shadow-inner">
          <h2 className="text-3xl font-bold text-blue-700 mb-6 text-center">
            Who We Work With
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-6 text-center">
            {[
              { icon: <FaUtensils />, label: "Food & Restaurants" },
              { icon: <FaTshirt />, label: "Fashion & Lifestyle" },
              { icon: <FaLaptop />, label: "Technology & Gadgets" },
              { icon: <FaMusic />, label: "Entertainment & Music" },
              { icon: <FaGlobe />, label: "Regional Content" },
            ].map((item, i) => (
              <div
                key={i}
                className="bg-white shadow hover:shadow-lg rounded-lg p-6 flex flex-col items-center transition"
              >
                <div className="text-3xl text-blue-600 mb-3">{item.icon}</div>
                <p className="text-gray-700 font-medium">{item.label}</p>
              </div>
            ))}
          </div>
        </div>

        {/* How It Works */}
        <div>
          <h2 className="text-3xl font-bold text-blue-700 mb-10 text-center">
            How It Works
          </h2>
          <ol className="grid grid-cols-1 md:grid-cols-5 gap-6">
            {[
              "Apply Online – Submit your details and portfolio.",
              "Profile Review – We evaluate engagement and niche.",
              "Campaign Match – Connect with aligned brands.",
              "Content Creation – Collaborate and create content.",
              "Get Paid – Guaranteed and timely payouts.",
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

        {/* Requirements */}
        <div className="bg-white shadow-md rounded-xl p-10">
          <h2 className="text-3xl font-bold text-blue-700 mb-6 text-center">
            Requirements for Influencers
          </h2>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 text-gray-700">
            <li className="flex items-center gap-2">
              <FaCheckCircle className="text-green-500" /> Original and authentic
              content creation
            </li>
            <li className="flex items-center gap-2">
              <FaCheckCircle className="text-green-500" /> Active engagement with
              your audience
            </li>
            <li className="flex items-center gap-2">
              <FaCheckCircle className="text-green-500" /> Commitment to deadlines
              and professionalism
            </li>
            <li className="flex items-center gap-2">
              <FaCheckCircle className="text-green-500" /> Compliance with brand
              guidelines & disclosure policies
            </li>
          </ul>
        </div>

        {/* FAQ */}
        <div>
          <h2 className="text-3xl font-bold text-blue-700 mb-10 text-center">
            Frequently Asked Questions
          </h2>
          <div className="space-y-4 max-w-3xl mx-auto">
            {faqs.map((faq, i) => (
              <div
                key={i}
                className="bg-white shadow-md rounded-lg p-6 cursor-pointer"
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
              >
                <h3 className="font-semibold text-gray-800 flex justify-between items-center">
                  {faq.q}
                  <span className="text-blue-600">
                    {openIndex === i ? "−" : "+"}
                  </span>
                </h3>
                {openIndex === i && (
                  <p className="text-gray-600 mt-3">{faq.a}</p>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-xl p-12 shadow-lg">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Start Your Journey
          </h2>
          <p className="max-w-2xl mx-auto mb-6 opacity-90">
            Be part of a professional network where your creativity meets meaningful
            opportunities.
          </p>
          <a
            href="/contact-us"
            className="inline-block bg-white text-blue-600 font-semibold px-6 py-3 rounded-lg shadow hover:bg-gray-100 transition"
          >
            Apply Now
          </a>
        </div>
      </div>
    </section>
  );
}
