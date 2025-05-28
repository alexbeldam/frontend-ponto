import Routes from "./routes";
import GlobalStyles from "./styles/GlobalStyles";
import { ConfigProvider } from "antd";

export default function AppProvider() {
  return (
    <ConfigProvider>
      <GlobalStyles />
      <Routes />
    </ConfigProvider>
  );
}
