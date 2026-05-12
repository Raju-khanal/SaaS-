function Pricing() {
    return (
        <div className="bg-gray-950 py-20 px-6">

            {/* Title */}
            <h2 className="text-4xl font-bold text-center text-white">
                Pricing Plans
            </h2>


            {/* Grid */}
            <div className="max-w-6xl mx-auto grid gap-8 mt-12 grid-cols-1 md:grid-cols-3">

                {/* Basic */}
                <div className="bg-gray-900 rounded-2xl p-8 text-center text-white transition-all duration-300 hover:scale-105 hover:ring-2 hover:ring-blue-500">

                    <h2 className="text-2xl text-blue-500 font-bold">Basic</h2>

                    <div className="text-4xl font-bold mt-4">
                        $20 <span className="text-lg text-gray-400">/mo</span>
                    </div>

                    <p className="text-gray-400 mt-4">
                        Perfect for beginners
                    </p>

                    <button className="mt-6 px-6 py-2 bg-blue-600 rounded-xl hover:bg-blue-700">
                        Choose Plan
                    </button>

                </div>

                {/* Pro */}
                <div className="bg-gray-900 rounded-2xl p-8 text-center text-white transition-all duration-300 hover:scale-105 hover:ring-2 hover:ring-blue-500">

                    <h2 className="text-2xl text-blue-500 font-bold">Pro</h2>

                    <div className="text-4xl font-bold mt-4">
                        $49 <span className="text-lg text-gray-400">/mo</span>
                    </div>

                    <p className="text-gray-400 mt-4">
                        Best for professionals
                    </p>

                    <button className="mt-6 px-6 py-2 bg-blue-600 rounded-xl hover:bg-blue-700">
                        Choose Plan
                    </button>

                </div>

                {/* Premium */}
                <div className="bg-gray-900 rounded-2xl p-8 text-center text-white transition-all duration-300 hover:scale-105 hover:ring-2 hover:ring-blue-500">

                    <h2 className="text-2xl text-blue-500 font-bold">Premium</h2>

                    <div className="text-4xl font-bold mt-4">
                        $99 <span className="text-lg text-gray-400">/mo</span>
                    </div>

                    <p className="text-gray-400 mt-4">
                        For large businesses
                    </p>

                    <button className="mt-6 px-6 py-2 bg-blue-600 rounded-xl hover:bg-blue-700">
                        Choose Plan
                    </button>



                </div>


            </div>

        </div>
    );
}

export default Pricing;