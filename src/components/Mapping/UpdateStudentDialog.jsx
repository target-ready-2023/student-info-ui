import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import TextField from "@material-ui/core/TextField";
import axios from "axios";
import Studentservice from "../services/Studentservice";
import { useNavigate, useParams } from "react-router-dom";
const UpdateStudentDialog = () => {
  const navigate= useNavigate();
  const [open, setOpen] = useState(true);
  const {id}=useParams();
  const [updatedStudent, setUpdatedStudent] = useState({});
  React.useEffect(()=>{
    Studentservice.getStudentById(id).then(response => response.data)
  .then((data) => {
       setUpdatedStudent(data)
   });
  },[])
  const handleUpdateDetails = (event) => {
    event.preventDefault();
    // Make an API call using Axios to update the student details
    // Replace the API_ENDPOINT with your actual API endpoint for updating a student
    console.log(updatedStudent);
    Studentservice.updateStudent(id,updatedStudent)
    
    .then((response) => {
      // Handle successful response, e.g., show a success message
      console.log("Student details updated successfully!", response.data);

      // Close the dialog box after successful update
      setOpen(false);
      // navigate('students'+'/'+{id});
      window.location.reload();
    })
    .catch((error) => {
      // Handle error, e.g., show an error message
      console.error("Error updating student details:", error);
    });
    setOpen(false);
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setUpdatedStudent((updatedStudent) => ({
      ...updatedStudent,
      [name]: value,
    }));
  };

  return (
    <div>
      <form onSubmit={handleUpdateDetails}>
      <Dialog open={open} onClose={() => setOpen(false)}>
        <DialogTitle>Update Student Details</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Update the details of the student.
          </DialogContentText>
          {/* Add input fields for the updated student details */}
          <TextField
            label="First Name"
            name="firstName"
            value={updatedStudent.firstName}
            onChange={handleInputChange}
            fullWidth
          />
          <TextField
            label="Last Name"
            name="lastName"
            value={updatedStudent.lastName}
            onChange={handleInputChange}
            fullWidth
          />
          <TextField
            label="Address"
            name="address"
            value={updatedStudent.address}
            onChange={handleInputChange}
            fullWidth
          />
          {/* Add other input fields for other student details */}
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setOpen(false)}>Cancel</Button>
          <Button type="submit" onClick={(e)=>handleUpdateDetails(e)} color="primary">Update</Button>
        </DialogActions>
      </Dialog>
      </form>
    </div>
  );
};

export default UpdateStudentDialog;