import React from "react";

import { Typography, Card, CardBody } from "@material-tailwind/react";

interface InfoCardProps {
  title: string;
  children: React.ReactNode;
}


export function InfoCard({ title, children }: InfoCardProps) {
  return (
    <Card color="transparent" shadow={false}>
      <CardBody className="grid px-0">
        <Typography variant="h2" className="mb-2 text-carsnap-blue">
          {title}
        </Typography>
        <Typography className=" font-normal">{children}</Typography>
      </CardBody>
    </Card>
  );
}

export default InfoCard;
