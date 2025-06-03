"use client";

import Image from "next/image";
import { Button } from "@material-tailwind/react";


function Hero() {
  return (
    <div className="relative min-h-screen w-full">
      <header className="grid !min-h-[49rem] bg-carsnap-blue px-8">
        <div className="container mx-auto mt-32 grid h-full w-full grid-cols-1 place-items-center lg:mt-14 lg:grid-cols-2">
          <div className="col-span-1">
            <h1 className="mb-4 text-white text-4xl font-bold">
              Car Shopping <br /> Just Got Smarter
            </h1>
            <p
              className="mb-7 text-white md:pr-16 xl:pr-28 text-xl"
            >
              See a car you like? Simply take a picture.<br></br> We&apos;ll handle the rest
            </p>
            <h6 className="mb-4 text-white text-base font-semibold">
              Get the app
            </h6>
            <div className="flex flex-col gap-2 md:mb-2 md:w-10/12 md:flex-row">
              <Button
                size="lg"
                color="white"
                className="flex justify-center items-center gap-3"
                onClick={() => window.open('https://apps.apple.com/us/app/carsnap-see-snap-drive/id6741093777', '_blank')}
                placeholder=""
                onPointerEnterCapture={undefined}
                onPointerLeaveCapture={undefined}
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
                onClick={() => window.open('https://play.google.com/store/apps/details?id=com.maxgorm.carsnap', '_blank')}
                placeholder=""
                onPointerEnterCapture={undefined}
                onPointerLeaveCapture={undefined}
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
            src="/image/NewCarSnapResizedMock.png"
            alt="team work"
            className="col-span-1 my-10 h-auto w-auto object-contain max-w-[300px] -translate-y-28 md:max-h-[36rem] md:max-w-none lg:my-0 lg:ml-auto lg:max-h-[40rem] lg:translate-y-0"
          />
        </div>
      </header>
      <div className="mx-8 lg:mx-16 -mt-24 rounded-xl bg-white p-5 md:p-14 shadow-md">
        <div>
          <h3 className="mb-3 text-carsnap-blue text-2xl font-bold">
            AI Enhanced
          </h3>
          <p
            className="font-normal text-gray-500 lg:w-5/12"
          >
            Gone are the days of spotting a car you like and spending
            hours searching for it online. With CarSnap you can simply take a
            picture and we&apos;ll show you listings, specifications, reviews
            and more!
          </p>
        </div>
      </div>
    </div>
  );
}
export default Hero;
