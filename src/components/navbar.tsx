"use client";

import React from "react";
import Link from "next/link";
import {
  Navbar as MTNavbar,
  Collapse,
  IconButton,
  Typography,
} from "@material-tailwind/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

type MaterialColor = "blue-gray" | "gray" | "brown" | "deep-orange" | "orange" | "amber" | "yellow" | "lime" | "light-green" | "green" | "teal" | "cyan" | "light-blue" | "blue" | "indigo" | "deep-purple" | "purple" | "pink" | "red" | "white" | "black";

interface NavItemProps {
  children: React.ReactNode;
  href?: string;
  internal?: boolean;
  color?: MaterialColor;
}

function NavItem({ children, href, internal, color }: NavItemProps) {
  const content = (
    <Typography
      variant="small"
      className="font-medium"
      color={color}
    >
      {children}
    </Typography>
  );

  if (internal) {
    return (
      <li>
        <Link href={href || "/"}>
          {content}
        </Link>
      </li>
    );
  }

  return (
    <li>
      <Typography
        as="a"
        href={href || "#"}
        target={href ? "_blank" : "_self"}
        rel={href ? "noopener noreferrer" : undefined}
        variant="small"
        className="font-medium"
        color={color}
      >
        {children}
      </Typography>
    </li>
  );
}

function ClientNavbar({ isScrolling, open, onOpenChange, children }: { 
  isScrolling: boolean;
  open: boolean;
  onOpenChange: () => void;
  children: React.ReactNode;
}) {
  return (
    <MTNavbar
      fullWidth
      shadow={false}
      blurred={false}
      color={isScrolling ? "white" : "transparent"}
      className="fixed top-0 z-50 border-0"
    >
      <div className="container mx-auto flex items-center justify-between">
        <Typography
          as="a"
          href="/"
          variant="h6"
          color={isScrolling ? "gray" : "white"}
        >
          CarSnap
        </Typography>
        {children}
        <IconButton
          variant="text"
          color={isScrolling ? "gray" : "white"}
          onClick={onOpenChange}
          className="ml-auto inline-block lg:hidden"
        >
          {open ? (
            <XMarkIcon strokeWidth={2} className="h-6 w-6" />
          ) : (
            <Bars3Icon strokeWidth={2} className="h-6 w-6" />
          )}
        </IconButton>
      </div>
      <Collapse open={open}>
        <div className="container mx-auto mt-4 rounded-lg border-t border-blue-gray-50 bg-white px-6 py-5">
          <ul className="flex flex-col gap-4 text-blue-gray-900">
            <NavItem internal href="/" color="gray">Home</NavItem>
            <NavItem internal href="/legal" color="gray">Terms of Use</NavItem>
          </ul>
        </div>
      </Collapse>
    </MTNavbar>
  );
}

export function Navbar() {
  const [open, setOpen] = React.useState(false);
  const [isScrolling, setIsScrolling] = React.useState(false);

  React.useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpen(false)
    );
  }, []);

  React.useEffect(() => {
    function handleScroll() {
      if (window.scrollY > 0) {
        setIsScrolling(true);
      } else {
        setIsScrolling(false);
      }
    }

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleOpen = () => setOpen((cur) => !cur);

  return (
    <ClientNavbar 
      isScrolling={isScrolling}
      open={open}
      onOpenChange={handleOpen}
    >
      <ul className={`ml-10 hidden items-center gap-6 lg:flex ${
        isScrolling ? "text-gray-900" : "text-white"
      }`}>
        <NavItem internal href="/">Home</NavItem>
        <NavItem internal href="/legal">Terms of Use</NavItem>
      </ul>
    </ClientNavbar>
  );
}

//a