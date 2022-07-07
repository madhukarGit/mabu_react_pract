import "./DashboardCard.css";
import { Card, styled, Typography } from "@mui/material";
import DashboardChart from "./DashboardChart";
import TruckLoadingTable from "./TruckLoadingTable";

import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { dashboardBinSelection } from "../../editBinActions/dashboardBinActions";

const CardDiv = styled(Card)(({ theme }) => ({
  height: "12rem",
  width: "30rem",
}));

const CardChart = styled(Card)(({ theme }) => ({
  height: "20rem",
  width: "100%",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "flex-end",
  marginBottom: "1rem",
}));

const CardChartGrid = styled(Card)(({ theme }) => ({
  height: "16rem",
  width: "90%",
  marginBottom: "2rem",
  boxShadow: "0px 2px 2px black",
}));

const CardTable = styled(Card)(({ theme }) => ({
  height: "19rem",
  width: "100%",
}));

const TypographyH1 = styled(Typography)(({ theme }) => ({
  fontSize: "1.4rem",
  fontWeight: 600,
  padding: "0.5rem 1rem",
}));

const DashboardCard = () => {
  const token = useSelector((state) => state.auth.token);
  const dashboardData = useSelector((state) => state.dashboard.dashbaordBins);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(dashboardBinSelection(token));
  }, []);

  const dashboardDetails = dashboardData.length > 0 && (
    <>
      <section className="card__bin__details">
        <CardDiv>
          <div className="card__d__details">
            <TypographyH1>Wheat Price(Mn)</TypographyH1>
            <span>{`${dashboardData[0].wheatPrice}`}</span>
            <section className="section__border__bushels">
              <div className="card__dot__details"></div>
              <div>Per Bushels</div>
            </section>
          </div>
        </CardDiv>
        <CardDiv>
          <div className="card__d__details">
            <div className="card__load__spinner">
              <TypographyH1>Remaining Capacity</TypographyH1>
              <div></div>
            </div>
            <span>{`${dashboardData[0].remainingCapacity}`}</span>
            <section className="section__border__bushels">
              <div className="card__dot__details"></div>
              <div>Bushels</div>
            </section>
          </div>
        </CardDiv>
        <CardDiv>
          <div className="card__d__details__trucl_bags">
            <TypographyH1>Truck Loading details</TypographyH1>
            <span>{`${dashboardData[0].truckLoadingDetailsCount}`}</span>
            <span>Truck Loading Today</span>
          </div>
        </CardDiv>
        <CardDiv>
          <div className="card__d__details__trucl_bags">
            <TypographyH1>Outside Bags</TypographyH1>
            <span>{`${dashboardData[0].outSideBags[0].totalBags}`}</span>
            <span>No bags available yet!</span>
          </div>
        </CardDiv>
      </section>
    </>
  );

  const chartData = dashboardData.length > 0 && (
    <CardChartGrid>
      <DashboardChart details={dashboardData[0].binDetails} />
    </CardChartGrid>
  );

  const truckData = dashboardData.length > 0 && (
    <TruckLoadingTable tabdata={dashboardData[0]} />
  );
  return (
    <>
      {dashboardData && dashboardDetails}
      <section className="card__bin__details__chart">
        <CardChart>
          <div
            style={{
              marginLeft: "10px",
              marginRight: "auto",
            }}
          >
            <span style={{ fontWeight: "700" }}>
              {dashboardData.length > 0 &&
                `Total ${dashboardData[0].binDetails.length} bins`}
            </span>
          </div>
          {dashboardData && chartData}
        </CardChart>
      </section>
      <section className="card__bin__details__table">
        <CardTable>{truckData}</CardTable>
      </section>
    </>
  );
};

export default DashboardCard;
