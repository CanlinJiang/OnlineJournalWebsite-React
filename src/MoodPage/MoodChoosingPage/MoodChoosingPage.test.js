import MoodChoosingPage from "./MoodChoosingPage"
import React from "react";

describe("MoodChoosingPage tests", () => {
    it("renders correctly", () => {
        
      const { container } = render(<MoodChoosingPage />);
      expect(container).toMatchSnapshot();
    });
  
  });