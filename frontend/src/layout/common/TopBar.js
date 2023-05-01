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
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { checkLogin } from "../../utils/checkLogin";

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

  const handleShopingCart = () => {
    navigate("/shopingCart", true);

  }


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

            {checkLogin() ? <IconButton
              id="shoppingcart-button"
              // ref={anchorNotificationRef}
              aria-label="Shopping Cart"
              // aria-controls={
              // notificationsOpen ? "notification-menu" : undefined
              // }
              aria-haspopup="true"

              size="large"
              edge="end"
              color="inherit"
              onClick={handleShopingCart}
            >
              <ShoppingCartIcon />
            </IconButton> : <></>}
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
