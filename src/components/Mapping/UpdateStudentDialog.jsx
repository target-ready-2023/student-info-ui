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
    console.log(updatedStudent);
    Studentservice.updateStudent(id,updatedStudent)
    
    .then((response) => {
      console.log("Student details updated successfully!", response.data);
      setOpen(false);
      window.location.reload();
    })
    .catch((error) => {
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

  const handleClose =() =>{
    setOpen(false);
    window.location.reload();
}

  return (
    <div>
      <form onSubmit={handleUpdateDetails}>
      <Dialog open={open} onClose={() => setOpen(false)}>
        <DialogTitle>Update Student Details</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Update the details of the student.
          </DialogContentText>
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
        </DialogContent>
        <DialogActions>
          <Button onClick={() => { handleClose() }}>Cancel</Button>
          <Button type="submit" onClick={(e)=>handleUpdateDetails(e)} >Update</Button>
        </DialogActions>
      </Dialog>
      </form>
    </div>
  );
};

export default UpdateStudentDialog;