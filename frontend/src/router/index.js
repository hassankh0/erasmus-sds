import React, { Suspense, lazy } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { LinearProgress } from "@mui/material";
import TableCard from "../components/TableCards";
import Home from "../pages/Home/Home";
import CoursDetail from "../components/CoursDetail";
import ListOfUniversities from "../components/TableUniversities/listofuniversities";
import ProfilePage from "../components/ProfilPage/profil";
import CoursesCart from "../components/CoursesCart";
import Login from "../pages/Auth/Login";
import Register from "../pages/Auth/Register";
import AddCourse from "../components/AddCourse";
import TableCourses from "../components/TableCourses";
import EditCourse from "../components/EditCourse";
import ForgotPassword from "../pages/Auth/ForgotPassword";
import AddStudent from "../components/AddStudent";
import TableStudents from "../components/TableStudent";
import EditStudent from "../components/EditStudent";
// ================================================================
const SDSApp = lazy(() => import("../layout/SDSApp"));
const index = () => {
  return (
    <Router forceRefresh={true}>
        <Suspense fallback={<LinearProgress />}>
          <Routes>
            <Route path="/Login" element={<Login />} />
            <Route path="/Register" element={<Register />} />
            <Route path="/ForgotPassword" element={<ForgotPassword/>}/>
            {/* Public URL */}
            <Route path="/" element={<SDSApp />}>
            <Route index path="/home" element={<Home />} />
            <Route  path="/AllCourses" element={<TableCard />} />
            <Route  path="/Cours-Details/:coursId" element={<CoursDetail />} />
            <Route path="/AllUnis" element={<ListOfUniversities />} />
            <Route path="/shopingCart" element={<CoursesCart />} />
            <Route path="/Profile" element={<ProfilePage />} />
            <Route path="/Add-Course" element={<AddCourse/>}/>
            <Route path="/TableCourses" element={<TableCourses/>} />
            <Route path="/editCourse/:id" element={<EditCourse/>}/>
            <Route path="/AddStudent" element={<AddStudent/>}/>
            <Route path="/TableStudents" element={<TableStudents/>} />
            <Route path="/editStudent/:id" element={<EditStudent/>}/>
          <Route path="*" element={<Home />} />
          </Route>
        </Routes>
      </Suspense>
    </Router>
  );
};

export default index;