import "simplebar/dist/simplebar.min.css";
import { styled } from "@mui/material/styles";
import {
  Box,
  Button,
  Divider,
  Drawer,
  List,
  ListItem,
  ListSubheader,
  Typography,
} from "@mui/material";

import HomeIcon from "@mui/icons-material/Home";
import SubMenu from "./menu/SubMenu";
import SimpleBar from "simplebar-react";

const DrawerHeader = styled("div")(({ theme }: any) => ({
  display: "flex",
  alignItems: "center",
  padding: theme.spacing(0, 1),
  ...theme.mixins.toolbar,
  justifyContent: "flex-end",
}));

const menuList = [
  {
    title: "general",
    items: [
      {
        name: "Overview",
        hasSubmenu: false,
        icon: <HomeIcon />,
        href: "/overview",
      },
    ],
  },
];
const Sidebar = ({ sidebarOpen, setSidebarOpen }: any) => {
  const handleDrawerToggle = () => {
    setSidebarOpen(!sidebarOpen);
  };
  const drawer = (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        height: "100%",
        overflowY: "hidden",
        backgroundColor: `#111827`,
      }}
    >
      <SimpleBar style={{ maxHeight: "calc(100% - 54px)" }}>
        <DrawerHeader
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "start",
            alignItems: "start",
            padding: "24px 24px 0px 24px",
          }}
        >
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              width: "100%",
            }}
          >
            <Typography variant="h6" sx={{ color: "white" }}>
              Logo
            </Typography>
          </Box>
        </DrawerHeader>

        <Divider
          sx={{
            margin: "24px 0px",
            borderWidth: "0px 0px thin",
            borderColor: "rgb(45,55,72)",
          }}
        />
        <List>
          {menuList.map((item) => (
            <Box key={item.title} sx={{ marginBottom: "16px" }}>
              <ListSubheader
                sx={{
                  color: "rgb(107,114,128)",
                  fontSize: "0.75rem",
                  lineHeight: "2.5",
                  marginLeft: "32px",
                  textTransform: "uppercase",
                  backgroundColor: "transparent",
                  fontWeight: "700",
                  paddingLeft: 0,
                }}
              >
                {item.title}
              </ListSubheader>
              {item.items.map((el) => {
                if (el.hasSubmenu === false) {
                  return (
                    <ListItem
                      key={el.name}
                      sx={{
                        display: "flex",
                        justifyContent: "flex-start",
                        alignItems: "center",
                        position: "relative",
                        textDecoration: "none",
                        width: "100%",
                        textAlign: "left",
                        marginBottom: "4px",
                        padding: "0px 16px",
                      }}
                    >
                      <Button
                        startIcon={el.icon}
                        variant="text"
                        sx={{
                          color: "rgb(209, 213, 219)",
                          "&:hover": {
                            backgroundColor: "rgba(255, 255, 255, 0.08)",
                          },
                          textTransform: "none",

                          backgroundColor: "transparent",
                          outline: "0px",
                          margin: "0px",
                          display: "inline-flex",
                          width: "100%",
                          justifyContent: "start",
                          padding: "9px 24px",
                          borderRadius: "8px",
                          transition:
                            "background-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms, box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms, border-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms, color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms",
                        }}
                      >
                        {el.name}
                      </Button>
                    </ListItem>
                  );
                } else {
                  return <SubMenu element={el} key={el.name} />;
                }
              })}
            </Box>
          ))}
        </List>
      </SimpleBar>
    </Box>
  );
  return (
    <Box>
      <Drawer
        variant="persistent"
        anchor="left"
        open={true}
        sx={{
          width: "280px",
          flexShrink: 0,
          height: "100%",
          overflowY: "hidden",
          display: { xs: "none", lg: "block" },
          "& .MuiDrawer-paper": {
            width: "280px",
            boxSizing: "border-box",
            borderRightColor: "rgb(45,55,72)",
          },
        }}
      >
        {drawer}
      </Drawer>
      <Drawer
        variant="temporary"
        anchor="left"
        open={sidebarOpen}
        onClose={handleDrawerToggle}
        sx={{
          width: "280px",
          flexShrink: 0,
          height: "100%",
          overflowY: "hidden",
          display: { xs: "block", lg: "none" },
          backgroundColor: `rgb(17, 24, 39)`,
          "& .MuiDrawer-paper": {
            width: "280px",
            boxSizing: "border-box",
            borderRightColor: "rgb(45,55,72)",
          },
        }}
      >
        {drawer}
      </Drawer>
    </Box>
  );
};

export default Sidebar;
