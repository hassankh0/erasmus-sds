
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
import * as olasServices from "../../services/olaServices";
import LearningAgreement from "../PDFPages/PDFPages"
const Demo = styled('div')(({ theme }) => ({
  backgroundColor: theme.palette.background.paper,
}));

// const download = async (id) => {
//   const ola = await olasServices.getOla(id);
//   const courses = ola.cours;
//   const receivingInstitution = {
//     name: ola.receiving_institution_contact,
//     responsibleName: ola.receiving_institution_faculty,
//     contactEmail: ola.receiving_institution_name,
//     department: ola.receiving_institution_responsible,
//   };
//   const sendingInstitution = {
//     name: ola.sending_institution_contact,
//     responsibleName: ola.sending_institution_faculty,
//     contactEmail: ola.sending_institution_name,
//     department: ola.sending_institution_responsible,
//   };
//   <LearningAgreement CourseInfo={courses} sendingInstitution={sendingInstitution} receivingInstitution={receivingInstitution} />

// }

export default function Olatable() {
  const [Olas, setOlas] = useState([]);
  // const [searchTerm, setSearchTerm] = useState('');
  // const [filtererOlas, setFilteredOlas] = useState([]);

  const fetchOlas = async () => {
    const data = await olasServices.getOlas();
    setOlas(data);
  }

  const handleDelete = (id) => {
    olasServices.deleteOla(id).then(() => fetchOlas());
  };


  useEffect(() => {
    fetchOlas();
    console.log(Olas)
  }, []);
  // useEffect(() => {
  //   const filteredOlas = Olas.filter((Olas) =>
  //     Olas.name.toLowerCase().includes(searchTerm.toLowerCase())
  //   );
  //   setFilteredOlas(filteredOlas);
  // }, [searchTerm, Olas]);

  const [dense, setDense] = React.useState(false);

  return (
    <Box sx={{ flexGrow: 1 }}>
      <h1 className="text-4xl font-bold text-black text-center font-serif relative container mx-auto">
        Your OLA's
      </h1>
      <Grid container spacing={2} sx={{ margin: 2, justifyContent: "center" }}>
        <Grid item xs={12} md={6}>
          <Demo>
            {Olas.map(ola => <List dense={dense}>
              <ListItem
                secondaryAction={
                  <button className="text-gray-600 transition hover:text-red-600" onClick={()=>{handleDelete(ola.id)}} >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      className="h-4 w-4"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                      />
                    </svg>
                  </button>
                }
              >
                <ListItemAvatar>
                  <div className="flex justify-end">
                    <a
                      href="#">
                      <LearningAgreement id={ola.id} />
                    </a>

                  </div>
                </ListItemAvatar>
                <ListItemText
                  primary={" OLA " + ola.id}
                />
                <Typography variant="caption">
                  06/16/2023
                  {/* {new Date(ola.created_at).getDay()}/{new Date(ola.created_at).getMonth()}/{new Date(ola.created_at).getFullYear()} */}
                </Typography>
              </ListItem>
            </List>)}
          </Demo>
        </Grid>
      </Grid>
    </Box>
  );
}
