import axios from "axios";

const baseURL = `${import.meta.env.VITE_BACKEND_URL}`;

const api = axios.create({ baseURL });

api.interceptors.response.use(
  (response) => response,
  (error) => {
    const { response } = error;

    if (response) {
      const { status, data } = response;

      return Promise.reject({
        status,
        message: data.message || "Lascou-se",
        error: data.error || "Lascou-se",
      });
    }

    return Promise.reject({
      status: null,
      message: "Erro de rede ou sem resposta do servidor",
    });
  }
);

export default api;
