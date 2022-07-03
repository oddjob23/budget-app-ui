import { ChevronRight } from "@mui/icons-material";
import {
  Box,
  Button,
  Collapse,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
} from "@mui/material";
import React from "react";

const SubMenu = ({ element }: any) => {
  const [openMenu, setOpenMenu] = React.useState(false);
  const handleSubmenuOpen = () => {
    setOpenMenu(!openMenu);
  };
  return (
    <ListItem
      sx={{
        display: "block",
        position: "relative",
        textDecoration: "none",
        width: "100%",
        textAlign: "left",
        marginBottom: "4px",
        padding: "0px 16px",
      }}
    >
      <Button
        startIcon={element.icon}
        endIcon={<ChevronRight sx={{ marginLeft: "auto" }} />}
        variant="text"
        onClick={handleSubmenuOpen}
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
        <Box sx={{ width: "100%", textAlign: "left" }}>{element.name}</Box>
      </Button>
      <Collapse in={openMenu} timeout="auto" unmountOnExit>
        <List component="ul">
          {element.subMenu.map((item: any) => {
            return (
              <ListItemButton sx={{ p: 0 }} key={item.href}>
                <ListItemText
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
                    padding: "9px 48px",
                    borderRadius: "8px",
                    transition:
                      "background-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms, box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms, border-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms, color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms",
                  }}
                >
                  {item.name}
                </ListItemText>
              </ListItemButton>
            );
          })}
        </List>
      </Collapse>
    </ListItem>
  );
};

export default SubMenu;
