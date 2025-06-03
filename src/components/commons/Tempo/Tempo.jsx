import { Container } from "./Styles";
import moment from "moment";

export default function Tempo({ hour, type = "date" }) {
  return <Container>{hour && type === "date" ? moment(hour).format("HH:mm") : hour}</Container>;
}
