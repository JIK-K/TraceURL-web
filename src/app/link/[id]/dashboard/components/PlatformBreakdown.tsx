"use client";

import { DetailItem } from "@/common/dtos/analytics.dto";

interface OSBreakdownProps {
  platforms?: DetailItem[];
}

// OS별 아이콘이나 색상을 매핑할 수 있습니다 (선택 사항)
const OS_CONFIG: Record<string, { color: string }> = {
  iOS: { color: "bg-blue-500" },
  Android: { color: "bg-green-500" },
  Windows: { color: "bg-sky-600" },
  macOS: { color: "bg-slate-700" },
  Linux: { color: "bg-orange-500" },
  default: { color: "bg-primary" },
};

export default function PlatformBreakdown({
  platforms = [],
}: OSBreakdownProps) {
  // 점유율이 높은 순서대로 정렬
  const sortedStats = [...platforms].sort(
    (a, b) => b.percentage - a.percentage
  );

  if (platforms.length === 0) {
    return (
      <div className="flex flex-col gap-4 rounded-lg border border-border-light dark:border-border-dark bg-card-light dark:bg-card-dark p-6 items-center justify-center min-h-[200px]">
        <p className="text-sm text-subtext-light">OS 데이터가 없습니다.</p>
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-6 rounded-lg border border-border-light dark:border-border-dark bg-card-light dark:bg-card-dark p-6">
      <div className="flex items-center justify-between">
        <h3 className="text-lg font-semibold leading-normal text-foreground-light dark:text-foreground-dark">
          Operating Systems
        </h3>
        <span className="text-xs text-subtext-light dark:text-subtext-dark">
          By Clicks
        </span>
      </div>

      <div className="flex flex-col gap-5">
        {sortedStats.map((stat) => {
          const config = OS_CONFIG[stat.label] || OS_CONFIG.default;

          return (
            <div key={stat.label} className="flex flex-col gap-2 group">
              <div className="flex justify-between text-sm">
                <span className="font-medium text-foreground-light dark:text-foreground-dark group-hover:text-primary transition-colors">
                  {stat.label}
                </span>
                <span className="font-semibold text-primary">
                  {stat.percentage}%
                </span>
              </div>

              {/* 프로그레스 바 배경 */}
              <div className="w-full bg-gray-100 dark:bg-gray-800 rounded-full h-2 overflow-hidden">
                <div
                  className={`h-full rounded-full transition-all duration-1000 ease-out ${config.color}`}
                  style={{
                    width: `${stat.percentage}%`,
                  }}
                ></div>
              </div>
            </div>
          );
        })}
      </div>

      {/* 전체 요약 (선택 사항) */}
      <div className="pt-2 border-t border-border-light dark:border-border-dark flex justify-between items-center">
        <p className="text-xs text-subtext-light dark:text-subtext-dark">
          Top:{" "}
          <span className="font-bold text-foreground-light dark:text-foreground-dark">
            {sortedStats[0].label}
          </span>
        </p>
      </div>
    </div>
  );
}
