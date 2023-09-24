import React from "react";
import RestaurantCard from "./RestaurantCard";
import resList from "../../utils/mockData";
const Body = () => {
  return (
    <div className="Body">
      <div className="Search">Search it fok</div>
      <div className="res-container">
        {resList.map((restaurant) => (
          <RestaurantCard key={restaurant.id} resObj={restaurant} />
        ))}
      </div>
    </div>
  );
};

export default Body;
