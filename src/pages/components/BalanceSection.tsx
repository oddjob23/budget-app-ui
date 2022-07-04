import { Grid } from "@mui/material";

import AddBusinessIcon from "@mui/icons-material/AddBusiness";
import PointOfSaleIcon from "@mui/icons-material/PointOfSale";
import AccountBalanceWalletIcon from "@mui/icons-material/AccountBalanceWallet";
import BalanceItem from "./BalanceItem";
import { Box } from "@mui/system";

const BalanceSection = () => {
  return (
    // <Grid container direction="row" alignItems="center">
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        gap: "2rem",
      }}
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
    </Box>

    // </Grid>
  );
};

export default BalanceSection;
