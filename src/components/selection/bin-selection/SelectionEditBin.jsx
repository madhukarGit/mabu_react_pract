import { Box, Button, Card, styled, Switch, Typography } from "@mui/material";
import "./SelectionEditBin.css";
import BinGrainSVG from "../../bins/BinGrainSVG";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import {
  saveBinGrainSuggestion,
  saveSuggestionDataApi,
} from "../../../editBinActions/editBinGrainActions";
import { binGrainActions } from "../../../editBinActions/editBinSlice";

const ContainerEdit = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
}));

const SelectionBinEntry = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
}));

const CardManualUserDetails = styled(Card)(({ theme }) => ({
  height: "45vh",
  overflowY: "scroll",
}));

const FormCard = styled("form")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  padding: "0.1rem 1.8rem",
  gap: "12px",
}));

const BiNCardMargin = styled("div")(({ theme }) => ({
  marginTop: "1rem",
  padding: "0 2rem",
}));

const TypographyHeading = styled(Typography)(({ theme }) => ({
  fontSize: "1.4rem",
  fontWeight: 600,
  marginBottom: "0.8rem",
  textTransform: "capitalize",
  padding: "0 1rem",
}));

const DivGroupButtons = styled("div")(({ theme }) => ({
  marginTop: "1rem",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  gap: "4px",
  [theme.breakpoints.down("md")]: {
    flexDirection: "column",
  },
}));

const SectionBinGrain = styled("section")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  gap: "1rem",
}));

