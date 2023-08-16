import React, { useState } from 'react';
import { Card, Button, Box, TextField } from "@mui/material";
import SearchIcon from "@material-ui/icons/Search";
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import Addstudent from "../Mapping/AddNewStudent";
import { useRoleContext } from '../roles/RoleContext';
import Studentservice from '../services/Studentservice';
import { useNavigate } from "react-router-dom";


function Student() {
  const { userRole } = useRoleContext();
  const [showComponent, setShowComponent] = useState(false);

  const [studentId, setstudentId] = useState("");
  const navigate = useNavigate();

  const handleChange = (event) => {
    setstudentId(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const dynamicURL = `studentDetails/${studentId}`;
    navigate(dynamicURL);
  };

  const handleGetAllStudents = () => {
    navigate("/all-students");
  };

  const handleAddStudentClick = () => {
    setShowComponent(true);
  };

  const handleAddStudentClose = () => {
    setShowComponent(false);
  };
  return (
    <Card className="App-Card">
      <h3>Student Search Page</h3>

      <form onSubmit={handleSubmit} style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <TextField
          label="Enter Student ID "
          value={studentId}
          onChange={handleChange}
        />
        <Button type="submit" variant="contained" style={{ backgroundColor: '#6c88c8', color: '#FFFFFF', minWidth: '40px', marginLeft: '1%' }} ><SearchIcon /> </Button>
      </form>
      <Box mt={2}>
        <Box display="flex" flexDirection="row" justifyContent="center">
          {userRole === 'admin' && (
            <Box textAlign="center" sx={{ mt: "1%", mr: "15px" }}>
              <Button onClick={handleAddStudentClick} variant="contained" style={{ backgroundColor: '#6c88c8'}}>
                <PersonAddIcon /> Add a new student
              </Button>
            </Box>
          )}
          {showComponent && <Addstudent onClose={handleAddStudentClose}/>}
          <Box textAlign="center" sx={{ mt: "1%" }}>
            <Button variant="contained" style={{ backgroundColor: '#6c88c8'}} onClick={handleGetAllStudents}>
              Get all students
            </Button>
          </Box>
        </Box>
      </Box>
    </Card>
  );
}

export default Student;