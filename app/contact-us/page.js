
import ContactForm from "../components/contact/contactForm";
import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt } from "react-icons/fa";

export const metadata = {
  title: "Contact Us | StreamixWorld",
  description:
    "Get in touch with StreamixWorld for influencer marketing, brand promotions, business marketing services, and line production support in Hyderabad.",
  keywords: [
    "Contact StreamixWorld",
    "Influencer Marketing",
    "Brand Promotion",
    "Telugu Line Production",
    "Business Marketing",
  ],
  openGraph: {
    title: "Contact Us – StreamixWorld",
    description:
      "Partner with StreamixWorld for influencer marketing, brand promotions, and video production services.",
    url: "https://www.streamixworld.com/contact",
    images: [
      {
        url: "https://www.streamixworld.com/og-contact.jpg",
        width: 1200,
        height: 630,
        alt: "Contact StreamixWorld",
      },
    ],
  },
};

export default function ContactPage() {




  return (
    <section className="bg-white text-gray-800">
            <div className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
        


      {/* Left side: Intro + contact info */}
        <div className="space-y-8">
          <h1 className="flex items-center gap-3 text-2xl md:text-3xl font-extrabold text-blue-700">
            <FaMapMarkerAlt className="text-blue-600" />
            Contact Us – StreamixWorld
          </h1>

          <p className="text-lg text-gray-600 leading-relaxed">
            We’re Here to Help You Grow. <br />
            Whether you are a business looking for impactful brand promotions, an influencer seeking professional collaborations, or a producer in need of expert line production, StreamixWorld is ready to assist you. <br />
            Our team responds to all inquiries within{" "}
            <span className="font-semibold">24 hours</span>.
          </p>

          {/* Contact Info Cards */}
          <div className="space-y-4">
            <div className="flex items-start gap-3">
              <div className="text-blue-600 text-2xl">
                <FaEnvelope />
              </div>
              <div>
                <p className="text-sm text-gray-500">Email</p>
                <p className="font-semibold text-black">contact@streamixworld.com</p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <div className="text-blue-600 text-2xl">
                <FaPhoneAlt />
              </div>
              <div>
                <p className="text-sm text-gray-500">Phone</p>
                <p className="font-semibold text-black">+91-XXXXXXXXXX</p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <div className="text-blue-600 text-2xl">
                <FaMapMarkerAlt />
              </div>
              <div>
                <p className="text-sm text-gray-500">Office</p>
                <p className="font-semibold text-black">Hyderabad, Telangana, India</p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side - Contact Form */}
        <div className="bg-white shadow-xl rounded-xl p-8">
          <h2 className="text-2xl font-bold text-blue-600 mb-6">Send Us a Message</h2>
           <ContactForm />
        </div>
      </div>

      {/* Bottom CTA */}
      <div className="mt-16 text-center bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-lg p-10 shadow-lg">
        <h2 className="text-3xl font-bold mb-4 tex-white">Let’s Build Together</h2>
        <p className="max-w-2xl mx-auto mb-6 opacity-90 tex-white">
          Partner with StreamixWorld to elevate your brand presence, grow your audience, 
          and bring your creative projects to life.
        </p>
      </div>
    </section>
  );
}
