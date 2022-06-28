import WarningAmberIcon from "@mui/icons-material/WarningAmber";
import { IconButton, SwipeableDrawer } from "@mui/material";
import React, { useState } from "react";
import "./TruckLoading";
import TruckLogo from "../../../assets/truck_logo.svg";
import ArrowCircleLeftIcon from "@mui/icons-material/ArrowCircleLeft";
import IncomingTruck from "../bin-selection/IncomingTruck";
import SelectionEditBin from "../bin-selection/SelectionEditBin";

const TruckLoading = () => {
  const [openDrawer, setOpenDrawer] = useState(false);
  console.log(openDrawer);

  const drawer = (
    <React.Fragment>
      <SwipeableDrawer
        open={openDrawer}
        onClose={() => setOpenDrawer(false)}
        onOpen={() => setOpenDrawer(true)}
        anchor={"right"}
      >
        <SelectionEditBin />
      </SwipeableDrawer>
    </React.Fragment>
  );

  return (
    <React.Fragment>
      <section>
        <img
          src={TruckLogo}
          alt="truck logo"
          className="truck__logo__loading"
        />
      </section>

      <div className="truck__loading">
        <ArrowCircleLeftIcon
          sx={{
            height: 40,
            width: 40,
            fill: "#379683",
            cursor: "pointer",
            transition: "all 0.8s",
            "&:hover": { fill: "#FF652F" },
          }}
          onClick={() => setOpenDrawer(!openDrawer)}
        />
        {drawer}
      </div>
    </React.Fragment>
  );
};

export default TruckLoading;
