import { motion } from "framer-motion";

function Marquee() {
    return (
        <div className="h-20 bg-gray-800 overflow-hidden flex items-center">

            <motion.div
                className="flex gap-10 whitespace-nowrap text-white text-2xl md:text-3xl font-bold"
                animate={{ x: ["0%", "-100%"] }}
                transition={{
                    duration: 20,
                    repeat: Infinity,
                    ease: "linear",
                }}
            >

                {/* duplicate content for seamless loop */}
                {[...Array(10)].map((_, i) => (
                    <h2
                        key={i}
                        className="drop-shadow-[0_0_12px_rgba(255,255,255,1)]"
                    >
                        MAKE YOUR DAY WILD DARLING
                    </h2>
                ))}

            </motion.div>

        </div>
    );
}

export default Marquee;