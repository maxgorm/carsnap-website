"use client";

import { ThemeProvider } from "@material-tailwind/react";

export function ThemeLayout({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider>
      <div className="min-h-screen bg-gray-900">
        {children}
      </div>
    </ThemeProvider>
  );
}
