import React, { useEffect, useState } from "react";
import { styled } from "@mui/material/styles";
import { Link, Outlet, useLocation, useNavigate } from "react-router-dom";
import {
  Box,
  useMediaQuery,
  TextField,
  Button,
  FormControl,
  MenuItem,
  Select,
  InputLabel,
  Snackbar
} from "@mui/material";


import SideBarAdmin from "./common/SideBarAdmin";
import TopBar from "./common/TopBar";
import { ImportExportRounded } from "@mui/icons-material";
import { useSnackbar } from "notistack";

const drawerWidth = 280;

const Main = styled("main", { shouldForwardProp: (prop) => prop !== "open" })(
  ({ theme, open, matches }) => ({
    flexGrow: 1,
    padding: theme.spacing(3),
    marginTop: 41,
    color: "blue",
    marginBottom: 0,
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

export default function SDSAdminApp() {
  const location = useLocation();
  const navigate = useNavigate();
  const matches = useMediaQuery("(max-width:600px)");
  const [notification, setNotification] = useState("");
  const [importance, setImportance] = useState("green");
  const [showNotification, setShowNotification] = useState(false);
  const [open, setOpen] = useState(matches ? false : true);

  useEffect(() => {
    if (location.pathname === "/admin") {
      navigate("/adminHome", { replace: true });
    }
  }, [location, navigate]);

  useEffect(() => {
    const storedNotification = localStorage.getItem("notification");
    if (storedNotification) {
      const parsedNotification = JSON.parse(storedNotification);
      setNotification(parsedNotification.message);
      setImportance(parsedNotification.importance);
      setShowNotification(true);
    }
  }, []);

  useEffect(() => {
    const handleStorageChange = (event) => {
      if (event.key === "notification" && event.newValue) {
        const parsedNotification = JSON.parse(event.newValue);
        setNotification(parsedNotification.message);
        setImportance(parsedNotification.importance);
        setShowNotification(true);
      }
    };

    window.addEventListener("storage", handleStorageChange);

    return () => {
      window.removeEventListener("storage", handleStorageChange);
    };
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

  const handleSendNotification = () => {
    const existingNotifications = JSON.parse(sessionStorage.getItem('notifications')) || [];
    const currentDate = new Date();
    const day = String(currentDate.getDate()).padStart(2, '0');
    const month = String(currentDate.getMonth() + 1).padStart(2, '0');
    const formattedDate = `${day}/${month}`;
  
    const newNotification = {
      id: existingNotifications.length + 1, // Incrementing the ID
      date: formattedDate, // Today's date in DD/MM format
      message: notification,
      importance: importance
    };
  
    const updatedNotifications = [...existingNotifications, newNotification];
  
    sessionStorage.setItem('notifications', JSON.stringify(updatedNotifications));
    alert('Notification sent');
    setShowNotification(true);
  };
  
  const closeNotification = () => {
    localStorage.removeItem("notification");
    setShowNotification(false);
  };

  return (
    <Box>
      <TopBar open={open} matches={matches} closeDrawer={toggleDrawer} />
      <SideBarAdmin open={open} matches={matches} closeDrawer={toggleDrawer} />
      <Main open={open} matches={matches}>
        <Outlet />
        <h1 style={{ color: "black" }}>Send Notification to Users</h1>

        <Box>
          <TextField
            label="Write notification..."
            value={notification}
            onChange={(e) => setNotification(e.target.value)}
            fullWidth
            multiline
            rows={4}
            variant="outlined"
            margin="normal"
            style={{ marginBottom: "18px" }}
          />
          <FormControl>
            <h2 style={{ marginTop: "4px", color: "black" }}>Importance</h2>
            <Select
              labelId="importance-label"
              value={importance}
              onChange={(e) => setImportance(e.target.value)}
              fullWidth
              style={{ marginTop: "8px" }}
            >
              <MenuItem value="green">Green</MenuItem>
              <MenuItem value="orange">Orange</MenuItem>
              <MenuItem value="red">Red</MenuItem>
            </Select>
          </FormControl>
        </Box>
        <Button
          variant="contained"
          color="primary"
          onClick={handleSendNotification}
          style={{ marginTop: "16px" }}
        >
          Send Notification
        </Button>
        
        {/* {showNotification && (
          <NotificationWindow
            message={notification}
            importance={importance}
            onClose={closeNotification}
          />
        )} */}
      </Main>
    </Box>
  );
}

/*
function NotificationWindow({ message, importance, onClose }) {
  let backgroundColor;
  let textColor;

  switch (importance) {
    case "green":
      backgroundColor = "green";
      textColor = "white";
      break;
    case "orange":
      backgroundColor = "orange";
      textColor = "black";
      break;
    case "red":
      backgroundColor = "red";
      textColor = "white";
      break;
    default:
      backgroundColor = "transparent";
      textColor = "black";
  }

  return (
    <div
      style={{
        position: "fixed",
        top: "75px",
        right: "16px",
        zIndex: 999,
        backgroundColor: backgroundColor,
        color: textColor,
        padding: "16px",
        boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.25)",
        borderRadius: "4px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <div style={{ marginRight: "16px" }}>{message}</div>
      <Button style={{ color: textColor }} size="small" onClick={onClose}>
        Close
      </Button>
    </div>
  );
}*/