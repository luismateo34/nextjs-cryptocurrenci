import { describe, it, afterEach, expect } from "vitest";
import { render, cleanup } from "@testing-library/react";
import { MainSection } from "./MainSection";

describe("card section", (): void => {
  afterEach(cleanup);
  it("should render card section", (): void => {
    const { getByText } = render(<MainSection />);
    expect(getByText("Crypto market")).toBeDefined();
    expect(getByText("and more")).toBeDefined();
  });
});
