import App from "./App"
import React from "react";


describe("App tests", () => {
    it("renders correctly", () => {
       
      const { container } = render(<App />);
      expect(container).toMatchSnapshot();
    });
  
  });