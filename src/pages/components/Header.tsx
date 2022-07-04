import React from "react";
import Menu, { MenuProps } from "@mui/material/Menu";
import { Box, Typography } from "@mui/material";
import { styled, alpha } from "@mui/material/styles";
import MenuItem from "@mui/material/MenuItem";
import Button from "@mui/material/Button";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

const StyledMenu = styled((props: MenuProps) => (
  <Menu
    elevation={0}
    anchorOrigin={{
      vertical: "bottom",
      horizontal: "right",
    }}
    transformOrigin={{
      vertical: "top",
      horizontal: "right",
    }}
    {...props}
  />
))(({ theme }) => ({
  "& .MuiPaper-root": {
    borderRadius: 6,
    marginTop: theme.spacing(1),
    minWidth: 180,
    color:
      theme.palette.mode === "light"
        ? "rgb(55, 65, 81)"
        : theme.palette.grey[300],
    boxShadow:
      "rgb(255, 255, 255) 0px 0px 0px 0px, rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px",
    "& .MuiMenu-list": {
      padding: "4px 0",
    },
    "& .MuiMenuItem-root": {
      "& .MuiSvgIcon-root": {
        fontSize: 18,
        color: theme.palette.text.secondary,
        marginRight: theme.spacing(1.5),
      },
      "&:active": {
        backgroundColor: alpha(
          theme.palette.primary.main,
          theme.palette.action.selectedOpacity
        ),
      },
    },
  },
}));
const StyledHeader = styled("header")({
  display: "flex",
  alignItems: "center",
  marginBottom: "40px",
});
const Header = () => {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <StyledHeader>
      <Typography
        variant="h5"
        sx={{ fontWeight: "600", letterSpacing: "0.08rem" }}
      >
        Overview
      </Typography>
      <Box sx={{ marginLeft: "auto" }}>
        <Button
          id="dropdown-menu-button"
          aria-controls={open ? "dropdown-menu-button" : undefined}
          aria-haspopup="true"
          aria-expanded={open ? "true" : undefined}
          variant="contained"
          disableElevation
          onClick={handleClick}
          endIcon={<KeyboardArrowDownIcon />}
          sx={{ textTransform: "none" }}
        >
          Sort by: All Time
        </Button>
        <StyledMenu
          id="demo-customized-menu"
          MenuListProps={{
            "aria-labelledby": "dropdown-menu-button",
          }}
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
        >
          <MenuItem onClick={handleClose} disableRipple>
            All Time
          </MenuItem>
          <MenuItem onClick={handleClose} disableRipple>
            Monthly
          </MenuItem>
          <MenuItem onClick={handleClose} disableRipple>
            Weekly
          </MenuItem>
          <MenuItem onClick={handleClose} disableRipple>
            Daily
          </MenuItem>
        </StyledMenu>
      </Box>
    </StyledHeader>
  );
};

export default Header;
