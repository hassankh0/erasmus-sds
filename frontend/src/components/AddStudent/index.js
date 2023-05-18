import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Button, IconButton } from '@mui/material';
import { ArrowBack } from '@mui/icons-material';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import axios from 'axios';
import { API_URL } from '../../config/environment';

function AddStudent(props) {
  const navigate = useNavigate();
  const [Firstname, setfirstname] = useState('');
  const [Lastname, setlastname] = useState('');
  const [Username, setusername] = useState('');
  const [Email, setemail] = useState('');
  const [Nationality, setnationality] = useState('');
  const [Phone, setphone] = useState('');
  const [Password, setpassword] = useState('');


  const handleSubmit = async (event) => {
    event.preventDefault();
    let correct = true;

    if (correct) {
        console.log('Submitted');
        const newStudent = {
            firstname:Firstname,
            lastname:Lastname,
            username:Username,
            email:Email,
            nationality:Nationality,
            phone:Phone,
            password:Password
          };
        try {
        const response = await axios.post(`${API_URL}/students`, newStudent);
        alert("Student successfully added!");
        console.log(response.data);
        navigate("/admin/TableStudents");
        } catch (error) {
        console.error(error);
        }
    } else {
        console.log('Not Submitted');
    }
  };

  return (
    <Box sx={{ mt: 4 }}>
        <IconButton component={Link} to="/admin/TableStudents" edge="start" aria-label="back">
          <ArrowBack />
        </IconButton>
      <h1 className="text-xl font-bold text-gray-900 sm:text-3xl mb-4">Add a new Student</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="Firstname" className="text-sm text-gray-700">Firstname:</label>
          <TextField
            id="Firsname"
            variant="outlined"
            size="small"
            value={Firstname}
            onChange={(e) => setfirstname(e.target.value)}
            fullWidth
            margin="dense"
          />
        </div>
        <div>
          <label htmlFor="Lastname" className="text-sm text-gray-700">Lastname :</label>
          <TextField
            id="Lastname"
            variant="outlined"
            size="small"
            value={Lastname}
            onChange={(e) => setlastname(e.target.value)}
            fullWidth
            margin="dense"
          />
        </div>
        <div>
          <label htmlFor="Username" className="text-sm text-gray-700">Username :</label>
          <TextField
            id="Username"
            variant="outlined"
            size="small"
            value={Username}
            onChange={(e) => setusername(e.target.value)}
            fullWidth
            margin="dense"
          />
        </div>
        <div>
          <label htmlFor="Password" className="text-sm text-gray-700">Password :</label>
          <TextField
            id="Password"
            variant="outlined"
            size="small"
            value={Password}
            onChange={(e) => setpassword(e.target.value)}
            fullWidth
            margin="dense"
          />
        </div>
        <div>
          <label htmlFor="Phone" className="text-sm text-gray-700">Phone :</label>
          <TextField
            id="Phone"
            variant="outlined"
            size="small"
            value={Phone}
            onChange={(e) => setphone(e.target.value)}
            fullWidth
            margin="dense"
          />
        </div>
        <div>
          <label htmlFor="Email" className="text-sm text-gray-700">Email :</label>
          <TextField
            id="Email"
            variant="outlined"
            size="small"
            value={Email}
            onChange={(e) => setemail(e.target.value)}
            fullWidth
            margin="dense"
          />
        </div>
        <div>
          <label htmlFor="Nationality" className="text-sm text-gray-700">Nationality :</label>
          <TextField
            id="Nationality"
            variant="outlined"
            size="small"
            value={Nationality}
            onChange={(e) => setnationality(e.target.value)}
            fullWidth
            margin="dense"
          />
        </div>
        <Button
          type="submit"
          variant="contained"
          color="primary"
          sx={{ mt: 2 }}
          className="block rounded bg-gray-700 px-5 py-3 text-sm text-gray-100 transition hover:bg-gray-600"
        >
          Submit
        </Button>
      </form>
    </Box>
  );
}

export default AddStudent;