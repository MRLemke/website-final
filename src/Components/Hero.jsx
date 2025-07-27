import React from "react";
import { FaInstagram, FaGithub, FaLinkedin } from "react-icons/fa";
export default function Hero() {
    return (
        <section className="w-full mt-20 px-6 py-24 relative">
            <div className="max-w-6xl mx-auto relative z-10">
                {/* Content Block */}
                <div className="max-w-3xl">
                    <h1 className="text-5xl font-bold text-gray-900 mb-4">
                        I build what you imagine.
                    </h1>
                    <h2 className="text-md font-normal text-gray-600">
                        With a Computer Science degree and years of hands-on experience in web development and
                        UI design, I bring the engineering skill and creative focus needed to make your ideas come to
                        life.
                    </h2>
                    <div className="flex gap-6 mt-6 text-2xl text-emerald-500">
                        <a href="https://instagram.com/owenpdonohue" target="_blank" rel="noopener noreferrer"
                           className="hover:text-emerald-600 transition">
                            <FaInstagram/>
                        </a>
                        <a href="https://github.com/MRLemke" target="_blank" rel="noopener noreferrer"
                           className="hover:text-emerald-600 transition">
                            <FaGithub/>
                        </a>
                        <a href="https://www.linkedin.com/in/owen-donohue-7a2474254/" target="_blank" rel="noopener noreferrer"
                           className="hover:text-emerald-600 transition">
                            <FaLinkedin/>
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}