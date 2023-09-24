import React from "react";
import { CDN_URL } from "../../utils/constants";
const RestaurantCard = ({ resObj }) => {
  const { name, cuisines, avgRating, costForTwo, areaName, cloudinaryImageId } =
    resObj;
  return (
    <div className="res-card">
      <img class="res-logo" src={CDN_URL + cloudinaryImageId} alt="res-logo" />
      <h3>{name}</h3>
      <h4>{cuisines.join(", ")}</h4>
      <h4>{avgRating}</h4>
      <h4>{areaName}</h4>
    </div>
  );
};

export default RestaurantCard;
