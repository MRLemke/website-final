import React from "react";
import { FaCoffee } from "react-icons/fa";
import { FaPaintBrush } from "react-icons/fa";
import { FaRobot } from "react-icons/fa";
const projects = [
    {
        title: "Lpdart.com",
        description: "Shopify website for Linda Donohue Fine Art.",
        icon: <FaPaintBrush className="text-emerald-500 w-5 h-5" />,
        link: "https://www.lpdart.com",
    },
    {
        title: "Art-by-Maryam.com",
        description: "Shopify website for Maryam Rouhi.",
        icon: <FaPaintBrush className="text-emerald-500 w-5 h-5" />,
        link: "https://art-by-maryam.myshopify.com/",
    },
    {
        title: "AI Mail Analyzer",
        description:
            "An AI chatbot that reads, classifies, and summarizes important emails from my inbox. Built with a Python backend and React frontend.",
        icon: <FaRobot className="text-emerald-500 w-5 h-5" />,
        link: "https://github.com",
    },
    {
        title: "Petaluma Coffee & Tea Co.",
        description:
            "A Shopify Framer E-commerce website for Petaluma Coffee & Tea Co., who decided to expand their online presence.",
        icon: <FaCoffee className="text-emerald-500 w-5 h-5" />,
        link: "https://www.petalumacoffee.com/",
    },
];


export default function Projects() {
    return (
        <section className="w-full py-24 px-6 ">
            <div className="max-w-5xl mx-auto">
                {/* Hero-style header */}
                <h1 className="text-5xl max-w-6/10 font-bold text-gray-900 mb-4 pt-18">
                    Works I'm Apart Of.
                </h1>
                <p className="text-md max-w-6/10 text-gray-600 mb-12">
                    A collection of real-world websites and applications I've built — from
                    Shopify storefronts to AI-powered tools.
                </p>

                {/* Project grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {projects.map((project, index) => (
                        <div
                            key={index}
                            className="bg-gray-50 rounded-xl shadow px-6 py-5 flex flex-col gap-4"
                        >
                            {/* Icon + Title */}
                            <div className="flex items-center gap-3">
                                {project.icon}
                                <h3 className="text-lg font-semibold text-gray-900">
                                    {project.title}
                                </h3>
                            </div>

                            {/* Description */}
                            <p className="text-sm text-gray-600">{project.description}</p>

                            {/* Link */}
                            <a
                                href={project.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-emerald-500 text-sm font-medium hover:underline"
                            >
                                View Project
                            </a>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
