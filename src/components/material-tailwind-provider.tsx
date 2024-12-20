"use client";

import { useEffect, useState } from "react";
import { ThemeProvider } from "@material-tailwind/react";

export function MaterialTailwindProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return <ThemeProvider>{children}</ThemeProvider>;
}
