"use client";

import { useEffect, useState, RefObject } from "react";
import Image from "next/image";

export default function Navbar({ scrollRef }: { scrollRef: RefObject<HTMLDivElement | null> }) {
    const [show, setShow] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);

    useEffect(() => {
        const scrollEl = scrollRef.current;
        if (!scrollEl) return;

        const controlNavbar = () => {
            if (scrollEl.scrollTop > lastScrollY) {
                setShow(false);
            } else {
                setShow(true);
            }
            setLastScrollY(scrollEl.scrollTop);
        };

        scrollEl.addEventListener("scroll", controlNavbar);
        return () => scrollEl.removeEventListener("scroll", controlNavbar);
    }, [lastScrollY, scrollRef]);

    return (
        <nav
            className={`fixed top-0 w-full z-50 bg-[#F9FAFD] shadow transition-transform duration-500 ease-in-out ${show ? "translate-y-0" : "-translate-y-full"
                } h-20`}
        >
            <div className="max-w-7xl mx-auto px-6 h-full flex items-center justify-between">
                {/* Left - Logo */}
                <div className="flex items-center space-x-2">
                    <Image
                        src="/supreme_logo.png"
                        alt="Supreme Group Logo"
                        width={140}
                        height={40}
                        className="object-contain"
                        priority
                    />
                </div>

                {/* Right - Buttons and icons */}
                <div className="flex items-center space-x-8 max-sm:space-x-0  ">
                    <button className="bg-highlight hover:bg-highlight/80 hover:cursor-pointer text-black px-5 py-2 rounded-full font-medium transition">
                        Contact Us
                    </button>

                    {/* LinkedIn icon */}
                    <a href="#" className="hover:opacity-75 transition-opacity max-sm:hidden">
                        <img
                            src="/icons/linkedin.svg"
                            alt="LinkedIn"
                            className="size-5"
                        />
                    </a>

                    {/* Language selector */}
                    <div className="flex items-center space-x-6 hover:opacity-75 transition-opacity max-sm:hidden">
                        <img
                            src="/icons/eng.svg"
                            alt="Language"
                            className="size-10 cursor-pointer"
                        />
                    </div>
                </div>
            </div>
        </nav>
    );
}
