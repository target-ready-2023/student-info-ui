import { Card } from "@mui/material"
import * as React from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
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

function Student() {
    const [open, setOpen] = React.useState(false);
    const handleClickOpen = () => {
        setOpen(true);
      };
     
    const handleClose =() =>{
        setOpen(false);}




    // const [showDetails, setShowDetails] = React.useState(false);
    // const [studentId, setStudentId] = React.useState(null); // State to hold the student ID
      
    // const handleSearchClick = () => {
    //       // Here, you can fetch the student details based on your logic and set the state to show the view page.
    //       // For this example, we'll use a hardcoded student ID.
    // const studentIDToFetch = "123"; // Replace "123" with the actual student ID from your search logic
    // setStudentId(studentIDToFetch);
    // setShowDetails(true);
    //     };
      
    // const handleCloseDetails = () => {
    //     setShowDetails(false);
    // }
    ;
    return (
        <Card className="App-Card">
            <h3>Student Search Page</h3>
            <TextField
            label="Enter Student ID "
            InputProps={{
            endAdornment: (
            <InputAdornment>
            <IconButton> 
              {/* onClick={handleSearchClick} */}
            <SearchIcon />
            </IconButton>
            {/* {showDetails && <StudentDetails studentId={123} onClose={handleCloseDetails} />} */}
            </InputAdornment>
            )
            }}
            />


            <Box sx={{ position: "fixed", top: 650, right: 0, zIndex: 2000 }}>
            <Button variant="contained" color="error">
            <LogoutIcon/> Logout 
            </Button>
            </Box>


            <stack direction="row" spacing={4} > 
            <Box sx={{ ml: "40rem", mt:"3rem", width: 230 }}><Button onClick={handleClickOpen} variant="contained"> <PersonAddIcon />  Add a new student </Button></Box>
            <Dialog PaperProps={{
    style: {
      backgroundColor: "#E2F8FC",
      boxShadow: "none"
    },
  }} open={open} onClose={handleClose}>
            <DialogTitle>Student Details</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Add the details of student. 
          </DialogContentText>
          <Button
          variant="contained"
          component="label"
          >
        Upload Picture
        <input
        type="file"
        hidden
        />
        </Button>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="First Name"
            type="email"
            fullWidth
            variant="standard"
          />
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Last Name"
            type="email"
            fullWidth
            variant="standard"
          />
          
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Email Address"
            type="email"
            fullWidth
            variant="standard"
          />
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Age"
            type="email"
            fullWidth
            variant="standard"
          />
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Mobile Number"
            type="email"
            fullWidth
            variant="standard"
          />
            <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Standard"
            type="email"
            fullWidth
            variant="standard"
          />
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Subjects"
            type="email"
            fullWidth
            variant="standard"
          />
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Extra Cirriculars"
            type="email"
            fullWidth
            variant="standard"
          />
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Allergies"
            type="email"
            fullWidth
            variant="standard"
          />
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Blood Group"
            type="email"
            fullWidth
            variant="standard"
          />
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Transportation"
            type="email"
            fullWidth
            variant="standard"
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleClose}>Add Student</Button>
        </DialogActions>
      </Dialog>
            {/* <AddNew open={open} onClose={handleClose}/> */}
            <Box sx={{ ml: "40rem",   mt:"3rem", width: 230 }}><Button variant="contained"> Get all students </Button></Box>
            </stack>
            
        </Card>
    );
}
export default Student;