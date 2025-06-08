import { JSX, type ReactNode } from "react";
import { Card, CardContent } from "@/components/ui/card";
import style from "./card.module.css";

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
      className={`${style.Card} hover:bg-violet-900/10 hover:scale-y-105 hover:scale-x-105  ${className}`}
    >
      <CardContent className=" flex flex-col justify-center md:justify-between items-center w-full h-full md:gap-1 pt-1 ">
        <div className="md:w-[80%]  md:h-[60%] w-full h-full rounded-md overflow-hidden ">
          <img
            src={image}
            alt={alt}
            className="object-cover w-full h-full rounded-md "
          />
        </div>
        {/* container anchor*/}
        <div
          className={`  backdrop-blur-sm md:backdrop-blur-0   ${style.container_a}`}
        >
          <a
            className=" font-semibold text-lg text-center  tracking-wider text-red-600 flex flex-row justify-center items-center  w-full h-6 "
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
