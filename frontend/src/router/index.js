import React, { Suspense, lazy } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { LinearProgress } from "@mui/material";
import TableCard from "../components/TableCards";
import Home from "../pages/Home/Home";
import SideBar from "../components/SideBar";
import { SIDEBAR_DATA } from "../data/SideBarData";
<<<<<<< HEAD
import CoursDetail from "../components/CoursDetail";
=======
import ListOfUniversities from "../components/TableUniversities/listofuniversities";
>>>>>>> 3aa891a18f6c4671ef702b13d00affce5a545664
// ================================================================

const index = () => {
  return (
    <Router forceRefresh={true}>
        <Suspense fallback={<LinearProgress />}>
          <Routes>
            {/* Public URL */}
            <Route index path="/home" element={<Home />} />
<<<<<<< HEAD
            <Route  path="/AllCourses" element={<TableCard />} />
            <Route  path="/Cours-Deatils" element={<CoursDetail />} />
=======
          <Route path="/AllCourses" element={<TableCard />} />
          <Route path="/AllUnis" element={<ListOfUniversities />} />
>>>>>>> 3aa891a18f6c4671ef702b13d00affce5a545664
            <Route  path="/SideBar" element={<SideBar SIDEBAR_DATA/>} />

          </Routes>
        </Suspense>
    </Router>
  );
};

export default index;