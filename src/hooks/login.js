import { useMutation } from "@tanstack/react-query";
import { login } from "../services/api/endpoints";
import useAuthStore from "../stores/auth";
import { toast } from "react-toastify";

export function useLogin({ onSuccess = () => {}, onError = () => {} }) {
  return useMutation({
    mutationFn: login,
    onSuccess,
    onError,
  });
}