const SelectionEditBin = () => {
  const dispatch = useDispatch();

  const { isAuth, token } = useSelector((state) => state.auth);
  const [cancelSuggestedBin, setCancelSuggestedBin] = useState("");
  const [reason, setReason] = useState({ reason: "Space Issue", text: "" });

  //selector for close drawer edit bin grain actions
  const closeDrawerFlag = useSelector((state) => state.editGrain.closeDrawer);
  const savedSuggestedBin = useSelector(
    (state) => state.editGrain.saveSuggestionData.data
  );

  //to normalize the close drawer value to default, as on cancel the render of sidedrawer component is to re-render
  useEffect(() => {
    if (closeDrawerFlag) {
      dispatch(binGrainActions.closeDrawer(false));
    }
  }, [closeDrawerFlag]);

  //state variables to assign suggested bin and selected bin for a non suggested bin click
  const [suggestedBinByApi, setSuggestedBinByApi] = useState("");
  const [clickedBinUser, setClickedBinUser] = useState("");

  //creating the payload for suggestion bins throughforms
  const requestJsonData = {
    bin_selection_rfid_tickect_id: "",
    bin_selection_driver_name: "",
    bin_selection_truck_no: "",
    bin_selection_commodity_type_id: "1",
    capacity: "",
    grain: "",
    bin_allocation_manual_sample_testing: [
      { criteria_type_id: 1, criteria_type_value: "" },
      { criteria_type_id: 4, criteria_type_value: "" },
      { criteria_type_id: 2, criteria_type_value: "" },
      { criteria_type_id: 5, criteria_type_value: "" },
    ],
    bin_allocation_truck_scaling_testing: [
      { inbound_weight: 1, inbound_weight_value: "" },
      { outbound_weight: 2, outbound_weight_value: "" },
    ],
  };

  //assigning requet payload to useState variable
  const [editBinsData, setEditBinsData] = useState(requestJsonData);

  //selector to call and retrieve the suggestion data on click of forms submissions -> generally the value through response is sugested or NA Full
  let saveSuggestionGrainData = useSelector(
    (state) => state.editGrain.binSuggestionData.data
  );

  /*
  
    input field handlers to grab the value from on click event listeners 
  */
  const inputFieldHandler = (e, name) => {
    if (name === "rfid") {
      setEditBinsData((prev) => {
        return { ...prev, bin_selection_rfid_tickect_id: e.target.value };
      });
    }
  };

  const truckNoHadnler = (e) => {
    setEditBinsData((prev) => {
      return { ...prev, bin_selection_truck_no: e.target.value };
    });
  };

  const grainChnageHandler = (e) => {
    setEditBinsData((prev) => {
      return { ...prev, grain: e.target.value };
    });
  };
  const driverFieldHandler = (e) => {
    setEditBinsData((prev) => {
      return { ...prev, bin_selection_driver_name: e.target.value };
    });
  };

  const weightHandler = (e) => {
    setEditBinsData((prev) => {
      return { ...prev, capacity: e.target.value };
    });
  };

  const manualProtienHandler = (e) => {
    const { bin_allocation_manual_sample_testing } = editBinsData;
    bin_allocation_manual_sample_testing[0] = {
      ...bin_allocation_manual_sample_testing[0],
      criteria_type_value: e.target.value,
    };
    setEditBinsData((prev) => {
      return { ...prev, bin_allocation_manual_sample_testing };
    });
  };

  const moistureLevelHandler = (e) => {
    const { bin_allocation_manual_sample_testing } = editBinsData;
    bin_allocation_manual_sample_testing[1] = {
      ...bin_allocation_manual_sample_testing[1],
      criteria_type_value: e.target.value,
    };
    setEditBinsData((prev) => {
      return { ...prev, bin_allocation_manual_sample_testing };
    });
  };

  const manualTWHandler = (e) => {
    const { bin_allocation_manual_sample_testing } = editBinsData;
    bin_allocation_manual_sample_testing[2] = {
      ...bin_allocation_manual_sample_testing[2],
      criteria_type_value: e.target.value,
    };
    setEditBinsData((prev) => {
      return { ...prev, bin_allocation_manual_sample_testing };
    });
  };

  const manualDHWHandler = (e) => {
    const { bin_allocation_manual_sample_testing } = editBinsData;
    bin_allocation_manual_sample_testing[3] = {
      ...bin_allocation_manual_sample_testing[3],
      criteria_type_value: e.target.value,
    };
    setEditBinsData((prev) => {
      return { ...prev, bin_allocation_manual_sample_testing };
    });
  };

  const outboundWeightHandler = (e) => {
    const { bin_allocation_truck_scaling_testing } = editBinsData;
    bin_allocation_truck_scaling_testing[1] = {
      ...bin_allocation_truck_scaling_testing[1],
      outbound_weight_value: e.target.value,
    };
    setEditBinsData((prev) => {
      return { ...prev, bin_allocation_truck_scaling_testing };
    });
  };

  const inboundWeightHandler = (e) => {
    const { bin_allocation_truck_scaling_testing } = editBinsData;
    bin_allocation_truck_scaling_testing[0] = {
      ...bin_allocation_truck_scaling_testing[0],
      inbound_weight_value: e.target.value,
    };
    setEditBinsData((prev) => {
      return { ...prev, bin_allocation_truck_scaling_testing };
    });
  };

  //Bin Grain suggestions
  const bingrain01 = { color: "#36cfc9", suggestion: "", binNo: "1" };
  const bingrain02 = { color: "#36cfc9", suggestion: "", binNo: "2" };
  const bingrain03 = { color: "#36cfc9", suggestion: "", binNo: "3" };
  const bingrain04 = { color: "#36cfc9", suggestion: "", binNo: "4" };
  const bingrain05 = { color: "#36cfc9", suggestion: "", binNo: "5" };
  const bingrain06 = { color: "#36cfc9", suggestion: "", binNo: "6" };
  const bingrain07 = { color: "#36cfc9", suggestion: "", binNo: "7" };
  const bingrain08 = { color: "#36cfc9", suggestion: "", binNo: "8" };
  const bingrain09 = { color: "#36cfc9", suggestion: "", binNo: "9" };

  const [binGrainSuggest1, setBinGrainSuggest1] = useState(bingrain01);
  const [binGrainSuggest2, setBinGrainSuggest2] = useState(bingrain02);
  const [binGrainSuggest3, setBinGrainSuggest3] = useState(bingrain03);
  const [binGrainSuggest4, setBinGrainSuggest4] = useState(bingrain04);
  const [binGrainSuggest5, setBinGrainSuggest5] = useState(bingrain05);
  const [binGrainSuggest6, setBinGrainSuggest6] = useState(bingrain06);
  const [binGrainSuggest7, setBinGrainSuggest7] = useState(bingrain07);
  const [binGrainSuggest8, setBinGrainSuggest8] = useState(bingrain08);
  const [binGrainSuggest9, setBinGrainSuggest9] = useState(bingrain09);

  //method to suggest a color based on bin grain level suggestion
  const suggestedColorGenerator = (label) => {
    let color;
    if (label === "suggested") {
      color = "#d49836";
    } else if (label === "available") {
      color = "#36cfc9";
    } else if (label === "NA Full") {
      color = "#ff4d4f";
    }
    return color;
  };

  //suggestion api call
  const suggestionApiHandler = (e) => {
    e.preventDefault();

    if (saveSuggestionGrainData && saveSuggestionGrainData.length > 0) {
      setBinGrainSuggest1({ binNo: 1 });
      setBinGrainSuggest2({ binNo: 2 });
      setBinGrainSuggest3({ binNo: 3 });
      setBinGrainSuggest4({ binNo: 4 });
      setBinGrainSuggest5({ binNo: 5 });
      setBinGrainSuggest6({ binNo: 6 });
      setBinGrainSuggest7({ binNo: 7 });
      setBinGrainSuggest8({ binNo: 8 });
      setBinGrainSuggest9({ binNo: 9 });
    }
    dispatch(saveBinGrainSuggestion(token, editBinsData));
    dispatch(binGrainActions.closeDrawer(false));
  };

  const genericSaveSuggestionGrainData = () => {
    saveSuggestionGrainData.forEach((e) => {
      switch (e.bin_no) {
        case 1: {
          setBinGrainSuggest1((prev) => {
            return {
              ...prev,
              color: suggestedColorGenerator(e.label),
              suggestion: e.label,
              binNo: e.bin_no || 1,
            };
          });
          if (e.label === "suggested") {
            setSuggestedBinByApi(e.bin_no);
          }
          break;
        }
        case 2: {
          setBinGrainSuggest2((prev) => {
            return {
              ...prev,
              color: suggestedColorGenerator(e.label),
              suggestion: e.label,
              binNo: e.bin_no || 2,
            };
          });
          if (e.label === "suggested") {
            setSuggestedBinByApi(e.bin_no);
          }
          break;
        }
        case 3: {
          setBinGrainSuggest3((prev) => {
            return {
              ...prev,
              color: suggestedColorGenerator(e.label),
              suggestion: e.label,
              binNo: e.bin_no || 3,
            };
          });
          if (e.label === "suggested") {
            setSuggestedBinByApi(e.bin_no);
          }
          break;
        }
        case 4: {
          setBinGrainSuggest4((prev) => {
            return {
              ...prev,
              color: suggestedColorGenerator(e.label),
              suggestion: e.label,
              binNo: e.bin_no || 4,
            };
          });
          if (e.label === "suggested") {
            setSuggestedBinByApi(e.bin_no);
          }
          break;
        }
        case 5: {
          setBinGrainSuggest5((prev) => {
            return {
              ...prev,
              color: suggestedColorGenerator(e.label),
              suggestion: e.label,
              binNo: e.bin_no || 5,
            };
          });
          if (e.label === "suggested") {
            setSuggestedBinByApi(e.bin_no);
          }
          break;
        }
        case 6: {
          setBinGrainSuggest6((prev) => {
            return {
              ...prev,
              color: suggestedColorGenerator(e.label),
              suggestion: e.label,
              binNo: e.bin_no || 6,
            };
          });
          if (e.label === "suggested") {
            setSuggestedBinByApi(e.bin_no);
          }
          break;
        }
        case 7: {
          setBinGrainSuggest7((prev) => {
            return {
              ...prev,
              color: suggestedColorGenerator(e.label),
              suggestion: e.label,
              binNo: e.bin_no || 7,
            };
          });
          if (e.label === "suggested") {
            setSuggestedBinByApi(e.bin_no);
          }
          break;
        }
        case 8: {
          setBinGrainSuggest8((prev) => {
            return {
              ...prev,
              color: suggestedColorGenerator(e.label),
              suggestion: e.label,
              binNo: e.bin_no || 8,
            };
          });
          if (e.label === "suggested") {
            setSuggestedBinByApi(e.bin_no);
          }
          break;
        }
        case 9: {
          setBinGrainSuggest9((prev) => {
            return {
              ...prev,
              color: suggestedColorGenerator(e.label),
              suggestion: e.label,
              binNo: e.bin_no || 9,
            };
          });
          if (e.label === "suggested") {
            setSuggestedBinByApi(e.bin_no);
          }
          break;
        }
      }
    });
  };

  //use effect on saveSuggestionGrainData to assign the suggested data to 9 bins grid data
  useEffect(() => {
    if (saveSuggestionGrainData) {
      genericSaveSuggestionGrainData();
    }
  }, [saveSuggestionGrainData]);

  //bin suggestion save and load API call
  const saveSuggestedBin = (bin) => {
    if (bin.suggestion !== "suggested") {
      console.log("bin is suggested ", bin.binNo);
      setClickedBinUser(bin);
      setCancelSuggestedBin(true);
    } else {
    }
  };

  //on click of save and load bin, assumption the user is okay to go with suggested bin and load them in DB using API /saveSuggest
  const saveSuggestedBinFinal = () => {
    dispatch(saveSuggestionDataApi(token, editBinsData));
  };

  /*reason to considerr if user is not willing to go with a suggested bin */
  const reasonHandler = (e) => {
    setReason((prev) => {
      return { ...prev, reason: e.target.value };
    });
  };

  const textReasonHandler = (e) => {
    setReason((prev) => {
      return { ...prev, text: e.target.value };
    });
  };

  //on click of submit , the reasons are saved to local storage
  const sumbitReasonHandler = (e) => {
    e.preventDefault();
    console.log("entered");
    localStorage.setItem("reason", JSON.stringify(reason));
    dispatch(binGrainActions.reloadSuggestionInitalLoad());
  };

  //user choosen apart from suggested bin, and about to click the done to save the reason,
  const reloadOnSuccessHandler = () => {
    setBinGrainSuggest1({ color: "#36cfc9", suggestion: "", binNo: "1" });
    setBinGrainSuggest2({ color: "#36cfc9", suggestion: "", binNo: "2" });
    setBinGrainSuggest3({ color: "#36cfc9", suggestion: "", binNo: "3" });
    setBinGrainSuggest4({ color: "#36cfc9", suggestion: "", binNo: "4" });
    setBinGrainSuggest5({ color: "#36cfc9", suggestion: "", binNo: "5" });
    setBinGrainSuggest6({ color: "#36cfc9", suggestion: "", binNo: "6" });
    setBinGrainSuggest7({ color: "#36cfc9", suggestion: "", binNo: "7" });
    setBinGrainSuggest8({ color: "#36cfc9", suggestion: "", binNo: "8" });
    setBinGrainSuggest9({ color: "#36cfc9", suggestion: "", binNo: "9" });

    dispatch(binGrainActions.reloadSuggestionInitalLoad());
  };

  //this function is blank just to support a ternary operator
  const disabledHandler = () => {};
  const cancelHandlerError = () => {
    setCancelSuggestedBin(false);
  };

  //with useEffect on top, this handler works for the cancel button
  const cancelLoadBinDrawer = () => {
    dispatch(binGrainActions.closeDrawer(!closeDrawerFlag));
  };
  return (
    <section className="edit__selection__bin_drawer">
      {!savedSuggestedBin && !cancelSuggestedBin && (
        <>
          <ContainerEdit>
            <span>Manual</span>
            <Switch defaultChecked size="small" />
          </ContainerEdit>
          <SelectionBinEntry>
            <CardManualUserDetails>
              <TypographyHeading>Truck Details:</TypographyHeading>
              <FormCard>
                <div className="form-labels-align__entry">
                  <label className="form-label__entry">RFID Ticket ID:</label>
                  <input
                    type="text"
                    required
                    value={editBinsData.bin_selection_rfid_tickect_id}
                    onChange={(event) => inputFieldHandler(event, "rfid")}
                  />
                </div>
                <div className="form-labels-align__entry">
                  <label className="form-label__entry">Driver Name:</label>
                  <input
                    type="text"
                    value={editBinsData.bin_selection_driver_name}
                    onChange={driverFieldHandler}
                  />
                </div>
              </FormCard>
              <FormCard>
                <div className="form-labels-align__entry">
                  <label className="form-label__entry">Truck No:</label>
                  <input
                    type="text"
                    value={editBinsData.bin_selection_truck_no}
                    onChange={truckNoHadnler}
                  />
                </div>
                <div className="form-labels-align__entry">
                  <label className="form-label__entry">Grain:</label>
                  <input
                    type="text"
                    value={editBinsData.grain}
                    onChange={grainChnageHandler}
                  />
                </div>
              </FormCard>
              <FormCard>
                <div className="form-labels-align">
                  <label className="form-label">Weight:</label>
                  <input
                    type="text"
                    value={editBinsData.capacity}
                    onChange={weightHandler}
                  />
                </div>
              </FormCard>
              <TypographyHeading>Sampling details:</TypographyHeading>
              <FormCard>
                <div className="form-labels-align__entry">
                  <label className="form-label__entry">Protien Level:</label>
                  <input
                    type="text"
                    value={
                      editBinsData.bin_allocation_manual_sample_testing[0]
                        .criteria_type_value
                    }
                    onChange={manualProtienHandler}
                  />
                </div>
                <div className="form-labels-align__entry">
                  <label className="form-label__entry">Moisture Level:</label>
                  <input
                    type="text"
                    required
                    value={
                      editBinsData.bin_allocation_manual_sample_testing[1]
                        .criteria_type_value
                    }
                    onChange={moistureLevelHandler}
                  />
                </div>
              </FormCard>
              <FormCard>
                <div className="form-labels-align__entry">
                  <label className="form-label__entry">TW:</label>
                  <input
                    type="text"
                    value={
                      editBinsData.bin_allocation_manual_sample_testing[2]
                        .criteria_type_value
                    }
                    onChange={manualTWHandler}
                  />
                </div>
                <div className="form-labels-align__entry">
                  <label className="form-label__entry">DHW:</label>
                  <input
                    type="text"
                    value={
                      editBinsData.bin_allocation_manual_sample_testing[3]
                        .criteria_type_value
                    }
                    onChange={manualDHWHandler}
                  />
                </div>
              </FormCard>
              <TypographyHeading>Truck scale details:</TypographyHeading>
              <FormCard>
                <div className="form-labels-align__entry">
                  <label className="form-label__entry">Inbound Weight:</label>
                  <input
                    type="text"
                    value={
                      editBinsData.bin_allocation_truck_scaling_testing[0]
                        .inbound_weight_value
                    }
                    onChange={inboundWeightHandler}
                  />
                </div>
                <div className="form-labels-align__entry">
                  <label className="form-label__entry">Outbound Weight:</label>
                  <input
                    type="text"
                    value={
                      editBinsData.bin_allocation_truck_scaling_testing[1]
                        .outbound_weight_value
                    }
                    onChange={outboundWeightHandler}
                  />
                </div>
              </FormCard>

              <Button
                variant="contained"
                color="error"
                type="submit"
                sx={{
                  width: "40%",
                  fontSize: "10px",
                  marginLeft: "12rem",
                  marginBottom: "1rem",
                }}
                onClick={suggestionApiHandler}
              >
                Suggest Bin
              </Button>
            </CardManualUserDetails>
          </SelectionBinEntry>

          <SelectionBinEntry>
            <BiNCardMargin>
              <TypographyHeading>Select Bin to load grain</TypographyHeading>
              <SectionBinGrain>
                <div
                  onClick={
                    binGrainSuggest1.suggestion !== "suggested"
                      ? (e) => saveSuggestedBin(binGrainSuggest1)
                      : disabledHandler
                  }
                  className={
                    binGrainSuggest1.suggestion !== "suggested"
                      ? "bins__active__toggling"
                      : "bins__inactive__toggling"
                  }
                >
                  <BinGrainSVG
                    color={binGrainSuggest1.color}
                    suggestion={binGrainSuggest1.suggestion}
                    binNo={binGrainSuggest1.binNo}
                  />
                </div>
                <div
                  onClick={
                    binGrainSuggest2.suggestion !== "suggested"
                      ? (e) => saveSuggestedBin(binGrainSuggest2)
                      : disabledHandler
                  }
                  className={
                    binGrainSuggest2.suggestion !== "suggested"
                      ? "bins__active__toggling"
                      : "bins__inactive__toggling"
                  }
                >
                  <BinGrainSVG
                    color={binGrainSuggest2.color}
                    suggestion={binGrainSuggest2.suggestion}
                    binNo={binGrainSuggest2.binNo}
                  />
                </div>
                <div
                  onClick={
                    binGrainSuggest3.suggestion !== "suggested"
                      ? (e) => saveSuggestedBin(binGrainSuggest3)
                      : disabledHandler
                  }
                  className={
                    binGrainSuggest3.suggestion !== "suggested"
                      ? "bins__active__toggling"
                      : "bins__inactive__toggling"
                  }
                >
                  <BinGrainSVG
                    color={binGrainSuggest3.color}
                    suggestion={binGrainSuggest3.suggestion}
                    binNo={binGrainSuggest3.binNo}
                  />
                </div>
              </SectionBinGrain>
              <SectionBinGrain>
                <div
                  onClick={
                    binGrainSuggest4.suggestion !== "suggested"
                      ? (e) => saveSuggestedBin(binGrainSuggest4)
                      : disabledHandler
                  }
                  className={
                    binGrainSuggest4.suggestion !== "suggested"
                      ? "bins__active__toggling"
                      : "bins__inactive__toggling"
                  }
                >
                  <BinGrainSVG
                    color={binGrainSuggest4.color}
                    suggestion={binGrainSuggest4.suggestion}
                    binNo={binGrainSuggest4.binNo}
                  />
                </div>
                <div
                  onClick={
                    binGrainSuggest5.suggestion !== "suggested"
                      ? (e) => saveSuggestedBin(binGrainSuggest5)
                      : disabledHandler
                  }
                  className={
                    binGrainSuggest5.suggestion !== "suggested"
                      ? "bins__active__toggling"
                      : "bins__inactive__toggling"
                  }
                >
                  <BinGrainSVG
                    color={binGrainSuggest5.color}
                    suggestion={binGrainSuggest5.suggestion}
                    binNo={binGrainSuggest5.binNo}
                  />
                </div>
                <div
                  onClick={
                    binGrainSuggest6.suggestion !== "suggested"
                      ? (e) => saveSuggestedBin(binGrainSuggest6)
                      : disabledHandler
                  }
                  className={
                    binGrainSuggest6.suggestion !== "suggested"
                      ? "bins__active__toggling"
                      : "bins__inactive__toggling"
                  }
                >
                  <BinGrainSVG
                    color={binGrainSuggest6.color}
                    suggestion={binGrainSuggest6.suggestion}
                    binNo={binGrainSuggest6.binNo}
                  />
                </div>
              </SectionBinGrain>
              <SectionBinGrain>
                <div
                  onClick={
                    binGrainSuggest7.suggestion !== "suggested"
                      ? (e) => saveSuggestedBin(binGrainSuggest7)
                      : disabledHandler
                  }
                  className={
                    binGrainSuggest7.suggestion !== "suggested"
                      ? "bins__active__toggling"
                      : "bins__inactive__toggling"
                  }
                >
                  <BinGrainSVG
                    color={binGrainSuggest7.color}
                    suggestion={binGrainSuggest7.suggestion}
                    binNo={binGrainSuggest7.binNo}
                  />
                </div>
                <div
                  onClick={
                    binGrainSuggest8.suggestion !== "suggested"
                      ? (e) => saveSuggestedBin(binGrainSuggest8)
                      : disabledHandler
                  }
                  className={
                    binGrainSuggest8.suggestion !== "suggested"
                      ? "bins__active__toggling"
                      : "bins__inactive__toggling"
                  }
                >
                  <BinGrainSVG
                    color={binGrainSuggest8.color}
                    suggestion={binGrainSuggest8.suggestion}
                    binNo={binGrainSuggest8.binNo}
                  />
                </div>
                <div
                  onClick={
                    binGrainSuggest9.suggestion !== "suggested"
                      ? (e) => saveSuggestedBin(binGrainSuggest9)
                      : disabledHandler
                  }
                  className={
                    binGrainSuggest9.suggestion !== "suggested"
                      ? "bins__active__toggling"
                      : "bins__inactive__toggling"
                  }
                >
                  <BinGrainSVG
                    color={binGrainSuggest9.color}
                    suggestion={binGrainSuggest9.suggestion}
                    binNo={binGrainSuggest9.binNo}
                  />
                </div>
              </SectionBinGrain>
            </BiNCardMargin>
            <DivGroupButtons>
              <Button
                variant="outlined"
                sx={{ width: "7vw", fontSize: "10px" }}
                onClick={cancelLoadBinDrawer}
              >
                Cancel
              </Button>
              <Button
                variant="contained"
                color="error"
                sx={{ width: "40%", fontSize: "10px" }}
                onClick={saveSuggestedBinFinal}
              >
                Save & Load Bin
              </Button>
            </DivGroupButtons>
          </SelectionBinEntry>
        </>
      )}
      {savedSuggestedBin && (
        <div className="saved_bin__load">
          <div className="saved__bin__load__percentage">100%</div>
          <span>{savedSuggestedBin.message}</span>
          <Button
            variant="contained"
            color="error"
            sx={{ width: "40%", fontSize: "10px", marginTop: "1rem" }}
            onClick={reloadOnSuccessHandler}
          >
            Done
          </Button>
        </div>
      )}
      {cancelSuggestedBin && (
        <div className="cancal__suggested_bin">
          <header className="header__non_suggested_bins">
            <span className="header__seggested-bin">
              {" "}
              suggested is {`BIN ${suggestedBinByApi}`}
            </span>
            <span className="header__choosen-bin">
              chosen is {`BIN ${clickedBinUser.binNo}`}
            </span>
          </header>
          <TypographyHeading>
            Reason For cancelling suggested bin
          </TypographyHeading>
          <TypographyHeading>Write comment or select reason</TypographyHeading>
          <form
            className="form__cancel__suggested__bin"
            onSubmit={sumbitReasonHandler}
          >
            <select value={reason.reason} onChange={reasonHandler}>
              <option value="Space Issue">Space Issue</option>
              <option value="Loading Failure">Loading Failure</option>
              <option value="Error">Error</option>
            </select>
            <textarea rows="4" cols="20" onChange={textReasonHandler} />
            <div className="btn__err__sugestion">
              <button
                className="submit__rejection__suggestion"
                onClick={cancelHandlerError}
              >
                cancel
              </button>
              <button type="submit" className="submit__rejection__suggestion">
                submit
              </button>
            </div>
          </form>
        </div>
      )}
    </section>
  );
};

export default SelectionEditBin;
