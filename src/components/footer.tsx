"use client";
import Image from "next/image";
import { Typography, IconButton, Button } from "@material-tailwind/react";

const LINKS: string[] = []; // "About Us", "Careers", "Press", "Blog", "Pricing"
const CURRENT_YEAR = new Date().getFullYear();

export function Footer() {
  return (
    <footer className="mt-10 bg-carsnap-blue px-8 pt-12">
      <div className="container mx-auto">
        <div className="flex flex-wrap justify-center gap-8 md:justify-between">
          <div className="text-center md:text-left">
            <Typography
              as="a"
              href="https://www.material-tailwind.com"
              target="_blank"
              variant="h5"
              color="white"
              className="mb-4"
            >
              CarSnap
            </Typography>
            <Typography color="white" className="mb-12 font-normal">
              Car shopping, simplified with AI.
            </Typography>
            <ul className="flex flex-wrap items-center justify-center md:justify-start">
              {LINKS.map((link, idx) => (
                <li key={link}>
                  <Typography
                    as="a"
                    href="#"
                    color="white"
                    className={`py-1 font-medium transition-colors ${
                      idx === 0 ? "pr-3" : "px-3"
                    }`}
                  >
                    {link}
                  </Typography>
                </li>
              ))}
            </ul>
          </div>
          <div className="mt-8 w-full md:mt-0 md:w-auto">
            <Typography variant="h6" color="white" className="mb-3">
              Get the app
            </Typography>
            <div className="flex flex-col gap-2">
              <Button
                color="white"
                className="flex items-center justify-center"
                onClick={() => window.open('https://apps.apple.com/us/app/car-hunter/id6478634228', '_blank')}
              >
                <Image
                  width={256}
                  height={256}
                  src="/logos/logo-apple.png"
                  className="-mt-0.5 mr-2 h-6 w-6"
                  alt="ios"
                />
                App Store
              </Button>
              <Button
                color="white"
                className="flex items-center justify-center"
                onClick={() => window.open('https://play.google.com/store/apps/details?id=com.maxgorm.carhunter', '_blank')}
              >
                <Image
                  width={256}
                  height={256}
                  src="/logos/logo-google.png"
                  className="-mt-0.5 mr-2 h-6 w-6"
                  alt="ios"
                />
                Google Play
              </Button>
            </div>
          </div>
        </div>
        <div className="mt-16 flex flex-wrap items-center justify-center gap-y-4 gap-x-8 border-t border-gray-700 py-7 md:justify-between">
          <div className="flex items-center gap-4">
            <Typography
              color="white"
              className="text-center font-normal opacity-75"
            >
              &copy; {CURRENT_YEAR} Made using{" "}
              <a href="https://en.wikipedia.org/wiki/MIT_License" target="_blank" rel="noopener">
                MIT License
              </a>
            </Typography>
            <Typography
              as="a"
              href="/legal"
              color="white"
              className="text-center font-normal opacity-75 hover:opacity-100"
            >
              Terms of Use
            </Typography>
          </div>

          <div className="flex gap-2">
            <IconButton 
              variant="text" 
              color="white" 
              className="hover:opacity-100"
              onClick={() => window.open('https://x.com/CarSnapApp', '_blank')}
            >
              <svg className="w-4 h-4 text-white opacity-75 hover:opacity-100" fill="currentColor" viewBox="0 0 24 24">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
              </svg>
            </IconButton>
            <IconButton 
              variant="text" 
              color="white"
              className="hover:opacity-100"
              onClick={() => window.open('https://www.instagram.com/carsnapapp/', '_blank')}
            >
              <i className="fa-brands fa-instagram text-lg text-white not-italic opacity-75 hover:opacity-100"></i>
            </IconButton>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
