import Routes from "./routes";
import GlobalStyles from "./styles/GlobalStyles";
import { ConfigProvider } from "antd";
import { jwtDecode } from "jwt-decode";
import useAuthStore from "./stores/auth";

export default function AppProvider() {
  const { token, clearAuth } = useAuthStore((state) => state);

  if (token) {
    try {
      const decoded = jwtDecode(token);
      const currentTime = Date.now() / 1000;

      if (decoded.exp < currentTime) clearAuth();
    } catch (error) {
      clearAuth();
    }
  }

  return (
    <ConfigProvider>
      <GlobalStyles />
      <Routes />
    </ConfigProvider>
  );
}
