import "./BinSelection.css";
import BinsLarge from "../../bins/BinsLarge";
import SmallBin from "../../bins/SmallBin";
import React, { useEffect } from "react";
import BinDetails from "./BinDetails";
import BinSelectionLevelTable from "./BinSelectionLevelTable";
import { useDispatch, useSelector } from "react-redux";
import { binSelection } from "../../../loginAuth/binActionsSelection";

const BinSelection = () => {
  const dispatch = useDispatch();
  const height = "10%";
  const width = "10%";
  const sheight = "7.5%";
  const swidth = "7.5%";

  const { isAuth, token } = useSelector((state) => state.auth);
  const userToken = token;

  //fetching selection API bin data
  const selection_api_data = useSelector(
    (state) => state.selection.selectionData
  );

  const saveSuggestedBinData = useSelector(
    (state) => state.editGrain.saveSuggestionData
  );

  console.log(
    "save suggested bin data to reload on update of bain",
    saveSuggestedBinData
  );

  console.log("token is ", userToken);
  useEffect(() => {
    console.log("selection_api_data  ", selection_api_data);
    dispatch(binSelection(userToken));
  }, [userToken]);

  useEffect(() => {
    if (saveSuggestedBinData && Object.keys(saveSuggestedBinData).length > 0) {
      dispatch(binSelection(userToken));
    }
  }, [saveSuggestedBinData]);

  const bin_details_interface = selection_api_data.data;

  let bin01 = [];
  let bin02 = [];
  let bin03 = [];
  let bin04 = [];
  let bin05 = [];
  let bin06 = [];
  let bin07 = [];
  let bin08 = [];
  let bin09 = [];

  if (bin_details_interface) {
    bin01 = bin_details_interface.filter((d) => {
      return d.bin_id === 1;
    });
    bin02 = bin_details_interface.filter((d) => {
      return d.bin_id === 2;
    });
    bin03 = bin_details_interface.filter((d) => {
      return d.bin_id === 3;
    });
    bin04 = bin_details_interface.filter((d) => {
      return d.bin_id === 4;
    });
    bin05 = bin_details_interface.filter((d) => {
      return d.bin_id === 5;
    });
    bin06 = bin_details_interface.filter((d) => {
      return d.bin_id === 6;
    });
    bin07 = bin_details_interface.filter((d) => {
      return d.bin_id === 7;
    });
    bin08 = bin_details_interface.filter((d) => {
      return d.bin_id === 8;
    });
    bin09 = bin_details_interface.filter((d) => {
      return d.bin_id === 9;
    });
  }

  return (
    <React.Fragment>
      <BinDetails />
      <section>
        {isAuth && (
          <>
            {selection_api_data && bin_details_interface && (
              <>
                <div className="bin__names__align">
                  <div className="bin__names__1">
                    <span>160,041</span>
                    <span>160,041</span>
                    <span>160,041</span>
                  </div>
                  <div className="bin__names__2">
                    <span>8000</span>
                    <span>8000</span>
                    <span>Blending/Loading</span>
                  </div>
                  <div className="bin__names__3">
                    <span>160,041</span>
                    <span>160,041</span>
                    <span>160,041</span>
                  </div>
                </div>
                <div className="bins__selection">
                  <div className="bins__selection__fileds">
                    <span className="bins__selection__text">Bin Capacity</span>
                    <span className="bins__selection__text">FN</span>
                    <span className="bins__selection__text">Commodity</span>
                    <span className="bins__selection__text">BU</span>
                    <span className="bins__selection__text">PRO</span>
                    <span className="bins__selection__text">DHW</span>
                    <span className="bins__selection__text">TRW</span>
                  </div>

                  <div className="bins__selection__align">
                    <BinsLarge
                      height={height}
                      width={width}
                      code={bin06[0].commodity_type_code}
                      percentage={bin06[0].bin_available_capacity_percent}
                      protien={
                        bin06[0].bin_allocate_criteria_type_percent_details[0]
                          .bin_current_capacity_criteria_type_value
                      }
                      tw={
                        bin06[0].bin_allocate_criteria_type_percent_details[1]
                          .bin_current_capacity_criteria_type_value
                      }
                    />
                    <BinsLarge
                      height={height}
                      width={width}
                      code={bin05[0].commodity_type_code}
                      percentage={bin05[0].bin_available_capacity_percent}
                      protien={
                        bin05[0].bin_allocate_criteria_type_percent_details[0]
                          .bin_current_capacity_criteria_type_value
                      }
                      tw={
                        bin05[0].bin_allocate_criteria_type_percent_details[1]
                          .bin_current_capacity_criteria_type_value
                      }
                    />
                    <BinsLarge
                      height={height}
                      width={width}
                      code={bin04[0].commodity_type_code}
                      percentage={bin04[0].bin_available_capacity_percent}
                      protien={
                        bin04[0].bin_allocate_criteria_type_percent_details[0]
                          .bin_current_capacity_criteria_type_value
                      }
                      tw={
                        bin04[0].bin_allocate_criteria_type_percent_details[1]
                          .bin_current_capacity_criteria_type_value
                      }
                    />
                    <SmallBin
                      height={sheight}
                      width={swidth}
                      code={bin02[0].commodity_type_code}
                      percentage={bin02[0].bin_available_capacity_percent}
                      protien={
                        bin02[0].bin_allocate_criteria_type_percent_details[0]
                          .bin_current_capacity_criteria_type_value
                      }
                      tw={
                        bin02[0].bin_allocate_criteria_type_percent_details[1]
                          .bin_current_capacity_criteria_type_value
                      }
                    />
                    <SmallBin
                      height={sheight}
                      width={swidth}
                      code={bin03[0].commodity_type_code}
                      percentage={bin03[0].bin_available_capacity_percent}
                      protien={
                        bin03[0].bin_allocate_criteria_type_percent_details[0]
                          .bin_current_capacity_criteria_type_value
                      }
                      tw={
                        bin03[0].bin_allocate_criteria_type_percent_details[1]
                          .bin_current_capacity_criteria_type_value
                      }
                    />
                    <SmallBin
                      height={sheight}
                      width={swidth}
                      code={bin01[0].commodity_type_code}
                      percentage={bin01[0].bin_available_capacity_percent}
                      protien={
                        bin01[0].bin_allocate_criteria_type_percent_details[0]
                          .bin_current_capacity_criteria_type_value
                      }
                      tw={
                        bin01[0].bin_allocate_criteria_type_percent_details[1]
                          .bin_current_capacity_criteria_type_value
                      }
                    />
                    <BinsLarge
                      height={height}
                      width={width}
                      code={bin07[0].commodity_type_code}
                      percentage={bin07[0].bin_available_capacity_percent}
                      protien={
                        bin07[0].bin_allocate_criteria_type_percent_details[0]
                          .bin_current_capacity_criteria_type_value
                      }
                      tw={
                        bin07[0].bin_allocate_criteria_type_percent_details[1]
                          .bin_current_capacity_criteria_type_value
                      }
                    />
                    <BinsLarge
                      height={height}
                      width={width}
                      code={bin08[0].commodity_type_code}
                      percentage={bin08[0].bin_available_capacity_percent}
                      protien={
                        bin08[0].bin_allocate_criteria_type_percent_details[0]
                          .bin_current_capacity_criteria_type_value
                      }
                      tw={
                        bin08[0].bin_allocate_criteria_type_percent_details[1]
                          .bin_current_capacity_criteria_type_value
                      }
                    />
                    <BinsLarge
                      height={height}
                      width={width}
                      code={bin09[0].commodity_type_code}
                      percentage={bin09[0].bin_available_capacity_percent}
                      protien={
                        bin09[0].bin_allocate_criteria_type_percent_details[0]
                          .bin_current_capacity_criteria_type_value
                      }
                      tw={
                        bin09[0].bin_allocate_criteria_type_percent_details[1]
                          .bin_current_capacity_criteria_type_value
                      }
                    />
                  </div>
                </div>
                <div className="bin__names__align__names">
                  <div className="bin__names__1__label">
                    <span>BIN 06</span>
                    <span>BIN 05</span>
                    <span>BIN 04</span>
                  </div>
                  <div className="bin__names__2__label">
                    <span>BIN 02</span>
                    <span>BIN 03</span>
                    <span>BIN 01</span>
                  </div>
                  <div className="bin__names__3__label">
                    <span>BIN 07</span>
                    <span>BIN 08</span>
                    <span>BIN 09</span>
                  </div>
                </div>
              </>
            )}
          </>
        )}
      </section>
      <BinSelectionLevelTable />
    </React.Fragment>
  );
};

export default BinSelection;
