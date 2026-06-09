import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ShieldCheck, Package, Headphones } from "lucide-react";
import aboutImage from "@/components/assets/about-workshop.jpg";
import { useState } from "react";
const About = () => {
  const [name, setName] = useState("");
  const [desc, setDesc] = useState("");
  return (
    <>
      <Header />

      {/* Hero Section */}
      <section className="bg-black text-white py-24">
        <div className="container mx-auto px-6 text-center">
          <span className="text-primary uppercase tracking-[4px] font-semibold">
            About Rivoro
          </span>

          <h1 className="text-5xl md:text-6xl font-bold mt-4 mb-6">
            Driven By Quality. Powered By Trust.
          </h1>

          <div className="w-24 h-1 bg-primary mx-auto mb-8"></div>

          <p className="max-w-3xl mx-auto text-lg text-gray-300 leading-8">
            Rivoro is a trusted supplier of premium automotive spare parts
            and accessories, delivering quality products and dependable
            service for workshops, fleet operators, and vehicle owners.
          </p>
        </div>
      </section>

      {/* Company Story */}
      <section className="py-24 bg-[#0f0f0f] text-white">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">

            <div>
              <span className="text-primary font-semibold uppercase tracking-[3px]">
                Who We Are
              </span>

              <h2 className="text-5xl font-bold mt-4 mb-8 leading-tight">
                Your Reliable
                <span className="text-primary"> Automotive Parts </span>
                Partner
              </h2>

              <p className="text-gray-400 leading-8 mb-6">
                Rivoro was founded with a clear vision to provide high-quality
                automotive spare parts and accessories through a customer-focused
                approach built on reliability, transparency, and long-term value.
              </p>

              <p className="text-gray-400 leading-8">
                Our extensive product portfolio supports a wide range of vehicles
                and maintenance requirements, ensuring customers receive dependable
                solutions from trusted manufacturers.
              </p>
            </div>

            <div className="relative">
              <div className="absolute inset-0 bg-primary/20 blur-3xl rounded-xl"></div>

              <div className="relative overflow-hidden rounded-xl h-[450px] border border-primary/30 shadow-2xl">
                <img
                  src={aboutImage}
                  alt="Rivoro Automotive Workshop"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

          </div>
        </div>
      </section>


      {/* Mission & Vision */}
      <section className="bg-black py-24 text-white">
        <div className="container mx-auto px-6">

          <div className="text-center mb-16">
            <span className="text-primary uppercase tracking-[4px] font-semibold">
              Our Purpose
            </span>

            <h2 className="text-5xl font-bold mt-4">
              Mission & Vision
            </h2>

            <div className="w-24 h-1 bg-primary mx-auto mt-6"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-8">

            <div className="bg-[#121212] border border-primary/20 rounded-xl p-10 hover:border-primary transition-all duration-300">
              <h3 className="text-3xl font-bold mb-6 text-primary">
                Our Mission
              </h3>

              <p className="text-gray-400 leading-8">
                To supply premium automotive parts with outstanding customer
                service, ensuring reliability, performance, and long-term
                value for every customer.
              </p>
            </div>

            <div className="bg-[#121212] border border-primary/20 rounded-xl p-10 hover:border-primary transition-all duration-300">
              <h3 className="text-3xl font-bold mb-6 text-primary">
                Our Vision
              </h3>

              <p className="text-gray-400 leading-8">
                To become a leading automotive aftermarket supplier by
                consistently delivering quality products and trusted
                solutions across the region.
              </p>
            </div>

          </div>

        </div>
      </section>
      {/* Why Choose Us */}
      <section className="bg-black text-white py-24">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-primary uppercase tracking-wider font-semibold">
              Why Rivoro
            </span>

            <h2 className="text-4xl font-bold mt-3">
              What Sets Us Apart
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="border border-primary p-8 rounded-lg">
              <ShieldCheck className="w-12 h-12 text-primary mb-6" />

              <h3 className="text-xl font-bold mb-4">
                Genuine Quality
              </h3>

              <p className="text-gray-300">
                Carefully sourced products from trusted automotive
                manufacturers and suppliers.
              </p>
            </div>

            <div className="border border-primary p-8 rounded-lg">
              <Package className="w-12 h-12 text-primary mb-6" />

              <h3 className="text-xl font-bold mb-4">
                Wide Product Range
              </h3>

              <p className="text-gray-300">
                Comprehensive solutions covering essential vehicle
                maintenance and repair needs.
              </p>
            </div>

            <div className="border border-primary p-8 rounded-lg">
              <Headphones className="w-12 h-12 text-primary mb-6" />

              <h3 className="text-xl font-bold mb-4">
                Dedicated Support
              </h3>

              <p className="text-gray-300">
                Responsive customer assistance and expert product guidance.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* PREMIUM CTA - WhatsApp FORM */}
      <section className="relative py-28 text-white overflow-hidden">

        {/* BACKGROUND LAYERS */}
        <div className="absolute inset-0 bg-gradient-to-br from-black via-[#0a0a0a] to-black" />

        {/* orange glow left */}
        <div className="absolute left-[-120px] top-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-orange-500/10 blur-[160px] rounded-full" />

        {/* orange glow right */}
        <div className="absolute right-[-150px] top-1/4 w-[500px] h-[700px] bg-orange-600/20 blur-3xl rotate-12" />

        {/* bottom glow */}
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[200px] bg-orange-500/10 blur-[140px]" />

        {/* grid overlay */}
        <div className="absolute inset-0 opacity-[0.05] bg-[url('/grid.svg')]" />

        {/* CONTENT */}
        <div className="relative z-10 container mx-auto px-6">

          <div className="grid lg:grid-cols-2 gap-14 items-center">

            {/* LEFT SIDE TEXT */}
            <div className="text-left">
              <span className="text-orange-400 uppercase tracking-[4px] font-semibold">
                Quick Support
              </span>

              <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 leading-tight">
                Need Premium <span className="text-orange-500">Automotive Parts?</span>
              </h2>

              <p className="text-gray-400 text-lg leading-8">
                Share your requirement and connect instantly with our team on WhatsApp.
                We respond with fast and reliable solutions.
              </p>
            </div>

            {/* RIGHT SIDE FORM */}
            <div className="w-full max-w-xl mx-auto">

              <div className="relative bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-8 shadow-2xl">

                {/* glow border effect */}
                <div className="absolute inset-0 rounded-2xl border border-orange-500/10 pointer-events-none" />

                {/* TITLE */}
                <h3 className="text-xl font-semibold mb-6 text-center text-white">
                  Send Your Requirement
                </h3>

                {/* NAME INPUT */}
                <div className="relative mb-5">
                  <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="peer w-full px-4 pt-5 pb-2 bg-black/40 border border-white/10 rounded-lg text-white outline-none focus:border-orange-500 transition"
                    placeholder=" "
                  />
                  <label className="absolute left-4 top-2 text-gray-400 text-sm transition-all peer-placeholder-shown:top-3.5 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-focus:top-2 peer-focus:text-sm peer-focus:text-orange-400">
                    Your Name
                  </label>
                </div>

                {/* DESCRIPTION */}
                <div className="relative mb-6">
                  <textarea
                    value={desc}
                    onChange={(e) => setDesc(e.target.value)}
                    className="peer w-full px-4 pt-5 pb-2 h-32 bg-black/40 border border-white/10 rounded-lg text-white outline-none focus:border-orange-500 transition resize-none"
                    placeholder=" "
                  />
                  <label className="absolute left-4 top-2 text-gray-400 text-sm transition-all peer-placeholder-shown:top-3.5 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-focus:top-2 peer-focus:text-sm peer-focus:text-orange-400">
                    Describe your requirement
                  </label>
                </div>

                {/* BUTTON */}
                <button
                  onClick={() => {
                    if (!name || !desc) {
                      alert("Please fill all fields");
                      return;
                    }

                    const phone = "97145477977";

                    const message = `Hello, I am ${name}\nRequirement: ${desc}`;

                    const url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;

                    window.open(url, "_blank");
                  }}
                  className="w-full py-3 rounded-lg font-semibold text-white bg-gradient-to-r from-orange-600 to-orange-500 hover:from-orange-500 hover:to-orange-600 transition-all shadow-lg shadow-orange-500/20 hover:scale-[1.02] duration-200"
                >
                  Send on WhatsApp
                </button>

              </div>
            </div>

          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default About;