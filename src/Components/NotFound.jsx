import { Link } from "react-router-dom";

function NotFound() {
    return (
        <div className="min-h-screen bg-gray-950 flex items-center justify-center px-6">

            <div className="text-center">

                {/* Big 404 */}
                <h1 className="text-[120px] font-bold text-blue-500 leading-none">
                    404
                </h1>

                {/* Message */}
                <h2 className="text-3xl md:text-4xl font-bold text-white mt-4">
                    Page Not Found
                </h2>

                <p className="text-gray-400 mt-4 max-w-md mx-auto">
                    The page you are looking for doesn’t exist or has been moved.
                </p>

                {/* Button */}
                <Link to="/">
                    <button className="mt-8 px-6 py-3 bg-blue-600 text-white rounded-xl font-bold transition-all duration-300 hover:scale-105 hover:bg-blue-700">
                        Go Back Home
                    </button>
                </Link>

            </div>

        </div>
    );
}

export default NotFound;