import React from 'react'
import { useContext } from 'react'
import { AccountContext } from '../../context/AccountProvider'
import { Box, styled } from '@mui/material'

const ImageContainer = styled(Box)`
    dipslay: flex;
    justify-content: center;
    `

const Image = styled('img') ({
    width: 200,
    height: 200,
    borderRadius:'50%',
    padding: '25px 0'

}_)

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