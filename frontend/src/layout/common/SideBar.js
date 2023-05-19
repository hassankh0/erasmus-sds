import React from "react";
import {
  Drawer,
  Divider,
 
} from "@mui/material";
import { styled } from "@mui/material/styles";
import logo from "../../assets/logo.jpg";
import { SIDEBAR_DATA } from "../../data/SideBarData";
import SideBarItemCollapse from "./SideBarItemCollapse";
import SideBarItem from "./SideBarItem";
import { uniqueId } from "lodash";

const drawerWidth = 280;

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  padding: theme.spacing(0, 1),
  ...theme.mixins.toolbar,
  justifyContent: "flex-end",
}));

const SideBar = ({ open, matches, closeDrawer }) => {
  return (
    <Drawer
      sx={{
        width: drawerWidth,
        flexShrink: 0,
        "& .MuiDrawer-paper": {
          width: drawerWidth,
          boxSizing: "border-box",
          backgroundColor: "#3D89FF",
          borderRight: 0,
          color: "white",
        },
      }}
      variant={matches ? "temporary" : "persistent"}
      anchor="left"
      open={open}
      onClose={closeDrawer(!open)}
    >
      <DrawerHeader
        sx={{
          justifyContent: "space-between",
          backgroundColor: "rgba(0, 0, 0, 0.04)",
          minHeight: { xs: "70px" },
          padding:"inherit",
        }}
      >
        <img
          alt="ERASMUS PLATFORM"
          title="Logo"
          src={logo}
          style={{ width: "Full", heigh: "5rem" }}
        />
       
      </DrawerHeader>
      <Divider />
      {SIDEBAR_DATA.map((route) =>
        route.hasChildren ? (
          <SideBarItemCollapse item={route} key={uniqueId()} />
        ) : (
          <SideBarItem item={route} key={uniqueId()} />
        )
      )}
    
    </Drawer>
  );
};

export default SideBar;