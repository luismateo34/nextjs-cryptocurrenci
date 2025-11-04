"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import style from "./navbar.module.css";

const routerObj = {
  home: "/",
  coin: "/coin",
  derivatives: "/derivatives",
  other: "/other",
};

export interface TypeNav {
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
  return (
    <div className={style.container}>
      <nav className={style.nav_container}>
        <ul className={style.ul_container}>
          {Object.entries(routerObj).map(([key, value]) => {
            return (
              <li key={key} className={style.li_container}>
                <Link
                  href={value}
                  className={twMerge(
                    clsx(
                      {
                        " md:hover:bg-violet-300/65 md:active:bg-pink-800/70 ":
                          primary === true,
                        " md:hover:bg-gradient-to-r md:hover:from-white/40  md:hover:to-black/15  active:border-orange-400":
                          primary === false,
                        "w-4/12 h-[95%]": size === "small",
                        "w-7/12 h-[95%]": size === "medium",
                        "w-10/12 h-[95%]": size === "big",
                      },
                      "flex flex-row justify-center items-center rounded-md font-medium  lg:font-semibold lg:text-xl ",
                      `${
                        value === router
                          ? " md:bg-yellow-300 text-cyan-200 hover:text-teal-300  md:hover:text-stone-200 md:text-violet-900 "
                          : " text-amber-400 "
                      }`,
                      className,
                    ),
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
