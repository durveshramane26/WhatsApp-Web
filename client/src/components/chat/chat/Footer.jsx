import React from 'react'
import { Box , InputBase , styled} from '@mui/material'
import { EmojiEmotionsOutlined, AttachFile , Mic } from '@mui/icons-material/'

const Container = styled(Box)`
    height: 55px;
    background: #ededed;
    display: flex;
    widht: 100%;
    align-items: center;
    padding: 0 15px;
    & > * {
        margin: 5px;
        color: #919191; 
    }
    `

const Search = styled(Box)`
    background-color: #FFFFFF;
    border-radius: 18px;
    width: calc(94% - 100px);

`

const Footer = () => {
  return (
    <Container>
        <EmojiEmotionsOutlined />
        <AttachFile />
        <Search>
        <InputBase 
            placeholder='Type a Message'
        />
        </Search>
        <Mic />
    </Container>
  )
}

export default Footer 