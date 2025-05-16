import Routes from "./routes";
import GlobalStyles from "./styles/GlobalStyles";
import { ConfigProvider } from "antd";
import { colors, fonts } from "./styles/styleVariables";

export default function AppProvider() {
  return (
    <ConfigProvider>
      <GlobalStyles />
      <Routes />
    </ConfigProvider>
  );
}
