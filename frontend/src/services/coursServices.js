import axios from 'axios';
import { API_URL } from '../config/environment';

export const getCourses = async () => {
    try {
        const response = await axios.get(`${API_URL}/cours`);

        return response.data.courses;
    } catch (error) {
        console.error(error);
    }
}

export const getCourse = async (id) => {
    try {
        const response = await axios.get(`${API_URL}/cours/${id}`);
        return response.data.cours;
    } catch (error) {
        console.error(error);
    }
}

export const getCoursesOfStudent = async () => {
    const id = JSON.parse(sessionStorage.getItem("student")).id;
    console.log(id);
    try {
        const response = await axios.get(`${API_URL}/courses/student/${id}`);

        return response.data.courses;
    } catch (error) {
        console.error(error);
    }
}