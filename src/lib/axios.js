import axios from "axios";

const axiosInstance = axios.create({
	baseURL: "https://mern-ecommerce-5kdz.onrender.com/api",
	withCredentials: true, // send cookies to the server
});

export default axiosInstance;