import React, { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Typography from "@material-ui/core/Typography";
import Studentservice from "../services/Studentservice";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import UpdateStudentDialog from "./UpdateStudentDialog";
import { useRoleContext } from '../roles/RoleContext';

const StudentDetails = () => {
  const [studentData, setStudentData] = React.useState({});
  const { id } = useParams();
  const navigate = useNavigate();
  const [showEditDialog, setShowEditDialog] = React.useState(false);
  const [studentDeleted, setStudentDeleted] = React.useState(false);
  const { userRole, studentId } = useRoleContext(); 
  useEffect(() => {
    if (userRole === 'student') {
      Studentservice.getStudentById(studentId)
        .then((response) => {
          setStudentData(response.data);
        })
        .catch((error) => {
          console.error("Error fetching student:", error);
        });
    } else {
      Studentservice.getStudentById(id)
        .then((response) => {
          setStudentData(response.data);
        })
        .catch((error) => {
          console.error("Error fetching student:", error);
        });
    }
  }, [userRole, id, studentId]);

  const handleUpdateStudentClick = () => {
    setShowEditDialog(true);
  };

  const handleDeleteConfirmation = () => {
    Studentservice.deleteStudentById(studentData.id)
      .then((response) => {
        console.log("Student deleted successfully!", response.data);
        setStudentData({});
        setStudentDeleted(true);
      })
      .catch((error) => {
        console.error("Error deleting student:", error);
      });
  };

  return (
    <div>
      <div style={{ backgroundColor: '#cfe8fc', height: '10vh'}}>
        <h1 style={{ margin: '0px', textAlign: 'center', color: 'black', padding: '1%' }}>Student Details</h1>
      </div>
      {studentDeleted ? (
        <Typography variant="body1" style={{ textAlign: "center" }}>Details deleted successfully.</Typography>
      ) : (
        Object.keys(studentData).length > 0 ? (
          <div style={{ backgroundColor: '#cfe8fc', height: '70vh' }}>
            <div style={{ display: 'flex', width: '100%' }}>
              <div style={{ display: 'flex', alignItems: 'center', marginTop: '1%', marginLeft: '3%' }}>
                <h1>{studentData.firstName} {studentData.lastName}</h1>
              </div>
            </div>
            <div style={{ borderStyle: 'groove', height: '30vh', margin: '1%' }}>
              <div style={{ float: "left", width: "50%" }}>
                <Grid item xs={12} md={6} style={{ marginLeft: "3%", marginTop: "2%" }}>
                  <Typography variant="body1" ><strong>Student ID:</strong> {studentData.id}</Typography>
                  <Typography variant="body1" ><strong>First Name:</strong> {studentData.firstName}</Typography>
                  <Typography variant="body1"><strong>Last Name:</strong> {studentData.lastName}</Typography>
                  <Typography variant="body1"><strong>Age:</strong> {studentData.age}</Typography>
                  <Typography variant="body1"><strong>Email:</strong> {studentData.emailId}</Typography>
                  <Typography variant="body1"><strong>Class:</strong> {studentData.standard}</Typography>
                  <Typography variant="body1"><strong>Address:</strong> {studentData.address}</Typography>
                </Grid>
              </div>
              <div style={{ float: "right", width: "50%" }}>
                <Grid item xs={12} md={6} style={{ marginTop: "2%" }}>
                  <Typography variant="body1" ><strong>Father's Name:</strong> {studentData.fatherName}</Typography>
                  <Typography variant="body1" ><strong>Mother's Name:</strong> {studentData.motherName}</Typography>
                  <Typography variant="body1" ><strong>Blood Group:</strong> {studentData.bloodGroup}</Typography>
                  <Typography variant="body1" ><strong>Allergies: </strong>{studentData.allergies}</Typography>
                  <Typography variant="body1" ><strong>Extracurricular:</strong> {studentData.extraCurricular}</Typography>
                  <Typography variant="body1" ><strong>Transport:</strong> {studentData.transport}</Typography>
                </Grid>
              </div>
            </div>
            <div style={{ backgroundColor: '#cfe8fc', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            {userRole === 'student' && (
              <Button variant="contained" color="primary" style={{ backgroundColor: '#6c88c8', marginRight: '10px' }} onClick={handleUpdateStudentClick}>
                <EditIcon />
                Edit Student Details
              </Button>
            )}
            {userRole === 'admin' && (
              <div>
                <Button variant="contained" color="primary" style={{ backgroundColor: '#6c88c8', marginRight: '10px' }} onClick={handleUpdateStudentClick}>
                  <EditIcon />
                  Edit Student Details
                </Button>
                <Button variant="contained" color="secondary" style={{ backgroundColor: '#6c88c8' }} onClick={handleDeleteConfirmation}>
                  <DeleteIcon />
                  Delete Student
                </Button>
              </div>
            )}
          </div>
          {/* Update Student Dialog */}
          {showEditDialog && (
            <UpdateStudentDialog
              open={showEditDialog}
              onClose={() => setShowEditDialog(false)}
              studentId={id}
            />
          )}
          </div>
        ) : null
      )}
    </div>
  );
}

export default StudentDetails;

