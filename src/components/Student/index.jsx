import React, { useState } from 'react';
import { Card, Button, Box, TextField } from "@mui/material";
import { useRoleContext } from '../roles/RoleContext';
import { useNavigate, useLocation } from "react-router-dom";
import ListItemText from '@mui/material/ListItemText';
import Checkbox from '@mui/material/Checkbox';
import {
  Stack,
  OutlinedInput,
  InputLabel,
  MenuItem,
  Chip,
  Select,
  FormControl,
} from "@mui/material";
const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};
const classes=[
1,2,3,4,5,6,7,8,9,10
];
function Student() {
  const { userRole } = useRoleContext();
  const [showComponent, setShowComponent] = useState(false);
  const [selectedClasses,setselectedClasses]=useState([]);
  const [searchResults,setSearchResults]=useState([]);
  const [studentId, setstudentId] = useState("");
  const navigate = useNavigate();
  const handleGetAllStudents = () => {
    navigate("/all-students");
  };
  const handleAddStudentClick = () => {
    setShowComponent(true);
  };

  const handleAddStudentClose = () => {
    setShowComponent(false);
  };

    const handleClassSelection=(selectedClass)=>{
      if(selectedClasses.includes(selectedClass)){
        setselectedClasses(selectedClasses.filter(cls=>cls!==selectedClass));
      }
      else{
        setselectedClasses([...selectedClasses,selectedClass]);
      }
    };
    const handleChange = (event) => {
      setstudentId(event.target.value);
    };
    const handleSubmit = () => {
      if (studentId) {
        navigate(`studentDetails/${studentId}`);
      } else if (selectedClasses.length > 0) {
        const classNumbersString = selectedClasses.join(",");
        navigate(`/all-students/${classNumbersString}`);
      }
    };
  return (

<Card className='App-Card' sx={{width:'50%',height:'50%',margin:'auto',padding:'auto',marginTop:'5%',boxShadow:4}}>
      <h3 style={{marginTop:'2%'}}>Student Search</h3>
      <div>
      <FormControl  sx={{ m: 1, width: 350 }}>
      <TextField id="outlined-basic" label="Enter Student ID" variant="outlined" onChange={handleChange}/>

      </FormControl>
      </div>
      <div><p>OR</p></div>
      <div>
      <FormControl sx={{ m: 1, width: 350 }}>
      <InputLabel id="demo-multiple-checkbox-label">Enter Class</InputLabel>
      <Select
          labelId="demo-multiple-checkbox-label"
          id="demo-multiple-checkbox"
          multiple
          value={selectedClasses}
          input={<OutlinedInput label="Enter Class" />}
          renderValue={(selected) => selected.join(', ')}
          MenuProps={MenuProps}
        >

        {classes.map((cls)=>(

          <MenuItem key={cls} value={cls} onChange={()=>handleClassSelection(cls)}>
            <Checkbox checked={selectedClasses.includes(cls)}/>
            <ListItemText primary={cls}/>
          </MenuItem>

        ))}
                  </Select>
                  </FormControl>

      </div>
      <div>
      <Button onClick={handleSubmit} type="submit" variant="contained" style={{ backgroundColor: '#6C88C8', color: '#FFFFFF',marginTop:'1%',marginBottom:'2%'}} >Search</Button>
      </div>
      </Card>


  );
          }

export default Student;