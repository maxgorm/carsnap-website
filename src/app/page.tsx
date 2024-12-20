"use client";

// components
import { Navbar, Footer } from "@/components";

// sections
import { Hero } from "./hero";
import { VideoIntro } from "./video-intro";
import { Features } from "./feature";
import { MobileConvenience } from "./mobile-convenience";
import { Testimonials } from "./testimonials";
import { Faqs } from "./faqs";

export default function Campaign() {
  return (
    <>
      <Navbar />
      <Hero />
      {/* <VideoIntro /> */}
      <Features />
      {/* <MobileConvenience /> */}
      {/* <Testimonials /> */}
      <Faqs />
      <Footer />
    </>
  );
}
