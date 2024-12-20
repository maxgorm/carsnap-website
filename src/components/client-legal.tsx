"use client";

import { ThemeProvider } from "@material-tailwind/react";
import { Navbar } from "./navbar";
import { Footer } from "./footer";
import { LegalContent } from "../app/legal/components/legal-content";

export default function ClientLegal() {
  return (
    <ThemeProvider>
      <Navbar />
      <LegalContent />
      <Footer />
    </ThemeProvider>
  );
}
