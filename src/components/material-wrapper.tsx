"use client";

import { ThemeProvider } from "@material-tailwind/react";
import { ErrorBoundary } from "./error-boundary";
import { useEffect, useState } from "react";

export function MaterialWrapper({ children }: { children: React.ReactNode }) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    try {
      setMounted(true);
      return () => setMounted(false);
    } catch (error) {
      console.error("Error in MaterialWrapper:", error);
      setMounted(false);
    }
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

  return (
    <ErrorBoundary>
      <ThemeProvider>
        {children}
      </ThemeProvider>
    </ErrorBoundary>
  );
}
