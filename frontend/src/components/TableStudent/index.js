import * as React from 'react';
import { useState, useEffect } from 'react';
import ImgMediaCard from '../CoursesCard';
import { Button } from '@mui/material';
import {Table, TableHead, TableCell, TableBody, TableRow} from '@mui/material';
import "./index.css";
import { Link } from 'react-router-dom';
import * as studentServices from "../../services/userServices";
export default function TableStudents() {
    const [students, setStudents] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [deleting, setDeleting] = useState(false);
    const [filteredStudents, setFilteredStudents] = useState([]);
    
    const fetchStudents = async () => {
        const data = await studentServices.getStudents();
        setStudents(data);
    }

    useEffect(() => {
        fetchStudents();
        console.log(students)
    }, []);

    useEffect(() => {
      const filteredStudents = students.filter((student) =>
        student.firstname.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setFilteredStudents(filteredStudents);
    }, [searchTerm, students]);

    const handleEdit = (id) => {
        console.log(`Editing student with id ${id}`);
      };
    
    const handleDelete = async (id) => {
        try {
          setDeleting(true);
          await studentServices.deleteStudent(id);
          const data = await studentServices.getStudents();
          setStudents(data);
          setDeleting(false);
        } catch (error) {
          console.error(error);
          setDeleting(false);
        }
    };

    return (
        <div>
        <h1 className="text-xl font-bold text-gray-900 sm:text-3xl">Students</h1>
        <div style={{textAlign: 'right'}}>
        <Button style={{float: 'right'}} className="text-right block rounded bg-gray-700 px-5 py-3 text-sm text-gray-100 transition hover:bg-gray-600" href='/AddStudent'>Add new Student</Button>  
        <input 
          type="text" 
          placeholder="Search Students..." 
          value={searchTerm} 
          onChange={(e) => setSearchTerm(e.target.value)} 
          style={{
            width: '80%',
            height: '40px',
            border: '1px solid #ccc',
            borderRadius: '4px',
            paddingLeft: '10px',
            fontSize: '16px',
            margin: '20px auto',
            display: 'block',
            textAlign: 'center'
          }}
        />
        </div>      
        
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Firstname</TableCell>
              <TableCell>Lastname</TableCell>
              <TableCell>Phone</TableCell>
              <TableCell>Email</TableCell>
              <TableCell>Nationality</TableCell>
              <TableCell>Edit</TableCell>
              <TableCell>Delete</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {filteredStudents.map((students) => (

              <TableRow key={students.id}>
                <TableCell>{students.firstname}</TableCell>
                <TableCell>{students.lastname}</TableCell>
                <TableCell>{students.phone}</TableCell>
                <TableCell>{students.email}</TableCell>
                <TableCell>{students.nationality}</TableCell>
                <TableCell>
                <Link to={`/editStudent/${students.id}`}>
                <Button
                variant="outlined"
                color="primary"
                onClick={() => handleEdit(students.id)}
                >
                Edit
                </Button>
                </Link>
                </TableCell>

                <TableCell>
                  <Button
                    variant="outlined"
                    color="secondary"
                    onClick={() => handleDelete(students.id)}
                  >
                    Delete
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
        </div>
      );
}