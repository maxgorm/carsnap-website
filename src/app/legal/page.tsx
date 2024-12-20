"use client";

import { ClientLayout } from "@/components/client-layout";
import { LegalContent } from './components/legal-content';
import { Navbar, Footer } from "@/components";

export default function Legal() {
  return (
    <ClientLayout>
      <Navbar />
      <LegalContent />
      <Footer />
    </ClientLayout>
  );
}
