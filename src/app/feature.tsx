"use client";

import React from "react";
import { Typography } from "@material-tailwind/react";

import {
  MagnifyingGlassIcon,
  ClipboardDocumentListIcon,
  PlayCircleIcon,
  CurrencyDollarIcon,
} from "@heroicons/react/24/solid";

import { FeatureCard } from "@/components/feature-card";

const FEATURES = [
  {
    icon: MagnifyingGlassIcon,
    title: "Listings",
    children:
      "CarSnap shows you local listings of each car you snap a photo of. No need to utilize multiple platforms to find the car you want.",
  },
  {
    icon: ClipboardDocumentListIcon,
    title: "Specifications",
    children:
      "CarSnap displays the important specifications of each car you snap a photo of. View engine specs, interior features, fuel economy, and more.",
  },
  {
    icon: PlayCircleIcon,
    title: "Article and Video Reviews",
    children:
      "We know it can be hard to make a decision based on a photo. That's why we provide you with articles and videos of each car you snap a photo of from popular creators and publishers across the web.",
  },
  {
    icon: CurrencyDollarIcon,
    title: "Value Estimates",
    children:
      "CarSnap allows you to store information about your own car and uses our AI-models to make private-sale and dealer trade-in value estimates.",
  },
];

export function Features() {
  return (
    <section className="py-28 px-4 bg-white">
      <div className="container mx-auto mb-20 text-center">
        <Typography 
          color="blue-gray" 
          className="mb-2 font-bold uppercase text-lg tracking-wider text-blue-500"
        >
          Features
        </Typography>
        <Typography 
          variant="h2" 
          color="blue-gray" 
          className="mb-4 text-3xl md:text-4xl font-bold"
        >
          Everything You Need
        </Typography>
        <Typography
          variant="lead"
          className="mx-auto w-full px-4 text-gray-700 text-lg lg:w-11/12 lg:px-8"
        >
          From finding local listings to getting detailed specifications,
          CarSnap provides all the information you need about any car.
        </Typography>
      </div>
      <div className="container mx-auto grid max-w-6xl grid-cols-1 gap-8 gap-y-12 md:grid-cols-2">
        {FEATURES.map((props, idx) => (
          <FeatureCard key={idx} {...props} />
        ))}
      </div>
    </section>
  );
}
