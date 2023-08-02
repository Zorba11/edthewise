import { render } from "@testing-library/react";

import SignUp from "./sign-up";

describe("SignIn", () => {
  it("should render successfully", () => {
    const { baseElement } = render(<SignUp />);
    expect(baseElement).toBeTruthy();
  });
});
