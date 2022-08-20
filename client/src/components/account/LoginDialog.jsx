import React from 'react'
import { Dialog, Typography, List, ListItem, Box, styled } from '@mui/material';
import { qrCodeImage } from '../../constants/data';
import { GoogleLogin } from '@react-oauth/google';

const Component = styled(Box)`
  display: flex;
`;

const Container = styled(Box)`
  padding: 56px 0 56px 56px;
`;

const QRCode = styled('img')({
    height: 264,
    width: 264,
    margin: '50px 0 0 50px'
});

const StyledList = styled(List)`
  & > li {
    padding: 0;
    margin-top: 15px;
    font-size: 18px;
    line-height: 28px;
    color: #4a4a4a;
  }
  `

const Title = styled(Typography)`
  font-size: 26px;
  color: #525252;
  font-Weight: 300;
  font-family: inherit;
  margin-bottom: 25px;
  `;

const dialogStyle = {
    height: '96%',
    marginTop: '12%',
    width: '60%',
    maxWidth: '100%',
    maxHeight: '100%',
    boxShadow: 'none',
    overflow: 'hidden'
}

const LoginDialog = () => {

  const onLoginSuccess = (res) => {
    console.log(res);

  }

  const onLoginError = (res) => {
    console.log('Loging Failed', res);

  }



  return (
    <Dialog
        open={true}
        PaperProps= {{ sx: dialogStyle }}
    >
        <Component>
            <Container>
                <Title>To use Whatapp on your computer:</Title>
                <StyledList>
                    <ListItem>1. Open WhatsApp on your phone</ListItem>
                    <ListItem>2. Tap menu Setting and Select whats app web</ListItem>
                    <ListItem>3. Point your phone to this screen to capture the code</ListItem>
                </StyledList>
            </Container>
            <Box style = {{ position: 'relative'}}>
                <QRCode src={qrCodeImage} alt="qr code" />
                <Box style={{ position: 'absolute', top: '50%',transform: 'translateX(25%)' }}>
                    <GoogleLogin 
                        onSuccess={onLoginSuccess}
                        onError={onLoginError}
                    />
                </Box>
            </Box>
        </Component>
    </Dialog>

    )   
}

export default LoginDialog