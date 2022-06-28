import BinSelection from "../bin-selection/BinSelection";
import Sidebar from "../sidebar/Sidebar";
import TruckLoading from "../truck-loading/TruckLoading";
import "./Layout.css";

const Layout = () => {
  return (
    <section className="layout__grid">
      <div className="layout__grid-side-nav">
        <Sidebar />
      </div>
      <div className="layout__grid-side-main">
        <BinSelection />
      </div>
      <div className="layout__grid-bin-loading">
        <TruckLoading />
      </div>
    </section>
  );
};

export default Layout;
