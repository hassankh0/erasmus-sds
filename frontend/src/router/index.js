import React, { Suspense, lazy } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { LinearProgress } from "@mui/material";
import TableCard from "../components/TableCards";
import Home from "../pages/Home/Home";
import SideBar from "../components/SideBar";
import { SIDEBAR_DATA } from "../data/SideBarData";
// ================================================================

const index = () => {
  return (
    <Router forceRefresh={true}>
        <Suspense fallback={<LinearProgress />}>
          <Routes>
            {/* Public URL */}
            <Route index path="/home" element={<Home />} />
            <Route  path="/AllCourses" element={<TableCard />} />
            <Route  path="/SideBar" element={<SideBar SIDEBAR_DATA/>} />

          </Routes>
        </Suspense>
    </Router>
  );
};

export default index;