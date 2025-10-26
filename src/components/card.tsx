"use client";
import {  JSX, type ReactNode } from "react";
import { Card, CardContent } from "@/components/ui/card";
import style from "./card.module.css";

interface CardType  {
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
        <CardContent className={style.cardcontent}>
          <div className={style.containImg}>
            <img
              src={image}
              alt={alt}
              className="object-cover w-full h-full rounded-md "
            />
          </div>
          {/* container anchor*/}
          <div
            className={style.container_a}
          >
            <a
              className={style.anchor}
              href={`${route}`}
              target="_blank"
            >
              {nameRoute}
            </a>
          </div>

          <article className={style.article}>
            {children}
          </article>
        </CardContent>
      </Card>
  );
};
