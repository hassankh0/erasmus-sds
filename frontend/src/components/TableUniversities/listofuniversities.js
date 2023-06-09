import { useEffect, useState } from "react";
import UniversityCard from "../UniversityCard/universityCard";

import * as universityServices from "../../services/universityServices";

//Export du composant
export default function ListOfUniversities() {

  //state
  const [universities, setUniversities] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredUniversities, setFilteredUniversities] = useState([]);

  const fetchUniversities = async () => {
    const data = await universityServices.getUniversities();
    setUniversities(data);
  }

  useEffect(() => {
    fetchUniversities();
  }, []);

  useEffect(() => {
    const filteredUniversities = universities.filter((university) =>
      university.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredUniversities(filteredUniversities);
  }, [searchTerm, universities]);

  //comportement

  //affichage

  return <div>

<div className="bg-dark-100 py-4">
  <h1 className="text-4xl font-bold text-black text-center font-serif relative container mx-auto">
    List of Universities
    {/* Style du trait */}
    <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-20 h-1 bg-black"></div>
  </h1>
  <input 
    type="text" 
    placeholder="Search universities" 
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

<ul>
  <div className="bg-gray-100">
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mx-auto justify-items-center container px-4 md:px-0">
      {filteredUniversities.map((university, index) => {
        return <UniversityCard CourseInfo={university} className={index === 0 ? 'ml-4' : ''} />
      })}
    </div>
  </div>
</ul>


  </div>

}