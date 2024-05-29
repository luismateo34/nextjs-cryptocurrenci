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
    <div className="w-screen flex flex-row sticky top-0 z-20 backdrop-blur-md shadow-md bg-whibg-blue-900/20 shadow-yellow-300/60 ">
      <nav
        className={`w-screen h-12  flex flex-row border-solid border-b-2 border-b-yellow-400 bg-black/20 `}
      >
        <ul className="w-screen h-full flex flex-row gap-1 px-1 justify-around">
          {Object.entries(routerObj).map(([key, value]) => {
              return (
                <li
                  key={key}
                  className="h-full w-1/5 flex flex-row justify-center items-center text-sm md:text-lg text-red-500"
                >
                  <Link
                    href={value}
                    className={twMerge(
                      clsx(
                        {
                          " hover:bg-gradient-to-r from-sky-600 to-emerald-500/90  active:bg-amber-200 ":
                            primary === true,
                          " hover:bg-gradient-to-r from-white/40 to-black/15  active:border-orange-400":
                            primary === false,
                          "w-16 h-full": size === "small",
                          "w-24 h-full": size === "medium",
                          "w-28 h-full": size === "big",
                        },
                        "flex flex-row justify-center items-center rounded-md ",
			`${value === router ? "bg-gradient-to-r from-yellow-400 to-violet-400 border-white text-red-700" : " text-amber-300 " }`,
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
