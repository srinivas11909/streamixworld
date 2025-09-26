import { FaCheckCircle, FaHandshake, FaLightbulb, FaUserTie, FaChartLine } from "react-icons/fa";
export const metadata = {
  title: "About Us | StreamixWorld - Influencer Marketing & Video Production",
  description:
    "Learn about StreamixWorld – a digital marketing and video production company specializing in influencer campaigns, Telugu short films, and branded content.",
  keywords: [
    "StreamixWorld",
    "About StreamixWorld",
    "Influencer Marketing",
    "Video Production",
    "Telugu Short Films",
    "Brand Promotions",
    "Line Production",
  ],
  openGraph: {
    title: "About Us | StreamixWorld",
    description:
      "StreamixWorld connects brands with influencers and provides professional video production services specializing in Telugu short films, music, and branded campaigns.",
    url: "https://www.streamixworld.com/about",
    siteName: "StreamixWorld",
    images: [
      {
        url: "https://www.streamixworld.com/og-about.jpg", // replace with actual image
        width: 1200,
        height: 630,
        alt: "StreamixWorld About Us",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "About Us | StreamixWorld",
    description:
      "Empowering brands with influencer marketing, video production, and professional line production services.",
    images: ["https://www.streamixworld.com/og-about.jpg"], // replace with actual image
  },
};

export default function AboutPage() {
  return (
    <section className="bg-gray-50 text-gray-800">
      <div className="relative bg-gradient-to-r from-blue-700 via-indigo-700 to-purple-700 text-white  shadow-lg overflow-hidden">
  <div className="absolute inset-0 bg-black/30"></div>
  <div className="relative px-8 py-20 text-center max-w-4xl mx-auto">
    <h1 className="text-4xl md:text-5xl font-extrabold mb-4">
      Who We Are
    </h1>
    <p className="text-lg md:text-xl text-gray-200 leading-relaxed">
      StreamixWorld is a digital marketing and video production company
      committed to helping businesses, creators, and producers achieve
      measurable growth through creative storytelling, influencer
      collaborations, and professional production services.
    </p>
    <p className="text-lg md:text-xl text-gray-200 mt-6 leading-relaxed">
      With a strong presence in the Telugu entertainment industry, we
      specialize in connecting brands with the right influencers, executing
      impactful promotional campaigns, and managing end-to-end line
      production for short films, songs, and branded content.
    </p>
  </div>
</div>
      <div className="max-w-7xl mx-auto px-6 py-16 space-y-20">
        
        {/* Who We Are */}
        {/* <div className="text-center md:text-left">
          <h1 className="text-4xl md:text-5xl font-extrabold text-blue-700 mb-6">
            Who We Are
          </h1>
          <p className="text-lg leading-relaxed text-gray-700 max-w-4xl">
            StreamixWorld is a digital marketing and video production company committed to 
            helping businesses, creators, and producers achieve measurable growth through 
            creative storytelling, influencer collaborations, and professional production services.
          </p>
          <p className="text-lg leading-relaxed text-gray-700 mt-4 max-w-4xl">
            With a strong presence in the Telugu entertainment industry, we specialize in 
            connecting brands with the right influencers, executing impactful promotional campaigns, 
            and managing end-to-end line production for short films, songs, and branded content.
          </p>
        </div> */}

        {/* Mission & Vision */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-gradient-to-r from-blue-600 to-blue-500 text-white shadow-lg rounded-xl p-8">
            <h2 className="text-2xl font-semibold mb-3">Our Mission</h2>
            <p className="leading-relaxed opacity-90">
              To empower brands and creators with innovative marketing strategies and professional 
              production solutions that drive engagement, strengthen visibility, and deliver 
              measurable results.
            </p>
          </div>
          <div className="bg-white shadow-lg rounded-xl p-8 border border-gray-200">
            <h2 className="text-2xl font-semibold text-blue-600 mb-3">Our Vision</h2>
            <p className="text-gray-700 leading-relaxed">
              To be recognized as a trusted leader in digital marketing and video production, bridging 
              the gap between businesses, audiences, and creative talent across industries.
            </p>
          </div>
        </div>

        {/* Values */}
        <div>
          <h2 className="text-3xl font-bold text-blue-700 mb-8 text-center">
            Our Core Values
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {[
              { title: "Professionalism", icon: <FaUserTie />, text: "Highest standards in every project with reliability and accountability." },
              { title: "Creativity", icon: <FaLightbulb />, text: "Unique, compelling content tailored to your brand identity." },
              { title: "Collaboration", icon: <FaHandshake />, text: "Building long-term partnerships with brands, influencers, and teams." },
              { title: "Integrity", icon: <FaCheckCircle />, text: "Transparent operations ensuring fair practices for clients & creators." },
              { title: "Results-Driven", icon: <FaChartLine />, text: "Campaigns designed for measurable outcomes and growth." },
            ].map((value, i) => (
              <div
                key={i}
                className="bg-white shadow-md hover:shadow-xl transition rounded-lg p-6 text-center flex flex-col items-center"
              >
                <div className="text-3xl text-blue-600 mb-3">{value.icon}</div>
                <h3 className="text-lg font-semibold text-gray-800">{value.title}</h3>
                <p className="text-gray-600 text-sm mt-2">{value.text}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Expertise */}
        <div className="bg-blue-50 rounded-xl p-10 shadow-inner">
          <h2 className="text-3xl font-bold text-blue-700 mb-4">Our Expertise</h2>
          <p className="text-gray-700 leading-relaxed max-w-4xl">
            At StreamixWorld, we provide a comprehensive suite of digital marketing and production 
            services designed to help brands, businesses, and creators achieve measurable growth. 
            From influencer campaigns to full-scale video production, we deliver professional solutions 
            with creativity and precision.
          </p>
        </div>

        {/* Why Choose Us */}
        <div>
          <h2 className="text-3xl font-bold text-blue-700 mb-8 text-center">
            Why Choose StreamixWorld?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              "Comprehensive Services: From influencer marketing to full-scale video production, everything under one roof.",
              "Industry Expertise: Specialized focus on Telugu short films, songs, and regional campaigns.",
              "Tailored Solutions: Customized strategies to meet the unique needs of every business.",
              "Proven Results: A track record of driving growth, visibility, and brand recognition.",
            ].map((point, i) => (
              <div
                key={i}
                className="bg-white border border-gray-200 shadow hover:shadow-lg transition rounded-lg p-6"
              >
                <p className="text-gray-700">{point}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Join Us CTA */}
        <div className="text-center bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-xl p-12 shadow-lg">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Join Us on the Journey
          </h2>
          <p className="max-w-2xl mx-auto mb-6 opacity-90">
            Whether you are a brand aiming to increase visibility, an influencer seeking 
            professional collaborations, or a producer in need of expert line production, 
            StreamixWorld is here to support your growth with creativity, structure, and excellence.
          </p>
          <a
            href="/contact"
            className="inline-block bg-white text-blue-600 font-semibold px-6 py-3 rounded-lg shadow hover:bg-gray-100 transition"
          >
            Contact Us Today
          </a>
        </div>
      </div>
    </section>
  );
}
