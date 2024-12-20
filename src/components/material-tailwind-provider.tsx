"use client";

import React, { useEffect, useState } from "react";
import { ThemeProvider } from "@material-tailwind/react";

function ClientProvider({ children }: { children: React.ReactNode }) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    return () => setMounted(false);
  }, []);

  if (!mounted) {
    return (
      <div className="min-h-screen bg-gray-900">
        <div className="container mx-auto px-4 py-16">
          <h1 className="text-white text-4xl font-bold text-center">Loading...</h1>
        </div>
      </div>
    );
  }

  return <ThemeProvider>{children}</ThemeProvider>;
}

export function MaterialTailwindProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClientProvider>
      {children}
    </ClientProvider>
  );
}
