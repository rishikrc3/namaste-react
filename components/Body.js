import React from "react";
import RestaurantCard from "./RestaurantCard";
const Body = () => {
  const resObj = {
    id: "118999",
    name: "Haji's",
    cloudinaryImageId: "eadd92e5cf369d56eeaf3062622c3c71",
    locality: "Netaji Subhash Chandra Bose Rd",
    areaName: "Garia",
    costForTwo: "₹400 for two",
    cuisines: ["Biryani", "Chinese", "North Indian", "Mughlai"],
    avgRating: 4.2,
    feeDetails: {
      restaurantId: "118999",
      fees: [
        {
          name: "BASE_DISTANCE",
          fee: 3900,
        },
        {
          name: "BASE_TIME",
        },
        {
          name: "ANCILLARY_SURGE_FEE",
        },
      ],
      totalFee: 3900,
    },
    parentId: "456342",
    avgRatingString: "4.2",
    totalRatingsString: "10K+",
    sla: {
      deliveryTime: 23,
      lastMileTravel: 2,
      serviceability: "SERVICEABLE",
      slaString: "23 mins",
      lastMileTravelString: "2.0 km",
      iconType: "ICON_TYPE_EMPTY",
    },
    availability: {
      nextCloseTime: "2023-09-24 00:30:00",
      opened: true,
    },
    badges: {},
    isOpen: true,
    type: "F",
    badgesV2: {
      entityBadges: {
        imageBased: {},
        textBased: {},
        textExtendedBadges: {},
      },
    },
    aggregatedDiscountInfoV3: {
      header: "₹100 OFF",
      subHeader: "ABOVE ₹249",
      discountTag: "FLAT DEAL",
    },
    differentiatedUi: {
      displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
      differentiatedUiMediaDetails: {
        mediaType: "ADS_MEDIA_ENUM_IMAGE",
        lottie: {},
        video: {},
      },
    },
    reviewsSummary: {},
    displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
    restaurantOfferPresentationInfo: {},
  };

  return (
    <div className="Body">
      <div className="Search">Search it fok</div>
      <div className="res-container">
        <RestaurantCard resObj={resObj} />
      </div>
    </div>
  );
};

export default Body;
