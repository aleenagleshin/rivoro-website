import { Link } from "react-router-dom";

const AboutUs = () => {
    return (
        <section className="bg-black py-28 relative overflow-hidden">
            <div className="container mx-auto px-6">

                <div className="relative z-10 max-w-6xl mx-auto bg-zinc-900 border border-primary/20 rounded-lg p-12 md:p-16 text-center shadow-2xl">

                    <span className="text-primary uppercase tracking-[4px] font-semibold">
                        About Rivoro
                    </span>

                    <h2 className="text-white text-4xl md:text-5xl font-bold mt-4 mb-8">
                        Premium Automotive Parts.
                        <span className="text-primary"> Trusted Performance.</span>
                    </h2>

                    <div className="w-24 h-1 bg-primary mx-auto mb-8"></div>

                    <p className="text-gray-300 text-lg leading-9 max-w-4xl mx-auto">
                        Rivoro is your trusted destination for premium automotive
                        spare parts and accessories. We provide genuine products,
                        dependable service, and industry expertise to workshops,
                        businesses, and vehicle owners who demand reliability,
                        performance, and long-lasting value.
                    </p>

                    <Link
                        to="/about"
                        className="relative z-20 inline-block mt-10 px-8 py-3 bg-primary text-white rounded-md font-semibold hover:opacity-90 transition"
                    >
                        Read More
                    </Link>

                </div>

            </div>

            {/* Decorative Glow */}
            <div className="absolute top-0 left-0 w-72 h-72 bg-primary/10 blur-3xl pointer-events-none"></div>

            <div className="absolute bottom-0 right-0 w-72 h-72 bg-primary/10 blur-3xl pointer-events-none"></div>
        </section>
    );
};

export default AboutUs;