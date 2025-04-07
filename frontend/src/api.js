import axios from "axios";

const API = import.meta.env.VITE_API_URL; // Get API URL from .env

// Fetch Jobs
export const fetchJobs = async () => {
  try {
    const response = await axios.get(`${API}/jobs`);
    return response.data;
  } catch (error) {
    console.error("Error fetching jobs:", error);
  }
};

// User Login
export const loginUser = async (credentials) => {
  try {
    const response = await axios.post(`${API}/auth/login`, credentials, { withCredentials: true });
    return response.data;
  } catch (error) {
    console.error("Login failed:", error);
  }
};
