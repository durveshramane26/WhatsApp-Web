import React from 'react'
import { useContext } from 'react'
import { AccountContext } from '../../context/AccountProvider'
import { Box, styled } from '@mui/material'

const Profile = () => {

    const { account } = useContext(AccountContext);
  return (
    <>
        <Box>
            <img src={account.picture} alt="dp" />
        </Box>
        <Box></Box>
        <Box></Box>
        <Box></Box>
    
    </>
  )
}

export default Profile