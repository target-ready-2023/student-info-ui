import { Card } from "@mui/material"
import * as React from 'react';
import { makeStyles } from '@material-ui/styles';
import Stack from '@mui/material/Stack';
//import Button from '@mui/material/Button';
import Button from '@material-ui/core/Button';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import IconButton from "@material-ui/core/IconButton";
import InputAdornment from "@material-ui/core/InputAdornment";
import SearchIcon from "@material-ui/icons/Search";
import AddIcon from '@mui/icons-material/Add';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import LogoutIcon from '@mui/icons-material/Logout';
import axios from 'axios';
import { useNavigate,useParams,useHistory } from "react-router-dom";
import AllStudentsTable from "../Mapping/AllStudentsTable";
import Link from '@mui/material/Link';
import Grid from "@material-ui/core";
import Addstudent from "../Mapping/AddNewStudent";



function Student() {
  const [showComponent, setShowComponent] = React.useState(false);

    const [open, setOpen] = React.useState(false);
    const handleClickOpen = () => {
        setOpen(true);
      };
     
    const handleClose =() =>{
        setOpen(false);}


    //code 
  const navigate = useNavigate();
  const [studentId, setstudentId] = React.useState("");
  const [studentData, setstudentData] = React.useState("");
  const id=2;
  
    // Function to handle changes in the text field
    const handleChange = (event) => {
      setstudentId(event.target.value);
    };
  
    // Function to handle the submission
    const handleSubmit = (event) => {
      event.preventDefault();
  
      // Construct the dynamic URL using the stored value
      const dynamicURL = `studentDetails/${studentId}`;
      navigate(dynamicURL);
  };

  const navigatee = useNavigate();

  
    const handleGetAllStudents=()=> {
      navigatee("/all-students"); // Navigate to the new page with the table
    };
 
    return (
        <Card className="App-Card">
            <h3>Student Search Page</h3>
            
            <form onSubmit={handleSubmit} style={{ display: 'flex', alignItems: 'center',justifyContent: 'center' }}>
            <TextField
            label="Enter Student ID "
            value={studentId}
            onChange={handleChange}
            />    
                       
          <Button type="submit" variant="contained" style={{ backgroundColor: '#0047AB', color: '#FFFFFF',minWidth: '40px' }} ><SearchIcon/> </Button>
        </form>           
            
        <stack direction="row" spacing={4} > 
            <Box textAlign='center' sx={{mt:'1%'}}><Button onClick={handleClickOpen} variant="contained" color="primary"> <PersonAddIcon />  Add a new student </Button></Box>
            {showComponent && <Addstudent/>}

           


        
         
            {/* <AddNew open={open} onClose={handleClose}/> */}
            <Box textAlign='center' sx={{mt:'1%'}}><Button variant="contained" color="primary" onClick={handleGetAllStudents}> Get all students </Button></Box>
            
            </stack>
            
            
        </Card>
    );
}

export default Student;