import {
  Avatar,
  Box,
  Button,
  Card,
  CardContent,
  Paper,
  styled,
  Switch,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import ArrowCircleLeftRoundedIcon from "@mui/icons-material/ArrowCircleLeftRounded";
import user from "../../../assets/download.png";
import binGrain from "../../../assets/BinSelectIcon.svg";

const ContainerEdit = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
}));

const Span = styled("span")(({ theme }) => ({
  fontSize: "0.8rem",
  fontWeight: 700,
}));

const SpanLight = styled("span")(({ theme }) => ({
  fontSize: "0.8rem",
  fontWeight: 400,
  marginRight: "1rem",
}));

const BoxHeader = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-start",
  marginBottom: "1rem",
}));

const TabularContent = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "flex-start",
  justifyContent: "center",
  gap: "1rem",
}));

const SelecteBin = styled("div")(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-start",
  justifyContent: "center",
}));

const DivMargin = styled("div")(({ theme }) => ({
  marginTop: "0.2rem",
  marginLeft: "2rem",
}));

const DivBins = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  gap: "10px",
}));

const LoadBin = styled("div")(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  gap: "4px",
}));

const DivGroupButtons = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  gap: "4px",
  [theme.breakpoints.down("md")]: {
    flexDirection: "column",
  },
}));
const IncomingTruck = () => {
  return (
    <Box flex={4}>
      <ContainerEdit>
        <Span>Manual</Span>
        <Switch defaultChecked size="small" />
      </ContainerEdit>
      <Card>
        <CardContent>
          <BoxHeader>
            <Typography
              sx={{ fontWeight: 700, fontSize: "1rem", marginRight: "1rem" }}
            >
              RFID TICKET ID
            </Typography>
            <Typography sx={{ fontWeight: 400, fontSize: "0.8rem" }}>
              #1USNO.1
            </Typography>
          </BoxHeader>
          <TabularContent>
            <Avatar
              alt="Remy Sharp"
              src={user}
              sx={{ width: 30, height: 30 }}
            />
            <table>
              <tr>
                <td>
                  <SpanLight>John Deo</SpanLight>
                </td>
                <td>
                  <SpanLight>Truck NO {"-UK-AB1234"}</SpanLight>
                </td>
              </tr>
              <tr>
                <td>
                  <SpanLight>Grain:</SpanLight>
                </td>
                <td>
                  <SpanLight>Wheat</SpanLight>
                </td>
              </tr>
              <tr>
                <td>
                  <SpanLight>Weight:</SpanLight>
                </td>
                <td>
                  <SpanLight>50 Ton Scaling Time</SpanLight>
                </td>
              </tr>
            </table>
          </TabularContent>
        </CardContent>
        <Card>
          <CardContent>
            <Typography
              sx={{
                fontSize: "1rem",
                textTransform: "uppercase",
                fontWeight: 500,
                marginBottom: "0.4rem",
              }}
            >
              Sample Testing
            </Typography>
            <Span>Auto:</Span>
            <SpanLight>BIN 03</SpanLight>
            <DivMargin>
              <table>
                <tr>
                  <td>
                    <SpanLight>14% protien</SpanLight>
                  </td>
                  <td>
                    <SpanLight>18% mositure</SpanLight>
                  </td>
                </tr>
                <tr>
                  <td>
                    <SpanLight>5.2 TW</SpanLight>
                  </td>
                  <td>
                    <SpanLight>22 DHW</SpanLight>
                  </td>
                </tr>
              </table>
            </DivMargin>
          </CardContent>
          <CardContent>
            <Typography
              sx={{
                fontSize: "0.8rem",
                textTransform: "uppercase",
                fontWeight: 700,
              }}
            >
              Truck Scaling Consideration
            </Typography>
            <div>
              <Span>Auto:</Span>
              <SpanLight>BIN 03</SpanLight>
            </div>
            <DivMargin>
              <table>
                <tr>
                  <td>
                    <SpanLight>14% protien</SpanLight>
                  </td>
                  <td>
                    <SpanLight>18% mositure</SpanLight>
                  </td>
                </tr>
                <tr>
                  <td>
                    <SpanLight>5.2 TW</SpanLight>
                  </td>
                  <td>
                    <SpanLight>22 DHW</SpanLight>
                  </td>
                </tr>
              </table>
            </DivMargin>
          </CardContent>
        </Card>
      </Card>
      <Card>
        <CardContent>
          <SelecteBin>
            <Span>SELECT BIN TO LOAD GRAIN</Span>
            <SpanLight>BIN 05: space available...</SpanLight>
          </SelecteBin>
          <LoadBin>
            <DivBins>
              <img src={binGrain} alt="grain1" />
              <img src={binGrain} alt="grain1" />
              <img src={binGrain} alt="grain1" />
            </DivBins>
            <DivBins>
              <img src={binGrain} alt="grain1" />
              <img src={binGrain} alt="grain1" />
              <img src={binGrain} alt="grain1" />
            </DivBins>
            <DivBins>
              <img src={binGrain} alt="grain1" />
              <img src={binGrain} alt="grain1" />
              <img src={binGrain} alt="grain1" />
            </DivBins>

            <DivGroupButtons>
              <Button
                variant="outlined"
                sx={{ width: "7vw", fontSize: "10px" }}
              >
                Cancel
              </Button>
              <Button
                variant="contained"
                color="error"
                sx={{ width: "100%", fontSize: "10px" }}
              >
                Save & Load Bin
              </Button>
            </DivGroupButtons>
          </LoadBin>
        </CardContent>
      </Card>
    </Box>
  );
};

export default IncomingTruck;
