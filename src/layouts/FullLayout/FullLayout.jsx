import { Outlet } from "react-router-dom";
import { Container } from "./Styles";
import { Header } from "../../components";

export default function FullLayout() {
  return (
    <Container>
      <Header />
      <Outlet />
    </Container>
  );
}
