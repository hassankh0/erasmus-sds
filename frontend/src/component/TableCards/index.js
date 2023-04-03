import * as React from 'react';
import ImgMediaCard from '../CoursesCard';
import "./index.css"

export default function TableCard() {
    const courses = [1, 2, 3, 4, 5, 6, 7, 8];

    return (
        <div className='table'>
            {courses.map((course) => (
                <div className='tab' key={course}>
                    <ImgMediaCard />
                </div>
            ))}
        </div>
    );
}
