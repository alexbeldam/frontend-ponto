import { Tempo } from "../..";
import { useDuration } from "../../../hooks/utils";

export default function Duration({ startTime }) {
  return <Tempo hour={useDuration(startTime)} type='time' />;
}
