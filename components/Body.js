import React from "react";
import RestaurantCard from "./RestaurantCard";
const Body = () => {
  return (
    <div className="Body">
      <div className="Search">Search it fok</div>
      <div className="res-container">
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
      </div>
    </div>
  );
};

export default Body;
