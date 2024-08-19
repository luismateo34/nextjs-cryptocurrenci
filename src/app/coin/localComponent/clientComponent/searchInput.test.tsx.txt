
import { describe, it, afterEach, expect, vi, beforeEach} from "vitest";
import { render, screen, cleanup, renderHook } from "@testing-library/react";
import {useSearchInput} from "./useSearchInput"

beforeEach(()=>{
  vi.restoreAllMocks()
})
describe("search input", (): void =>{
  afterEach(cleanup);
  it("it should render the page", ():void =>{
    const {result} = renderHook(()=> useSearchInput())
    expect(result.current.handleSearch).toBeDefined()

  })
})
