"use client";

import React from "react";
import { Typography, Card } from "@material-tailwind/react";

const FAQS = [
  {
    title: "Is CarSnap free to use?",
    desc: (
      <>
        <Typography className="font-normal !text-gray-500">
          CarSnap is 100% free to use. There are no paid features or premium plans. Simply download on iOS or Android and start snapping!
        </Typography>
        <Typography className="font-normal !text-gray-500 mt-2">
          *Advertisements may be present in the app.
        </Typography>
      </>
    ),
  },
  {
    title: "Where do you source your listings from?",
    desc: (
      <Typography className="font-normal !text-gray-500">
        Our listings are sourced from various websites across the web using an API. We do not own the listings and are not responsible for their accuracy or availability.
      </Typography>
    ),
  },
  {
    title: "Where do your source your specifications and value estimates from?",
    desc: (
      <Typography className="font-normal !text-gray-500">
        We use established AI models to determine the specifications and value estimates of each car. These models are trained on a variety of data sources and are constantly updated to provide the most accurate information.
      </Typography>
    ),
  },
  
];

export function Faqs() {
  return (
    <section className="px-8 py-20">
      <div className="container max-w-6xl mx-auto">
        <div className="text-center">
          <Typography variant="h1" className="mb-4 text-carsnap-blue">
            Frequently asked questions
          </Typography>
          <Typography
            variant="lead"
            className="mx-auto mb-24 !text-gray-500 lg:w-3/5"
          >
            See answers to our most common questions, or feel free to contact
            us via our in-app contact button to ask your own questions.
            
          </Typography>
        </div>

        <div className="grid gap-20 md:grid-cols-1 lg:grid-cols-3">
          {FAQS.map(({ title, desc }) => (
            <Card key={title} shadow={false} color="transparent">
              <Typography className="pb-6 text-carsnap-blue" variant="h4">
                {title}
              </Typography>
              {desc}
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Faqs;
