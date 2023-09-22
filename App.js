import React from "react";
import ReactDOM from "react-dom/client";

//React => this is initially an object and when this gets rendered, this becomes an html element.
const Header = () => {
  return (
    <div className="header">
      <div className="logo-container">
        <img
          className="logo"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSxodBCOx28Vb76OItsEulidWkalURaNu3sMw&usqp=CAU"
          alt="Not loading"
        />
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About us</li>
          <li>Cart</li>
          <li>Contact us</li>
        </ul>
      </div>
    </div>
  );
};
const AppLayout = () => {
  return (
    <div className="app">
      <Header />
    </div>
  );
};
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout />);
