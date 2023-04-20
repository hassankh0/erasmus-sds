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
import ShopingCart from "../components/ShopingCart";
// ================================================================
const SDSApp = lazy(() => import("../layout/SDSApp"));
const index = () => {
  return (
    <Router forceRefresh={true}>
        <Suspense fallback={<LinearProgress />}>
          <Routes>
            {/* Public URL */}
            <Route path="/" element={<SDSApp />}>
            <Route index path="/home" element={<Home />} />
            <Route  path="/AllCourses" element={<TableCard />} />
            <Route  path="/Cours-Details" element={<CoursDetail />} />
            <Route path="/AllUnis" element={<ListOfUniversities />} />
            <Route path="/shopingCart" element={<ShopingCart />} />

          {/* Private URL */}
          <Route path="/Profil" element={<ProfilePage />} />

          <Route path="*" element={<Home />} />
          </Route>
        </Routes>
      </Suspense>
    </Router>
  );
};

export default index;