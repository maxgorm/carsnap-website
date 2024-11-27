import { Typography, Card, CardBody } from "@material-tailwind/react";

interface InfoCardProps {
  title: string;
  children: React.ReactNode;
}

export function InfoCard({ title, children }: InfoCardProps) {
  return (
    // @ts-ignore - Material Tailwind typing issues
    <Card color="transparent" shadow={false}>
      {/* @ts-ignore - Material Tailwind typing issues */}
      <CardBody className="grid px-0">
        {/* @ts-ignore - Material Tailwind typing issues */}
        <Typography variant="h2" color="blue-gray" className="mb-2">
          {title}
        </Typography>
        {/* @ts-ignore - Material Tailwind typing issues */}
        <Typography className="font-normal !text-gray-500">
          {children}
        </Typography>
      </CardBody>
    </Card>
  );
}

export default InfoCard;
