import { type ReactNode } from "react";

interface CardType {
  children: JSX.Element | ReactNode;
  image: string;
  alt: string;
}

export const CardImage = ({ children, image, alt }: CardType) => {
  return (
    <div className=" my-3 pt-1 flex flex-col gap-2 items-center justify-evenly  w-44 md:w-[25vw] h-[80vh] bg-blue-900 hover:bg-blue-800 hover:scale-y-105 hover:scale-x-105 rounded-md">
      <img src={image} alt={alt} className="object-cover w-[80%] h-[40%]" />
      <article className="p-2 ">{children}</article>
    </div>
  );
};
