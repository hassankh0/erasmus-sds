import axios from 'axios';
import { API_URL } from '../config/environment';

export const getUniversities = async () => {
    try {
        const response = await axios.get(`${API_URL}/universities`);
        return response.data.universities;
    } catch (error) {
        console.error(error);
    }
}
