// filepath: c:\Users\Akshay\Desktop\Main Projects\Retell AI\retell-ai-backend\src\services\retellChatAgent.js
import axios from 'axios';

const CHAT_API_URL = process.env.CHAT_API_URL;

export const processChatMessage = async (message) => {
    try {
        const response = await axios.post(`${CHAT_API_URL}/process`, { message });
        return response.data;
    } catch (error) {
        throw new Error('Error processing chat message: ' + error.message);
    }
};

export const getChatResponse = async (userId) => {
    try {
        const response = await axios.get(`${CHAT_API_URL}/response/${userId}`);
        return response.data;
    } catch (error) {
        throw new Error('Error fetching chat response: ' + error.message);
    }
};