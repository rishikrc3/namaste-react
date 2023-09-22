import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";

//React => this is initially an object and when this gets rendered, this becomes an html element.

const AppLayout = () => {
  return (
    <div className="app">
      <Header />
    </div>
  );
};
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout />);
