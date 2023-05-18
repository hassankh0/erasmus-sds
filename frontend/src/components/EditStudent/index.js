import React, { useState, useEffect } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { Button, IconButton } from '@mui/material';
import { ArrowBack } from '@mui/icons-material';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import axios from 'axios';
import { API_URL } from '../../config/environment';

function EditStudent(props) {
    const { id } = useParams();
    const [student, setStudent] = useState({
        firstname: '',
        lastname: '',
        username: '',
        email: '',
        nationality: '',
        phone: '',
        password: ''
    });

    useEffect(() => {
        async function fetchData() {
            const response = await axios.get(`${API_URL}/students/${id}`);
            setStudent(response.data.student);
        }
        fetchData();
    }, [id]);

    const handleSubmit = async (event) => {
        event.preventDefault();
        let correct = true;
        if (correct) {
            console.log('Submitted');
            const newStudent = {
                firstname: student.firstname,
                lastname: student.lastname,
                username: student.username,
                email: student.email,
                nationality: student.nationality,
                phone: student.phone,
                password: student.password
            };
            try {
                const response = await axios.put(`${API_URL}/students/${id}`, newStudent);
                console.log(response.data);
                window.location.href = "/admin/TableStudents";
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
            <h1 className="text-xl font-bold text-gray-900 sm:text-3xl mb-4">Edit Student</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="Firstname" className="text-sm text-gray-700">Firstname:</label>
                    <TextField
                        id="Firsname"
                        variant="outlined"
                        size="small"
                        value={student.firstname}
                        onChange={(e) => setStudent({...student,firstname:e.target.value})}
                        fullWidth
                        margin="dense"
                        placeholder={student.firstname}
                    />
                </div>
                <div>
                    <label htmlFor="Lastname" className="text-sm text-gray-700">Lastname :</label>
                    <TextField
                        id="Lastname"
                        variant="outlined"
                        size="small"
                        value={student.lastname}
                        onChange={(e) => setStudent({...student,lastname:e.target.value})}
                        fullWidth
                        margin="dense"
                        placeholder={student.Lastname}

                    />
                </div>
                <div>
                    <label htmlFor="Username" className="text-sm text-gray-700">Username :</label>
                    <TextField
                        id="Username"
                        variant="outlined"
                        size="small"
                        value={student.username}
                        onChange={(e) => setStudent({...student,username:e.target.value})}
                        fullWidth
                        margin="dense"
                        placeholder={student.username}

                    />
                </div>
                <div>
                    <label htmlFor="Password" className="text-sm text-gray-700">Password :</label>
                    <TextField
                        id="Password"
                        variant="outlined"
                        size="small"
                        value={student.password}
                        onChange={(e) => setStudent({...student,password:e.target.value})}
                        fullWidth
                        margin="dense"
                        placeholder={student.password}

                    />
                </div>
                <div>
                    <label htmlFor="Phone" className="text-sm text-gray-700">Phone :</label>
                    <TextField
                        id="Phone"
                        variant="outlined"
                        size="small"
                        value={student.phone}
                        onChange={(e) => setStudent({...student,phone:e.target.value})}
                        fullWidth
                        margin="dense"
                        placeholder={student.phone}

                    />
                </div>
                <div>
                    <label htmlFor="Email" className="text-sm text-gray-700">Email :</label>
                    <TextField
                        id="Email"
                        variant="outlined"
                        size="small"
                        value={student.email}
                        onChange={(e) => setStudent({...student,email:e.target.value})}
                        fullWidth
                        margin="dense"
                        placeholder={student.email}

                    />
                </div>
                <div>
                    <label htmlFor="Nationality" className="text-sm text-gray-700">Nationality :</label>
                    <TextField
                        id="Nationality"
                        variant="outlined"
                        size="small"
                        value={student.nationality}
                        onChange={(e) => setStudent({...student,nationality:e.target.value})}
                        fullWidth
                        margin="dense"
                        placeholder={student.nationality}
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

export default EditStudent;
