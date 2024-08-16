import {GraficLine, type Option} from "@/components/linearGraf";
import { Raleway } from "next/font/google";
import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

const inter = Raleway({ subsets: ["latin"] });

interface typeMain extends Option {
  primary?: boolean;
  secundary?: boolean;
}

export const LinearGraf = ({ primary, secundary,borderColor,borderWidth,data,label,labels }: typeMain) => {
  return (
    <div
      className={twMerge(
        clsx(`${inter.className}`, " w-screen  ", {
          "bg-blue-950": (primary === true),
          "bg-indigo-900": (secundary === true),
        }),
      )}
    >
      <GraficLine label={label} labels={labels} data={data} borderColor={borderColor} borderWidth={borderWidth}  />
    </div>
  );
};
