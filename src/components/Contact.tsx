import React from "react"
import { contactInfo } from "../../data/data"

const Contact = () => {
    return (
        <section className="bg-bgcontact text-white py-12 min-h-screen flex items-center justify-center">
            <div className="w-full max-w-[874px] px-6 flex flex-col md:flex-row gap-10 xl:gap-[150px]">

                {/* Get in touch Heading - Always first in mobile */}
                <div className="order-1 w-full md:hidden">
                    <h2 className="text-5xl max-md:text-2xl font-semibold">Get in touch</h2>
                    <div className="w-12 h-[2px] bg-white mt-4" />
                </div>

                {/* Form */}
                <form className="w-full md:w-[364px] space-y-[50px] order-2 md:order-2">
                    <input
                        type="text"
                        placeholder="Full name"
                        className="w-full text-xl max-md:text-base bg-transparent border-b-2 pb-2 border-white/40 outline-none placeholder-white"
                    />
                    <input
                        type="email"
                        placeholder="E-mail"
                        className="w-full text-xl max-md:text-base bg-transparent border-b-2 pb-2 border-white/40 outline-none placeholder-white"
                    />
                    <input
                        type="text"
                        placeholder="Subject"
                        className="w-full text-xl max-md:text-base bg-transparent border-b-2 pb-2 border-white/40 outline-none placeholder-white"
                    />
                    <textarea
                        placeholder="Message"
                        className="w-full text-xl max-md:text-base bg-transparent border-b-2 pb-2 border-white/40 outline-none placeholder-white resize-none"
                    />

                    <button
                        type="submit"
                        className="bg-white max-md:w-full text-[#0066A2] px-10 py-3 rounded-full font-medium hover:bg-gray-200 transition cursor-pointer"
                    >
                        Send
                    </button>
                </form>

                {/* Contact Info + Heading (desktop) */}
                <div className="w-full md:w-[364px] space-y-6 order-3 md:order-1">
                    <div className="hidden md:block">
                        <h2 className="text-5xl max-md:text-2xl font-semibold">Get in touch</h2>
                        <div className="w-16 h-1 bg-white my-10" />
                    </div>

                    <p className="text-2xl max-md:text-base mb-10 font-normal">For general enquiries</p>

                    <div className="text-xl max-md:text-sm">
                        <p className="font-semibold">Address :</p>
                        <p className="font-normal">
                            {contactInfo.address}
                            <span className="hidden xl:inline"> {contactInfo.address2}</span>
                            <span className="inline xl:hidden">
                                <br />
                                {contactInfo.address2}
                            </span>
                        </p>
                    </div>

                    <div className="text-xl max-md:text-sm">
                        <p className="font-semibold">Phone :</p>
                        <p>{contactInfo.phone}</p>
                    </div>

                    <div className="text-xl max-md:text-sm">
                        <p className="font-semibold">Email :</p>
                        <p>{contactInfo.email}</p>
                    </div>
                </div>

            </div>
        </section>
    )
}

export default Contact
