// Request DTO for creating a short URL
export interface IpBlockCreateRequestDto {
  shortCode: string;
  ipAddress: string;
  reason: string;
}

// Response DTO for short URL information
export interface RecentClickResponseDto {
  time: string; // "Just now", "2 mins ago" 등 (프론트에서 처리하거나 서버에서 계산)
  createdAt: string; // 실제 시간 (ISO 포맷)
  ip: string; // 123.123.***.***
  location: string; // "Seoul, KR"
  locationCode: string; // "kr"
  device: string; // "Chrome (Windows)"
  deviceIcon: string; // "desktop_windows", "smartphone" 등
  referrer: string; // "google.com" (도메인만)
  referrerFull: string; // 전체 URL
  type: string; // "New" 또는 "Returning"
  flagImage: string; // "https://flagcdn.com/w40/kr.png"
}

export interface AnalyticsSummaryResponseDto {
  pv: StatDetail;
  uv: StatDetail;
  newRate: number;
  returnRate: number;
  topCountry: TopCountry;
}

export interface AnalyticsChartResponseDto {
  points: ChartPoint[];
}

export interface AnalyticsDetailResponseDto {
  devices: DetailItem[];
  browsers: DetailItem[];
  platforms: DetailItem[];
}

//===============================================//
// Additional Interfaces
//===============================================//

export interface DetailItem {
  label: string;
  count: number;
  percentage: number;
}

export interface TopCountry {
  name: string;
  percent: number;
  flagImage: string;
}

export interface StatDetail {
  value: number;
  change: number;
}

export interface ChartPoint {
  label: string;
  pv: number;
  uv: number;
}
