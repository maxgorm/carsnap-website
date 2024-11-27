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
      // @ts-ignore - Material Tailwind typing issues
      <Card color="transparent" shadow={false} className="w-full">
        {/* @ts-ignore - Material Tailwind typing issues */}
        <CardBody className="grid justify-start">
          <div className="mb-4 grid h-12 w-12 place-content-center rounded-lg bg-gray-900 p-2.5 text-left text-white">
            <Icon className="h-6 w-6" />
          </div>
          {/* @ts-ignore - Material Tailwind typing issues */}
          <Typography variant="h5" color="blue-gray" className="mb-2">
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

export default FeatureCard;
