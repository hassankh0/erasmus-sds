import React, { useRef, useState } from "react";
import { styled } from "@mui/material/styles";
import { logout } from "../../services/authServices";
import {
  Box,
  AppBar as MuiAppBar,
  Toolbar,
  IconButton,
  Stack,
} from "@mui/material";

import MenuIcon from "@mui/icons-material/Menu";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import AccountMenu from "./AccountMenu";
import { useNavigate } from "react-router-dom";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { checkLogin } from "../../utils/checkLogin";
import NotificationsActiveIcon from "@mui/icons-material/NotificationsActive";
import { useEffect } from "react";
import { Paper, Typography } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { Divider } from "@mui/material";

const drawerWidth = 280;

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  transition: theme.transitions.create(["margin", "width"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: `${drawerWidth}px`,
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const TopBar = ({ open, matches, closeDrawer }) => {
  const navigate = useNavigate();

  const [anchorEl, setAnchorEl] = useState(null);
  const [notifications, setNotifications] = useState([]);
  const [notificationPanelOpen, setNotificationPanelOpen] = useState(false);
  const [panelOpen, setPanelOpen] = useState(false); // Track panel open state
  const menuOpen = Boolean(anchorEl);

  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  const handleLogin = () => {
    navigate("/login");
  };

  /*
  const handleDeleteNotification = (notification) => {
    const updatedNotifications = notifications.filter(
      (item) => item.message !== notification.message
    );
    setNotifications(updatedNotifications);
    sessionStorage.setItem(
      "notifications",
      JSON.stringify(updatedNotifications)
    );
  }; */

  const handleNotifications = () => {
    const storedNotifications = sessionStorage.getItem("notifications");
    const parsedNotifications = JSON.parse(storedNotifications);
  
    setNotificationPanelOpen(true);
    setPanelOpen(!panelOpen);
    console.log("PanelOpen:" + panelOpen);
    setNotifications(parsedNotifications || []); // Initialize with an empty array if parsedNotifications is null or empty
  };

  const handleShopingCart = () => {
    navigate("/shopingCart", true);
  };

  useEffect(() => {
    const storedNotifications = sessionStorage.getItem("notifications");
    if (storedNotifications) {
      setNotifications(JSON.parse(storedNotifications));
    }
  }, []);

  return (
    <>
      <AppBar
        position="fixed"
        open={open && !matches}
        elevation={0}
        sx={{ backgroundColor: "white", color: "black" }}
      >
        <Toolbar sx={{ height: "70px" }}>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={closeDrawer(!open)}
            edge="start"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Box sx={{ flex: 1 }} />
          <Stack direction="row" spacing={2} justifyContent="flex-end">
            {checkLogin() && (
              <>
                <IconButton
                  id="notification-button"
                  aria-label="Notifications"
                  aria-haspopup="true"
                  size="large"
                  edge="end"
                  color="inherit"
                  onClick={handleNotifications}
                >
                  <NotificationsActiveIcon />
                </IconButton>
                {panelOpen && (
                  <Paper
                    elevation={3}
                    sx={{
                      position: "absolute",
                      top: "48px",
                      right: "16px",
                      width: "320px",
                      padding: "16px",
                    }}
                  >
                    <Stack spacing={2}>
                      <Typography variant="h6">Notifications</Typography>
                      <Divider />
                      {/* Render the notifications from sessionStorage */}
                      
                      {notifications.map((notification) => (
                          <Box
                            key={notification.message}
                            sx={{
                              backgroundColor:
                                notification.importance.toLowerCase() === "green"
                                  ? "green"
                                  : notification.importance.toLowerCase() === "orange"
                                  ? "orange"
                                  : "red",
                              color: "white",
                              padding: "8px",
                              borderRadius: "4px",
                              display: "flex",
                              justifyContent: "space-between",
                              alignItems: "center", 
                            }}
                          >
                            <Typography>{notification.message}</Typography>
                            <Typography>{notification.date}</Typography>
                          </Box>
                      ))}
                      <Divider />
                      <IconButton
                        aria-label="Close"
                        size="small"
                        onClick={handleNotifications}
                      >
                        <CloseIcon />
                      </IconButton>
                    </Stack>
                  </Paper>
                )}
              </>
            )}
            {checkLogin() ? (
              <IconButton
                id="shoppingcart-button"
                aria-label="Shopping Cart"
                aria-haspopup="true"
                size="large"
                edge="end"
                color="inherit"
                onClick={handleShopingCart}
              >
                <ShoppingCartIcon />
              </IconButton>
            ) : (
              <></>
            )}
            <React.Fragment>
              <IconButton
                id="account-button"
                aria-label="account of current user"
                aria-controls={menuOpen ? "account-setting-menu" : undefined}
                aria-haspopup="true"
                aria-expanded={open ? "true" : undefined}
                onClick={handleMenuOpen}
                size="large"
                edge="end"
                color="inherit"
              >
                <AccountCircleIcon fontSize="inherit" />
              </IconButton>
              <AccountMenu
                open={menuOpen}
                anchorEl={anchorEl}
                handleClose={handleClose}
                handleLogout={handleLogout}
                handleLogin={handleLogin}
              />
            </React.Fragment>
          </Stack>
        </Toolbar>
      </AppBar>
    </>
  );
};

export default TopBar;
