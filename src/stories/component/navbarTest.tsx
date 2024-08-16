import { Raleway } from "next/font/google";
import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import { NavBar, TypeNav } from "@/components/navbar";

const inter = Raleway({ subsets: ["latin"] });

interface typeMain extends TypeNav {
  primaryBg?: boolean;
  secundaryBg?: boolean;
}

export const NavBarTest = ({
  primary,
  size,
  primaryBg,
  secundaryBg,
  className,
}: typeMain) => {
  return (
    <div
      className={twMerge(
        clsx(`${inter.className}`, " w-screen  ", {
          "bg-blue-900": primaryBg === true,
          "bg-violet-900": secundaryBg === true,
        }),
      )}
    >
      <NavBar primary={primary} size={size} className={className} />
    </div>
  );
};
