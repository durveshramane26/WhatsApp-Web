import Message from '../modal/Message.js';
import Conversation from '../modal/Conversation.js';

export const newMessage = async (request, response) => {
    try {
        const newMessage = new Message(request.body);

        await newMessage.save();
        await Conversation.findByIdAndUpdate(request.body.conversationId, { message: request.body.text });

        return response.status(200).json('message has been send successfully');

    }catch(error) {
        return response.status(500).json(error.message)

    }

}


export const getMessages = async (request, response) => {
    try {
        const messages = await Message.find({ conversationId: request.parms.id })
        return response.status(200).json(messages);

    } catch (error) {
        return response.status(500).json(error.message)
    }

}