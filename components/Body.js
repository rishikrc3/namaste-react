import React from "react";
import RestaurantCard from "./RestaurantCard";
const Body = () => {
  return (
    <div className="Body">
      <div className="Search">Search it fok</div>
      <div className="res-container">
        <RestaurantCard
          resName="Meghna Foods"
          cuisine="Biriyani, North Indian, Asian"
        />
        <RestaurantCard
          resName="KFC"
          cuisine="Friend chicken, what do you expect?"
        />
      </div>
    </div>
  );
};

export default Body;
