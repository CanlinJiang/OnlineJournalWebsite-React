import Footer from "./Footer"
import React from "react";

describe("Footer tests", () => {
    it("renders correctly", () => {
        
      const { container } = render(<Footer />);
      expect(container).toMatchSnapshot();
    });
  
  });