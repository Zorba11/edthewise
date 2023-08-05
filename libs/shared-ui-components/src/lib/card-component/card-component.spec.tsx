import { render } from "@testing-library/react";

import CardComponent from "./card-component";

describe("CardComponent", () => {
  it("should render successfully", () => {
    const { baseElement } = render(<CardComponent />);
    expect(baseElement).toBeTruthy();
  });
});
