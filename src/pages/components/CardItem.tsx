import { useState } from "react";

import { IconButton, Typography } from "@mui/material";
import { Box, styled } from "@mui/system";
import CardImage from "../../assets/images/bg_card.png";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import CardItemActionMenu from "./CardItemActionMenu";

import MasterCardImage from "../../assets/images/masterCardImg.svg";
import CardItemFooter from "./CardItemFooter";

const StyledBox = styled(Box)({
  marginLeft: "24px",
  borderRadius: "16px",
  position: "relative",
  padding: "24px",
  height: "260px",
  backgroundSize: "cover",
  backgroundRepeat: "no-repeat",
  backgroundImage: `url(${CardImage})`,
  color: "rgb(255, 255, 255)",
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
});

const StyledBalance = styled(Typography)({
  fontSize: "2rem",
  margin: "0px",
  lineHeight: "1.5",
  fontFamily: "Public Sans, sans-serif",
  fontWeight: "700",
});
const StyledBalanceTitle = styled(Typography)({
  margin: "0px 0px 16px",
  fontWeight: "600",
  lineHeight: "1.58",
  fontSize: "0.87rem",
  fontFamily: "Public Sans, sans-serif",
  opacity: "0.7",
});

const StyledCardNumber = styled(Typography)({
  fontWeight: "600",
  lineHeight: "1.5",
  fontSize: "1rem",
  fontFamily: "Public Sans, sans-serif",
  textAlign: "right",
  marginLeft: "8px",
});

const CardItem = () => {
  const [hide, setHide] = useState<boolean>(true);

  const handleToggleHide = () => {
    setHide(!hide);
  };
  const amount = "$88,423.44";
  return (
    <StyledBox>
      <CardItemActionMenu />

      <Box>
        <StyledBalanceTitle variant="body1">Current Balance</StyledBalanceTitle>
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <StyledBalance variant="body1">
            {hide ? "***********" : amount}
          </StyledBalance>
          <IconButton onClick={handleToggleHide}>
            {hide ? <VisibilityIcon /> : <VisibilityOffIcon />}
          </IconButton>
        </Box>
      </Box>
      <Box
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "flex-end",
        }}
      >
        <span>
          <img src={MasterCardImage} alt="master card" />
        </span>
        <StyledCardNumber variant="body1">**** **** **** 8864</StyledCardNumber>
      </Box>

      <CardItemFooter />
    </StyledBox>
  );
};

export default CardItem;
