
import { useState } from "react";
import Course from "./course";
//Export du composant
export default function ListofCourse() {

 //state
 const [courses, setCourses] = useState([
    {id : 1, name: "EILCO", description: "Ecole du Littoral Cote d'Opale, the obecjective of the school is to teach some form of engeneering. ", country: "France", city: "Calais"},
    {id : 2, name: "Polytechnique Poznan", description: "Ecole du Littoral Cote d'Opale, the obecjective of the school is to teach some form of engeneering.Ecole du Littoral Cote d'Opale, the obecjective of the school is to teach some form of engeneering.", country: "Poland", city: "Poznan"},
    {id : 3, name: "Polytechnique Paris", description: "Ecole du Littoral Cote d'Opale, the obecjective of the school is to teach some form of engeneering.Ecole du Littoral Cote d'Opale, the obecjective of the school is to teach some form of engeneering.", country: "France", city: "Paris"},
    {id : 4, name: "ULCO", description: "Ecole du Littoral Cote d'Opale, the obecjective of the school is to teach some form of engeneering.Ecole du Littoral Cote d'Opale, the obecjective of the school is to teach some form of engeneering.", country: "France", city: "Calais"},
    {id : 5, name: "EILCO", description: "Ecole du Littoral Cote d'Opale, the obecjective of the school is to teach some form of engeneering.Ecole du Littoral Cote d'Opale, the obecjective of the school is to teach some form of engeneering.", country: "France", city: "Calais"},
    {id : 5, name: "EILCO", description: "Ecole du Littoral Cote d'Opale, the obecjective of the school is to teach some form of engeneering.Ecole du Littoral Cote d'Opale, the obecjective of the school is to teach some form of engeneering.", country: "France", city: "Calais"}

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