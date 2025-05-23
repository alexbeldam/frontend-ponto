import axios from "axios";
import useAuthStore from "../../stores/auth";

const baseURL = `${import.meta.env.VITE_BACKEND_URL}`;

const api = axios.create({ baseURL });

api.interceptors.request.use(
  (req) => {
    const { token } = useAuthStore.getState();

    if (!req.headers.Authorization && token) req.headers.Authorization = `Bearer ${token}`;

    return req;
  },
  (error) => Promise.reject(error)
);

export default api;
