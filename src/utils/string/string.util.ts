export function formatKoreanDatetime(datetimeStr?: string): string {
  return new Intl.DateTimeFormat("ko-KR", {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    hour: "numeric",
    minute: "2-digit",
    hour12: true,
    timeZone: "Asia/Seoul", // 명시 권장
  }).format(new Date(datetimeStr!));
}

export function toDateTimeLocalString(iso?: string): string {
  if (!iso) return "";
  return new Date(iso).toISOString().slice(0, 16);
}

export function formatToMonthDayYear(isoString?: Date): string {
  if (!isoString) return "";
  const date = new Date(isoString);

  return date.toLocaleDateString("en-US", {
    month: "short",
    day: "2-digit",
    year: "numeric",
  });
}
