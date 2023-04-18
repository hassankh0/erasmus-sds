import React, { Suspense, lazy } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { LinearProgress } from "@mui/material";
import TableCard from "../components/TableCards";
import Home from "../pages/Home/Home";
import SideBar from "../components/SideBar";
import { SIDEBAR_DATA } from "../data/SideBarData";
import CoursDetail from "../components/CoursDetail";
import ListOfUniversities from "../components/TableUniversities/listofuniversities";
import ProfilePage from "../components/ProfilPage/profil";
// ================================================================

const index = () => {
  return (
    <Router forceRefresh={true}>
        <Suspense fallback={<LinearProgress />}>
          <Routes>
            {/* Public URL */}
            <Route index path="/home" element={<Home />} />
            <Route  path="/AllCourses" element={<TableCard />} />
            <Route  path="/Cours-Deatils" element={<CoursDetail />} />
          <Route path="/AllCourses" element={<TableCard />} />
          <Route path="/AllUnis" element={<ListOfUniversities />} />
            <Route  path="/SideBar" element={<SideBar content={Home}/>} />

          {/* Private URL */}
          <Route path="/Profil" element={<ProfilePage />} />

        </Routes>
      </Suspense>
    </Router>
  );
};

export default index;