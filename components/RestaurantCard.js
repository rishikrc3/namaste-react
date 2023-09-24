import React from "react";

const RestaurantCard = ({ resObj }) => {
  const { name, cuisines, avgRating, costForTwo, areaName, cloudinaryImageId } =
    resObj;
  return (
    <div className="res-card">
      <img
        class="res-logo"
        src={
          "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" +
          cloudinaryImageId
        }
        alt="res-logo"
      />
      <h3>{name}</h3>
      <h4>{cuisines.join(", ")}</h4>
      <h4>{avgRating}</h4>
      <h4>{areaName}</h4>
    </div>
  );
};

export default RestaurantCard;
