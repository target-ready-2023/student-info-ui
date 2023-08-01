import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Typography from "@material-ui/core/Typography";
import Studentservice from "../services/Studentservice";
import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";
import { useParams } from "react-router-dom";
import Grid from "@material-ui/core/Grid";
import Tooltip from "@material-ui/core/Tooltip";
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
// import UpdateStudentDialog from "./UpdateStudentDialog";
// import DeleteStudentButton from "./DeleteStudentButton";

const StudentDetails = () => {

  const [studentData, setstudentData] = React.useState("");
  const {id}=useParams();
  const [selectedStudent, setSelectedStudent] = React.useState(null);
  React.useEffect(()=>{
    Studentservice.getStudentById(id).then(response => response.data)
    .then((data) => {
         setstudentData(data)
     });
  })
  console.log(studentData)

  const [open, setOpen] = React.useState(false);

  // const handleUpdateStudentClick = () => {
  //   setOpen(true);
  // };


  // const handleDeleteConfirmation = () => {
  //   // Call the delete action
  //   if (selectedStudent) {
  //     // Perform any additional logic before deleting the student (if needed)
  //     console.log("Deleting student with ID:", selectedStudent.id);
  //     // Optionally, you can also perform any other action after successful deletion
  //     setSelectedStudent(null); // Reset the selected student after deletion
  //   }
  // };
  return (
    <Box display="flex" flexDirection="column"  height="100vh" >
      <Typography variant="h4" style={{ textAlign: "center" }}><strong>Student Details </strong> </Typography>
      
      <Grid container alignItems="center" spacing={1}>
        <Grid item xs={12} md={6} display="flex" justifyContent="center">
          {/* Placeholder for Picture */}
          <Tooltip title={studentData.firstName} placement="top">
          <img
            src="https://via.placeholder.com/150"
            alt="Demo Picture"
            title="Demo Picture Title"
            style={{ width: "160px", height: "160px", borderRadius: "30%" ,marginLeft: "120px"}}
          />          
          </Tooltip>
          
        </Grid>
        <Grid item xs={12} md={6} style={{ marginTop: "40px" }}>
      
      <Typography variant="body1"><strong>First Name:</strong> {studentData.firstName}</Typography>
      <Typography variant="body1"><strong>Last Name:</strong> {studentData.lastName}</Typography>
      <Typography variant="body1"><strong>Age:</strong> {studentData.age}</Typography>
      <Typography variant="body1"><strong>Email:</strong> {studentData.emailId}</Typography>
      <Typography variant="body1"><strong>Class:</strong> {studentData._class}</Typography>
      <Typography variant="body1"><strong>Address:</strong> {studentData.address}</Typography>
      <Typography variant="body1"><strong>Father's Name:</strong> {studentData.fatherName}</Typography>
      <Typography variant="body1"><strong>Mother's Name:</strong> {studentData.motherName}</Typography>
      <Typography variant="body1"><strong>Blood Group:</strong> {studentData.bloodGroup}</Typography>
      <Typography variant="body1"><strong>Allergies: </strong>{studentData.allergies}</Typography>
      <Typography variant="body1"><strong>Extracurricular:</strong> {studentData.extraCurricular}</Typography>
      <Typography variant="body1"><strong>Transport:</strong> {studentData.transport}</Typography>
       </Grid>
       </Grid>
       <Box
        display="flex"
        justifyContent="flex-end"
        width="50%"
        mt={2} // Margin top for buttons
      >
         
        <Button variant="contained" color="primary" style={{ marginLeft: "10px" }} >
        <EditIcon/>
          Edit Student Details
        </Button>     
        {/* <UpdateStudentDialog open={open} setOpen={setOpen} /> */}
        
        <Button variant="contained" color="secondary" style={{ marginLeft: "10px" }}   >
          <DeleteIcon/>
          Delete Student
        </Button>
        
        
        </Box>
        </Box>
    
  );
};

export default StudentDetails;