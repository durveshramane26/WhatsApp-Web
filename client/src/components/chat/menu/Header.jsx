import React from 'react'
import { useContext } from 'react'
import { AccountContext } from "../../../context/AccountProvider";
import { Box, styled } from '@mui/material'


const Component = styled(Box)`
    height: 44px;
    background: #ededed;
    padding: 8px; 16px;

`

const Image = styled('img') ({
    height: 40,
    width: 40,
    borderRadius: '50%'
    

})

const Header = () => {

    const { account } = useContext(AccountContext);

  return (
    <>
        <Box>
            <img src={account.picture} alt="dp" />
        </Box>
    </>
    
  )
}

export default Header