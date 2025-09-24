import Link from "next/link";

const FinalCTA = () => {
  return (
    <section className="w-full py-16 bg-[#1a1c29] text-white text-center">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Let’s Build Your Brand Story Together
        </h2>
        <p className="text-lg mb-8">
          Whether you are a business, influencer, or producer—StreamixWorld is
          your trusted partner for growth, visibility, and professional content
          creation.
        </p>
        <Link href="/contact-us"className="inline-block bg-blue-500 text-white py-3 px-8 rounded-lg text-lg font-semibold hover:bg-blue-600">
            👉 Contact Us Today
        </Link>
      </div>
    </section>
  );
};

export default FinalCTA;
