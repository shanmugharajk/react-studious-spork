function toTwoDigits(val: number) {
  return val < 10 ? `0${val}` : val;
}

export function getCurrentTime() {
  const date = new Date();

  const h = date.getHours();
  const hh = h === 0 ? 12 : h <= 12 ? h : h - 12;

  const hrs = toTwoDigits(hh);
  const mins = toTwoDigits(date.getMinutes());
  const secs = toTwoDigits(date.getSeconds());

  const a = h < 12 ? "AM" : "PM";

  return `${hrs}:${mins}:${secs} ${a}`;
}
