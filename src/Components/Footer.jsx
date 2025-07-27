import React from "react";
import { Link } from "react-router-dom";
const Footer = () => {
    return (
        <footer className="border-t border-gray-200 py-8 px-8">
            <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
                {/* Left: Navigation links */}
                <div className="flex gap-6 text-sm text-gray-700 font-semibold" >
                    <Link to="/About" className="hover:text-emerald-500 transition">
                        About
                    </Link>
                    <Link to="/Projects" className="hover:text-emerald-500 transition">
                        Projects
                    </Link>
                    <Link to="/Projects" className="hover:text-emerald-500 transition">
                        Contact
                    </Link>
                </div>

                {/* Right: Copyright */}
                <div className="text-sm text-gray-400 text-center md:text-right">
                    © 2025 Owen Donohue. All rights reserved.
                </div>
            </div>
        </footer>
    );
};

export default Footer;