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
  const data = useSelector((state) => state.auth.data);
  const isAuth = useSelector((state) => state.auth.isAuth);
  const userToken = useSelector((state) => state.auth.token);
  const selection_api_data = useSelector(
    (state) => state.selection.selectionData
  );
  useEffect(() => {
    dispatch(binSelection(userToken));
  }, []);

  const binSelectionDetails =
    isAuth && data.site_location_details[0].site_location_bin_details;

  const bin_details_interface = selection_api_data.data;

  console.log("bin details interface ", bin_details_interface);
  console.log("token is ", userToken);
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
                    <span>{binSelectionDetails[0].bin_capacity}</span>
                    <span>{binSelectionDetails[1].bin_capacity}</span>
                    <span>{binSelectionDetails[2].bin_capacity}</span>
                  </div>
                  <div className="bin__names__2">
                    <span>{binSelectionDetails[3].bin_capacity}</span>
                    <span>{binSelectionDetails[4].bin_capacity}</span>
                    <span>{binSelectionDetails[5].bin_capacity}</span>
                  </div>
                  <div className="bin__names__3">
                    <span>{binSelectionDetails[6].bin_capacity}</span>
                    <span>{binSelectionDetails[7].bin_capacity}</span>
                    <span>{binSelectionDetails[8].bin_capacity}</span>
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
                      code={bin_details_interface[0].commodity_type_code}
                      percentage={
                        bin_details_interface[0].bin_available_capacity_percent
                      }
                      protien={
                        bin_details_interface[0]
                          .bin_allocate_criteria_type_percent_details[0]
                          .bin_current_capacity_criteria_type_value
                      }
                      tw={
                        bin_details_interface[0]
                          .bin_allocate_criteria_type_percent_details[1]
                          .bin_current_capacity_criteria_type_value
                      }
                    />
                    <BinsLarge
                      height={height}
                      width={width}
                      code={bin_details_interface[1].commodity_type_code}
                      percentage={
                        bin_details_interface[1].bin_available_capacity_percent
                      }
                      protien={
                        bin_details_interface[1]
                          .bin_allocate_criteria_type_percent_details[0]
                          .bin_current_capacity_criteria_type_value
                      }
                      tw={
                        bin_details_interface[1]
                          .bin_allocate_criteria_type_percent_details[1]
                          .bin_current_capacity_criteria_type_value
                      }
                    />
                    <BinsLarge
                      height={height}
                      width={width}
                      code={bin_details_interface[2].commodity_type_code}
                      percentage={
                        bin_details_interface[2].bin_available_capacity_percent
                      }
                      protien={
                        bin_details_interface[2]
                          .bin_allocate_criteria_type_percent_details[0]
                          .bin_current_capacity_criteria_type_value
                      }
                      tw={
                        bin_details_interface[2]
                          .bin_allocate_criteria_type_percent_details[1]
                          .bin_current_capacity_criteria_type_value
                      }
                    />
                    <SmallBin
                      height={sheight}
                      width={swidth}
                      code={bin_details_interface[3].commodity_type_code}
                      percentage={
                        bin_details_interface[3].bin_available_capacity_percent
                      }
                      protien={
                        bin_details_interface[3]
                          .bin_allocate_criteria_type_percent_details[0]
                          .bin_current_capacity_criteria_type_value
                      }
                      tw={
                        bin_details_interface[3]
                          .bin_allocate_criteria_type_percent_details[1]
                          .bin_current_capacity_criteria_type_value
                      }
                    />
                    <SmallBin
                      height={sheight}
                      width={swidth}
                      code={bin_details_interface[4].commodity_type_code}
                      percentage={
                        bin_details_interface[4].bin_available_capacity_percent
                      }
                      protien={
                        bin_details_interface[4]
                          .bin_allocate_criteria_type_percent_details[0]
                          .bin_current_capacity_criteria_type_value
                      }
                      tw={
                        bin_details_interface[4]
                          .bin_allocate_criteria_type_percent_details[1]
                          .bin_current_capacity_criteria_type_value
                      }
                    />
                    <SmallBin
                      height={sheight}
                      width={swidth}
                      code={bin_details_interface[5].commodity_type_code}
                      percentage={
                        bin_details_interface[5].bin_available_capacity_percent
                      }
                      protien={
                        bin_details_interface[5]
                          .bin_allocate_criteria_type_percent_details[0]
                          .bin_current_capacity_criteria_type_value
                      }
                      tw={
                        bin_details_interface[5]
                          .bin_allocate_criteria_type_percent_details[1]
                          .bin_current_capacity_criteria_type_value
                      }
                    />
                    <BinsLarge
                      height={height}
                      width={width}
                      code={bin_details_interface[6].commodity_type_code}
                      percentage={
                        bin_details_interface[6].bin_available_capacity_percent
                      }
                      protien={
                        bin_details_interface[6]
                          .bin_allocate_criteria_type_percent_details[0]
                          .bin_current_capacity_criteria_type_value
                      }
                      tw={
                        bin_details_interface[6]
                          .bin_allocate_criteria_type_percent_details[1]
                          .bin_current_capacity_criteria_type_value
                      }
                    />
                    <BinsLarge
                      height={height}
                      width={width}
                      code={bin_details_interface[7].commodity_type_code}
                      percentage={
                        bin_details_interface[7].bin_available_capacity_percent
                      }
                      protien={
                        bin_details_interface[7]
                          .bin_allocate_criteria_type_percent_details[0]
                          .bin_current_capacity_criteria_type_value
                      }
                      tw={
                        bin_details_interface[7]
                          .bin_allocate_criteria_type_percent_details[1]
                          .bin_current_capacity_criteria_type_value
                      }
                    />
                    <BinsLarge
                      height={height}
                      width={width}
                      code={bin_details_interface[8].commodity_type_code}
                      percentage={
                        bin_details_interface[8].bin_available_capacity_percent
                      }
                      protien={
                        bin_details_interface[8]
                          .bin_allocate_criteria_type_percent_details[0]
                          .bin_current_capacity_criteria_type_value
                      }
                      tw={
                        bin_details_interface[8]
                          .bin_allocate_criteria_type_percent_details[1]
                          .bin_current_capacity_criteria_type_value
                      }
                    />
                  </div>
                </div>
                <div className="bin__names__align__names">
                  <div className="bin__names__1__label">
                    <span>{binSelectionDetails[0].bin_label}</span>
                    <span>{binSelectionDetails[1].bin_label}</span>
                    <span>{binSelectionDetails[2].bin_label}</span>
                  </div>
                  <div className="bin__names__2__label">
                    <span>{binSelectionDetails[3].bin_label}</span>
                    <span>{binSelectionDetails[4].bin_label}</span>
                    <span>{binSelectionDetails[5].bin_label}</span>
                  </div>
                  <div className="bin__names__3__label">
                    <span>{binSelectionDetails[6].bin_label}</span>
                    <span>{binSelectionDetails[7].bin_label}</span>
                    <span>{binSelectionDetails[8].bin_label}</span>
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
