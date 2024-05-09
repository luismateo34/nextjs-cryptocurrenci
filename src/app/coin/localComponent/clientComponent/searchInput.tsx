"use client";

import { Input } from "@/components/ui/input";
import { useSearchInput } from "./useSearchInput";

export const SearchInput = ({ placeholder }: { placeholder: string }) => {
  const { handleSearch, searchParams } = useSearchInput();

  return (
    <>
      <Input
        onChange={(e) => {
          handleSearch(e.target.value);
        }}
        placeholder={placeholder}
        defaultValue={searchParams.get("name")?.toString()}
        className="w-4/12"
      />
    </>
  );
};
