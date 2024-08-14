import { type ReactNode } from "react";
import { Card, CardContent } from "@/components/ui/card";

interface CardType {
  children: JSX.Element | ReactNode;
  image: string;
  alt: string;
  className?: string;
  route: string;
  nameRoute: string;
}

export const CardImage = ({
  children,
  image,
  alt,
  className,
  route,
  nameRoute,
}: CardType) => {
  return (
    <Card
      className={`relarive flex flex-col items-center justify-evenly w-[80%] h-full md:w-[80%] md:h-[70%] bg-black/30 hover:bg-violet-900/10 hover:scale-y-105 hover:scale-x-105 rounded-md backdrop-blur-md ${className}`}
    >
      <CardContent className=" flex flex-col justify-center md:justify-between items-center w-full h-full md:gap-1 pt-1 ">
        <div className="md:w-[80%]  md:h-[60%] w-full h-full rounded-md overflow-hidden ">
          <img
            src={image}
            alt={alt}
            className="object-cover w-full h-full rounded-md "
          />
        </div>
        <div className="absolute z-10 bg-black/15 md:bg-transparent backdrop-blur-sm md:backdrop-blur-0 inset-0 md:relative w-full h-full md:w-8/1 md:h-5 flex flex-col justify-center items-center mt-1 ">
          <a
            className=" font-semibold text-lg text-center  tracking-wider text-red-600 flex flex-row justify-center items-center  w-14 h-6 "
            href={`${route}`}
            target="_blank"
          >
            {nameRoute}
          </a>
        </div>

        <article className="p-2 hidden md:flex md:flex-row text-yellow-300  ">
          {children}
        </article>
      </CardContent>
    </Card>
  );
};
