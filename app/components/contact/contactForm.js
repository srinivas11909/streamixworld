"use client";
import { useState } from "react";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    brand: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });
  const [status, setStatus] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus("Sending...");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        setStatus("✅ Message sent successfully!");
        setFormData({
          name: "",
          brand: "",
          email: "",
          phone: "",
          service: "",
          message: "",
        });
      } else {
        setStatus("❌ Failed to send message.");
      }
    } catch (error) {
      setStatus("❌ Error sending message.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit} className="space-y-5">
        {/* Name & Brand */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Full Name *
            </label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Enter yout Full Name"
              required
              className="w-full border border-gray-300 text-gray-800 placeholder-gray-400 p-3 rounded-lg focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Business / Brand Name
            </label>
            <input
              type="text"
              name="brand"
              value={formData.brand}
              placeholder="Enter Business / Brand Name"
              onChange={handleChange}
              className="w-full border border-gray-300 text-gray-800 placeholder-gray-400  p-3 rounded-lg focus:ring-2 focus:ring-blue-500"
            />
          </div>
        </div>

        {/* Email */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Email Address *
          </label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Enter your email"
            required
            className="w-full border border-gray-300 text-gray-800 placeholder-gray-400  p-3 rounded-lg focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Phone */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Phone Number *
          </label>
          <input
            type="text"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder="Enter your mobile number"
            required
            className="w-full border border-gray-300 text-gray-800 placeholder-gray-400  p-3 rounded-lg focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Service of Interest */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Service of Interest *
          </label>
          <select
            name="service"
            value={formData.service}
            onChange={handleChange}
            required
            className="w-full border border-gray-300 text-gray-800 placeholder-gray-400 p-3 rounded-lg focus:ring-2 focus:ring-blue-500"
          >
            <option value="">Select a Service</option>
            <option>Influencer Marketing</option>
            <option>Brand Promotion Campaigns</option>
            <option>Business Marketing Services</option>
            <option>Line Production (Films & Music Videos)</option>
            <option>Other</option>
          </select>
        </div>

        {/* Message */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Message / Project Details *
          </label>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Enter your message here..."
            required
            rows={5}
            className="w-full border border-gray-300  text-gray-800 placeholder-gray-400  p-3 rounded-lg focus:ring-2 focus:ring-blue-500"
          ></textarea>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          disabled={loading}
          className={`w-full ${
            loading ? "bg-gray-400" : "bg-blue-600 hover:bg-blue-700"
          } text-white font-semibold py-3 rounded-lg transition`}
        >
          {loading ? "Sending..." : "Submit"}
        </button>
      </form>

      {/* Status Message */}
      {status && (
        <p
          className={`mt-4 text-center text-sm ${
            status.startsWith("✅")
              ? "text-green-600"
              : status.startsWith("❌")
              ? "text-red-600"
              : "text-gray-600"
          }`}
        >
          {status}
        </p>
      )}
    </>
  );
}
