import * as React from 'react';
import { useState, useEffect } from 'react';
import ImgMediaCard from '../CoursesCard';
import { Button } from '@mui/material';
import {Table, TableHead, TableCell, TableBody, TableRow} from '@mui/material';
import "./index.css";
import { Link } from 'react-router-dom';
import * as coursServices from "../../services/coursServices";

export default function TableCard() {
    const [courses, setCourses] = useState([]);
    const [deleting, setDeleting] = useState(false);
    
    const fetchUniversities = async () => {
        const data = await coursServices.getCourses();
        setCourses(data);
    }

    useEffect(() => {
        fetchUniversities();
        console.log(courses)
    }, []);

    const handleEdit = (id) => {
        console.log(`Editing course with id ${id}`);
      };
    
    const handleDelete = async (id) => {
        try {
          setDeleting(true);
          await coursServices.deleteCourse(id);
          const data = await coursServices.getCourses();
          setCourses(data);
          setDeleting(false);
        } catch (error) {
          console.error(error);
          setDeleting(false);
        }
    };

    return (
        <div>
        <h1 className="text-xl font-bold text-gray-900 sm:text-3xl">Courses</h1>
        <div style={{textAlign: 'right'}}>
        <Button style={{float: 'right'}} className="text-right" class="block rounded bg-gray-700 px-5 py-3 text-sm text-gray-100 transition hover:bg-gray-600" href='/Add-Course'>Add new Course</Button>  
        </div>      
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Title</TableCell>
              <TableCell>Description</TableCell>
              <TableCell>Credits</TableCell>
              <TableCell>Instructor</TableCell>
              <TableCell>Details</TableCell>
              <TableCell>Edit</TableCell>
              <TableCell>Delete</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {courses.map((course) => (
              <TableRow key={course.id}>
                <TableCell>{course.name}</TableCell>
                <TableCell>{course.description}</TableCell>
                <TableCell>{course.credits}</TableCell>
                <TableCell>{course.instructor}</TableCell>
                <TableCell>
                  <Button
                    variant="outlined"
                    color="primary"
                    href='/Cours-Details'
                    onClick={() => console.log(`Details for course with id ${course.id}`)}
                  >
                    Details
                  </Button>
                </TableCell>
                <TableCell>
                <Link to={`/editCourse/${course.id}`}>
                <Button
                variant="outlined"
                color="primary"
                onClick={() => handleEdit(course.id)}
                >
                Edit
                </Button>
                </Link>
                </TableCell>

                <TableCell>
                  <Button
                    variant="outlined"
                    color="secondary"
                    onClick={() => handleDelete(course.id)}
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