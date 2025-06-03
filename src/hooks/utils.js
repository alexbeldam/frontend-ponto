import { useState, useEffect } from "react";
import moment from "moment";

export function useWidth() {
  const [width, setWidth] = useState(() => window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return width;
}

export function useNow() {
  const [now, setNow] = useState(() => Date.now());

  useEffect(() => {
    setNow(Date.now());

    const interval = setInterval(() => {
      setNow(Date.now());
    }, 5000);

    return () => clearInterval(interval);
  }, [5000]);

  return now;
}

export function useDuration(startTime) {
  const now = useNow();
  const [durationTime, setDurationTime] = useState();

  function handleHourAndMinuteSide(date, currentTime) {
    const resultDate = currentTime - new Date(date);
    const hourFormatted = Math.trunc(moment.duration(resultDate).asHours())
      .toString()
      .padStart(2, "0");
    const minuteFormatted = moment.duration(resultDate).minutes().toString().padStart(2, "0");
    return `${hourFormatted}:${minuteFormatted}`;
  }

  useEffect(() => {
    setDurationTime(handleHourAndMinuteSide(startTime, now));
  }, [startTime, now]);

  return durationTime;
}

export function useMediaQuery(query) {
  const [matches, setMatches] = useState(() => window.matchMedia(query).matches);

  useEffect(() => {
    const mediaQueryList = window.matchMedia(query);

    const handler = (event) => setMatches(event.matches);

    mediaQueryList.addEventListener("change", handler);
    return () => mediaQueryList.removeEventListener("change", handler);
  }, [query]);

  return matches;
}
