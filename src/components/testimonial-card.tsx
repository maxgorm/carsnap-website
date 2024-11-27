import React from "react";
import { Typography, Card, CardBody, Avatar } from "@material-tailwind/react";

interface TestimonialCardProps {
  img: string;
  feedback: string;
  client: string;
  title: string;
}

export function TestimonialCard({
  img,
  feedback,
  client,
  title,
}: TestimonialCardProps) {
  return (
    // @ts-ignore - Material Tailwind typing issues
    <Card shadow={false} className="items-center text-center">
      {/* @ts-ignore - Material Tailwind typing issues */}
      <CardBody>
        {/* @ts-ignore - Material Tailwind typing issues */}
        <Avatar src={img} className="mb-3" alt={client} size="lg" />
        {/* @ts-ignore - Material Tailwind typing issues */}
        <Typography variant="h6" color="blue-gray">
          {client}
        </Typography>
        {/* @ts-ignore - Material Tailwind typing issues */}
        <Typography variant="small" className="mb-3 font-medium !text-gray-700">
          {title}
        </Typography>
        {/* @ts-ignore - Material Tailwind typing issues */}
        <Typography
          variant="paragraph"
          className="mb-5 font-normal !text-gray-500"
        >
          &quot;{feedback}&quot;
        </Typography>
      </CardBody>
    </Card>
  );
}

export default TestimonialCard;
