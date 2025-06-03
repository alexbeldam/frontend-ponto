export function formatTime(time) {
  return new Date(time).toLocaleTimeString("pt-BR", {
    hour: "2-digit",
    minute: "2-digit",
  });
}
