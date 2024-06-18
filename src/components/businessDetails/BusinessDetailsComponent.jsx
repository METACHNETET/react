//import "./BusinessDetailsComponent.css"; // Add your custom CSS file for styling
import logo from "../../assets/images/logo.gif";
import React from 'react';
import { AppBar, Toolbar, Typography } from '@mui/material';

const WebsiteHeader = () => {
  return (
    <AppBar position="static">
      <Toolbar>
        <BusinessDetailsComponent />
      </Toolbar>
    </AppBar>
  );
}

const BusinessDetailsComponent = () => {
  return (
    <>
<img src={logo} alt='logo' className="business-logo" style={{ maxWidth: '100px', maxHeight: '100px', marginRight: '10px' }}></img>
      <div style={{ display: 'block' }}>
        <Typography variant="h6" className="name"> השכרת אביזרים למסיבות </Typography>
      
      
        <Typography variant="body1" className="description">רחוב הנחל חיפה</Typography>
      
        <Typography variant="body2" className="phone">123-456-78</Typography>
      </div>
    </>
  );
}
const MainComponent = () => {
  return (
    <div>
      <WebsiteHeader />
      {/* Add the rest of your content here */}
    </div>
  );
}


export default BusinessDetailsComponent
