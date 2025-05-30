import api from "./api";

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

export async function deleteUser(id) {
  const { data } = await api.delete(`/usuarios/${id}`);

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

export async function deleteSession(id) {
  const { data } = await api.delete(`/sessoes/${id}`);

  return data;
}

export async function login(body) {
  const { data } = await api.post(`/login`, body);

  return data;
}
