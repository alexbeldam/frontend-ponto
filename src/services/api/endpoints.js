import api from "./api";
import useAuthStore from "../../stores/auth";

export async function getUsers() {
  const { data } = await api.get("/usuarios");

  return data;
}

export async function createUser(body) {
  const { data } = await api.post("/usuarios", body);

  return data;
}

export async function updateUser(id, body) {
  const { data } = await api.put(`/usuarios/${id}`, body);

  return data;
}

export async function deleteUser(id, body) {
  const { data } = await api.delete(`/usuarios/${id}`, body);

  return data;
}

export async function getSessions() {
  const { data } = await api.get("/sessoes");

  return data;
}

export async function createSession(body) {
  const { data } = await api.post("/sessoes", body);

  return data;
}

export async function deleteSession(id, body) {
  const { data } = await api.delete(`/sessoes/${id}`, body);

  return data;
}

export async function login(body) {
  const { setToken } = useAuthStore.getState();
  const { data } = await api.post(`/login`, body);
  const { token } = data;

  setToken(token);

  return data;
}
