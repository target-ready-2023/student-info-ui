import LogoutIcon from '@mui/icons-material/Logout';
import Button from '@material-ui/core/Button';
import Box from '@mui/material/Box';
const Footer = () => {
  return (
    <>
      <footer className="App-footer">
<div style={{display:'flex',alignItems: 'center',justifyContent: 'space-between',}}>
  <div style={{marginLeft:'40%'}}><a href="/about">About US</a>
        <a  href="/contact">Contact US</a></div>

        <Box textAlign='right' sx={{mr:'3%'}}>
            <Button variant="contained" color="secondary">
            <LogoutIcon/> Logout 
            </Button>
            </Box>
</div>
        
      </footer>
    </>
  );
};
export default Footer;