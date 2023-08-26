import React, { useState } from 'react';
import { FormControl, InputLabel, Select, MenuItem, Button, Input } from "@mui/material";
import { useRoleContext } from '../roles/RoleContext';
import { useNavigate } from 'react-router-dom';

const RoleSelection = () => {
  const { userRole, setUserRole, studentId, setStudentId } = useRoleContext();
  const [selectedRole, setSelectedRole] = useState('');
  const navigate = useNavigate();

  const handleRoleChange = (event) => {
    setSelectedRole(event.target.value);
    setStudentId(''); 
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setUserRole(selectedRole);

    if (selectedRole === 'admin') {
      navigate('/admin'); 
    } else if (selectedRole === 'student') {
      navigate(`/student/studentDetails/${studentId}`);
    } else {
      navigate('/student');
    }
  };

  const handleReset = () => {
    setSelectedRole('');
    setUserRole('');
    setStudentId(''); 
  };

  return (
    <div style={{ textAlign: 'center', marginBottom: '20px' }}>
      <h3>Select Your Role:</h3>
      <form onSubmit={handleSubmit}>
        <FormControl style={{ width: '20%' }}>
          <InputLabel id="role-select-label"></InputLabel>
          <Select
            labelId="role-select-label"
            id="role-select"
            value={selectedRole}
            onChange={handleRoleChange}
          >
            <MenuItem value="admin">Admin</MenuItem>
            <MenuItem value="student">Student</MenuItem>
            <MenuItem value="teacher">Teacher</MenuItem>
          </Select>
        </FormControl>
        <div style={{ marginTop: '1%', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          {selectedRole === 'student' && (
            <FormControl style={{ width: '20%', marginTop: '1%' }}>
              <InputLabel htmlFor="student-id">Student ID</InputLabel>
              <Input
                id="student-id"
                value={studentId}
                onChange={(event) => setStudentId(event.target.value)}
              />
            </FormControl>
          )}
          <div style={{ marginTop: '1%', display: 'flex', justifyContent: 'center' }}>
            <Button type="submit" variant="contained" style={{ marginRight: '2%', backgroundColor: '#6c88c8' }}>Submit</Button>
            <Button type="button" onClick={handleReset} variant="contained" style={{ backgroundColor: '#6c88c8' }}>Reset</Button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default RoleSelection;
