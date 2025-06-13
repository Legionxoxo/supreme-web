// app/page.tsx or Home.tsx
"use client";

import { useRef } from "react";
import Animation from "@/components/Animation";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";

export default function Home() {
  const scrollRef = useRef<HTMLDivElement>(null);

  return (
    <>
      <div
        ref={scrollRef}
        className="h-screen overflow-y-scroll custom-scrollbar flex flex-col items-center justify-center space-y-10 text-red-300"
      >
        <Navbar scrollRef={scrollRef} />
        <div>
          <Hero />
          <Animation />
          <Contact />
          <Footer />
        </div>
      </div>
    </>
  );
}
