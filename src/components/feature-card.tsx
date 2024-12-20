"use client";

import {
  Typography,
  Card,
  CardBody,
} from "@material-tailwind/react";
  
interface FeatureCardProps {
  icon: React.ElementType;
  title: string;
  children: React.ReactNode;
}
  
export function FeatureCard({ icon: Icon, title, children }: FeatureCardProps) {
  return (
    <Card 
      color="transparent" 
      shadow={false} 
      className="w-full hover:scale-105 transition-transform duration-300"
    >
      <CardBody className="grid justify-start">
        <div className="mb-4 grid h-16 w-16 place-content-center rounded-xl bg-blue-500 p-3 text-left text-white shadow-lg">
          <Icon className="h-8 w-8" />
        </div>
        <Typography 
          variant="h5" 
          color="blue-gray" 
          className="mb-3 text-xl font-bold"
        >
          {title}
        </Typography>
        <Typography 
          className="font-normal text-gray-700 text-base leading-relaxed"
        >
          {children}
        </Typography>
      </CardBody>
    </Card>
  );
}
