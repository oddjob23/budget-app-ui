import * as React from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import UnfoldMoreIcon from "@mui/icons-material/UnfoldMore";

import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";
import { Box, Typography } from "@mui/material";

const options = ["US", "EU"];

export default function SelectedMenu() {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const [selectedIndex, setSelectedIndex] = React.useState(1);
  const open = Boolean(anchorEl);
  const handleClickListItem = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuItemClick = (
    event: React.MouseEvent<HTMLElement>,
    index: number
  ) => {
    setSelectedIndex(index);
    setAnchorEl(null);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Box>
      <List
        component="nav"
        aria-label="Device settings"
        sx={{ padding: "0px" }}
      >
        <ListItem
          button
          id="lock-button"
          aria-haspopup="listbox"
          aria-controls="lock-menu"
          aria-label="EU region"
          aria-expanded={open ? "true" : undefined}
          onClick={handleClickListItem}
          sx={{ padding: "11px 24px" }}
        >
          <Box>
            <Typography
              variant="h6"
              sx={{
                fontWeight: "500",
                lineHeight: "1.75",
                fontFamily: "Inter, sans-serif",
                fontSize: "1rem",
              }}
            >
              Region: {options[selectedIndex]}
            </Typography>
            <Typography
              variant="caption"
              display="block"
              sx={{
                lineHeight: "1.57",
                fontWeight: "400",
                fontSize: "0.875rem",
                color: "rgb(156, 163, 175)",
              }}
            >
              Select Other Region
            </Typography>
          </Box>
          <Box>
            <UnfoldMoreIcon
              sx={{ color: "rgb(156, 163, 175)", marginLeft: "16px" }}
            />
          </Box>
        </ListItem>
      </List>
      <Menu
        id="lock-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "lock-button",
          role: "listbox",
        }}
      >
        {options.map((option, index) => (
          <MenuItem
            key={option}
            // disabled={index === 0}
            selected={index === selectedIndex}
            onClick={(event) => handleMenuItemClick(event, index)}
          >
            {option}
          </MenuItem>
        ))}
      </Menu>
    </Box>
  );
}
