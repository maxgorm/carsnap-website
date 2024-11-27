"use client";

import Image from "next/image";
import { Button, Typography } from "@material-tailwind/react";


function Hero() {
  return (
    <div className="relative min-h-screen w-full">
      <header className="grid !min-h-[49rem] bg-gray-900 px-8">
        <div className="container mx-auto mt-32 grid h-full w-full grid-cols-1 place-items-center lg:mt-14 lg:grid-cols-2">
          <div className="col-span-1">
            <Typography variant="h1" color="white" className="mb-4">
              Car Shopping <br /> Just Got Smarter
            </Typography>
            <Typography
              variant="lead"
              className="mb-7 !text-white md:pr-16 xl:pr-28"
            >
              See a car you like? Simply take a picture.<br></br> We&apos;ll handle the rest
            </Typography>
            <Typography className="mb-4" color="white" variant="h6">
              Get the app
            </Typography>
            <div className="flex flex-col gap-2 md:mb-2 md:w-10/12 md:flex-row">
              <Button
                size="lg"
                color="white"
                className="flex justify-center items-center gap-3"
                onClick={() => window.open('https://apps.apple.com/us/app/car-hunter/id6478634228', '_blank')}
              >
                <Image
                  width={256}
                  height={256}
                  src="/logos/logo-apple.png"
                  alt="metamask"
                  className="w-6 h-6"
                />
                App Store
              </Button>
              <Button
                size="lg"
                color="white"
                className="flex justify-center items-center gap-3"
                onClick={() => window.open('https://play.google.com/store/apps/details?id=com.maxgorm.carhunter', '_blank')}
              >
                <Image
                  width={256}
                  height={256}
                  src="/logos/logo-google.png"
                  alt="metamask"
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
            alt="team work"
            className="col-span-1 my-20 h-full max-h-[30rem] -translate-y-32 md:max-h-[36rem] lg:my-0 lg:ml-auto lg:max-h-[40rem] lg:translate-y-0"
          />
        </div>
      </header>
      <div className="mx-8 lg:mx-16 -mt-24 rounded-xl bg-white p-5 md:p-14 shadow-md">
        <div>
          <Typography variant="h3" color="blue-gray" className="mb-3">
            AI Enhanced
          </Typography>
          <Typography
            variant="paragraph"
            className="font-normal !text-gray-500 lg:w-5/12"
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
export default Hero;
