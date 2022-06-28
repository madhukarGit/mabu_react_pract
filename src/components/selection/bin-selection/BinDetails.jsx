import React from "react";
import "./BinDetails.css";
import ReplayIcon from "@mui/icons-material/Replay";
import { useSelector } from "react-redux";

const BinDetails = () => {
  const data = useSelector((state) => state.auth.data);
  const isAuth = useSelector((state) => state.auth.isAuth);

  const binCapacityDetails = (isAuth && data.site_location_details[0]) || {};
  const [chester, setChester] = React.useState("");

  const handleChange = (event) => {
    setChester(event.target.value);
  };
  return (
    <div className="details__bins">
      <section className="details__bins__xaxis">
        <div className="bins__count__name">
          <span>Chester</span>
        </div>
        <div className="bins__count">
          <span>Total Bins</span>
          {isAuth && (
            <span className="bins__count__capacity">
              {binCapacityDetails.total_no_of_bins}
            </span>
          )}
        </div>
        <div className="bins__capacity">
          <span>Total capacity of Bins</span>
          {isAuth && (
            <span className="bins__count__capacity">
              {binCapacityDetails.bushels_capacity} Bushels
            </span>
          )}
        </div>
      </section>
      <section className="details_bins_status">
        <span className="bin__status__typography">Bin Status</span>
        <div className="bins__status__icons">
          <div className="bins__load__status__xaxis">
            <div className="bins__status__occupied"></div>
            <span className="status__align__right">occupied</span>
          </div>
          <div className="bins__load__status__xaxis">
            <div className="bins__status__free"></div>
            <span>free</span>
          </div>
          <div className="bins__load__status__xaxis">
            <div className="bins__status__loading"></div>
            <span>loading</span>
          </div>
          <div>
            <ReplayIcon />
          </div>
        </div>
      </section>
    </div>
  );
};

export default BinDetails;
