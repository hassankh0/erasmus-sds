import React, { useCallback, useEffect, useState } from "react";
import {
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  ListItem,
  Collapse,
} from "@mui/material";
import { NavLink, useLocation } from "react-router-dom";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const SideBarItemCollapse = ({ item }) => {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  const init = useCallback(() => {
    if (item?.children.map((i) => i?.to).includes(location.pathname.slice(1))) {
      setOpen(true);
    }
  }, [location.pathname, item]);

  useEffect(() => {
    init();
  }, [init]);

  return (
    <React.Fragment key={`item ${item.title}`}>
      <ListItem disablePadding>
        <ListItemButton onClick={() => setOpen(!open)}>
          <ListItemIcon sx={{ color: "white", minWidth: 30 }}>
            {item.icon}
          </ListItemIcon>
          <ListItemText disableTypography primary={item.title} />
          {open ? <ExpandLessIcon /> : <ExpandMoreIcon />}
        </ListItemButton>
      </ListItem>

      <Collapse in={open} timeout="auto" unmountOnExit={false}>
        <List disablePadding>
          {item.children.map((child) => (
            <ListItem key={child.title} disablePadding>
              <ListItemButton
                component={NavLink}
                to={child.to}
                sx={{ pl: 3 }}
                style={({ isActive, isPending, theme }) => {
                  return {
                    backgroundColor: isActive ? "gold" : "inherit",
                    color: isActive ? "black" : "white",
                  };
                }}
              >
                <ListItemIcon
                  sx={{
                    color: "inherit",
                    minWidth: 30,
                  }}
                >
                  {child.icon}
                </ListItemIcon>
                <ListItemText disableTypography primary={child.title} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Collapse>
    </React.Fragment>
  );
};

export default SideBarItemCollapse;