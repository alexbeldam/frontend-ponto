import { Tempo } from "./Styles";
import { useEffect, useState } from "react";

export default function Duracao({ startTime }) {
  const [duracao, setDurationTime] = useState();

  function handleTime(date) {
    const now = Date.now();
    const givenDate = new Date(date).getTime();
    const diffMs = now - givenDate;

    const diffHours = Math.trunc(diffMs / (1000 * 60 * 60));
    const diffMinutes = Math.trunc((diffMs % (1000 * 60 * 60)) / (1000 * 60));

    const hourFormatted = diffHours.toString().padStart(2, "0");
    const minuteFormatted = diffMinutes.toString().padStart(2, "0");

    return `${hourFormatted}:${minuteFormatted}`;
  }

  useEffect(() => {
    setDurationTime(handleTime(startTime));

    let timer = setInterval(() => {
      const nextTime = handleTime(startTime);

      if (nextTime !== duracao) setDurationTime(nextTime);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  return <Tempo>{duracao}</Tempo>;
}
