"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

interface TypeNav {
  primary: boolean;
  size: "small" | "medium" | "big";
  className?: string;
}

export const NavBar = ({
  primary = true,
  size = "medium",
  className,
}: TypeNav) => {
  const router = usePathname();

  const routerObj = {
    home: "/",
    coint: "/coint",
    nft: "/nft",
    deribates: "/deribates",
    other: "/other",
  };
  return (
    <nav className="w-full h-12 py-1 block sticky top-0 z-10 border-solid border-b-2 border-b-yellow-400">
      <ul className="w-full h-full flex flex-row gap-2 justify-around items-end">
        {Object.entries(routerObj).map(([key, value]) => {
          if (router !== value)
            return (
              <li
                key={key}
                className="h-full flex flex-row justify-center items-center text-sm md:text-lg text-red-500"
              >
                <Link
                  href={value}
                  className={twMerge(
                    clsx(
                      {
                        " hover:bg-sky-300 active:bg-amber-200 ": primary === true,
                        " hover:bg-amber-500 active:border-orange-400": primary === false,
                        "w-16 h-full": size === "small",
                        "w-20 h-full": size === "medium",
                        "w-28 h-full": size === "big",
                      },
                      "flex flex-row justify-center items-center rounded-md ",
                      className
                    )
                  )}
                >
                  {key}
                </Link>
              </li>
            );
        })}
      </ul>
    </nav>
  );
};
