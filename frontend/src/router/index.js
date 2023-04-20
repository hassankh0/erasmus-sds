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
import Login from "../pages/Auth/Login";
import Register from "../pages/Auth/Register";
// ================================================================
const SDSApp = lazy(() => import("../layout/SDSApp"));
const index = () => {
  return (
    <Router forceRefresh={true}>
        <Suspense fallback={<LinearProgress />}>
          <Routes>
            <Route path="/Login" element={<Login />} />
            <Route path="/Register" element={<Register />} />
            {/* Public URL */}
            <Route path="/" element={<SDSApp />}>
            <Route index path="/home" element={<Home />} />
            <Route  path="/AllCourses" element={<TableCard />} />
            <Route  path="/Cours-Details" element={<CoursDetail />} />
            <Route path="/AllUnis" element={<ListOfUniversities />} />
            <Route path="/shopingCart" element={<ShopingCart />} />
            <Route path="/Profile" element={<ProfilePage />} />

          <Route path="*" element={<Home />} />
          </Route>
        </Routes>
      </Suspense>
    </Router>
  );
};

export default index;