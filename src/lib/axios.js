import axios from "axios";

const axiosInstance = axios.create({
	baseURL: import.meta.mode === "development" ? "https://mern-ecommerce-5kdz.onrender.com" : "https://mern-ecommerce-5kdz.onrender.com",
	withCredentials: true, // send cookies to the server
});

export default axiosInstance;