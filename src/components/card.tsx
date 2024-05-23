import { type ReactNode } from "react";
import { Card, CardContent } from "@/components/ui/card";
import Link from "next/link";

interface CardType {
  children: JSX.Element | ReactNode;
  image: string;
  alt: string;
  className?: string;
  route: string;
}

export const CardImage = ({
  children,
  image,
  alt,
  className,
  route,
}: CardType) => {
  return (
    <Card
      className={`relarive flex flex-col items-center justify-evenly w-[70%] h-[90%] md:w-[80%] md:h-[70%] bg-black/30  hover:bg-blue-800 hover:scale-y-105 hover:scale-x-105 rounded-md backdrop-blur-md ${className}`}
    >
      <CardContent className=" flex flex-col justify-between items-center w-full h-full md:gap-1 pt-1 ">
        <div className="md:w-[80%]  md:h-[60%] w-full h-full rounded-md overflow-hidden ">
          <img
            src={image}
            alt={alt}
            className="object-cover w-full h-full hover:brightness-150 rounded-md "
          />
        </div>
        <div className="absolute z-10 inset-0 md:relative w-8/12 h-5 bg-black/70 backdrop-blur-md w  mt-1">
          <Link
            className=" font-semibold text-lg text-center  tracking-wider text-red-600  "
            href={`/other/${route}`}
          >
            {route}
          </Link>
        </div>

        <article className="p-2 hidden md:flex md:flex-row text-yellow-300  ">
          {children}
        </article>
      </CardContent>
    </Card>
  );
};
