import * as React from 'react';
import { useState, useEffect } from 'react';
import ImgMediaCard from '../CoursesCard';
import "./index.css"

import * as coursServices from "../../services/coursServices";

export default function TableCard() {
    const [courses, setCourses] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [filteredCourses, setFilteredCourses] = useState([]);

    
    const fetchCoursess = async () => {
        const data = await coursServices.getCourses();
        setCourses(data);
    }

    useEffect(() => {
        fetchCoursess();
        console.log(courses)
    }, []);

    useEffect(() => {
        const filteredCourses = courses.filter((course) =>
          course.name.toLowerCase().includes(searchTerm.toLowerCase())
        );
        setFilteredCourses(filteredCourses);
      }, [searchTerm, courses]);

    return (
        <div>
        <div className="bg-dark-100 py-4">
            <h1 className="text-4xl font-bold text-black text-center font-serif relative container mx-auto">
                List of Courses
                {/* Style du trait */}
                <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-20 h-1 bg-black"></div>
            </h1>
            <input 
                type="text" 
                placeholder="Search courses..." 
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
        <div className='table'>
            {filteredCourses.map((course) => (
                <div className='tab' key={course.id}>
                    <ImgMediaCard course={course} />
                </div>
            ))}
        </div>
        </div>
    );
}