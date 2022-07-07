import { useEffect } from "react";
import BinDetailsDashboard from "../selection/bin-selection/BinDetailsDashboard";
import Sidebar from "../selection/sidebar/Sidebar";
import "./Dashboard.css";
import { useDispatch, useSelector } from "react-redux";
import { dashboardActions } from "../../editBinActions/dashboardBinSlics";

const Dashboard = () => {
  useEffect(() => {});
  return (
    <section className="layout__grid">
      <div className="layout__grid-side-nav">
        <Sidebar />
      </div>
      <div className="layout__grid-side-main">
        <BinDetailsDashboard />
      </div>
    </section>
  );
};

export default Dashboard;
