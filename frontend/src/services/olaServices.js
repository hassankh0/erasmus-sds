import axios from 'axios';
import { API_URL } from '../config/environment';


export const getOlas = async () => {
    const studentId = JSON.parse(sessionStorage.getItem("student")).id;
    try {
        const response = await axios.get(`${API_URL}/students/${studentId}/olas`);
        console.log(response.data);
        return response.data;
    } catch (error) {
        console.error(error);
    }
}

export const getOla = async (id) => {
    try {
        const response = await axios.get(`${API_URL}/olas/${id}`);
        console.log(response.data);
        return response.data.ola;
    } catch (error) {
        console.error(error);
    }
}

export const CreateOla = async (courses, sendingInstitution, receivingInstitution) => {

    const studentId = JSON.parse(sessionStorage.getItem("student")).id;

    try {
        const response = await axios.post(`${API_URL}/olas`, {
            student_id: studentId,
            sending_institution_name: sendingInstitution.name,
            sending_institution_responsible: sendingInstitution.responsibleName,
            sending_institution_contact: sendingInstitution.contactEmail,
            sending_institution_faculty: sendingInstitution.department,
            receiving_institution_name: receivingInstitution.name,
            receiving_institution_responsible: receivingInstitution.responsibleName,
            receiving_institution_contact: receivingInstitution.contactEmail,
            receiving_institution_faculty: receivingInstitution.department
        }
        );
        const olaId = response.data.ola.id;
        courses.map(async (cours) => {
            try {
                await axios.post(`${API_URL}/ola_cours`,{
                    o_l_a_id: olaId,
                    cours_id: cours.id
                });
                await axios.delete(`${API_URL}/carts/student/${studentId}`);
            } catch (error) {
                await axios.delete(`${API_URL}/olas/${olaId}`);
                return false;
            }
        });

        return true;
    } catch (error) {
        console.error(error);
    }
}