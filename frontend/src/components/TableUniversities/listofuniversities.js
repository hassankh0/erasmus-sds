
import { useEffect, useState } from "react";
import UniversityCard from "../UniversityCard/universityCard";

import * as universityServices from "../../services/universityServices";

//Export du composant
export default function ListOfUniversities() {

  //state
  const [universities, setUniversities] = useState([]);

  const fetchUniversities = async () => {
    const data = await universityServices.getUniversities();
    setUniversities(data);
  }

  useEffect(() => {
    fetchUniversities();
    console.log(universities)
  }, []);

  //comportement

  //affichage

  return <div>

<div class="bg-dark-100 py-4">
  <h1 class="text-4xl font-bold text-black text-center font-serif relative container mx-auto">
    List of Courses
    {/* Style du trait */}
    <div class="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-20 h-1 bg-black"></div>
  </h1>
</div>

<ul>
  <div class="bg-gray-100">
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mx-auto justify-items-center container px-4 md:px-0">
      {universities.map((course, index) => {
        return <UniversityCard CourseInfo={course} className={index === 0 ? 'ml-4' : ''} />
      })}
    </div>
  </div>
</ul>


  </div>
}