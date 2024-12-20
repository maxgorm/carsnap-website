"use client";

import Image from "next/image";
import { Button, Typography } from "@material-tailwind/react";

export function Hero() {
  return (
    <div className="relative min-h-screen w-full">
      <header className="grid !min-h-[49rem] bg-gray-900 px-8">
        <div className="container mx-auto mt-32 grid h-full w-full grid-cols-1 place-items-center lg:mt-14 lg:grid-cols-2">
          <div className="col-span-1">
            <Typography 
              variant="h1" 
              color="white" 
              className="mb-6 text-3xl md:text-3xl lg:text-4xl font-bold"
              style={{ textShadow: '2px 2px 4px rgba(0,0,0,0.5)' }}
            >
              Make Guessing and Searching<br />
              a Thing of the Past
            </Typography>
            <Typography
              variant="h2"
              className="mb-8 text-3xl md:text-4xl lg:text-5xl font-bold text-blue-400"
              style={{ textShadow: '2px 2px 4px rgba(0,0,0,0.5)' }}
            >
              Just Snap a Photo
            </Typography>
            <Typography
              variant="lead"
              className="mb-12 text-gray-300 text-xl md:text-2xl md:pr-16 xl:pr-28"
              style={{ textShadow: '1px 1px 2px rgba(0,0,0,0.5)' }}
            >
              We use state-of-the-art AI models to determine<br />
              the make, model, and year of a car from a single photo.
            </Typography>
            <Typography 
              className="mb-6 text-xl" 
              color="white" 
              variant="h6"
              style={{ textShadow: '1px 1px 2px rgba(0,0,0,0.5)' }}
            >
              Get the app
            </Typography>
            <div className="flex flex-col gap-4 md:flex-row md:gap-6 mb-16">
              <Button
                size="lg"
                variant="filled"
                color="white"
                className="flex justify-center items-center gap-3 bg-white hover:bg-gray-200 text-gray-900 px-8"
                onClick={() => window.open('https://apps.apple.com/us/app/car-hunter/id6478634228', '_blank')}
              >
                <Image
                  width={256}
                  height={256}
                  src="/logos/logo-apple.png"
                  alt="app store"
                  className="w-6 h-6"
                />
                App Store
              </Button>
              <Button
                size="lg"
                variant="filled"
                color="white"
                className="flex justify-center items-center gap-3 bg-white hover:bg-gray-200 text-gray-900 px-8"
                onClick={() => window.open('https://play.google.com/store/apps/details?id=com.maxgorm.carhunter', '_blank')}
              >
                <Image
                  width={256}
                  height={256}
                  src="/logos/logo-google.png"
                  alt="play store"
                  className="w-6 h-6"
                />
                Google Play
              </Button>
            </div>
          </div>
          <Image
            width={470}
            height={576}
            src="/image/carsnapMockup4OldLogo.png"
            alt="app mockup"
            className="col-span-1 my-20 h-full max-h-[30rem] -translate-y-32 md:max-h-[36rem] lg:my-0 lg:ml-auto lg:max-h-[40rem] lg:translate-y-0"
          />
        </div>
      </header>
      <div className="mx-8 lg:mx-16 -mt-16 rounded-xl bg-white p-5 md:p-14 shadow-md">
        <div>
          <Typography 
            variant="h3" 
            color="blue-gray" 
            className="mb-3 text-2xl md:text-3xl font-bold"
          >
            AI Enhanced
          </Typography>
          <Typography
            variant="paragraph"
            className="font-normal !text-gray-500 lg:w-5/12 text-lg"
          >
            Gone are the days of spotting a car you like and spending
            hours searching for it online. With CarSnap you can simply take a
            picture and we&apos;ll show you listings, specifications, reviews
            and more!
          </Typography>
        </div>
      </div>
    </div>
  );
}
