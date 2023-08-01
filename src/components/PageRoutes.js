import { Route, Routes } from "react-router-dom"
import Student from "./Student"
import Home from "./Home"
import About from "./About"
import Contact from "./Contact"
import StudentDetails from "./Mapping/StudentDetails"
import NotFound from "./NotFound"
import AllStudentsTable from "./Mapping/AllStudentsTable"
const PageRoutes = () => {
    return (
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/student" element={<Student />} />
          <Route path="/student/studentDetails/:id" element={<StudentDetails />} />
          <Route exact path="/all-students" element={<AllStudentsTable/>} />
          <Route path='*' element={<NotFound />}/>
        </Routes>
    )
  }
  export default PageRoutes;