import { Card, CardContent, Typography } from "@mui/material";

import { Box, styled } from "@mui/system";
import ArrowDownLeft from "../../components/icons/ArrowDownLeft";
import ArrowTrendUp from "../../components/icons/ArrowTrendUp";
import AreaChartSmall from "../../components/charts/AreaChartSmall";
import ArrowUpRight from "../../components/icons/ArrowUpRight";

const StyledCard = styled(Card)(({ theme, color }) => {
  return {
    backgroundImage: "none",
    overflow: "hidden",
    position: "relative",
    borderRadius: "16px",
    zIndex: "0",
    width: "100%",
    boxShadow: "none",
    color: theme.palette.text[color!],
    backgroundColor: theme.palette.background[color!],
    transition: "box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms",
  };
});

const StyledArrow = styled("div")(({ theme, color }) => {
  // @ts-ignore
  return {
    width: "48px",
    height: "48px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: "50%",
    position: "absolute",
    top: "24px",
    right: "24px",

    //@ts-ignore
    backgroundColor: theme.palette.icon.paper[color],
    //@ts-ignore
    color: theme.palette.icon.text[color],
  };
});

const StyledCardContent = styled(CardContent)({
  display: "flex",
  flexDirection: "column",
  padding: "24px",
});
const StyledTrend = styled(Box)({
  display: "flex",
  alignItems: "center",
  flexFlow: "row wrap",
  margin: "8px 0px 0px",
});
const StyledAmount = styled(Typography)({
  fontWeight: "700",
  fontFamily: "Public Sans, sans-serif",
  lineHeight: "1.56",
  fontSize: "2rem",
  margin: "8px 0px 0px",
});

interface IBalanceItemProps {
  title: string;
  amount: number;
  currency: string;
  percentage: number;
  color: string;
}
const BalanceItem = ({
  color,
  currency,
  title,
  amount,
  percentage,
}: IBalanceItemProps) => {
  return (
    <StyledCard color={color}>
      <StyledArrow color={color}>
        {title === "Income" ? <ArrowDownLeft /> : <ArrowUpRight />}
      </StyledArrow>
      <StyledCardContent>
        <Typography
          variant="body1"
          sx={{
            margin: "0px",
            fontWeight: "600",
            lineHeight: "1.57",
            fontSize: "0.875rem",
            fontFamily: "Public Sans, sans-serif",
          }}
        >
          {title}
        </Typography>
        <StyledAmount variant="body1">
          {currency}
          {amount}
        </StyledAmount>
        <StyledTrend>
          <ArrowTrendUp width={20} height={20} />
          <Typography variant="subtitle2">
            {percentage > 0 ? "+" : ""} {percentage}%
          </Typography>
          <Typography variant="body2">&nbsp;than last month</Typography>
        </StyledTrend>
      </StyledCardContent>
      <Box sx={{ minHeight: "120px", marginBottom: "-27px" }}>
        <AreaChartSmall color={color} />
      </Box>
    </StyledCard>
  );
};

BalanceItem.defaultProps = {
  title: "Income",
  percentage: 2.6,
  amount: 154.442,
  color: "green",
  currency: "$",
};

export default BalanceItem;
