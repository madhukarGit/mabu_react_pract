import styled from "@emotion/styled";
import {
  Table,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
  useMediaQuery,
} from "@mui/material";
import React from "react";
import { useDispatch, useSelector } from "react-redux";

import "./BinSelectionLevelTable.css";

const Span = styled("span")(({ theme }) => ({
  fontSize: "1.2rem",
  fontWeight: 700,
  padding: "0 1rem",
  [theme.breakpoints.down("lg")]: {
    fontSize: "0.7rem",
  },
}));

const TypoSpan = styled(Typography)(({ theme }) => ({
  padding: "0 4rem",
  marginTop: "2rem",
  fontWeight: 700,
  fontSize: "1.4rem",
  letterSpacing: "1px",
}));

const SpanLight = styled("span")(({ theme }) => ({
  fontSize: "1.4rem",
  fontWeight: 700,
  padding: "0 1rem",
}));

const TableRowContainer = styled(TableRow)(({ theme }) => ({
  height: "9px",
}));

const BinSelectionLevelTable = () => {
  const selection_api_data = useSelector(
    (state) => state.selection.selectionData
  );

  const matches = useMediaQuery("(max-width:1300px)");

  const bin_details_interface = selection_api_data.data;

  return (
    <React.Fragment>
      <TypoSpan>Bin Allocation Criteria</TypoSpan>
      <section className="selection__table">
        <TableContainer>
          {bin_details_interface && (
            <>
              <Table>
                <TableHead>
                  <TableRowContainer>
                    <TableCell
                      sx={{
                        fontWeight: 600,
                        fontSize: "1.2rem",
                        width: "3rem",
                      }}
                    >
                      Type
                    </TableCell>
                    <TableCell align="center">
                      <Span>{bin_details_interface[0].bin_label}</Span>
                    </TableCell>
                    <TableCell align="center">
                      <Span>{bin_details_interface[1].bin_label}</Span>
                    </TableCell>
                    <TableCell align="center">
                      <Span>{bin_details_interface[2].bin_label}</Span>
                    </TableCell>
                    <TableCell align="center">
                      <Span>{bin_details_interface[3].bin_label}</Span>
                    </TableCell>
                    <TableCell align="center">
                      <Span>{bin_details_interface[4].bin_label}</Span>
                    </TableCell>
                    <TableCell align="center">
                      <Span>{bin_details_interface[5].bin_label}</Span>
                    </TableCell>
                    <TableCell align="center">
                      <Span>{bin_details_interface[6].bin_label}</Span>
                    </TableCell>
                    <TableCell align="center">
                      <Span>{bin_details_interface[7].bin_label}</Span>
                    </TableCell>
                    <TableCell align="right">
                      <Span>{bin_details_interface[8].bin_label}</Span>
                    </TableCell>
                  </TableRowContainer>
                </TableHead>
                <TableHead>
                  <TableRowContainer>
                    <TableCell
                      sx={{
                        fontWeight: 600,
                        fontSize: "1.2rem",
                        width: "3rem",
                      }}
                    >
                      Protien Level
                    </TableCell>

                    <TableCell align="center">
                      <SpanLight>
                        {`${
                          bin_details_interface[0].bin_rule_details
                            .bin_allocation_rule_min_val || "na"
                        } - ${
                          bin_details_interface[0].bin_rule_details
                            .bin_allocation_rule_max_val || "na"
                        }`}
                      </SpanLight>
                    </TableCell>
                    <TableCell align="right">
                      <Span>{`${
                        bin_details_interface[1].bin_rule_details
                          .bin_allocation_rule_min_val || "na"
                      } - ${
                        bin_details_interface[1].bin_rule_details
                          .bin_allocation_rule_max_val || "na"
                      }`}</Span>
                    </TableCell>
                    <TableCell align="right">
                      <Span>{`${
                        bin_details_interface[2].bin_rule_details
                          .bin_allocation_rule_min_val || "na"
                      } - ${
                        bin_details_interface[2].bin_rule_details
                          .bin_allocation_rule_max_val || "na"
                      }`}</Span>
                    </TableCell>
                    <TableCell align="right">
                      <Span>{`${
                        bin_details_interface[3].bin_rule_details
                          .bin_allocation_rule_min_val || "na"
                      } - ${
                        bin_details_interface[3].bin_rule_details
                          .bin_allocation_rule_max_val || "na"
                      }`}</Span>
                    </TableCell>
                    <TableCell align="right">
                      <Span>{`${
                        bin_details_interface[4].bin_rule_details
                          .bin_allocation_rule_min_val || "na"
                      } - ${
                        bin_details_interface[4].bin_rule_details
                          .bin_allocation_rule_max_val || "na"
                      }`}</Span>
                    </TableCell>
                    <TableCell align="right">
                      <Span>{`${
                        bin_details_interface[5].bin_rule_details
                          .bin_allocation_rule_min_val || "na"
                      } - ${
                        bin_details_interface[5].bin_rule_details
                          .bin_allocation_rule_max_val || "na"
                      }`}</Span>
                    </TableCell>
                    <TableCell align="right">
                      <Span>{`${
                        bin_details_interface[6].bin_rule_details
                          .bin_allocation_rule_min_val || "na"
                      } - ${
                        bin_details_interface[6].bin_rule_details
                          .bin_allocation_rule_max_val || "na"
                      }`}</Span>
                    </TableCell>
                    <TableCell align="right">
                      <Span>{`${
                        bin_details_interface[7].bin_rule_details
                          .bin_allocation_rule_min_val || "na"
                      } - ${
                        bin_details_interface[7].bin_rule_details
                          .bin_allocation_rule_max_val || "na"
                      }`}</Span>
                    </TableCell>
                    <TableCell align="right">
                      <Span>{`${
                        bin_details_interface[8].bin_rule_details
                          .bin_allocation_rule_min_val || "na"
                      } - ${
                        bin_details_interface[8].bin_rule_details
                          .bin_allocation_rule_max_val || "na"
                      }`}</Span>
                    </TableCell>
                  </TableRowContainer>
                </TableHead>
                {/* <TableHead>
              <TableRowContainer>
                <TableCell
                  sx={{ fontWeight: 600, fontSize: "1.2rem", width: "3rem" }}
                >
                  Test Weight
                </TableCell>

                <TableCell align="center">
                  <SpanLight>10.98-13.59</SpanLight>
                </TableCell>
                <TableCell align="right">
                  <SpanLight>{"<14.54"}</SpanLight>
                </TableCell>
                <TableCell align="right">
                  <SpanLight>{"<12.98"}</SpanLight>
                </TableCell>
                <TableCell align="right">
                  <SpanLight>{"<12.98"}</SpanLight>
                </TableCell>
                <TableCell align="right">
                  <SpanLight>{"<12.98"}</SpanLight>
                </TableCell>
                <TableCell align="right">
                  <SpanLight>{"<12.98"}</SpanLight>
                </TableCell>
                <TableCell align="right">
                  <SpanLight>{"<1.28"}</SpanLight>
                </TableCell>
                <TableCell align="right">
                  <SpanLight>{"<12.98"}</SpanLight>
                </TableCell>
                <TableCell align="right">
                  <SpanLight>{">32.92"}</SpanLight>
                </TableCell>
              </TableRowContainer>
            </TableHead> */}
              </Table>
            </>
          )}
        </TableContainer>
      </section>
    </React.Fragment>
  );
};

export default BinSelectionLevelTable;
