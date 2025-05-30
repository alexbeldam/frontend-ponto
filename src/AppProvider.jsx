import Routes from "./routes";
import GlobalStyles from "./styles/GlobalStyles";
import { ConfigProvider } from "antd";
import { jwtDecode } from "jwt-decode";
import useAuthStore from "./stores/auth";
import { logout } from "./utils/logout";

export default function AppProvider() {
  const { token } = useAuthStore((state) => state);

  if (token) {
    try {
      const decoded = jwtDecode(token);
      const currentTime = Date.now() / 1000;

      if (decoded.exp < currentTime) logout("Sessão expirada.");
    } catch (error) {
      logout("Sessão expirada.");
    }
  }

  return (
    <ConfigProvider>
      <GlobalStyles />
      <Routes />
    </ConfigProvider>
  );
}
