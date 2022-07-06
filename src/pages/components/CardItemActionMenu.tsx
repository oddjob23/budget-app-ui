import { useState } from "react";
import { Box, IconButton, Menu, MenuItem } from "@mui/material";
import { styled } from "@mui/system";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import DeleteIcon from "@mui/icons-material/Delete";
import ModeEditIcon from "@mui/icons-material/ModeEdit";

const StyledMoreActionButton = styled(Box)({
  position: "absolute",
  right: "24px",
  top: "24px",
  zIndex: "5",
});
const StyledMenuItem = styled(MenuItem)({
  paddingLeft: "8px",
  paddingRight: "8px",
  lineHeight: "1.585",
  fontSize: "0.874rem",
  fontFamily: "Public Sans, sans-serif",
  fontWeight: "400",
  borderRadius: "6px",
});
const CardItemActionMenu = () => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    if (!open) {
      setAnchorEl(event.currentTarget);
    }
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <StyledMoreActionButton>
      <IconButton
        onClick={handleClick}
        sx={{ position: "relative" }}
        aria-expanded={open ? "true" : undefined}
        aria-haspopup="true"
      >
        <MoreVertIcon />
      </IconButton>
      <Menu
        onBlur={() => setAnchorEl(null)}
        open={open}
        anchorEl={anchorEl}
        sx={{
          padding: "8px",
          "& .MuiList-root": {
            padding: "8px",
          },
        }}
        transformOrigin={{ horizontal: "right", vertical: "top" }}
      >
        <StyledMenuItem
          onClick={handleClose}
          sx={{ color: "rgb(255, 72, 66)" }}
        >
          <DeleteIcon
            sx={{ marginRight: "16px", width: "20px", height: "20px" }}
          />
          Delete Card
        </StyledMenuItem>
        <StyledMenuItem onClick={handleClose}>
          <ModeEditIcon
            sx={{ marginRight: "16px", width: "20px", height: "20px" }}
          />
          Edit Card
        </StyledMenuItem>
      </Menu>
    </StyledMoreActionButton>
  );
};

export default CardItemActionMenu;
