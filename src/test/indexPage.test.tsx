import { describe, it, afterEach } from "vitest";
import { render, screen, cleanup } from "@testing-library/react";
import Page from "../app/page";
import {NavBar} from "../components/navbar"

describe("pageIndex", (): void => {
  afterEach(cleanup);
  it("It should render the page", (): void => {
    render(<Page />);
  })
  /*it("should render title correctly", (): void => {
    render(<Page />);
    screen.queryByTitle("Crypto market");
  })
  it("should render the navbar", (): void => {
    render(<NavBar primary={true} size="medium"/>)
  })*/
  it("should reder item coint nabvar", ():void => {
      render(<NavBar primary={true} size="medium"/>);
      screen.getByText("coint")
  })

});
