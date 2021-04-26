import AboutMe from "./AboutMe"
import React from "react";

describe("AboutMe tests", () => {
    it("renders correctly", () => {
        
      const { container } = render(<AboutMe />);
      expect(container).toMatchSnapshot();
    });
  
  });