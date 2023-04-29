import axios from 'axios';
import { API_URL } from '../config/environment';

export const getCourses = async () => {
    try {
        const response = await axios.get(`${API_URL}/cours`);
        console.table(response.data.courses);
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

export const addCourse = async (data) => {
    try {
        const response = await axios.post(`${API_URL}/cours`, data);
        console.table(response.data.course);
        return response.data.course;
    } catch (error) {
        console.error(error);
    }
}

export const updateCourse = async (id, data) => {
    try {
        const response = await axios.put(`${API_URL}/cours/${id}`, data);
        console.table(response.data.course);
        return response.data.course;
    } catch (error) {
        console.error(error);
    }
}

export const deleteCourse = async (id) => {
    try {
        const response = await axios.delete(`${API_URL}/cours/${id}`);
        console.table(response.data.course);
        return response.data.course;
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
