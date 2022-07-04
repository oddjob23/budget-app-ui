import { Container } from "@mui/material";
import { Box, styled } from "@mui/system";
import { Outlet } from "react-router-dom";
// import Navbar from "./Navbar";

const drawerWidth = 280;
const SyledMainContent = styled("div")`
  height: "100vh";
`;
const MainContent = () => {
  return (
    <SyledMainContent
      sx={{
        flexGrow: 1,
        marginLeft: {
          xs: "0px",
          lg: `${drawerWidth}px`,
        },
        padding: "16px 0px",
      }}
    >
      {/* <Navbar setSidebarOpen={setSidebarOpen} open={open} /> */}
      <Box>
        <Container maxWidth="xl">
          <Outlet />
        </Container>
      </Box>
    </SyledMainContent>
  );
};

export default MainContent;
