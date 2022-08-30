import axios from 'axios'
const url = 'http://localhost:8000';
  
export const addUser = async  (data) => {
    try {
        await axios.post(`${url}/add`, data);

    }catch(error) {
        console.log("Error while addUser API", error.message)
    }
}

export const getUsers = async () => {
    try {
        let response = await axios.get(`${url}/users`);
        return response.data;
    }catch(error) {
        console.log("Error while calling getUsers API", error.message)
    }

     
}

export const setConversation  =  async (data) => {
    try {
        await axios.post(`${url}/conversation/add`, data);

    }catch(error) {
        console.log("Error while calling setConversation API", error.message);
    }
}


export const getConversation  =  async (data) => {
    try {
        let response = await axios.post(`${url}/conversation/get`, data);
        return response.data;

    }catch(error) {
        console.log("Error while calling setConversation API", error.message);
    }
}


export const newMessage = async (data) => {
    try {
        await axios.post(`${url}/message/add`, data);


    } catch (error) {
        console.log("Error while calling newMessage API", error.message);
    }
}
