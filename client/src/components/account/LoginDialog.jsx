import React from 'react'
import { Dialog, Typography, List, ListItem, Box, styled } from '@mui/material';

const dialogStyle = {
    height: '96%',
    marginTop: '12%',
    width: '60%',
    maxWidth: '100%',
    maxHeight: '100%',
    boxShadow: 'none',
    overflow: 'none'
}

const LoginDialog = () => {
  return (
    <Dialog
        open={true}
        PaperProps= {{ sx: dialogStyle }}
    >
        <Box>
            <Box>
                <Typography>To use Whatapp on your computer:</Typography>
                <List>
                    <ListItem>1. Open WhatsApp on your phone</ListItem>
                    <ListItem>2. Tap menu Setting and Select whats app web</ListItem>
                    <ListItem>3. Point your phone to this screen to capture the code</ListItem>
                </List>
            </Box>
        </Box>
    </Dialog>

    )   
}

export default LoginDialog