"use client";

import { ClientLayout } from "@/components/client-layout";
import { Navbar, Footer } from "@/components";
import { Hero } from "./hero";
import { VideoIntro } from "./video-intro";
import { Features } from "./feature";
import { MobileConvenience } from "./mobile-convenience";
import { Testimonials } from "./testimonials";
import { Faqs } from "./faqs";

export default function Campaign() {
  return (
    <ClientLayout>
      <Navbar />
      <Hero />
      {/* <VideoIntro /> */}
      <Features />
      {/* <MobileConvenience /> */}
      {/* <Testimonials /> */}
      <Faqs />
      <Footer />
    </ClientLayout>
  );
}
