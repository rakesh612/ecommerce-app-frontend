import axios from "axios";

const axiosInstance = axios.create({
	baseURL: import.meta.mode === "development" ? "https://mern-ecommerce-5kdz.onrender.com/api" : "https://mern-ecommerce-5kdz.onrender.com/api",
	withCredentials: true, // send cookies to the server
});

export default axiosInstance;