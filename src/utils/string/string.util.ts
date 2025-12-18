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
