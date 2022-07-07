import { IconButton, SwipeableDrawer } from "@mui/material";
import React, { useEffect, useState } from "react";
import "./TruckLoading";
import TruckLogo from "../../../assets/truck_logo.svg";
import ArrowCircleLeftIcon from "@mui/icons-material/ArrowCircleLeft";
import SelectionEditBin from "../bin-selection/SelectionEditBin";
import { useSelector, useDispatch } from "react-redux";
import { binGrainActions } from "../../../editBinActions/editBinSlice";

const TruckLoading = () => {
  const [openDrawer, setOpenDrawer] = useState(false);
  const closeDrawer = useSelector((state) => state.editGrain.closeDrawer);
  const dispatch = useDispatch();

  useEffect(() => {
    if (closeDrawer) {
      setOpenDrawer(false);
    }
  }, [closeDrawer]);

  const closeDrawerHandler = () => {
    dispatch(binGrainActions.binSuggestionRequest([]));
    setOpenDrawer(false);
  };
  const drawer = (
    <React.Fragment>
      <SwipeableDrawer
        open={openDrawer}
        onClose={closeDrawerHandler}
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
            fill: "#577f7d",
            cursor: "pointer",
            transition: "all 0.8s",
            "&:hover": { fill: "#7eb690" },
          }}
          onClick={() => setOpenDrawer(!openDrawer)}
        />
        {drawer}
      </div>
    </React.Fragment>
  );
};

export default TruckLoading;
