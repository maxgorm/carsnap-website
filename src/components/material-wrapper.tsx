"use client";

import { ThemeProvider } from "@material-tailwind/react";

export function MaterialWrapper({ children }: { children: React.ReactNode }) {
  return <ThemeProvider>{children}</ThemeProvider>;
}
