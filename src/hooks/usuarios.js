import { useQuery, useMutation } from "@tanstack/react-query";
import { getUsers, createUser, updateUser, deleteUser } from "../services/api/endpoints";

export function useGetUsers({ onSuccess = () => {}, onError = () => {} }) {
  return useQuery({
    queryKey: ["usuarios"],
    queryFn: getUsers,
    onSuccess,
    onError,
  });
}

export function useCreateUser({ onSuccess = () => {}, onError = () => {} }) {
  return useMutation({
    mutationFn: createUser,
    onSuccess,
    onError,
  });
}

export function useUpdateUser({ onSuccess = () => {}, onError = () => {} }) {
  return useMutation({
    mutationFn: ({ id, dados }) => updateUser(id, dados),
    onSuccess,
    onError,
  });
}

export function useDeleteUser({ onSuccess = () => {}, onError = () => {} }) {
  return useMutation({
    mutationFn: deleteUser,
    onSuccess,
    onError,
  });
}
