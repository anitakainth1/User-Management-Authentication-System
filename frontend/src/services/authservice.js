import axios from "axios";

const API = "http://localhost:7860/api/auth";

export const registerUser = (userData) => {
  return axios.post(`${API}/register`, userData);
};

export const loginUser = (userData) => {
  return axios.post(`${API}/login`, userData);
};

export const getProfile = (token) => {
  return axios.get(`${API}/profile`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};