import MoodListPage from "./MoodListPage"
import React from "react";

describe("MoodListPage tests", () => {
    it("renders correctly", () => {
        
      const { container } = render(<MoodListPage />);
      expect(container).toMatchSnapshot();
    });
  
  });