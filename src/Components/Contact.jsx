import { useState } from "react";

function Contact() {
    const [form, setForm] = useState({
        name: "",
        email: "",
        message: ""
    });

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Form Data:", form);
        alert("Message Sent!");
        setForm({ name: "", email: "", message: "" });
    };

    return (

        <div className="min-h-screen bg-gray-950 flex items-center justify-center px-6 py-20">

            <div className="w-full max-w-2xl bg-gray-900 rounded-2xl p-8 shadow-lg">

                <h2 className="text-4xl font-bold text-white text-center">
                    Contact Us
                </h2>

                <p className="text-gray-400 text-center mt-2">
                    We’d love to hear from you
                </p>

                <form onSubmit={handleSubmit} className="mt-8 flex flex-col gap-6">

                    {/* Name */}
                    <input
                        type="text"
                        name="name"
                        placeholder="Your Name"
                        value={form.name}
                        onChange={handleChange}
                        className="p-3 rounded-xl bg-gray-800 text-white outline-none focus:ring-2 focus:ring-blue-500"
                    />

                    {/* Email */}
                    <input
                        type="email"
                        name="email"
                        placeholder="Your Email"
                        value={form.email}
                        onChange={handleChange}
                        className="p-3 rounded-xl bg-gray-800 text-white outline-none focus:ring-2 focus:ring-blue-500"
                    />

                    {/* Message */}
                    <textarea
                        name="message"
                        placeholder="Your Message"
                        value={form.message}
                        onChange={handleChange}
                        rows="5"
                        className="p-3 rounded-xl bg-gray-800 text-white outline-none focus:ring-2 focus:ring-blue-500"
                    />

                    {/* Submit Button */}
                    <button
                        type="submit"
                        className="bg-blue-600 text-white py-3 rounded-xl font-bold transition-all duration-300 hover:scale-105 hover:bg-blue-700"
                    >
                        Send Message
                    </button>


                </form>

            </div>

        </div>
    );
}

export default Contact;