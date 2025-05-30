import useAuthStore from "../stores/auth";
import { toast } from "react-toastify";

export function logout(message) {
  useAuthStore.getState().clearAuth();
  if (message) toast.error(message);
}
