import React, { useEffect, useState, useContext } from 'react' 
import Conversation from './Conversation'
import { Box, styled, Divider } from '@mui/material'

import { getUsers } from '../../../service/api'
import { AccountContext } from '../../../context/AccountProvider'

const Component = styled(Box) `
    height: 81vh;
    overflow: overlay;`

const StyledDivider = styled(Divider)`
    margin: 0 0 0 70px;
    background-color: #e9edef;
    opacity: 0.5;  `

const Conversations = () => {

    const [users, setUsers] = useState([]);

    const { account } = useContext(AccountContext);

    useEffect(() => {
        const fetchData = async () => {
            let response = await getUsers();
            setUsers(response);
        }
        fetchData();
    }, []);
    return (
        <Component>
            {
                users.map(user => (
                    user.email !== account.email &&
                    <>
                         <Conversation user={user} />
                         <StyledDivider />
                    </>
                   

                ))
            }
        </Component>
    )
}

export default Conversations