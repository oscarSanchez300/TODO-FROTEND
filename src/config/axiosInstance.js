import axios from "axios";

const baseUrl = import.meta.env.VITE_BASE_URL;

export const axiosInstance = axios.create({
    baseURL : baseUrl,
    timeout: 5000, // Request timeout in milliseconds
    headers: {
        'Content-Type': 'application/json',
        // Add any other default headers here, e.g., Authorization tokens
    },
})
