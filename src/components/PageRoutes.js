import React from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import Student from "./Student";
import Home from "./Home";
import About from "./About";
import Contact from "./Contact";
import StudentDetails from "./Mapping/StudentDetails";
import NotFound from "./NotFound";
import AllStudentsTable from "./Mapping/AllStudentsTable";
import AdminPage from "./Mapping/AdminPage"; 

const PageRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/student" element={<Student />} />
      <Route path="/student/studentDetails/:id" element={<StudentDetails />} />
      <Route path="/admin" element={<AdminPage />} />
      <Route path="/all-students/:classNumbers" element={<AllStudentsTable />} />
      <Route path="*" element={<NotFound />} />
      <Route path="/role-redirect" element={<Navigate to="/student" />} />
    </Routes>
  );
};

export default PageRoutes;
