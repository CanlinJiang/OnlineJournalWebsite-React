import MineListPage from "./MineListPage"
import React from "react";

describe("MineListPage tests", () => {
    it("renders correctly", () => {
        
      const { container } = render(<MineListPage />);
      expect(container).toMatchSnapshot();
    });
  
  });