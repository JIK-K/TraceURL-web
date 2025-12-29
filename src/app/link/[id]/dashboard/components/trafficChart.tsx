"use client";

import { useState, useMemo, useRef } from "react";
import { AnalyticsChartResponseDto } from "@/common/dtos/analytics.dto";
interface TrafficChartProps {
  data: AnalyticsChartResponseDto | null;
  selectedRange: string;
  onRangeChange: (range: string) => void;
  isLoading: boolean;
}

export default function TrafficChart(props: TrafficChartProps) {
  const { data, selectedRange, onRangeChange, isLoading } = props;
  const svgRef = useRef<SVGSVGElement>(null); // SVG 좌표 계산을 위한 ref

  // 툴팁에 표시할 현재 활성화된 포인트 상태
  const [activePoint, setActivePoint] = useState<any | null>(null);

  const ranges = [
    { label: "Week", value: "7d" },
    { label: "Month", value: "30d" },
  ];

  const chartConfig = useMemo(() => {
    if (!data || data.points.length === 0) return null;
    const points = data.points;
    const maxVal = Math.max(...points.map((p) => Math.max(p.pv, p.uv)), 10);
    const width = 472;

    const pointsWithCoords = points.map((p, i) => ({
      ...p,
      x: (i / (points.length - 1)) * width,
      yPV: 149 - (p.pv / maxVal) * 120,
      yUV: 149 - (p.uv / maxVal) * 120,
    }));

    return { points: pointsWithCoords, maxVal };
  }, [data]);

  // 마우스 이동 시 좌표 계산 및 툴팁 데이터 업데이트
  const handleMouseMove = (e: React.MouseEvent) => {
    if (!chartConfig || !svgRef.current) return;

    const svg = svgRef.current;
    const rect = svg.getBoundingClientRect();

    // SVG 내부의 상대적 X 좌표 계산 (0 ~ 472)
    const mouseX = ((e.clientX - rect.left) / rect.width) * 472;

    // 현재 X 좌표를 기준으로 가장 가까운 배열 인덱스 찾기
    const index = Math.round((mouseX / 472) * (chartConfig.points.length - 1));
    const safeIndex = Math.max(
      0,
      Math.min(index, chartConfig.points.length - 1)
    );

    setActivePoint(chartConfig.points[safeIndex]);
  };

  const generatePath = (isUV: boolean) => {
    if (!chartConfig) return "";
    return chartConfig.points
      .map((p, i) => `${i === 0 ? "M" : "L"}${p.x} ${isUV ? p.yUV : p.yPV}`)
      .join(" ");
  };

  const generateAreaPath = (isUV: boolean) => {
    if (!chartConfig) return "";
    const path = generatePath(isUV);
    const lastPoint = chartConfig.points[chartConfig.points.length - 1];
    return `${path} L${lastPoint.x} 149 L0 149 Z`;
  };

  if (!data)
    return <div className="h-[300px] animate-pulse bg-gray-100 rounded-lg" />;

  return (
    <div className="flex flex-col gap-4 rounded-lg border border-border-light dark:border-border-dark bg-card-light dark:bg-card-dark p-6 shadow-sm">
      {/* 상단 헤더 부분 생략 (기존 코드와 동일) */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div className="flex flex-col">
          <h3 className="text-lg font-bold leading-normal">Traffic Overview</h3>
          <div className="flex gap-4 text-xs font-medium mt-1">
            <div className="flex items-center gap-2 text-text-light dark:text-text-dark">
              <span className="w-2 h-2 rounded-full bg-primary"></span> Unique
              (UV)
            </div>
            <div className="flex items-center gap-2 text-subtext-light dark:text-subtext-dark">
              <span className="w-2 h-2 rounded-full bg-primary-light/40 border border-primary/40"></span>{" "}
              Visits (PV)
            </div>
          </div>
        </div>

        <div className="flex h-9 w-full sm:w-auto items-center justify-center rounded-lg bg-background-light dark:bg-background-dark p-1 border border-border-light dark:border-border-dark">
          {ranges.map((r) => (
            <label
              key={r.value}
              className={`flex cursor-pointer h-full grow items-center justify-center rounded px-3 text-xs transition-all ${
                selectedRange === r.value
                  ? "bg-card-light dark:bg-card-dark shadow-sm text-primary font-semibold"
                  : "text-subtext-light"
              }`}
            >
              <span>{r.label}</span>
              <input
                className="hidden"
                type="radio"
                name="range"
                value={r.value}
                checked={selectedRange === r.value}
                onChange={() => onRangeChange(r.value)}
              />
            </label>
          ))}
        </div>
      </div>

      <div className="flex min-h-[250px] flex-1 flex-col py-4 relative group">
        {/* 툴팁: activePoint가 있을 때만 렌더링 */}
        {activePoint && (
          <div
            className="absolute pointer-events-none z-50 bg-text-light dark:bg-text-dark text-card-light dark:text-card-dark text-[10px] p-2 rounded shadow-xl flex flex-col gap-1 min-w-[90px]"
            style={{
              left: `${(activePoint.x / 472) * 100}%`,
              top: "0px",
              transform: "translateX(-50%)",
            }}
          >
            <p className="font-bold border-b border-white/10 pb-1 mb-1">
              {activePoint.label}
            </p>
            <p className="flex justify-between">
              <span>PV:</span> <b>{activePoint.pv.toLocaleString()}</b>
            </p>
            <p className="flex justify-between">
              <span>UV:</span> <b>{activePoint.uv.toLocaleString()}</b>
            </p>
          </div>
        )}

        <svg
          ref={svgRef}
          className="overflow-visible cursor-crosshair"
          fill="none"
          height="100%"
          viewBox="-3 0 478 150"
          width="100%"
          xmlns="http://www.w3.org/2000/svg"
          onMouseMove={handleMouseMove}
          onMouseLeave={() => setActivePoint(null)}
        >
          {/* 활성화된 인덱스에 세로 가이드선 표시 */}
          {activePoint && (
            <line
              x1={activePoint.x}
              x2={activePoint.x}
              y1="0"
              y2="149"
              stroke="currentColor"
              className="text-primary opacity-20"
              strokeWidth="1"
            />
          )}

          {/* 차트 경로들 */}
          <path d={generateAreaPath(true)} fill="url(#paint0_linear_chart)" />
          <path
            d={generatePath(false)}
            stroke="#10b981"
            strokeDasharray="4 2"
            strokeOpacity="0.3"
            strokeWidth="1"
          />
          <path
            d={generatePath(true)}
            stroke="#10b981"
            strokeLinecap="round"
            strokeWidth="1"
          />

          {/* 활성화된 포인트 위에 점 찍기 */}
          {activePoint && (
            <circle
              cx={activePoint.x}
              cy={activePoint.yUV}
              r="2"
              fill="#10b981"
            />
          )}

          <defs>
            <linearGradient
              id="paint0_linear_chart"
              x1="236"
              x2="236"
              y1="1"
              y2="149"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#10b981" stopOpacity="0.25" />
              <stop offset="1" stopColor="#10b981" stopOpacity="0" />
            </linearGradient>
          </defs>
        </svg>
      </div>
    </div>
  );
}
