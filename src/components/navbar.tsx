import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Navbar as MTNavbar,
  Collapse,
  IconButton,
  Typography,
  Button,
} from "@material-tailwind/react";
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
        <Typography
          as="a"
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          variant="small"
          className="font-medium"
        >
          {children}
        </Typography>
      ) : (
        <Link href={href || "/"} passHref>
          <Typography
            as="span"
            variant="small"
            className="font-medium cursor-pointer"
          >
            {children}
          </Typography>
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
    <MTNavbar
      fullWidth
      shadow={false}
      blurred={false}
      color={isScrolling ? "white" : "transparent"}
      className="fixed top-0 z-50 border-0 !py-1"
    >
      <div className="container mx-auto flex items-center justify-between">
        <a
          href="https://www.material-tailwind.com"
          target="_blank"
          rel="noopener noreferrer"
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
          <IconButton
            variant="text"
            color={isScrolling ? "gray" : "white"}
            size="sm"
          >
            <i className="fa-brands fa-twitter text-base" />
          </IconButton>
          <IconButton
            variant="text"
            color={isScrolling ? "gray" : "white"}
            size="sm"
          >
            <i className="fa-brands fa-facebook text-base" />
          </IconButton>
          <IconButton
            variant="text"
            color={isScrolling ? "gray" : "white"}
            size="sm"
          >
            <i className="fa-brands fa-instagram text-base" />
          </IconButton>
          */}
          {/* <a href="https://www.material-tailwind.com/blocks" target="_blank" rel="noopener noreferrer">
            <Button 
              color={isScrolling ? "gray" : "white"} 
              size="sm"
            >
              Blocks
            </Button>
          </a> */}
        </div>
        <IconButton
          variant="text"
          color={isScrolling ? "gray" : "white"}
          onClick={handleOpen}
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
            <NavItem href="/">Home</NavItem>
            <NavItem href="/legal">Terms of Use</NavItem>
          </ul>
          <div className="mt-4 flex items-center gap-2">
            {/* Social Media Icons - Mobile
            <IconButton 
              variant="text" 
              color="gray" 
              size="sm"
            >
              <i className="fa-brands fa-twitter text-base" />
            </IconButton>
            <IconButton 
              variant="text" 
              color="gray" 
              size="sm"
            >
              <i className="fa-brands fa-facebook text-base" />
            </IconButton>
            <IconButton 
              variant="text" 
              color="gray" 
              size="sm"
            >
              <i className="fa-brands fa-instagram text-base" />
            </IconButton>
            */}
            <a href="https://www.material-tailwind.com/blocks" target="_blank" rel="noopener noreferrer">
              <Button 
                color="gray" 
                size="sm" 
                className="ml-auto"
              >
                Blocks
              </Button>
            </a>
          </div>
        </div>
      </Collapse>
    </MTNavbar>
  );
}

export default Navbar;
