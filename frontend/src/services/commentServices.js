import axios from 'axios';
import { API_URL } from '../config/environment';

export const getComments = () => {
  return axios.get(`${API_URL}/comment`)
    .then(response => response.data)
    .catch(error => {
      throw new Error(error.response.data.message);
    });
};
export const getCommentsReported = () => {
  return axios.get(`${API_URL}/commentreported`)
    .then(response => response.data)
    .catch(error => {
      throw new Error(error.response.data.message);
    });
};

export const createComment = (comment) => {
  return axios.post(`${API_URL}/comment`, comment)
    .then(response => response.data)
    .catch(error => {
      throw new Error(error.response.data.message);
    });
};

export const markCommentAsReported = (commentId) => {
  return axios.put(`${API_URL}/comment/${commentId}/mark-as-reported`)
    .then(response => response.data)
    .catch(error => {
      throw new Error(error.response.data.message);
    });
};

export const markCommentAsUnreported = (commentId) => {
  return axios.put(`${API_URL}/comment/${commentId}/mark-as-unreported`)
    .then(response => response.data)
    .catch(error => {
      throw new Error(error.response.data.message);
    });
};

export const deleteComment = (commentId) => {
  return axios.delete(`${API_URL}/comment/${commentId}`)
    .then(response => response.data)
    .catch(error => {
      throw new Error(error.response.data.message);
    });
};
