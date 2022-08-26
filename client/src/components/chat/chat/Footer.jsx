import React from 'react'
import { Box , InputBase , styled} from '@mui/material'
import { EmojiEmotionsOutlined, AttachFile , Mic } from '@mui/icons-material/'

const Container = styled(Box)`
    height: 55px;
    background: #ededed;
    display: flex;
    `

const Footer = () => {
  return (
    <Container>
        <EmojiEmotionsOutlined />
        <AttachFile />
        <Box>
        <InputBase 
            placeholder='Type a Message'
        />
        </Box>
        <Mic />
    </Container>
  )
}

export default Footer 