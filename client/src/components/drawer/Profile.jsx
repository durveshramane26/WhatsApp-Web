import React from 'react'
import { useContext } from 'react'
import { AccountContext } from '../../context/AccountProvider'
import { Box, styled } from '@mui/material'

const ImageContainer = styled(Box)`
    display: flex;
    justify-content: center;
    `

const Image = styled('img') ({
    width: 200,
    height: 200,
    borderRadius:'50%',
    padding: '25px 0'

})

const Profile = () => {

    const { account } = useContext(AccountContext);
  return (
    <>
        <ImageContainer>
            <Image src={account.picture} alt="dp" />
        </ImageContainer>
        <Box></Box>
        <Box></Box>
        <Box></Box>
    
    </>
  )
}

export default Profile