import LogoutIcon from '@mui/icons-material/Logout';
import Button from '@material-ui/core/Button';
import Box from '@mui/material/Box';
const Footer = () => {
  return (
    <>
      <footer className="App-footer">

        <a href="/about">About US</a>
        <a href="/contact">Contact US</a>
        <Box textAlign='right' sx={{mr:'3%'}}>
            <Button variant="contained" color="secondary">
            <LogoutIcon/> Logout 
            </Button>
            </Box>
      </footer>
    </>
  );
};
export default Footer;