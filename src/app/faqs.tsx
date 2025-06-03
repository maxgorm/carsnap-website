"use client";

import React from "react";

const FAQS: { title: string; desc: React.ReactNode }[] = [
  {
    title: "Is CarSnap free to use?",
    desc: (
      <div>
        <p className="font-normal text-gray-500">
          CarSnap is 100% free to use. There are no paid features or premium plans. Simply download on iOS or Android and start snapping!
        </p>
        <p className="font-normal text-gray-500 mt-2">
          *Advertisements may be present in the app.
        </p>
      </div>
    ),
  },
  {
    title: "Where do you source your listings from?",
    desc: (
      <p className="font-normal text-gray-500">
        Our listings are sourced from various websites across the web using an API. We do not own the listings and are not responsible for their accuracy or availability.
      </p>
    ),
  },
  {
    title: "Where do you source your specifications and value estimates from?",
    desc: (
      <p className="font-normal text-gray-500">
        We use established AI models to determine the specifications and value estimates of each car. These models are trained on a variety of data sources and are constantly updated to provide the most accurate information.
      </p>
    ),
  },

];

export function Faqs() {
  return (
    <section className="px-8 py-20">
      <div className="container max-w-6xl mx-auto">
        <div className="text-center">
          <h1 className="mb-4 text-carsnap-blue text-4xl font-bold">
            Frequently asked questions
          </h1>
          <p className="mx-auto mb-24 text-gray-500 lg:w-3/5 text-xl">
            See answers to our most common questions, or feel free to contact
            us via our in-app contact button to ask your own questions.
          </p>
        </div>

        <div className="grid gap-20 md:grid-cols-1 lg:grid-cols-3">
          {FAQS.map(({ title, desc }) => (
            <div key={title} className="rounded-lg p-5 bg-white">
              <h4 className="pb-6 text-carsnap-blue text-xl font-medium">
                {title}
              </h4>
              {desc}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Faqs;
