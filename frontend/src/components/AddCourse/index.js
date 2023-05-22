import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button, IconButton } from '@mui/material';
import { ArrowBack } from '@mui/icons-material';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import axios from 'axios';
import { API_URL } from '../../config/environment';

function AddCourseForm(props) {
  const [courseName, setCourseName] = useState('');
  const [courseCode, setCourseCode] = useState('');
  const [courseDescription, setCourseDescription] = useState('');
  const [courseCredits, setCourseCredits] = useState('');
  const [courseInstructor, setCourseInstructor] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    let correct = true;
    if (!/^[a-zA-Z\s]+$/.test(courseName)) {
        alert('Invalid course name');
        correct=false;
    }

    if (courseDescription.length > 255) {
        alert('Course description is too long');
        correct=false;
    }
    const credits = parseInt(courseCredits);
    if (isNaN(credits) || credits < 0 || credits > 6) {
      alert('Invalid course credits');
      correct=false;
    }
    if (!/^[a-zA-Z\s]+$/.test(courseInstructor)) {
        alert('Invalid course instructor');
        correct=false;
    }
    if (correct) {
        console.log('Submitted');
        const newCourse = {
            name: courseName,
            code: courseCode,
            description: courseDescription,
            credits: courseCredits,
            instructor: courseInstructor
          };
        try {
        const response = await axios.post(`${API_URL}/cours`, newCourse);
        alert("Course successfully added!");
        console.log(response.data);
        window.location.href = "/TableCourses";
        } catch (error) {
        console.error(error);
        }
    } else {
        console.log('Not Submitted');
    }
    /*console.log(`Course Name: ${courseName}`);
    console.log(`Course Code: ${courseCode}`);
    console.log(`Course Description: ${courseDescription}`);
    console.log(`Course Credits: ${courseCredits}`);
    console.log(`Course Instructor: ${courseInstructor}`);*/
  };

  return (
    <Box sx={{ mt: 4 }}>
        <IconButton component={Link} to="/TableCourses" edge="start" aria-label="back">
          <ArrowBack />
        </IconButton>
      <h1 className="text-xl font-bold text-gray-900 sm:text-3xl mb-4">Add a new course</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="courseName" className="text-sm text-gray-700">Course Name:</label>
          <TextField
            id="courseName"
            variant="outlined"
            size="small"
            value={courseName}
            onChange={(e) => setCourseName(e.target.value)}
            fullWidth
            margin="dense"
          />
        </div>
        <div>
          <label htmlFor="courseCode" className="text-sm text-gray-700">Course Code:</label>
          <TextField
            id="courseCode"
            variant="outlined"
            size="small"
            value={courseCode}
            onChange={(e) => setCourseCode(e.target.value)}
            fullWidth
            margin="dense"
          />
        </div>
        <div>
          <label htmlFor="courseDescription" className="text-sm text-gray-700">Course Description:</label>
          <TextField
            id="courseDescription"
            variant="outlined"
            size="small"
            value={courseDescription}
            onChange={(e) => setCourseDescription(e.target.value)}
            fullWidth
            margin="dense"
          />
        </div>
        <div>
          <label htmlFor="courseCredits" className="text-sm text-gray-700">Course Credits:</label>
          <TextField
            id="courseCredits"
            variant="outlined"
            size="small"
            value={courseCredits}
            onChange={(e) => setCourseCredits(e.target.value)}
            fullWidth
            margin="dense"
          />
        </div>
        <div>
          <label htmlFor="courseInstructor" className="text-sm text-gray-700">Course Instructor:</label>
          <TextField
            id="courseInstructor"
            variant="outlined"
            size="small"
            value={courseInstructor}
            onChange={(e) => setCourseInstructor(e.target.value)}
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
          href='/TableCourses'
        >
          Submit
        </Button>
      </form>
    </Box>
  );
}

export default AddCourseForm;