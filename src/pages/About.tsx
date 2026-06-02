import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ShieldCheck, Package, Headphones } from "lucide-react";
import aboutImage from "@/components/assets/about-workshop.jpg";
const About = () => {
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

      {/* CTA */}
      <section className="bg-primary py-20 text-center text-white">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold mb-4">
            Need Quality Automotive Parts?
          </h2>

          <p className="max-w-2xl mx-auto mb-8 text-lg">
            Connect with our team today and discover reliable solutions
            tailored to your automotive needs.
          </p>

          <a
            href="/#quote-form"
            className="inline-block bg-black px-8 py-3 rounded-md font-semibold hover:opacity-90 transition"
          >
            Request a Quote
          </a>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default About;