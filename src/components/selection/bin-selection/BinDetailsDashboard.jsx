import React from "react";
import "./BinDetailsDashboard.css";
import { useSelector } from "react-redux";

const BinDetailsDashboard = () => {
  const data = useSelector((state) => state.auth.data);
  const isAuth = useSelector((state) => state.auth.isAuth);
  console.log("data is ", data);
  console.log("isAuth is ", isAuth);
  const binCapacityDetails = (isAuth && data.site_location_details[0]) || {};

  return (
    <div className="details__bins">
      <section className="details__bins__xaxis">
        <div className="bins__count__name">
          <span>Chester</span>
        </div>
        <div className="bins__count">
          <span>Total Bins</span>

          <span className="bins__count__capacity">
            {binCapacityDetails.total_no_of_bins}
          </span>
        </div>
        <div className="bins__capacity">
          <span>Total capacity of Bins</span>

          <span className="bins__count__capacity">
            {binCapacityDetails.bushels_capacity} Bushels
          </span>
        </div>

        <div className="bins__calendar">
          <input
            type="date"
            id="birthday"
            name="birthday"
            className="bins__calendar__input"
          />
        </div>
      </section>
    </div>
  );
};

export default BinDetailsDashboard;
