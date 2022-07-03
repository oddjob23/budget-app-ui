import styled from "@emotion/styled";
import { Box, Card, CardContent, Grid, Typography } from "@mui/material";

import AddBusinessIcon from "@mui/icons-material/AddBusiness";
import PointOfSaleIcon from "@mui/icons-material/PointOfSale";
import AccountBalanceWalletIcon from "@mui/icons-material/AccountBalanceWallet";
import BalanceItem from "./BalanceItem";
const StyledCardContent = styled(CardContent)({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
});
const BalanceSection = () => {
  return (
    <Grid
      container
      spacing={12}
      direction="row"
      alignItems="center"
      justifyContent="center"
    >
      <BalanceItem
        icon={
          <AddBusinessIcon
            sx={{
              marginRight: "1.2rem",
              width: "3.2rem",
              height: "3.2rem",
            }}
          />
        }
        title={"Income"}
        amount={"187.5K"}
      />
      <BalanceItem
        icon={
          <PointOfSaleIcon
            sx={{
              marginRight: "1.2rem",
              width: "3.2rem",
              height: "3.2rem",
            }}
          />
        }
        title={"Outcome"}
        amount={"56.5K"}
      />

      <BalanceItem
        icon={
          <AccountBalanceWalletIcon
            sx={{
              marginRight: "1.2rem",
              width: "3.2rem",
              height: "3.2rem",
            }}
          />
        }
        title={"Balance"}
        amount={"117.5K"}
      />
    </Grid>
  );
};

// <a href="https://www.flaticon.com/free-icons/income" title="income icons">Income icons created by Freepik - Flaticon</a>
// <a href="https://www.flaticon.com/free-icons/wallet" title="wallet icons">Wallet icons created by Good Ware - Flaticon</a>
// <a href="https://www.flaticon.com/free-icons/expense" title="expense icons">Expense icons created by surang - Flaticon</a>

export default BalanceSection;
