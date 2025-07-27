import React from "react";
import {  Mail, Github, Linkedin, Briefcase } from "lucide-react";
import { FaPaperPlane } from "react-icons/fa";



const cards = [
    {
        title: "Petaluma Coffee & Tea Co.",
        description: "Full Stack Engineer for Petaluma Coffee & Tea Co.’s new website. Designed with Figma and created as a Framer Ecommerce website.",
        link: "https://www.petalumacoffee.com",
    },
    {
        title: "Art By Maryam",
        description: "Web Designer for Art by Maryam. Designed with Figma and created as a Shopify gallery that exhibits the artist’s work and allows users to purchase art.",
        link: "https://art-by-maryam.myshopify.com",
    },
    {
        title: "Linda Donohue Fine Art",
        description: "Working closely with teams and clients to turn abstract ideas into working products.",
        link: "https://www.lpdart.com",
    },
];

const experienceItems = [
    {
        title: "Shape",
        description: "Full Stack Product Engineer.",
        date: "Dec 2024 – Present",
        iconSrc: "/Shape.svg"
    },
    {
        title: "Linda Donohue Fine Art",
        description: "Artist assistant and web dev.",
        date: "Jan 2020 – Dec 2024",
        iconSrc: "/lpdarticon.png"
    },
    {
        title: "Five Guys",
        description: "Crew Member.",
        date: "May 2018 – Jan 2020",
        iconSrc: "/five-guys-logo.png"
    },
];
const HomePageBento = () => {
    return (
        <section className="w-full py-24 px-8 ">
            <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Left Column */}
                <div className="flex flex-col justify-between md:h-[650px] gap-6">
                    {cards.map((card, index) => (
                        <div
                            key={index}
                            className="w-full bg-gray-50 rounded-xl shadow px-6 py-5 flex flex-col justify-between"
                        >
                            <div>
                                <h3 className="text-xl font-semibold text-gray-900">
                                    {card.title}
                                </h3>
                                <p className="text-sm text-gray-600 mt-2">
                                    {card.description}
                                </p>
                            </div>
                            <a
                                href={card.link}
                                className="text-emerald-500 font-medium text-sm hover:underline mt-4"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                View Website →
                            </a>
                        </div>
                    ))}
                </div>

                {/* Right Column */}

                {/* Top-Right side content */}
                <div className="flex flex-col justify-between gap-6 md:h-[650px]">

                    <div className="flex flex-col shadow rounded-xl bg-gray-50 px-6 py-5 gap-1">
                        {/* Section Header */}
                        <div className="flex items-center gap-2 text-gray-900 font-semibold text-xl">
                            <Briefcase size={18} className="text-emerald-500"/>
                            <span>Work</span>
                        </div>

                        {/* Job List */}
                        <div className="flex flex-col gap-2">
                            {experienceItems.map((item, index) => (
                                <div
                                    key={index}
                                    className="bg-gray-50 rounded-xl px-6 py-5 flex flex-col gap-4"
                                >
                                    <div
                                        className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-4 sm:gap-0 text-center sm:text-left items-center">
                                        <div className="flex items-start gap-3">
                                            <div
                                                className="w-10 h-10 rounded-full bg-white shadow flex items-center justify-center">
                                                <img
                                                    src={item.iconSrc}
                                                    alt=""
                                                    className="w-8 h-8 rounded-full object-cover"
                                                />
                                            </div>
                                            <div>
                                                <h4 className="text-md font-semibold text-gray-900">
                                                    {item.title}
                                                </h4>
                                                <p className="text-sm text-gray-600 mt-1">{item.description}</p>
                                            </div>
                                        </div>
                                        <span className="text-sm text-gray-500 whitespace-nowrap">
                                             {item.date}
                                        </span>
                                    </div>
                                </div>
                            ))}
                            <div>
                            <a
                                    href="/resume-07-15-2025-1.pdf"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-block bg-emerald-500 text-gray-50 font-medium text-sm     px-5 py-2 rounded-lg hover:bg-emerald-600 transition"
                                >
                                    View CV
                                </a>
                            </div>
                        </div>
                    </div>
                    {/*Bottom Right Content */}
                    <div className="bg-gray-50 rounded-xl shadow px-6 py-5 flex-col justify-between">

                        <div>
                            <div className="flex items-center gap-2 text-gray-900 font-semibold text-md">
                                <FaPaperPlane className="w-4 h-4 text-emerald-500"/>
                                <h4 className="text-xl font-semibold text-gray-900">Need a dev?</h4>
                            </div>

                            <p className="text-sm text-gray-600 mt-2">

                                Send me a message if you need a hand — happy to help!
                            </p>
                        </div>

                        <div className="mt-6">
                            <a
                                href="/contact"
                                className="inline-block bg-emerald-500 text-gray-50 font-medium text-sm px-5 py-2.5 rounded-lg hover:bg-emerald-600 transition"
                            >
                                Contact Me
                            </a>
                        </div>
                    </div>
                </div>


            </div>
        </section>
    );
};

export default HomePageBento;