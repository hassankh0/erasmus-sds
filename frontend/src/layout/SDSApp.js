import React, { useEffect, useRef, useState } from "react";
import { styled } from "@mui/material/styles";
import { Link, Outlet, useLocation, useNavigate } from "react-router-dom";
import {
  Box,
  
  useMediaQuery,
 
} from "@mui/material";


import SideBar from "./common/SideBar";
import TopBar from "./common/TopBar";

const drawerWidth = 280;


const Main = styled("main", { shouldForwardProp: (prop) => prop !== "open" })(
  ({ theme, open, matches }) => ({
    flexGrow: 1,
    padding: theme.spacing(3),
    marginTop: 91,
    color: "blue",
    marginBottom: 91,
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: matches === "true" ? 0 : `-${drawerWidth}px`,
    ...(open && {
      transition: theme.transitions.create("margin", {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
      marginLeft: 0,
    }),
  })
);

export default function SDSApp() {
  const location = useLocation();
  const navigate = useNavigate();
  const matches = useMediaQuery("(max-width:600px)");

  const [open, setOpen] = useState(matches ? false : true);


  useEffect(() => {
    if (location.pathname === "/") {
      navigate("/home", true);
    }
  }, []);


  const toggleDrawer = (open) => (event) => {
    if (
      event &&
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }
    setOpen(open);
  };

  return (
    <Box sx={{ display: "flex" }}>
      <TopBar open={open} matches={matches} closeDrawer={toggleDrawer} />
      <SideBar open={open} matches={matches} closeDrawer={toggleDrawer} />
      <Main open={open} matches={matches.toString()}>
        {<Outlet />}
      </Main>

     
    </Box>
  );
}

