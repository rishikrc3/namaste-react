import React from "react";

const RestaurantCard = ({ resObj }) => {
  console.log(resObj.name);
  return (
    <div className="res-card">
      <img
        class="res-logo"
        src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_1024/ocgjpnijydsughgjnkk0"
        alt="res-logo"
      />
      <h3>{resObj.name}</h3>
      <h4>{resObj.cuisines.join(", ")}</h4>
      <h4>{resObj.avgRating}</h4>
    </div>
  );
};

export default RestaurantCard;
