import { useContext } from 'react'
import { Box , Typography, styled } from '@mui/material'
import { formateDate } from '../../../utils/common-utils'
import { AccountContext } from '../../../context/AccountProvider'
import GetAppIcon  from '@mui/icons-material/GetApp';
import { iconPDF } from '../../../constants/data'


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
            {
              message.type === 'file' ?  <ImageMessage message={message} /> : <Textmessage message={ message } />
            }
          </Wrapper>
        
      }
    </>
  )
}

const ImageMessage  = ({ message }) => {
  return (
    <Box style={{ position: 'relative'}}>
       {
          message?.text?.includes('.pdf') ?
            <Box style={{ display: 'flex' }}>
              <img src={iconPDF} alt='pdf' style={{ width: 80}}/>
              <Typography style={{ fontsize: 14}}>{message.text.split('/').pop()}</Typography>
            </Box>
          : 
          <img style={{ width: 300, height: '100%', objectFit:'cover' }} src={message.text} alt={message.text}  />  
       }
       <Time style={{ postion: 'absolute', bottom: 0, right: 0}}>
          <GetAppIcon 
            style={{ marginRight: 10, border: '1px solid grey', borderRadius: '50%' }}
            fontSize='small'
          
          />
          
          {formateDate(message.createdAt)}</Time>

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