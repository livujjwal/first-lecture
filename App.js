/*
const heading  = React.createElement("h1",{id:"heading",a:"hello"},"Welcome to React");
Nesting Elements => 3rd argument use to nesting another element single or array

const parent = React.createElement(
  "div",
  { id: "parent" },
 [ React.createElement("div", { id: "child" }, [
    React.createElement("h1", { id: "heading" }, "tag h1"),
    React.createElement("h2", { id: "heading" }, "tag h2"),
  ]), React.createElement("div", { id: "child2" }, [
    React.createElement("h1", { id: "heading" }, "tag h1"),
    React.createElement("h2", { id: "heading" }, "tag h2"),
  ])]
);
*/
import React from "react";
import  ReactDOM  from "react-dom/client";
const parent = React.createElement(
    "div",
    { id: "parent" },
   React.createElement("div", { id: "child2" }, [
      React.createElement("h1", { id: "heading" }, "tag h1"),
      React.createElement("h2", { id: "heading" }, "tag h2"),
    ])
  );
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(parent);
