import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import TextField from '@mui/material/TextField';
import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Button from '@material-ui/core/Button';
import Studentservice from '../services/Studentservice';
const Addstudent=()=>{
    
    const [open, setOpen] = React.useState(true);

    const handleClose =() =>{
        setOpen(false);
    }
    const [firstName,setfirstName]=React.useState('');
    const [lastName,setlastName]=React.useState('');
    const [emailId,setEmail]=React.useState('');
    const [age,setAge]=React.useState('');
    const [gender,setGender]=React.useState('');
    const [motherName,setMotherName]=React.useState('');
    const [fatherName,setFatherName]=React.useState('');
    const [address,setAddress]=React.useState('');
    const [_class,setClass]=React.useState('');
    const [subjects,setsubjects]=React.useState('');
    const [extracurriculars,setExtraCurriculars]=React.useState('');
    const [allergies,setAllergies]=React.useState('');
    const [bloodGroup,setBloodgroup]=React.useState('');
    const [transport,setTransport]=React.useState('');
    const saveStudent=(e)=>{
        e.preventDefault();
        setOpen(false);
        const student={firstName,lastName,emailId,age,address,gender,subjects,_class,motherName,fatherName,extracurriculars,allergies,bloodGroup,transport};
        Studentservice.createStudent(student).then(response => response.data)
        .then((data)=>{
            console.log(data);
            <Dialog> 
                <DialogContent>
                    <DialogContentText>Student Added Successfully!</DialogContentText>
                </DialogContent>
            </Dialog>
        })
        };
        return(
<Dialog PaperProps={{
    style: {
      color: "#E2F8FC",
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
            type="name"
            fullWidth
            variant="standard"
            value={firstName}
            onChange={(e)=>setfirstName(e.target.value)}
          />
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Last Name"
            type="name"
            fullWidth
            variant="standard"
            value={lastName}
            onChange={(e)=>setlastName(e.target.value)}
          />
          
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Email"
            input="name"
            fullWidth
            variant="standard"
            value={emailId}
            onChange={(e)=>setEmail(e.target.value)}
          />
          <InputLabel id="demo-simple-select-filled-label">Age</InputLabel>
        <Select
          labelId="demo-simple-select-filled-label"
          id="demo-simple-select-filled-label"
          value={age}
          onChange={(e)=>setAge(e.target.value)}
          label="Age"
          fullWidth
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value={10}>10</MenuItem>
          <MenuItem value={11}>11</MenuItem>
          <MenuItem value={12}>12</MenuItem>
        </Select>
        <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Gender"
            type="name"
            fullWidth
            variant="standard"
            value={gender}
            onChange={(e)=>setGender(e.target.value)}
          />
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Mother Name"
            type="name"
            fullWidth
            variant="standard"
            value={motherName}
            onChange={(e)=>setMotherName(e.target.value)}
          />
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Father Name"
            type="name"
            fullWidth
            variant="standard"
            value={fatherName}
            onChange={(e)=>setFatherName(e.target.value)}
          />
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Address"
            input="name"
            fullWidth
            variant="standard"
            value={address}
            onChange={(e)=>setAddress(e.target.value)}
          />
            <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Standard"
            type="email"
            fullWidth
            variant="standard"
            value={_class}
            onChange={(e)=>setClass(e.target.value)}
          />
    
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Extra Cirriculars"
            input="name"
            type="email"
            fullWidth
            variant="standard"
            value={extracurriculars}
            onChange={(e)=>setExtraCurriculars(e.target.value)}
          />
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Allergies"
            type="email"
            fullWidth
            variant="standard"
            value={allergies}
            onChange={(e)=>setAllergies(e.target.value)}
          />
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Blood Group"
            type="email"
            fullWidth
            variant="standard"
            value={bloodGroup}
            onChange={(e)=>setBloodgroup(e.target.value)}
          />
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Transportation"
            type="email"
            fullWidth
            variant="standard"
            value={transport}
            onChange={(e)=>setTransport(e.target.value)}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={(e)=>saveStudent(e)}>Add Student</Button>
          
        </DialogActions>
      </Dialog>
        );
}
export default Addstudent