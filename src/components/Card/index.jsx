import { Button } from "../ui/button";
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";
import Image from "next/image";

export function Cardcomponent() {
  return (
    <Card className="relative z-30 w-full max-w-md bg-gradient-to-r from-[#130428] via-[#38126D] to-[#190634] shadow-xl border border-[#693B93] backdrop-blur-md text-white flex flex-col md:flex-row items-center gap-6 transform transition-transform duration-300 ease-in-out hover:scale-105">
      <CardContent>
        <Image src="/react.svg" alt="Background" width={100} height={100} />
        <Image src="/Ellipse1.png" alt="Background" width={100} height={100} />
      </CardContent>
      <div className="w-full flex flex-col justify-center">
        <CardHeader>
          <CardTitle>Software engineer</CardTitle>
          <CardDescription>1 Percent Labs</CardDescription>
        </CardHeader>
        <CardFooter className="flex-col gap-2 flex items-start mt-2">
          <Button
            variant="outline"
            className="border-[#693B93] bg-transparent hover:bg-transparent hover:text-white hover:cursor-pointer hover:text-cyan-400 hover:transition-colors"
          >
            Learn More
          </Button>
        </CardFooter>
      </div>
    </Card>
  );
}
