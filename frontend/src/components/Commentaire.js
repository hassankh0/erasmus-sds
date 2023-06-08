import React, { useState } from "react";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardContent from "@mui/material/CardContent";
import Avatar from "@mui/material/Avatar";
import { Typography, Menu, MenuItem, ListItemIcon } from "@mui/material";
import { blue } from "@mui/material/colors";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import IconButton from "@mui/material/IconButton";
import FlagIcon from "@mui/icons-material/Flag";
import { markCommentAsReported } from "../services/commentServices";

export default function Commentaire({ comment }) {
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const options = { year: "numeric", month: "short", day: "numeric" };
    const formattedDate = date.toLocaleDateString("en-US", options).toUpperCase();
    return formattedDate; // Outputs: 30 APR 2023
  };

  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
    if (!comment.isReported) {
      markCommentAsReported(comment.id)
        .then(() => {
          console.log("succeful");
        })
        .catch((error) => {
          console.error(error);
          console.log("unsucceful");
        });
    }
  };

  return (
    <Card sx={{ width: "100%" }} style={{ margin: 0, justifyContent: "center", marginBottom: "1rem" }}>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: blue[500] }} aria-label="recipe">
            {comment.student.username.slice(0, 2)}
          </Avatar>
        }
        action={
          <React.Fragment>
            <IconButton
              aria-label="settings"
              onClick={handleClick}
              size="small"
              aria-controls={open ? "account-menu" : undefined}
              aria-haspopup="true"
              aria-expanded={open ? "true" : undefined}
            >
              <MoreVertIcon />
            </IconButton>
            <Menu
              anchorEl={anchorEl}
              id="account-menu"
              open={open}
              onClose={handleClose}
              onClick={handleClose}
              PaperProps={{
                elevation: 0,
                sx: {
                  overflow: "visible",
                  filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
                  mt: 1.5,
                  "& .MuiAvatar-root": {
                    width: 32,
                    height: 32,
                    ml: -0.5,
                    mr: 1,
                  },
                  "&:before": {
                    content: '""',
                    display: "block",
                    position: "absolute",
                    top: 0,
                    right: 14,
                    width: 10,
                    height: 10,
                    bgcolor: "background.paper",
                    transform: "translateY(-50%) rotate(45deg)",
                    zIndex: 0,
                  },
                },
              }}
              transformOrigin={{ horizontal: "right", vertical: "top" }}
              anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
            >
              <MenuItem>
                <ListItemIcon>
                  <FlagIcon fontSize="small" />
                </ListItemIcon>
                Report
              </MenuItem>
            </Menu>
          </React.Fragment>
        }
        title={comment.student.username}
        subheader={formatDate(comment.updated_at)}
      />

      <CardContent>
        <Typography variant="body2" color="text.secondary">
          {comment.content}
        </Typography>
      </CardContent>
    </Card>
  );
}
