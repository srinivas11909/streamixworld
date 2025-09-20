"use client";
import { useEffect, useState } from "react";

export default function AboutStreamix() {
  const [data, setData] = useState(null);

  useEffect(() => {
    async function fetchAbout() {
      try {
        const res = await fetch("/api/about");
        const json = await res.json();
        setData(json);
      } catch (err) {
        console.error("Failed to load About data:", err);
      }
    }
    fetchAbout();
  }, []);

  if (!data) {
    return (
      <section className="py-16 text-center text-gray-500">Loading...</section>
    );
  }

  return (
    <section className="bg-gray-50 py-16 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Title + Description */}
        <h2 className="text-3xl font-bold text-gray-900 mb-4">{data.title}</h2>
        <p className="text-gray-600 max-w-3xl mb-12">{data.description}</p>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {data.services.map((service, index) => (
            <div
              key={index}
              className="bg-white shadow hover:shadow-lg transition rounded-lg p-6 border flex flex-col"
            >
              {/* Optional Image or Icon */}
              {service.image ? (
                <img
                  src={service.image}
                  alt={service.title}
                  className="h-12 w-12 mb-3 object-contain"
                />
              ) : (
                <div className="text-3xl mb-3">{service.icon}</div>
              )}

              <h3 className="font-semibold text-slate-800 text-lg mb-2">{service.title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                {service.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
