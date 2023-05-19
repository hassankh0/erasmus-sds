import axios from 'axios';
import { API_URL } from '../config/environment';
export const getStudents = async () => {
    try {
        const response = await axios.get(`${API_URL}/students`);
        return response.data.students;
    } catch (error) {
        console.error(error);
    }
}
export const deleteStudent = async (studentId) => {
    try {
      const response = await axios.delete(`${API_URL}/students/${studentId}`);
      console.log(response.data); // Optional: Log the response data
      return response.data; // Optional: Return the response data if needed
    } catch (error) {
      console.error(error);
    }
  };
  
export const updateStudent = async (email, phone) => {
    try {
        let student = JSON.parse(sessionStorage.getItem("student"));
        student.email = email;
        student.phone = phone;
        const response = await axios.put(`${API_URL}/students/${student.id}`, {
            firstname: student.firstname,
            lastname: student.lastname,
            username: student.username,
            email: student.email,
            nationality: student.nationality,
            phone: student.phone,
            password: student.password,
        })

        if (response.status === 200) {
            sessionStorage.setItem('student', JSON.stringify(student));
            return true;
        };
        return false;

    } catch (error) {
        return false;
    }

}