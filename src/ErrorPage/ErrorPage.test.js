import ErrorPage from "./ErrorPage"
import React from "react";

describe("ErrorPage tests", () => {
    it("renders correctly", () => {
        
      const { container } = render(<ErrorPage />);
      expect(container).toMatchSnapshot();
    });
  
  });