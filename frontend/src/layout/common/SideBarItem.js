import React from "react";
import {
  ListItemButton,
  ListItemIcon,
  ListItemText,
  ListItem,
} from "@mui/material";
import { NavLink } from "react-router-dom";

const SideBarItem = ({ item }) => {
  return (
    <ListItem disablePadding>
      <ListItemButton
        component={NavLink}
        to={item.to}
        style={({ isActive }) => {
          return {
            backgroundColor: isActive ? "gold" : "inherit",
            color: isActive ? "black" : "white",
          };
        }}
      >
        <ListItemIcon sx={{ color: "inherit", minWidth: 30 }}>
          {item.icon}
        </ListItemIcon>
        <ListItemText disableTypography primary={item.title} />
      </ListItemButton>
    </ListItem>
  );
};

export default SideBarItem;