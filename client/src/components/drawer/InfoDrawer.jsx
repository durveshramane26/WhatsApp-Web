import React from 'react'
import { Drawer } from '@mui/material' 

const InfoDrawer = ({ open, setOpen}) => {
  

    const  handleClose = () => {
        setOpen(false);
    }


    return (
        <Drawer
            open={open}
            onClose={handleClose}
        >
            Hello

        </Drawer>
    )
}

export default InfoDrawer