import { Link } from "react-router-dom";

function Footer() {
    return (
        <footer className="bg-gray-950 text-white pt-16 pb-8 px-6">

            <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">

                {/* Brand */}
                <div>
                    <h2 className="text-2xl font-bold text-blue-500">SaaS</h2>
                    <p className="text-gray-400 mt-4">
                        Build modern SaaS websites faster with clean UI and performance.
                    </p>
                </div>

                {/* Links */}
                <div>
                    <h3 className="text-lg font-semibold mb-4">Quick Links</h3>

                    <ul className="space-y-2 text-gray-400">
                        <li><Link className="hover:text-white" to="/">Home</Link></li>
                        <li><Link className="hover:text-white" to="/pricing">Pricing</Link></li>
                        <li><Link className="hover:text-white" to="/contact">Contact</Link></li>
                    </ul>
                </div>

                {/* Newsletter */}
                <div>
                    <h3 className="text-lg font-semibold mb-4">Subscribe</h3>

                    <p className="text-gray-400 mb-4">
                        Get updates about new features.
                    </p>

                    <div className="flex">
                        <input
                            type="email"
                            placeholder="Enter email"
                            className="w-full p-2 rounded-l-xl bg-gray-800 text-white outline-none"
                        />
                        <button className="bg-blue-600 px-4 rounded-r-xl hover:bg-blue-700">
                            Join
                        </button>
                    </div>
                </div>

            </div>

            {/* Bottom line */}
            <div className="text-center text-gray-500 mt-10 text-sm">
                © {new Date().getFullYear()} SaaS. All rights reserved.
            </div>

        </footer>
    );
}

export default Footer;