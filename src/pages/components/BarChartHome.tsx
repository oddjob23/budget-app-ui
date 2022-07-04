import { Card, CardContent, CardHeader, Grid, styled } from "@mui/material";
import React from "react";
import BarChart from "./BarChart";

const StyledCardHeader = styled(CardHeader)(() => {
  return {
    display: "flex",
    alignItems: "center",
    padding: "24px 24px 0px",
    "& 	.MuiCardHeader-title": {
      margin: "0px",
      fontWeight: "700",
      lineHeight: "1.55",
      fontFamily: "Public Sans, sans-serif",
      display: "block",
      fontSize: "1.125rem",
    },
    "& .MuiCardHeader-subheader": {
      fontFamily: "Public Sans, sans-serif",
      fontSize: "0.875rem",
      fontWeight: "400",
      lineHeight: "1.58",
      margin: "4px 0px 0px",
    },
  };
});

const BarChartHome = () => {
  return (
    <Grid container direction="row" alignItems="center">
      <Grid item xs={12}>
        <Card sx={{ borderRadius: "12px" }}>
          <StyledCardHeader
            title="Balance Statistics"
            subheader="(+43% Income | +12%Expense) than last year"
          />
          <CardContent>
            <BarChart />
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
};

export default BarChartHome;
