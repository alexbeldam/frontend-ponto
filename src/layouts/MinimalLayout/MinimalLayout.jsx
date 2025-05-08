import { Outlet } from "react-router-dom";
import { Container } from "./Styles";
import { Header } from "../../components";

export default function MinimalLayout() {
  return (
    <Container>
      <Header full={false} />
      <Outlet />
    </Container>
  );
}
