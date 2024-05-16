"use client";

import { Input } from "@/components/ui/input";
import { useSearchInput } from "./useSearchInput";
import {useDebouncedCallback} from "use-debounce"

export const SearchInput = ({ placeholder }: { placeholder: string }) => {
  const { handleSearch, searchParams } = useSearchInput();
  const debounce = useDebouncedCallback(
    (e: string) =>{
      handleSearch(e)
    },
    300
  )
  return (
      <Input
        onChange={(e) => {
	debounce(e.target.value)
        }}
        placeholder={placeholder}
        defaultValue={searchParams.get("name")?.toString()}
        className="w-4/12 h-8 my-3"
      />
  );
};
