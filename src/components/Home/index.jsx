import React from "react";
import { FormControl, InputLabel, Select, MenuItem, Button } from "@mui/material";
import { useRoleContext } from '../roles/RoleContext';

const RoleSelection = () => {
  const { userRole, setUserRole } = useRoleContext();
  const [selectedRole, setSelectedRole] = React.useState('');

  const handleRoleChange = (event) => {
    setSelectedRole(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setUserRole(selectedRole);
  };

  const handleReset = () => {
    setSelectedRole('');
    setUserRole(''); // Clear the userRole context state on reset
  };

  return (
    <div style={{ textAlign: 'center', marginBottom: '20px' }}>
      <h3>Select Your Role:</h3>
      <form onSubmit={handleSubmit}>
        <FormControl style={{width:'20%'}}>
          <InputLabel id="role-select-label">Select a Role</InputLabel>
          <Select
            labelId="role-select-label"
            id="role-select"
            value={selectedRole}
            onChange={handleRoleChange}
          >
            <MenuItem value="">Select a role</MenuItem>
            <MenuItem value="admin">Admin</MenuItem>
            <MenuItem value="student">Student</MenuItem>
          </Select>
        </FormControl>
        <div style={{ marginTop: '1%', display: 'flex', justifyContent: 'center' }}>
          <Button type="submit" variant="contained" style={{ marginRight: '2%', backgroundColor: '#6c88c8' }}>Submit</Button>
          <Button type="button" onClick={handleReset} variant="contained" style={{ backgroundColor: '#6c88c8' }}>Reset</Button>
        </div>
      </form>
    </div>
  );
};

export default RoleSelection;
