"use client";
import Image from "next/image";

const LINKS: string[] = []; // "About Us", "Careers", "Press", "Blog", "Pricing"
const CURRENT_YEAR = new Date().getFullYear();

export function Footer() {
  return (
    <footer className="mt-10 bg-carsnap-blue px-8 pt-12">
      <div className="container mx-auto">
        <div className="flex flex-wrap justify-center gap-8 md:justify-between">
          <div className="text-center md:text-left">
            <a
              href="https://www.carsnapapp.com"
              target="_blank"
              className="mb-4 text-white text-xl font-semibold block"
            >
              CarSnap
            </a>
            <p className="text-white mb-12 font-normal">
              Car shopping, simplified with AI.
            </p>
            <ul className="flex flex-wrap items-center justify-center md:justify-start">
              {LINKS.map((link, idx) => (
                <li key={link}>
                  <a
                    href="#"
                    className={`py-1 font-medium transition-colors text-white ${
                      idx === 0 ? "pr-3" : "px-3"
                    }`}
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div className="mt-8 w-full md:mt-0 md:w-auto">
            <h6 className="mb-3 text-white text-lg font-semibold">
              Get the app
            </h6>
            <div className="flex flex-col gap-2">
              <button
                className="flex items-center justify-center bg-white text-gray-900 px-6 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors"
                onClick={() => window.open('https://apps.apple.com/us/app/carsnap-see-snap-drive/id6741093777', '_blank')}
              >
                <Image
                  width={256}
                  height={256}
                  src="/logos/logo-apple.png"
                  className="-mt-0.5 mr-2 h-6 w-6"
                  alt="ios"
                />
                App Store
              </button>
              <button
                className="flex items-center justify-center bg-white text-gray-900 px-6 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors"
                onClick={() => window.open('https://play.google.com/store/apps/details?id=com.maxgorm.carsnap', '_blank')}
              >
                <Image
                  width={256}
                  height={256}
                  src="/logos/logo-google.png"
                  className="-mt-0.5 mr-2 h-6 w-6"
                  alt="ios"
                />
                Google Play
              </button>
            </div>
          </div>
          <p className="w-full text-center font-normal opacity-75 md:text-left text-white">
            Questions? Comments? Concerns?{" "}
            <a 
              href="mailto:support@carsnapapp.com" 
              className="hover:opacity-100"
            >
              Contact us at support@carsnapapp.com
            </a>
          </p>
        </div>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-y-4 gap-x-8 border-t border-gray-700 py-7 md:justify-between">
          <div className="flex items-center gap-4">
            <p className="text-center font-normal opacity-75 text-white">
              &copy; {CURRENT_YEAR} Made using{" "}
              <a href="https://en.wikipedia.org/wiki/MIT_License" target="_blank" rel="noopener">
                MIT License
              </a>
            </p>
            <a
              href="/legal"
              className="text-center font-normal opacity-75 hover:opacity-100 text-white"
            >
              Terms of Use
            </a>
          </div>

          <div className="flex gap-2">
            <button 
              className="p-2 rounded text-white opacity-75 hover:opacity-100"
              onClick={() => window.open('https://x.com/CarSnapApp', '_blank')}
            >
              <svg className="w-4 h-4 text-white opacity-75 hover:opacity-100" fill="currentColor" viewBox="0 0 24 24">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
              </svg>
            </button>
            <button 
              className="p-2 rounded text-white opacity-75 hover:opacity-100"
              onClick={() => window.open('https://www.instagram.com/carsnapapp/', '_blank')}
            >
              <svg className="w-4 h-4 text-white opacity-75 hover:opacity-100" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
