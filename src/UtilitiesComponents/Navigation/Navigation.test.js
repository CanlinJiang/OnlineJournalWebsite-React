import Navigation from "./Navigation"
import React from "react";

describe("Navigation tests", () => {
    it("renders correctly", () => {
       
        
      const { container } = render(<Navigation />);
      expect(container).toMatchSnapshot();
    });
  
  });