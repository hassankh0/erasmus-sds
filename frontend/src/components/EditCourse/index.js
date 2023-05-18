import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Button, IconButton } from '@mui/material';
import { ArrowBack } from '@mui/icons-material';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import axios from 'axios';
import { API_URL } from '../../config/environment';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';


function EditCourseForm(props) {
  const navigate = useNavigate();
    const { id } = useParams();
    const [course, setCourse] = useState({
      name: '',
      code: '',
      description: '',
      credits: '',
      instructor: ''
    });
  
    useEffect(() => {
      async function fetchData() {
        const response = await axios.get(`${API_URL}/cours/${id}`);
        setCourse(response.data.cours);
      }
      fetchData();
    }, [id]);

  const handleSubmit = async (event) => {
    event.preventDefault();
        const newCourse = {
            name: course.name,
            code: course.code,
            description: course.description,
            credits: course.credits,
            instructor: course.instructor
          };
      try {
        const response = await axios.put(`${API_URL}/cours/${id}`, newCourse);
        console.log(response.data);
        navigate("/admin/TableCourses");
      } catch (error) {
        console.error(error);
      }
  };

  return (
    <Box sx={{ mt: 4 }}>
        <IconButton component={Link} to="/TableCourses" edge="start" aria-label="back">
          <ArrowBack />
        </IconButton>
      <h1 className="text-xl font-bold text-gray-900 sm:text-3xl mb-4">Edit Course</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="courseName" className="text-sm text-gray-700">Course Name:</label>
          <TextField
            id="courseName"
            variant="outlined"
            size="small"
            value={course.name}
            onChange={(e) => setCourse({ ...course, name: e.target.value })}
            fullWidth
            margin="dense"
            placeholder={course.name}
          />
        </div>
        <div>
          <label htmlFor="courseCode" className="text-sm text-gray-700">Course Code:</label>
          <TextField
            id="courseCode"
            variant="outlined"
            size="small"
            value={course.code}
            onChange={(e) => setCourse({ ...course, code: e.target.value })}
            fullWidth
            margin="dense"
            placeholder={course.code}
          />
        </div>
        <div>
          <label htmlFor="courseDescription" className="text-sm text-gray-700">Course Description:</label>
          <TextField
            id="courseDescription"
            variant="outlined"
            size="small"
            value={course.description}
            onChange={(e) => setCourse({ ...course, description: e.target.value })}
            fullWidth
            margin="dense"
            placeholder={course.description}
          />
        </div>
        <div>
          <label htmlFor="courseCredits" className="text-sm text-gray-700">Course Credits:</label>
          <TextField
            id="courseCredits"
            variant="outlined"
            size="small"
            value={course.credits}
            onChange={(e) => setCourse({ ...course, credits: e.target.value })}
            fullWidth
            margin="dense"
            placeholder={course.credits}
          />
        </div>
        <div>
          <label htmlFor="courseInstructor" className="text-sm text-gray-700">Course Instructor:</label>
          <TextField
            id="courseInstructor"
            variant="outlined"
            size="small"
            value={course.instructor}
            onChange={(e) => setCourse({ ...course, instructor: e.target.value })}
            fullWidth
            margin="dense"
            placeholder={course.instructor}
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

export default EditCourseForm;