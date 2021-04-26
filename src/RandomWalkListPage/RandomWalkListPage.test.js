import RandomWalkListPage from "./RandomWalkListPage"
import React from "react";

describe("RandomWalkListPage tests", () => {
    it("renders correctly", () => {
        
      const { container } = render(<RandomWalkListPage />);
      expect(container).toMatchSnapshot();
    });
  
  });