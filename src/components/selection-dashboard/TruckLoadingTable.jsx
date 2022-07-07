import { styled } from "@mui/material";
import "./TruckLoadingTable.css";
import Tab from "@mui/material/Tab";
import Tabs from "@mui/material/Tabs";
import React from "react";
import TruckLogo from "../../assets/truck_logo.svg";

const TruckLoadingDetail = styled("div")(({ theme }) => ({
  padding: "0 1rem",
}));

const TabItem = styled(Tab)(({ theme }) => ({
  fontSize: "1rem",
  fontWeight: 600,
  color: "black",
}));

const TruckLoadingTable = ({ tabdata }) => {
  console.log("tabdata is ", tabdata);
  const [value, setValue] = React.useState(0);

  const handleChange = (event, value) => {
    setValue(value);
  };

  const trData =
    tabdata &&
    tabdata.truckLoadingDetails.map((e) => {
      return (
        <>
          <tr>
            <td>{e.sl_no}</td>
            <td>{e.truckNo}</td>
            <td>{e.ExpectedDate}</td>
            <td>{e.totalBushels}</td>
            <td>{e.quantity}</td>
            <td>{e.status}</td>
          </tr>
        </>
      );
    });
  const truckDetails = (
    <>
      <TruckLoadingDetail>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
        >
          <TabItem label="Truck Loading Details" />
          <TabItem label="Outside Bags" />
        </Tabs>
      </TruckLoadingDetail>
      <main className="main__axis__img__table">
        <img src={TruckLogo} className="truck__img__load" />
        <section className="truck_assignment_loading__section">
          <table className="table_assignment_load">
            <tr>
              <th>Sl.No.</th>
              <th>Truck No</th>
              <th>Expected Date</th>
              <th>Total Bushels</th>
              <th>Quality</th>
              <th>Status</th>
            </tr>
            <tbody className="table__body__scroll">{trData}</tbody>
          </table>
        </section>
      </main>
    </>
  );

  const outsideBags = (
    <>
      <TruckLoadingDetail>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
        >
          <TabItem label="Truck Loading Details" />
          <TabItem label="Outside Bags" />
        </Tabs>
      </TruckLoadingDetail>
      <main className="main__axis__img__table">
        <img src={TruckLogo} className="truck__img__load" />
        <section className="truck_assignment_loading__section">
          <table className="table_assignment_load">
            <tr>
              <th>Sl.No.</th>
              <th>Total Bags</th>
              <th>Capacity</th>
              <th>BU</th>
              <th>Protien</th>
              <th>DHW</th>
              <th>TW</th>
            </tr>
            {tabdata.outSideBags.map((e) => {
              return (
                <>
                  <tr>
                    <td>{e.sl_no}</td>
                    <td>{e.totalBags}</td>
                    <td>{e.capacity}</td>
                    <td>{e.bu}</td>
                    <td>{e.protein}</td>
                    <td>{e.dhw}</td>
                    <td>{e.tw}</td>
                  </tr>
                </>
              );
            })}
          </table>
        </section>
      </main>
    </>
  );

  return (
    <div>
      <section>{value === 0 ? truckDetails : outsideBags}</section>
    </div>
  );
};

export default TruckLoadingTable;
