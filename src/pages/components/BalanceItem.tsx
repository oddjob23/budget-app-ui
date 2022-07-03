import { Card, CardContent, Grid, Typography } from "@mui/material";
import styled from "@emotion/styled";

import { Box } from "@mui/system";
import React from "react";

const StyledCardContent = styled(CardContent)({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
});

const BalanceItem = ({ icon, title, amount }: any) => {
  return (
    <Grid item xs={12} sm={6} md={3}>
      <Card sx={{ borderRadius: "12px" }}>
        <StyledCardContent>
          <Box sx={{ display: "flex", alignItems: "center" }}>
            {/* <PointOfSaleIcon
          sx={{
            marginRight: "1.2rem",
            width: "3.2rem",
            height: "3.2rem",
          }}
        /> */}
            {icon}
            <Box sx={{ display: "flex", flexDirection: "column" }}>
              <Typography variant="subtitle1">{title}</Typography>

              <Typography variant="subtitle2" sx={{ fontSize: "24px" }}>
                {amount}
              </Typography>
            </Box>
          </Box>
        </StyledCardContent>
      </Card>
    </Grid>
  );
};

export default BalanceItem;
