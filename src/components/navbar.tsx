import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

interface NavItemProps {
  children: React.ReactNode;
  href?: string;
}
function NavItem({ children, href }: NavItemProps) {
  const isExternal = href?.startsWith('http');
  return (
    <li>
      {isExternal ? (
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className="font-medium text-sm"
        >
          {children}
        </a>
      ) : (
        <Link href={href || "/"} passHref>
          <span className="font-medium cursor-pointer text-sm">
            {children}
          </span>
        </Link>
      )}
    </li>
  );
}

export function Navbar() {
  const [open, setOpen] = React.useState(false);
  const [isScrolling, setIsScrolling] = React.useState(false);

  function handleOpen() {
    setOpen((cur) => !cur);
  }

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

  return (
    <nav
      className={`fixed top-0 z-50 border-0 py-1 w-full ${
        isScrolling ? "bg-white shadow-md" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto flex items-center justify-between">
        <a
          href="https://www.carsnapapp.com"
          className="flex items-center"
        >
          <Image
            src="/image/Car-Snap-Horizontal-Navy-Blue.png"
            alt="CarSnap Logo"
            width={120}
            height={30}
            className={`object-contain w-auto ${isScrolling ? "brightness-50" : "brightness-0 invert"}`}
          />
        </a>
        <ul
          className={`hidden items-center gap-6 lg:flex lg:justify-center lg:flex-1 ${
            isScrolling ? "text-gray-900" : "text-white"
          }`}
        >
          <NavItem href="/">Home</NavItem>
          <NavItem href="/legal">Terms of Use</NavItem>
        </ul>
        <div className="hidden gap-2 lg:flex lg:items-center">
          {/* Social Media Icons - Desktop
          <button
            className={`p-2 rounded ${isScrolling ? "text-gray-600 hover:text-gray-900" : "text-white hover:text-gray-200"}`}
          >
            <i className="fa-brands fa-twitter text-base" />
          </button>
          <button
            className={`p-2 rounded ${isScrolling ? "text-gray-600 hover:text-gray-900" : "text-white hover:text-gray-200"}`}
          >
            <i className="fa-brands fa-facebook text-base" />
          </button>
          <button
            className={`p-2 rounded ${isScrolling ? "text-gray-600 hover:text-gray-900" : "text-white hover:text-gray-200"}`}
          >
            <i className="fa-brands fa-instagram text-base" />
          </button>
          */}
        </div>
        <button
          onClick={handleOpen}
          className={`ml-auto inline-block lg:hidden p-2 rounded ${
            isScrolling ? "text-gray-600 hover:text-gray-900" : "text-white hover:text-gray-200"
          }`}
        >
          {open ? (
            <XMarkIcon strokeWidth={2} className="h-6 w-6" />
          ) : (
            <Bars3Icon strokeWidth={2} className="h-6 w-6" />
          )}
        </button>
      </div>
      {open && (
        <div className="container mx-auto mt-4 rounded-lg border-t border-blue-gray-50 bg-white px-6 py-5">
          <ul className="flex flex-col gap-4 text-blue-gray-900">
            <NavItem href="/">Home</NavItem>
            <NavItem href="/legal">Terms of Use</NavItem>
          </ul>
          <div className="mt-4 flex items-center gap-2">
            {/* Social Media Icons - Mobile
            <button className="p-2 rounded text-gray-600 hover:text-gray-900">
              <i className="fa-brands fa-twitter text-base" />
            </button>
            <button className="p-2 rounded text-gray-600 hover:text-gray-900">
              <i className="fa-brands fa-facebook text-base" />
            </button>
            <button className="p-2 rounded text-gray-600 hover:text-gray-900">
              <i className="fa-brands fa-instagram text-base" />
            </button>
            */}
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
