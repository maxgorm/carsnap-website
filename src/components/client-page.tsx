"use client";

import { ThemeProvider } from "@material-tailwind/react";
import { Navbar } from "./navbar";
import { Footer } from "./footer";
import { Hero } from "../app/hero";
import { Features } from "../app/feature";
import { Faqs } from "../app/faqs";

export default function ClientPage() {
  return (
    <ThemeProvider>
      <Navbar />
      <Hero />
      <Features />
      <Faqs />
      <Footer />
    </ThemeProvider>
  );
}
