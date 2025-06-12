export const SanitizedSql = (str: string | null): string => {
  const reg = new RegExp("[A-Za-z0-9_]", "gim");
  const rexSelect = /select/gim;
  const rexDatabase = /database/gim;
  const rexTable = /table/gim;
  const resp =
    str
      ?.match(reg)
      ?.join("")
      .replaceAll(rexSelect, "")
      .replaceAll(rexDatabase, "")
      .replaceAll(rexTable, "")
      .trim() ?? "";

  return resp;
};
