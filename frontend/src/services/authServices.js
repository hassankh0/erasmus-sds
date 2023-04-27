import axios from 'axios';
import { API_URL } from '../config/environment';

export const login = async (username, password) => {
    try {
        const response = await axios.post(`${API_URL}/auth`, {
            username: username,
            password: password
        })

        if (response.status === 200) {
            sessionStorage.setItem('student', JSON.stringify(response.data.student));
            return true;
        };
        return false;

    } catch (error) {
        return false;
    }

}

export const logout = () => {
    sessionStorage.removeItem("student");
}