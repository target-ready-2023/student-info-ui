import React from 'react';
import Button from '@mui/material/Button';
import PersonAddAlt1Icon from '@mui/icons-material/PersonAddAlt1';
import SearchIcon from '@mui/icons-material/Search';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import { makeStyles } from '@mui/styles'; 
import { useNavigate } from 'react-router-dom';
import AddStudent from '../Mapping/AddNewStudent';

const useStyles = makeStyles((theme) => ({
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '58vh',
  },
  buttonContainer: {
    display: 'flex',
    alignItems: 'center',
    gap: '5%',
    width: '80%', 
    maxWidth: '800px', 
    marginTop: '1%',
    flexDirection: 'row', 
  },
  button: {
    flex: 1,
    padding: '32px',
    boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
  },
  icon: {
    marginBottom: '5%',
    color: '#6c88c8'
  },
}));

const AdminPage = () => {
  const classes = useStyles();
  const navigate = useNavigate();
  const [showAddStudent, setShowAddStudent] = React.useState(false);

  const handleAddNewStudent = () => {
    setShowAddStudent(true);
  };

  const handleSearch = () => {
    navigate('/student'); 
  };

  const handleAddStudentClose = () => {
    setShowAddStudent(false);
  };

  return (
    <div className={classes.container}>
      <Box className={classes.buttonContainer}>
        <Paper className={classes.button} elevation={3}>
          <PersonAddAlt1Icon className={classes.icon} fontSize="large" />
          <Button variant="contained" onClick={handleAddNewStudent} style={{backgroundColor: '#6c88c8'}}>
            Add New Student
          </Button>
        </Paper>
        <Paper className={classes.button} elevation={3}>
          <SearchIcon className={classes.icon} fontSize="large" />
          <Button variant="contained" onClick={handleSearch} style={{backgroundColor: '#6c88c8'}}>
            Search
          </Button>
        </Paper>
      </Box>
      {showAddStudent && <AddStudent onClose={handleAddStudentClose} />}
    </div>
  );
};

export default AdminPage;
