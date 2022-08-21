import React from 'react'
import { useContext } from 'react'
import { AccountContext } from "../../../context/AccountProvider";
import { Box } from '@mui/material'

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