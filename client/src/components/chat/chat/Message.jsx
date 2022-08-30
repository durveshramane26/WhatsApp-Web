import React from 'react'
import { Box , Typography, styled } from '@mui/material'

const Own = styled(Message)`
    background: #dcf8c6;
    max-width: 50%;
    margin-left: auto;
    padding: 5px;
    width: fit-content;
    display: flex;
    border-radius: 10px;
    word-break: break-word;`

const Wrapper = styled(Box)`
    background: #dcf8c6;
    max-width: 60%;
    padding: 5px;
    width: fit-content;
    display: flex;
    border-radius: 10px;
    word-break: break-word;`




const Message = ({ message }) => {
  return (
    <Own>
        <Typography>{message.text}</Typography>
        <Typography>{message.createdAt}</Typography>
    </Own>
  )
}

export default Message