import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import App from "./App";
import url from "./constants.js"


ReactDOM.render(
  <Router basename={/github.io/.test(window.location) ? "/seainfo6150-final-project-webapp" : ""}>
    <App />
  </Router>,
  document.getElementById("root")
);
