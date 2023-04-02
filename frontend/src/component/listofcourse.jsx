
import { useState } from "react";
import Course from "./course";
//Export du composant
export default function ListofCourse() {

 //state
 const [courses, setCourses] = useState([
    {id : 1, name: "Mathematique", description: "A math class typically involves the study of mathematical concepts and techniques, and their application to solve problems in a structured and logical manner. "},
    {id : 2, name: "Français", description: "A French class typically involves the study of the French language, including grammar, conjugation, reading and listening comprehension, as well as the production of written and oral texts."},
    {id : 3, name: "Informatique", description: "A French class typically involves the study of the French language, including grammar, conjugation, reading and listening comprehension, as well as the production of written and oral texts."},
    {id : 4, name: "Musique", description: "A French class typically involves the study of the French language, including grammar, conjugation, reading and listening comprehension, as well as the production of written and oral texts."},
    {id : 5, name: "Italien", description: "A French class typically involves the study of the French language, including grammar, conjugation, reading and listening comprehension, as well as the production of written and oral texts."},
    {id : 5, name: "Italien", description: "A French class typically involves the study of the French language, including grammar, conjugation, reading and listening comprehension, as well as the production of written and oral texts."}

  ])

  //comportement

  //affichage

  return <div>
    
  <div class="flex justify-center bg-gray-100 py-4">
    <h1 class="text-4xl font-bold text-gray-700 text-center font-serif relative">
      List of Courses
      {/* Style du trait */}
      <div class="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-20 h-1 bg-gray-700"></div>
    </h1>
  </div>


  <ul>
  <div class="flex justify-center bg-gray-100">
    <div class="grid grid-cols-5 gap-4 mx-auto justify-items-center">
      {courses.map( (course, index) => {
        return <Course CourseInfo={course} className={index === 0 ? 'ml-4' : ''}/>
      } )}
    </div>
  </div>




  </ul>

  </div>
}