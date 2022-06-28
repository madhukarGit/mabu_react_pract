import { Box, Button, Card, styled, Switch, Typography } from "@mui/material";
import "./SelectionEditBin.css";
import BinGrain from "../../../assets/BinGrain_suggested.svg";
import BinGrainSVG from "../../bins/BinGrainSVG";
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
  "@global": {
    "*::-webkit-scrollbar": {
      width: "2px",
    },
  },
}));

const FormCard = styled("form")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  padding: "0 1.2rem",
  gap: "12px",
}));

const BiNCardMargin = styled("div")(({ theme }) => ({
  marginTop: "1rem",
  padding: "0 2rem",
}));

const TypographyHeading = styled(Typography)(({ theme }) => ({
  fontSize: "1.2rem",
  fontWeight: 700,
  marginBottom: "0.1rem",
  textTransform: "uppercase",
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
const SelectionBinImg = styled("img")(({ theme }) => ({
  height: "6rem",
  widows: "6rem",
  marginTop: "1rem",
}));

const SelectionEditBin = () => {
  return (
    <section className="edit__selection__bin_drawer">
      <ContainerEdit>
        <span>Manual</span>
        <Switch defaultChecked size="small" />
      </ContainerEdit>
      <SelectionBinEntry>
        <CardManualUserDetails>
          <TypographyHeading>RFID TICKET ID</TypographyHeading>
          <FormCard>
            <div className="form-labels-align__entry">
              <label className="form-label__entry">RFID Ticket ID:</label>
              <input type="email" required />
            </div>
            <div className="form-labels-align__entry">
              <label className="form-label__entry">Driver Name:</label>
              <input type="password" required />
            </div>
          </FormCard>
          <FormCard>
            <div className="form-labels-align__entry">
              <label className="form-label__entry">Truck No:</label>
              <input type="email" required />
            </div>
            <div className="form-labels-align__entry">
              <label className="form-label__entry">Grain:</label>
              <input type="password" required />
            </div>
          </FormCard>
          <FormCard>
            <div className="form-labels-align">
              <label className="form-label">Weight:</label>
              <input type="email" required />
            </div>
          </FormCard>
          <TypographyHeading>MANUAL SAMPLE TESTING</TypographyHeading>
          <FormCard>
            <div className="form-labels-align__entry">
              <label className="form-label__entry">Protien Level:</label>
              <input type="email" required />
            </div>
            <div className="form-labels-align__entry">
              <label className="form-label__entry">Moisture Level:</label>
              <input type="password" required />
            </div>
          </FormCard>
          <FormCard>
            <div className="form-labels-align__entry">
              <label className="form-label__entry">TW:</label>
              <input type="email" required />
            </div>
            <div className="form-labels-align__entry">
              <label className="form-label__entry">DHW:</label>
              <input type="password" required />
            </div>
          </FormCard>
          <TypographyHeading>TRUCk scaling consideration</TypographyHeading>
          <FormCard>
            <div className="form-labels-align__entry">
              <label className="form-label__entry">Protien Level:</label>
              <input type="email" required />
            </div>
            <div className="form-labels-align__entry">
              <label className="form-label__entry">Moisture Level:</label>
              <input type="password" required />
            </div>
          </FormCard>
          <FormCard>
            <div className="form-labels-align__entry">
              <label className="form-label__entry">TW:</label>
              <input type="email" required />
            </div>
            <div className="form-labels-align__entry">
              <label className="form-label__entry">DHW:</label>
              <input type="password" required />
            </div>
          </FormCard>
        </CardManualUserDetails>
      </SelectionBinEntry>
      <SelectionBinEntry>
        <BiNCardMargin>
          <TypographyHeading>Select Bin to load grain</TypographyHeading>
          <SectionBinGrain>
            <BinGrainSVG />
            <BinGrainSVG />
            <BinGrainSVG />
          </SectionBinGrain>
          <SectionBinGrain>
            <BinGrainSVG />
            <BinGrainSVG />
            <BinGrainSVG />
          </SectionBinGrain>
          <SectionBinGrain>
            <BinGrainSVG />
            <BinGrainSVG />
            <BinGrainSVG />
          </SectionBinGrain>
        </BiNCardMargin>
        <DivGroupButtons>
          <Button variant="outlined" sx={{ width: "7vw", fontSize: "10px" }}>
            Cancel
          </Button>
          <Button
            variant="contained"
            color="error"
            sx={{ width: "40%", fontSize: "10px" }}
          >
            Save & Load Bin
          </Button>
        </DivGroupButtons>
      </SelectionBinEntry>
    </section>
  );
};

export default SelectionEditBin;
