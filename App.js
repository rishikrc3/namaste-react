import React from "react";
import ReactDOM from "react-dom/client";

//React => this is initially an object and when this gets rendered, this becomes an html element.
const heading = React.createElement("h1", { id: "heading" }, "namaste react");
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(heading);
