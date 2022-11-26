import React from 'react'
import Backdrop from '@mui/material/Backdrop';
import Button from '@mui/material/Button';
import LoadingCard from './LoadingCard';

export default function SimpleBackdrop() {
    const [open, setOpen] = React.useState(true);
    const handleClose = () => {
      setOpen(false);
    };
    const handleToggle = () => {
      setOpen(!open);
    };
  
    return (
      <div>
        <Backdrop
          sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
          open={open}
          onClick={handleClose}
        >
          {/* <CircularProgress color="inherit" /> */}
          <LoadingCard onClick={handleToggle} />
          {/* <Button onClick={handleToggle}>Hide backdrop</Button> */}
        </Backdrop>
      </div>
    );
  }



