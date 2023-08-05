import { render } from "@testing-library/react";

import DropDownMenu from "./DropDownMenu";

describe("DropDownMenu", () => {
  it("should render successfully", () => {
    const { baseElement } = render(<DropDownMenu />);
    expect(baseElement).toBeTruthy();
  });
});
