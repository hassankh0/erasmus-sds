import * as React from 'react';
import { useState, useEffect } from 'react';
import ImgMediaCard from '../CoursesCard';
import "./index.css"

import * as coursServices from "../../services/coursServices";

export default function TableCard() {
    const [courses, setCourses] = useState([]);
    
    const fetchCoursess = async () => {
        const data = await coursServices.getCourses();
        setCourses(data);
    }

    useEffect(() => {
        fetchCoursess();
        console.log(courses)
    }, []);

    return (
        <div className='table'>
            {courses.map((course) => (
                <div className='tab' key={course.id}>
                    <ImgMediaCard course={course} />
                </div>
            ))}
        </div>
    );
}