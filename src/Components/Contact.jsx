import React from "react";
import { useState } from "react";

const Contact = () => {


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
                        className="flex flex-col gap-4"
                    >
                        {/* Required for Netlify to recognize the form */}
                        <input type="hidden" name="form-name" value="contact"/>

                        <p>
                            <label>
                                Name
                                <input
                                    type="text"
                                    name="name"
                                    required
                                    className="mt-1 p-2 border border-gray-300 rounded w-full"
                                />
                            </label>
                        </p>

                        <p>
                            <label>
                                Email
                                <input
                                    type="email"
                                    name="email"
                                    required
                                    className="mt-1 p-2 border border-gray-300 rounded w-full"
                                />
                            </label>
                        </p>

                        <p>
                            <button
                                type="submit"
                                className="bg-emerald-500 text-white py-2 px-4 rounded hover:bg-emerald-600"
                            >
                                Send
                            </button>
                        </p>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default Contact;