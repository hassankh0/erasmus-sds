import * as React from 'react';
import ImgMediaCard from '../CoursesCard';
import "./index.css"
export default function TableCard() {
    return (
        <div className='table'>
            <div className='tab'>
                <ImgMediaCard/>
            </div>
            <div className='tab'>
                <ImgMediaCard/>
            </div>
            <div className='tab'>
                <ImgMediaCard/>
            </div>
            <div className='tab'>
                <ImgMediaCard/>
            </div>
            <div className='tab'>
                <ImgMediaCard/>
            </div>
            <div className='tab'>
                <ImgMediaCard/>
            </div>
            <div className='tab'>
                <ImgMediaCard/>
            </div>
            <div className='tab'>
                <ImgMediaCard/>
            </div>
        </div>
    );
}
