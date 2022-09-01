import { useContext } from 'react'
import { Box , Typography, styled } from '@mui/material'
import { formateDate } from '../../../utils/common-utils'
import { AccountContext } from '../../../context/AccountProvider'


const Own = styled(Box)`
    background: #dcf8c6;
    max-width: 60%;
    margin-left: auto;
    padding: 5px;
    width: fit-content;
    display: flex;
    border-radius: 10px;
    word-break: break-word;`

const Wrapper = styled(Box)`
    background: #FFFFFF;
    max-width: 60%;
    padding: 5px;
    width: fit-content;
    display: flex;
    border-radius: 10px;
    word-break: break-word;`

const Text = styled(Typography)`
    font-size: 14px;
    padding: 0 25px 0 5px;`

const Time = styled(Typography)`
    font-size: 10px;
    color: #919191;
    margin-top: 6px;
    word-break: keep-all;
    margin-top: auto;`
    




const Message = ({ message }) => {

  const { account } = useContext(AccountContext);


  return (
    <>
      {
        account.email === message.senderId ? 
          <Own>
            {
              message.type === 'file' ?  <ImageMessage message={message} /> : <Textmessage message={ message } />
            }
          </Own>
        :
          <Wrapper>
            <Text>{message.text}</Text>
            <Time>{formateDate(message.createdAt)}</Time>
          </Wrapper>
        
      }
    </>
  )
}

const ImageMessage  = ({ message }) => {
  return (
    <Box>
       {
          message?.text?.includes('.pdf') ?
            <Box>

            </Box>
          : 
          <img src={message.text} alt={message.text}  />
            
       }
    </Box>
  )
}

const Textmessage = ({ message }) => {
  return (
    <>
       <Text>{message.text}</Text>
       <Time>{formateDate(message.createdAt)}</Time>
    </>
  )

}

export default Message