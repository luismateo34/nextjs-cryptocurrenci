import { describe, vi, expect, it  } from "vitest";
import { Mockfetchreject, Mockfetchresolve, objDeriv } from "./mock";
import { fetchDerivate } from "./fetchderivate";

describe("fetchderivare test", () => {
  it("fetchDerivate", async () => {
    global.fetch = vi.fn().mockImplementation(Mockfetchresolve);
    await expect(fetchDerivate(1)).resolves.toEqual([objDeriv]);
  });
  it("fetchDerivate", async () => {
    global.fetch = vi.fn().mockImplementation(Mockfetchreject);
    await expect(fetchDerivate(1)).rejects.toThrowError();
  });
});
