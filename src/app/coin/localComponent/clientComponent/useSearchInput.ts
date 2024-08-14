import { useSearchParams, usePathname, useRouter } from "next/navigation";

/*
 * manda el texto que se introduce
 * como parametro de busqueda en la url
 */

export const useSearchInput = () => {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();
  const handleSearch = (term: string) => {
    // setea el query param name
    const param = new URLSearchParams(searchParams);
    if (term) {
      param.set("name", term);
    } else {
      param.delete("name");
    }
    replace(`${pathname}?${param.toString()}`); // navega a la nueva ruta
  };
  return { handleSearch, searchParams };
};
