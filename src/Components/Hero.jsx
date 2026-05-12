import { motion, useScroll, useTransform } from "framer-motion";
import Heroaimg from "../assets/heroaa.png"

function Hero() {
    const { scrollY } = useScroll();

    // slow movement on scroll (parallax effect)
    const y = useTransform(scrollY, [0, 500], [0, 120]);

    return (
        <section className="w-full mt-20 min-h-screen flex flex-col md:flex-row items-center justify-between px-6 md:px-16 py-10 gap-10 overflow-hidden">

            {/* Left Content (moves slowly on scroll) */}
            <motion.div
                style={{ y }}
                className="order-2 md:order-1 flex-1 text-center md:text-left"
            >
                <h2 className="text-4xl md:text-6xl font-bold text-white leading-tight">
                    Build your SaaS website faster
                </h2>

                <p className="text-gray-400 mt-6 text-lg max-w-xl">
                    Raju helps you build modern, responsive company and business websites faster.
                </p>

                <button className="mt-8 w-40 h-14 text-white rounded-2xl bg-blue-700 transition-all duration-300 hover:scale-110">
                    Get Started
                </button>
            </motion.div>

            {/* Right Hero Box (also slow movement) */}
            <motion.div
                style={{ y }}
                className="order-1 md:order-2 flex-1 w-full max-w-2xl h-72 md:h-[500px] rounded-2xl flex items-center justify-center text-3xl md:text-5xl text-gray-400"
            >
                <img
                    src={Heroaimg}
                    alt="Hero"
                    className="w-full h-full object-cover rounded-2xl"
                />
            </motion.div>

        </section>
    );
}

export default Hero;