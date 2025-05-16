import api from "./api";

export async function getUsers() {
  const { data } = api.get("/usuarios");

  return data;
}

export async function createUser(body) {
  const { data } = api.post("/usuarios", body);

  return data;
}

export async function updateUser(id, body) {
  const { data } = api.put(`/usuarios/${id}`, body);

  return data;
}

export async function deleteUser(id, body) {
  const { data } = api.delete(`/usuarios/${id}`, body);

  return data;
}
