import { Button } from "@material-tailwind/react";
import Image from "next/image";

export function FixedPlugin() {
  return (
    <a href="https://www.material-tailwind.com" target="_blank" rel="noopener noreferrer">
      {/* @ts-ignore - Material Tailwind typing issues */}
      <Button
        color="white"
        size="sm"
        className="!fixed bottom-4 right-4 flex gap-1 pl-2 items-center border border-blue-gray-50"
      >
        <div className="relative h-5 w-5">
          <Image
            src="https://www.material-tailwind.com/favicon.png"
            alt="Material Tailwind"
            fill
            sizes="20px"
          />
        </div>{" "}
        Made with Material Tailwind
      </Button>
    </a>
  );
}

export default FixedPlugin;
