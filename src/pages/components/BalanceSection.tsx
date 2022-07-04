import { Grid } from "@mui/material";

import BalanceItem from "./BalanceItem";

const BalanceSection = () => {
  return (
    <Grid container>
      <Grid item xs={12} md={7}>
        <Grid container spacing={3}>
          <Grid item xs={12} md={6}>
            <BalanceItem color="green" />
          </Grid>
          <Grid item xs={12} md={6}>
            <BalanceItem
              color="yellow"
              title="Expenses"
              amount={123.411}
              percentage={-0.4}
            />
          </Grid>
        </Grid>
      </Grid>
      <Grid item xs={12} md={5}>
        <h2>test 2</h2>
      </Grid>
    </Grid>
  );
};

export default BalanceSection;
