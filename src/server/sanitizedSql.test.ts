import { describe, it, expect } from "vitest";
import { SanitizedSql } from "./sanitizedSql";
// pasa
describe("sanitizedSql", (): void => {
  it("SanitizedSql test", (): void => {
    const letter = SanitizedSql("hello_//`` - -- ;");
    expect(letter).toBe("hello_");
  });
  it("not sql sentence", (): void => {
    const notsql = SanitizedSql("SELECT");
    expect(notsql).toBe("");
  });
  it("not sql sentence table", (): void => {
    const notsql = SanitizedSql("database TABLE   User");
    expect(notsql).toBe("User");
  });
});
