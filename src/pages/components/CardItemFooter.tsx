import { Box, styled, Typography } from "@mui/material";
import React from "react";

const StyledFooterTitle = styled(Typography)({
  marginBottom: "8px",
  fontFamily: "Public Sans, sans-serif",
  fontWeight: "400",
  opacity: "0.48",
  fontSize: "0.75rem",
});
const StyledFooterValue = styled(Typography)({
  fontWeight: "600",
  fontFamily: "Public sans, sans-serif",
  fontSize: "1rem",
  lineHeight: "1.5",
});
const CardItemFooter = () => {
  return (
    <Box sx={{ display: "flex", alignItems: "flex-end" }}>
      <Box>
        <StyledFooterTitle variant="body1">Card Holder</StyledFooterTitle>
        <StyledFooterValue variant="body1">Milos Karaklajic</StyledFooterValue>
      </Box>
      <Box sx={{ marginLeft: "40px" }}>
        <StyledFooterTitle variant="body1">Valid Through</StyledFooterTitle>
        <StyledFooterValue variant="body1">02/25</StyledFooterValue>
      </Box>
    </Box>
  );
};

export default CardItemFooter;
