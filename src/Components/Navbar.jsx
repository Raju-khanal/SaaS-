import { Link } from "react-router-dom";
import { useState } from "react";
import { TiThMenu } from "react-icons/ti";

function Navbar() {
    const [tog, setTog] = useState(false);

    const menuItems = [
        { Name: "Home", path: "/" },
        { Name: "Pricing", path: "/pricing" },
        { Name: "Contact", path: "/contact" }
    ];

    return (
        <div className="fixed z-50 w-full min-h-20 flex justify-between items-center bg-gray-800 py-5 px-10 shadow-2xl">

            {/* Logo */}
            <div className="text-3xl font-bold text-blue-500">
                SaaS
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex gap-5 font-bold text-white text-xl">
                {menuItems.map((item, index) => (
                    <div key={index}>
                        <Link className="hover:text-blue-500" to={item.path}>
                            {item.Name}
                        </Link>
                    </div>
                ))}
            </div>

            {/* Mobile Button */}
            <button
                className="md:hidden text-3xl text-white"
                onClick={() => setTog(!tog)}
            >
                <TiThMenu />
            </button>

            {/* Mobile Menu */}
            {tog && (
                <div className="absolute top-20 left-0 w-full bg-gray-900 flex flex-col items-center gap-6 py-6 text-2xl text-white md:hidden">

                    {menuItems.map((item, index) => (
                        <div key={index}>
                            <Link
                                className="hover:text-blue-500"
                                to={item.path}
                                onClick={() => setTog(false)}
                            >
                                {item.Name}
                            </Link>
                        </div>
                    ))}

                </div>
            )}

        </div>
    );
}

export default Navbar;