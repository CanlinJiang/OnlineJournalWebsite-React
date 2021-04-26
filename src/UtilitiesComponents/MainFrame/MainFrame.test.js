import Frame from "./Frame"
import React from "react";

describe("Frame tests", () => {
    it("renders correctly", () => {
        const BodyComponent = () => (<div></div>)
        
      const { container } = render(<Frame BodyComponent={BodyComponent}/>);
      expect(container).toMatchSnapshot();
    });
  
  });