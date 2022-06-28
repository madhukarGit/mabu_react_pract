import BinDetailsDashboard from "../selection/bin-selection/BinDetailsDashboard";
import Sidebar from "../selection/sidebar/Sidebar";
import "./Dashboard.css";

const Dashboard = () => {
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
