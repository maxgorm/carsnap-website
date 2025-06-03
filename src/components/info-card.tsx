import React from "react";

interface InfoCardProps {
  title: string;
  children: React.ReactNode;
}

export function InfoCard({ title, children }: InfoCardProps) {
  return (
    <div className="bg-transparent">
      <div className="grid px-0">
        <h2 className="mb-2 text-carsnap-blue text-2xl font-bold">
          {title}
        </h2>
        <p className="font-normal text-gray-600">{children}</p>
      </div>
    </div>
  );
}

export default InfoCard;
