"use client";

import React from "react";
import { Typography, Card } from "@material-tailwind/react";
import { QuestionMarkCircleIcon } from "@heroicons/react/24/solid";

const FAQS = [
  {
    title: "Is CarSnap free to use?",
    desc: "CarSnap is 100% free to use. There are no paid features or premium plans. Simply download on iOS or Android and start snapping!",
    additionalInfo: "*Advertisements may be present in the app."
  },
  {
    title: "Where do you source your listings from?",
    desc: "Our listings are sourced from various websites across the web using an API. We do not own the listings and are not responsible for their accuracy or availability.",
  },
  {
    title: "Where do your source your specifications and value estimates from?",
    desc: "We use established AI models to determine the specifications and value estimates of each car. These models are trained on a variety of data sources and are constantly updated to provide the most accurate information.",
  },
];

export function Faqs() {
  return (
    <section className="px-8 py-20 bg-gray-900">
      <div className="container max-w-6xl mx-auto">
        <div className="text-center">
          <div className="flex justify-center mb-4">
            <QuestionMarkCircleIcon className="h-12 w-12 text-blue-400" />
          </div>
          <Typography 
            variant="h2" 
            color="white" 
            className="mb-4 text-3xl md:text-4xl font-bold"
            style={{ textShadow: '2px 2px 4px rgba(0,0,0,0.5)' }}
          >
            Frequently Asked Questions
          </Typography>
          <Typography
            variant="lead"
            className="mx-auto mb-16 text-gray-300 lg:w-3/5"
            style={{ textShadow: '1px 1px 2px rgba(0,0,0,0.5)' }}
          >
            See answers to our most common questions, or feel free to contact
            us via our in-app contact button to ask your own questions.
          </Typography>
        </div>

        <div className="grid gap-8 md:grid-cols-1 lg:grid-cols-3">
          {FAQS.map(({ title, desc, additionalInfo }) => (
            <Card 
              key={title} 
              className="mt-6 bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20 transition-colors duration-300"
            >
              <div className="p-6">
                <Typography 
                  color="white" 
                  className="pb-4 text-xl font-bold"
                  style={{ textShadow: '1px 1px 2px rgba(0,0,0,0.5)' }}
                >
                  {title}
                </Typography>
                <Typography className="font-normal text-gray-300">
                  {desc}
                </Typography>
                {additionalInfo && (
                  <Typography className="mt-2 font-normal text-gray-400 text-sm italic">
                    {additionalInfo}
                  </Typography>
                )}
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
