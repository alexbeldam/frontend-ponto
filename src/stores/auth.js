import { create } from "zustand";
import { persist } from "zustand/middleware";
import { jwtDecode } from "jwt-decode";

const useAuthStore = create()(
  persist(
    (set) => ({
      token: null,
      usuario: null,
      setToken: (token) => {
        const { usuario } = jwtDecode(token);

        set({ usuario, token });
      },
      setUsuario: (usuario) => set({ usuario }),
      clearAuth: () => set({ token: null, usuario: null }),
    }),
    {
      name: "auth",
    }
  )
);

export default useAuthStore;
