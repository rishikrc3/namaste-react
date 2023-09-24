import React from "react";
import RestaurantCard from "./RestaurantCard";
import resList from "../../utils/mockData";
const Body = () => {
  return (
    <div className="Body">
      <div className="filter">
        <button
          className="filter-btn"
          onClick={() => {
            alert("Dont press it ");
          }}
          b
        >
          Top rated restaurant
        </button>
      </div>
      <div className="res-container">
        {resList.map((restaurant) => (
          <RestaurantCard key={restaurant.id} resObj={restaurant} />
        ))}
      </div>
    </div>
  );
};

export default Body;
