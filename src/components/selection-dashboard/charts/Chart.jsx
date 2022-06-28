import BinsCharts from "../dashboard/BinsCharts";
import "./Chart.css";

const Chart = () => {
  return (
    <div className="barStyles">
      <div className="container">
        <div className="flexBar">
          <BinsCharts />
        </div>
      </div>
    </div>
  );
};

export default Chart;
