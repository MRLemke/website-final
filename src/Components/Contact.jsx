import React from "react";
import { useState } from "react";

const Contact = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
        "bot-field": "",
    });

    const [submitted, setSubmitted] = useState(false);

    const handleChange = (e) => {
        setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const form = e.target;
        const data = new FormData(form);

        try {
            await fetch("/", {
                method: "POST",
                headers: { "Content-Type": "application/x-www-form-urlencoded" },
                body: new URLSearchParams(data).toString(),
            });

            setSubmitted(true);
            setFormData({ name: "", email: "", message: "", "bot-field": "" });
        } catch (error) {
            console.error("Form submission error:", error);
        }
    };

    return (
        <section className="w-full min-h-screen py-24 px-6 flex items-center justify-center">
            <div className="max-w-xl w-full text-center">
                {/* Header */}
                <h1 className="text-5xl font-bold text-gray-900 mb-6">Get in touch!</h1>
                <p className="text-gray-600 text-md mb-10">
                    I'm always open to new projects, collaborations, or just a friendly chat. Whether you’ve got a project idea or just want to say hi, drop me a message.
                </p>

                {/* Contact Form */}
                <div className="bg-gray-50 rounded-[32px] shadow p-8 w-full">
                    <form
                        name="contact"
                        method="POST"
                        data-netlify="true"
                        netlify-honeypot="bot-field"
                        className="flex flex-col gap-4"
                    >
                        <input type="hidden" name="form-name" value="contact"/>
                        <p className="hidden">
                            <label>Don’t fill this out if you’re human: <input name="bot-field"/></label>
                        </p>


                        <input
                            type="text"
                            name="name"
                            placeholder="Your name"
                            required
                            className="p-3 rounded-lg border border-gray-200"
                        />
                        <input
                            type="email"
                            name="email"
                            placeholder="Your email"
                            required
                            className="p-3 rounded-lg border border-gray-200"
                        />
                        <textarea
                            name="message"
                            placeholder="Your message"
                            required
                            className="p-3 rounded-lg border border-gray-200 h-40 resize-none"
                        />
                        <button
                            type="submit"
                            className="bg-emerald-500 text-white py-3 px-6 rounded-lg hover:bg-emerald-600 transition font-semibold"
                        >
                            Send Message
                        </button>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default Contact;