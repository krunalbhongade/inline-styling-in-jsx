import React from "react";
import ReactDOM from "react-dom";

const customStyle = {
  font: "10px",
  border: "1px solid black"
};

ReactDOM.render(
  <h1 style={customStyle}> HelloWorld!</h1>,
  document.getElementById("root")
);
