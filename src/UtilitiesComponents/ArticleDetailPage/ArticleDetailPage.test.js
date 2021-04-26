import ArticleDetailPage from "./ArticleDetailPage"
import React from "react";

describe("ArticleDetailPage tests", () => {
    it("renders correctly", () => {
        
      const { container } = render(<ArticleDetailPage />);
      expect(container).toMatchSnapshot();
    });
  
  });