import React, { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import Logo from "./Logo.jsx";
import { Menu, X } from "lucide-react";


export default function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);
    return (
        <header className="bg-gray-50 ">
            <div className="relative max-w-[1280px] w-full mx-auto px-8 py-4 flex items-center justify-between">

                {/* Left: Logo */}

                <div className="absolute left-8 top-1/2 -translate-y-1/2">
                    <Link to="/" className="hover:text-emerald-500 transition">
                        <Logo className="w-4 h-4" />
                    </Link>
                </div>

                {/* Center: Nav Links */}
                <div className="mx-auto px-6 py-2">
                    <nav
                        className="hidden md:flex gap-12 text-gray-900 text-sm font-semibold bg-gray-50 px-6 py-2 rounded-full shadow">


                        <NavLink
                            to="/about"
                            className={({ isActive }) =>
                                `transition font-semibold text-sm ${
                                    isActive ? "text-emerald-500" : "text-gray-900 hover:text-emerald-500"
                                }`
                            }
                        >
                            About
                        </NavLink>
                        <NavLink
                            to="/projects"
                            className={({ isActive }) =>
                                `transition font-semibold text-sm ${
                                    isActive ? "text-emerald-500" : "text-gray-900 hover:text-emerald-500"
                                }`
                            }
                        >
                            Projects
                        </NavLink>
                        <NavLink
                            to="/contact"
                            className={({ isActive }) =>
                                `transition font-semibold text-sm ${
                                    isActive ? "text-emerald-500" : "text-gray-900 hover:text-emerald-500"
                                }`
                            }
                        >
                            Contact
                        </NavLink>
                    </nav>

                </div>
                {/* Mobile Menu Button */}
                <button
                    className="md:hidden text-gray-800"
                    onClick={() => setMenuOpen(!menuOpen)}
                >
                    {menuOpen ? <X size={24}/> : <Menu size={24}/>}
                </button>
            </div>

            {/* Mobile Menu */}
            {menuOpen && (
                <div
                    className="md:hidden bg-white shadow-md px-6 py-4 flex flex-col gap-4 text-gray-800 text-sm font-semibold">
                    <Link to="/projects" onClick={() => setMenuOpen(false)}>Projects</Link>
                    <Link to="/about" onClick={() => setMenuOpen(false)}>About</Link>
                    <Link to="/contact" onClick={() => setMenuOpen(false)}>Contact</Link>
                </div>
            )}
        </header>
    );
};