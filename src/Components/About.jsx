import React from "react";
import { FaLinkedin, FaEnvelope, FaInstagram, FaGithub } from "react-icons/fa";
const About = () => {
    return (
        <section className="w-full py-24 px-6">
            <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-30">
                {/* Left: Text */}
                <div className="flex-1 pt-[16x]">
                    <h1 className="text-5xl font-bold text-gray-900 mb-6 pt-18">
                        I’m Owen — A Trumpet Player and Software Dev.
                    </h1>
                    <p className="text-md text-gray-600 leading-relaxed">
                        I grew up in Northern California and spent most of my childhood immersed in video games,
                        especially Minecraft. Hosting my own server sparked a curiosity about how computers work
                        and set me on the path to software development.
                        <br/>
                        <br/>
                        I went on to study Computer Science at Sonoma State University, where I discovered how much I
                        love building things that look good and feel great to use. I'm especially drawn to creating apps
                        that are fluid and easy to understand.
                        <br/>
                        <br/>
                        Outside of programming, I've played trumpet for most of my life and still perform today.
                        Music has taught me how to listen, how to be patient, and how to create something that connects
                        with people.
                        <br/>
                        <br/>
                        Right now, I'm working toward becoming the best software engineer I can be. Whether it’s a
                        polished frontend, a full-stack web app, or a new idea that challenges me to grow, I’m excited
                        to keep building things that matter.
                    </p>
                </div>
                {/*Right side of about */}
                <div className="w-[350px] shrink-0">
                    <img
                        src="/picture1.jpg"
                        alt="Owen Donohue"
                        className="w-full h-[350px] object-cover rounded-[32px] shadow-lg rotate-2"
                    />
                    <div className="font-semibold flex flex-col gap-6 pt-10">
                        <a
                            href="https://github.com/MRLemke"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-3 text-sm text-gray-600 hover:text-emerald-500 transition"
                        >
                            <FaGithub className="text-gray-900" size={20}/>
                            Follow on Github
                        </a>
                        <a
                            href="https://www.linkedin.com/in/owen-donohue-7a2474254/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-3 text-sm text-gray-700 hover:text-emerald-500 transition"
                        >
                            <FaLinkedin className="text-gray-900" size={20}/>
                            Follow on LinkedIn
                        </a>

                        <a
                            href="https://instagram.com/yourprofile"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-3 text-sm text-gray-700 hover:text-emerald-500 transition"
                        >
                            <FaInstagram className="text-gray-900" size={20}/>
                            Follow on Instagram
                        </a>

                        <a
                            href="mailto:owenpdonohue@gmail.com"
                            className="flex items-center gap-3 text-sm text-gray-700 hover:text-emerald-500 transition"
                        >
                            <FaEnvelope className="text-gray-900" size={20}/>
                            owenpdonohue@gmail.com
                        </a>
                    </div>

                </div>

            </div>

        </section>


    );
};

export default About;