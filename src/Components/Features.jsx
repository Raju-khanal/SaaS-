function Features() {
    return (
        <div className="bg-gray-700 py-16">

            <div className="max-w-6xl mx-auto px-6">

                <h2 className="text-white text-center text-4xl font-bold">
                    Core Features
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-10">

                    <div className="rounded-2xl bg-gray-400 p-6 transition-all duration-300 hover:scale-105 hover:ring-2 hover:ring-cyan-500 hover:shadow-[0_0_25px_rgba(34,211,238,0.8)]">
                        <h2 className="font-bold text-lg">Fast Performance</h2>
                        <p>Optimized for speed and performance</p>
                    </div>

                    <div className="rounded-2xl bg-gray-400 p-6 transition-all duration-300 hover:scale-105 hover:ring-2 hover:ring-cyan-500 hover:shadow-[0_0_25px_rgba(34,211,238,0.8)]">
                        <h2 className="font-bold text-lg">Responsive Design</h2>
                        <p>Mobile-first layout for all devices</p>
                    </div>

                    <div className="rounded-2xl bg-gray-400 p-6 transition-all duration-300 hover:scale-105 hover:ring-2 hover:ring-cyan-500 hover:shadow-[0_0_25px_rgba(34,211,238,0.8)]">
                        <h2 className="font-bold text-lg">Easy Customization</h2>
                        <p>Style with utility classes</p>
                    </div>

                </div>

            </div>

        </div>
    );
}

export default Features;