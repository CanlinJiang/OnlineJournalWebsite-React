import ContactMe from "./ContactMe"
import React from "react";

describe("ContactMe tests", () => {
    it("renders correctly", () => {
        
      const { container } = render(<ContactMe />);
      expect(container).toMatchSnapshot();
    });
  
  });