import { renderHook, waitFor } from "@testing-library/react";
import { describe, vi, expect, it, beforeEach } from "vitest";
import { objDeriv } from "./mock";
import {  useList } from "./useList";
import { fetchDerivate } from "./fetchderivate";
import { wrapper } from "./wrapper";


vi.mock('./fetchderivate.ts')
describe("fetchderivare test", () => {
  beforeEach(async () => {
    vi.mocked(fetchDerivate).mockResolvedValue([objDeriv]);
  });
  it("render customhook, status pending", async () => {
    const { result } = renderHook(() => useList([objDeriv]), { wrapper });
    await waitFor(() => expect(result.current.status).toEqual("pending"));
  });
});
