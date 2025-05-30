import { useState, useEffect } from "react";

export function useWidth() {
  const [width, setWidth] = useState(() => window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return width;
}

export function useNow(intervalMs = 5000) {
  const [now, setNow] = useState(() => Date.now());

  useEffect(() => {
    setNow(Date.now());

    const interval = setInterval(() => {
      setNow(Date.now());
    }, intervalMs);

    return () => clearInterval(interval);
  }, [intervalMs]);

  return now;
}
