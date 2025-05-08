import Routes from "./routes";
import GlobalStyles from "./styles/GlobalStyles";
import { ConfigProvider } from "antd";
import { colors, fonts } from "./styles/styleVariables";

export default function AppProvider() {
  return (
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: colors.blue.accent,
          colorBgContainer: colors.blue.background,
          colorText: colors.white,
          fontFamily: fonts.Exo2,
          fontSize: "15px",
        },
      }}
    >
      <GlobalStyles />
      <Routes />
    </ConfigProvider>
  );
}
