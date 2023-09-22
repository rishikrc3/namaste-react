import React from "react";

const RestaurantCard = () => {
  return (
    <div className="res-card">
      <img
        class="res-logo"
        src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_1024/ocgjpnijydsughgjnkk0"
        alt="res-logo"
      />
      <h3>Meghna Foods</h3>

      <h4>Biriyani, North Indian , Asian</h4>
      <h4>4.4 stars</h4>
    </div>
  );
};

export default RestaurantCard;
