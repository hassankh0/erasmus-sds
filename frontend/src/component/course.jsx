import React, { useState } from "react";

function Course(props) {
    //state
  const [isHovering, setIsHovering] = useState(false);

  return (
    <a href="#" className="block max-w-sm p-6 bg-white border-4 border-gray-500 rounded-lg shadow hover:bg-gray-500 dark:bg-gray-500 dark:border-gray-500 dark:hover:bg-gray-500 relative"
    onMouseEnter={() => setIsHovering(true)} 
    onMouseLeave={() => setIsHovering(false)}>
    
    {/* Not HOVERING */}
    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{props.CourseInfo.name}</h5>
    <p className="font-normal text-gray-700 dark:text-gray-400">{props.CourseInfo.description}</p>
    <div class="h-6">
      <div class="absolute bottom-5 right-8">
        <p className="font-bold text-white dark:text-white-000">{props.CourseInfo.country}, <span className="font-normal">{props.CourseInfo.city}</span></p>
      </div>
    </div>
    {/* <div className="flex justify-end">
        <p className="font-bold text-gray-700 dark:text-gray-400">{props.CourseInfo.country}</p>
        <p className="pl-1 font-normal text-gray-700 dark:text-gray-400">{props.CourseInfo.city}</p>
    </div> */}

    {/* HOVERING */}
    {isHovering && (
        <div className="absolute top-0 left-0 w-full h-full z-10">
        <div className="w-full h-full bg-white" style={{clipPath:" polygon(0 100%, 100% 100%, 100% 25%, 0 30.5%", padding: "2rem"}}>
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-500 dark:text-gray-800">{props.CourseInfo.name}</h5>
            <div className="text-center">
                <p className="bg-gray-500 text-gray-900 dark:bg-gray-500 dark:text-white py-2 px-4 rounded-full inline-block mt-4 ">View course</p>
            </div>
        </div>
        </div>
    )}
    </a>



  );
}

export default Course;
