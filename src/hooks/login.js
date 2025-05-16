import { useMutation } from "@tanstack/react-query";
import { login } from "../services/api/endpoints";

export function useLogin({ onSuccess = () => {}, onError = () => {} }) {
  return useMutation({
    mutationFn: login,
    onSuccess,
    onError,
  });
}
