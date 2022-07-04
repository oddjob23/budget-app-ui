import { Box, Grid } from "@mui/material";

import Header from "./components/Header";
import BalanceSection from "./components/BalanceSection";
import BarChartHome from "./components/BarChartHome";

const HomePage = () => {
  return (
    <Grid container>
      <Grid item xs={12}>
        <Header />
      </Grid>
      <Grid item xs={12} md={12}>
        <BalanceSection />
      </Grid>
      <Grid item xs={12} md={8}>
        <Box sx={{ marginTop: "60px" }}>
          <BarChartHome />
        </Box>
      </Grid>
    </Grid>
  );
};

export default HomePage;
