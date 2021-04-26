import AddNewArticlePage from "./AddNewArticlePage"
import React from "react";

describe("AddNewArticlePage tests", () => {
    it("renders correctly", () => {
        
      const { container } = render(<AddNewArticlePage />);
      expect(container).toMatchSnapshot();
    });
  
  });