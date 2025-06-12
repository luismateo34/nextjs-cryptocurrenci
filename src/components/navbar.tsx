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
                        " hover:bg-gradient-to-r from-sky-600 to-emerald-500/90  active:bg-amber-200 ":
                          primary === true,
                        " hover:bg-gradient-to-r from-white/40 to-black/15  active:border-orange-400":
                          primary === false,
                        "w-20 h-full": size === "small",
                        "w-24 h-full": size === "medium",
                        "w-28 h-full": size === "big",
                      },
                      "flex flex-row justify-center items-center rounded-md font-medium ",
                      `${
                        value === router
                          ? " bg-gradient-to-r from-amber-400 from-10% via-amber-300 via-30% to-yellow-300 to-90% text-red-700"
                          : " text-amber-300 "
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
