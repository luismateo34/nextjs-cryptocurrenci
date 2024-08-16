import { Raleway } from "next/font/google";
import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import { MainSection } from "@/app/localComponent/MainSection";

const inter = Raleway({ subsets: ["latin"] });

interface typeMain {
  primary?: boolean;
  secundary?: boolean;
}

export const Maincard = ({ primary, secundary }: typeMain) => {
  return (
    <div
      className={twMerge(
        clsx(`${inter.className}`, " w-screen  ", {
          "bg-blue-950": (primary === true),
          "bg-indigo-900": (secundary === true),
        }),
      )}
    >
      <MainSection />
    </div>
  );
};
