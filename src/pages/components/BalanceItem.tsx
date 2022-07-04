import { Card, CardContent, Typography } from "@mui/material";
import styled from "@emotion/styled";

import { Box } from "@mui/system";

const StyledCardContent = styled(CardContent)({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
});

const BalanceItem = ({ icon, title, amount }: any) => {
  return (
    <Box sx={{ flex: 1 }}>
      <Card sx={{ borderRadius: "12px" }}>
        <StyledCardContent>
          <Box sx={{ display: "flex", alignItems: "center" }}>
            {icon}
            <Box sx={{ display: "flex", flexDirection: "column" }}>
              <Typography
                variant="subtitle1"
                sx={{
                  fontFamily: "Public sans, sans-serif",
                  fontWeight: "700",
                  fontSize: "1.174rem",
                }}
              >
                {title}
              </Typography>

              <Typography
                variant="subtitle2"
                sx={{
                  fontFamily: "Public sans, sans-serif",
                  fontWeight: "700",
                  fontSize: "2.174rem",
                }}
              >
                {amount}
              </Typography>
            </Box>
          </Box>
        </StyledCardContent>
      </Card>
    </Box>
  );
};

export default BalanceItem;
