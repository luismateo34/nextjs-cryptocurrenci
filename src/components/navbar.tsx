import Link from "next/link";
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
  const routes = ["coint", "nft", "deribates", "other"];
  return (
    <nav className="w-full h-12 pt-2 block absolute top-0 border-solid border-b-2 border-b-yellow-400">
      <ul className="w-full h-full flex flex-row gap-2 justify-around items-end">
        {routes.map((el) => {
          return (
            <li
              key={el}
              className="h-full flex flex-row justify-center items-center text-sm text-red-500"
            >
              <Link
                href={`/${el}`}
                className={twMerge(
                  clsx(
                    {
                      " hover:bg-sky-300 ":
                        primary === true,
                      " hover:bg-amber-500": primary === false,
                      "w-16 h-full": size === "small",
                      "w-20 h-full": size === "medium",
                      "w-24 h-full": size === "big",
                    },
                    "flex flex-row justify-center items-center rounded-md ",
                    className,
                  ),
                )}
              >
                {el}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};
