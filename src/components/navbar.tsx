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
const routerObj = {
  home: "/",
  coin: "/coin",
  derivatives: "/derivatives",
  other: "/other",
};

export const NavBar = ({
  primary = true,
  size = "medium",
  className,
}: TypeNav) => {
  const router = usePathname();

   return (
    <div className="w-screen block sticky top-0 z-10 backdrop-blur-md shadow-md bg-whibg-blue-900/20 shadow-yellow-300/60 ">
    <nav
      className={`w-full h-12  block border-solid border-b-2 border-b-yellow-400 bg-black/20 `}
    >
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
                        " hover:bg-gradient-to-r from-sky-600 to-emerald-500/90  active:bg-amber-200 ":
                          primary === true,
                        " hover:bg-gradient-to-r from-amber-300 to-pink-300/85  active:border-orange-400":
                          primary === false,
                        "w-16 h-full": size === "small",
                        "w-24 h-full": size === "medium",
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

    </div>
      );
};
