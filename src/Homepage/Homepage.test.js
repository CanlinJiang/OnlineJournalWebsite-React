import Homepage from "./Homepage"
import React from "react";

describe("Homepage tests", () => {
    it("renders correctly", () => {
        
      const { container } = render(<Homepage />);
      expect(container).toMatchSnapshot();
    });
  
  });