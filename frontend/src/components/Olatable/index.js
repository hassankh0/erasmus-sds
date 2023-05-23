
import "./index.css";
import { useNavigate, Link } from "react-router-dom";

import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import FolderIcon from '@mui/icons-material/Folder';
import DeleteIcon from '@mui/icons-material/Delete';
import { useState, useEffect } from 'react';
// import * as olasServices from "../../services/olasServices";

const Demo = styled('div')(({ theme }) => ({
  backgroundColor: theme.palette.background.paper,
}));


export default function Olatable() {
  const [Olas, setOlas] = useState([]);
  // const [searchTerm, setSearchTerm] = useState('');
  // const [filtererOlas, setFilteredOlas] = useState([]);
  
  // const fetchOlas = async () => {
  //     const data = await olasServices.getOlas();
  //     setOlas(data);
  // }

  // useEffect(() => {
  //     fetchOlas();
  //     console.log(Olas)
  // }, []);
  // useEffect(() => {
  //   const filteredOlas = Olas.filter((Olas) =>
  //     Olas.name.toLowerCase().includes(searchTerm.toLowerCase())
  //   );
  //   setFilteredOlas(filteredOlas);
  // }, [searchTerm, Olas]);

  const [dense, setDense] = React.useState(false);
  const [secondary, setSecondary] = React.useState(false);

  return (
    <Box sx={{ flexGrow: 1 }}>
      <h1 className="text-4xl font-bold text-black text-center font-serif relative container mx-auto">
        Your OLA's
      </h1>
      <Grid container spacing={2} sx={{ margin: 2 , justifyContent:"center"}}>
        <Grid item xs={12} md={6}>
          <Demo>
            <List dense={dense}>
              <ListItem
                secondaryAction={
                  <IconButton edge="end" aria-label="delete">
                    <DeleteIcon />
                  </IconButton>
                }
              >
                <ListItemAvatar>
                  <IconButton edge="end" aria-label="delete">
                    <FolderIcon />
                  </IconButton>
                </ListItemAvatar>
                <ListItemText
                  primary="OLA"
                  secondary={secondary ? 'Secondary text' : null}
                />
                <Typography variant="caption" color="textthird">
                  2023-05-23
                </Typography>
              </ListItem>
            </List>
            <List dense={dense}>
              <ListItem
                secondaryAction={
                  <IconButton edge="end" aria-label="delete">
                    <DeleteIcon />
                  </IconButton>
                }
              >
                <ListItemAvatar>
                  <IconButton edge="end" aria-label="delete">
                    <FolderIcon />
                  </IconButton>
                </ListItemAvatar>
                <ListItemText
                  primary="OLA"
                  secondary={secondary ? 'Secondary text' : null}
                />
                <Typography variant="caption" color="textthird">
                  2023-05-23
                </Typography>
              </ListItem>
            </List>
          </Demo>
        </Grid>
      </Grid>
    </Box>
  );
}
