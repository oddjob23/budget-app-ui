import React from "react";
import { Box, Typography } from "@mui/material";
import { styled, alpha } from "@mui/material/styles";
import Menu, { MenuProps } from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Button from "@mui/material/Button";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import EditIcon from "@mui/icons-material/Edit";
import Header from "./components/Header";
import BalanceSection from "./components/BalanceSection";

const HomePage = () => {
  return (
    <Box>
      <Header />
      <BalanceSection />
    </Box>
  );
};

export default HomePage;
