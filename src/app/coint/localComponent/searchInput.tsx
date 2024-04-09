"use client";

import {
  useSearchParams,
  usePathname,
  useRouter,
} from "next/navigation";
import { Input } from "@/components/ui/input";


export const SearchInput = ({placeholder}:{placeholder:string}) => {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();
  const handleSearch = (term: string) => {
    const param = new URLSearchParams(searchParams);
    if (term) {
      param.set("name", term);
    } else {
      param.delete("name");
    }
    replace (`${pathname}?${param.toString()}`)
  };

  return (
    <>
      <Input
       onChange={(e) => { handleSearch(e.target.value) }}
      placeholder={placeholder}
      defaultValue={searchParams.get("name")?.toString()}
      />
    </>
  );
};
