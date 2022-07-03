import { Box } from "@mui/material";
import { useState } from "react";
import Sidebar from "./Sidebar";
import MainContent from "./Main";
const Layout = () => {
  const [sidebarOpen, setSidebarOpen] = useState<boolean>(false);
  return (
    <Box>
      <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
      <MainContent open={sidebarOpen} setSidebarOpen={setSidebarOpen} />
    </Box>
  );
};

export default Layout;
