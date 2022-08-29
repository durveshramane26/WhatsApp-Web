import React, { useEffect } from 'react'
import { Box } from '@mui/material'
import ChatHeader from './ChatHeader'
import Messages from './Messages'
import { useContext } from 'react'
import { AccountContext } from '../../../context/AccountProvider'
 

const ChatBox = () => {

  const { person, account } = useContext(AccountContext)

  useEffect(() => {
    const getConversationDetails = async () => {
      let data = await getConversation({ senderId: account.email, reveiverId: person.email })
    }
    getConversationDetails();

  },[]);

  return (
    <Box>
        <ChatHeader person={person} />
        <Messages person={person} /> 
    </Box>
  )
}


export default ChatBox