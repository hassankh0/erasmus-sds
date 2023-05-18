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

export const addCourse = async (data) => {
    try {
        const response = await axios.post(`${API_URL}/cours`, data);
        console.table(response.data);
        return response.data;
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

export const addCoursesToStudent = async (coursId) => {
    const studentId = JSON.parse(sessionStorage.getItem("student")).id;
    try {
        const response = await axios.post(`${API_URL}/carts`, {
            student_id: studentId,
            cours_id: coursId
        });

        return response.data.course;
    } catch (error) {
        console.error(error);
    }
}

export const removeCoursesOfStudent = async (coursId) => {
    const studentId = JSON.parse(sessionStorage.getItem("student")).id;
    try {
        const response = await axios.delete(`${API_URL}/courses/student/${studentId}/${coursId}`);

        return response.data.course;
    } catch (error) {
        console.error(error);
    }
}

export const addCommentToCourse = async (courseId, commentText, commentRating) => {
    const studentId = JSON.parse(sessionStorage.getItem("student")).id;
    try {
        const response = await axios.post(`${API_URL}/comment`, {
            student_id: studentId,
            cours_id: courseId,
            content: commentText,
            rate: commentRating
        });
        return response.status;
    } catch (error) {
        console.error(error);
    }
}