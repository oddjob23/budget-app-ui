import { useContext } from "react";

import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import { Box, useTheme } from "@mui/material";

import { ColorModeContext } from "../../App";
import LightbulbIcon from "@mui/icons-material/Lightbulb";
import { DarkMode } from "@mui/icons-material";
import AccountMenu from "./menu/AccountMenu";
const drawerWidth = 280;

const Navbar = ({ setSidebarOpen, open }: any) => {
  const theme = useTheme();

  const colorMode = useContext(ColorModeContext);
  const openSidebar = () => {
    setSidebarOpen(!open);
  };

  return (
    <AppBar
      position="fixed"
      sx={{
        boxShadow: `rgb(100 116 139 / 12%) 0px 1px 4px`,
        flexGrow: 1,
        backgroundColor: `${theme.palette.background.paper}`,
        left: {
          xs: "0px",
          lg: `${drawerWidth}px`,
        },
        width: {
          xs: "100%",
          lg: `calc(100% - ${drawerWidth}px)`,
        },
      }}
    >
      <Toolbar
        sx={{
          backgroundColor: `${theme.palette.background.paper}`,
          minHeight: "64px",
          display: "flex",
          alignItems: "center",
        }}
      >
        <IconButton
          size="large"
          edge="start"
          color="inherit"
          aria-label="menu"
          sx={{
            mr: 2,
            display: {
              xs: "block",
              lg: "none",
            },
          }}
          onClick={openSidebar}
        >
          <MenuIcon />
        </IconButton>

        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "flex-end",
            marginLeft: "auto",
            color: theme.palette.text.primary,
          }}
        >
          <IconButton sx={{ ml: 1 }} onClick={colorMode.toggleColorMode}>
            {theme.palette.mode === "dark" ? <LightbulbIcon /> : <DarkMode />}
          </IconButton>
          <AccountMenu />
        </Box>
      </Toolbar>
    </AppBar>
  );
};
export default Navbar;
