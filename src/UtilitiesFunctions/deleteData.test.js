import deleteData from "./deleteData"

describe("deleteData tests", () => {
    it("renders correctly", () => {
       const url = global.url + "1"
        
      const { container } = render(deleteData(url));
      expect(container).toMatchSnapshot();
    });
  
  });