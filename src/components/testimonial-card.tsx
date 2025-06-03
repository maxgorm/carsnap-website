import React from "react";
import Image from "next/image";

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
    <div className="items-center text-center bg-white rounded-lg">
      <div className="p-6">
        <Image 
          src={img} 
          alt={client}
          width={64}
          height={64}
          className="mb-3 mx-auto rounded-full w-16 h-16 object-cover"
        />
        <h6 className="text-carsnap-blue text-lg font-semibold">
          {client}
        </h6>
        <p className="mb-3 font-medium text-gray-700 text-sm">
          {title}
        </p>
        <p className="mb-5 font-normal text-gray-500">
          &quot;{feedback}&quot;
        </p>
      </div>
    </div>
  );
}

export default TestimonialCard;
