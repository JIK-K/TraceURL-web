"use client";

import { DetailItem } from "@/common/dtos/analytics.dto";

const referrerIcons: Record<
  string,
  { icon: string; bgColor: string; iconColor: string }
> = {
  "google.com": {
    icon: "search",
    bgColor: "bg-gray-100 dark:bg-gray-800",
    iconColor: "text-subtext-light dark:text-subtext-dark",
  },
  "twitter.com / X": {
    icon: "flutter_dash",
    bgColor: "bg-blue-50 dark:bg-blue-900/20",
    iconColor: "text-blue-500",
  },
  "facebook.com": {
    icon: "share",
    bgColor: "bg-indigo-50 dark:bg-indigo-900/20",
    iconColor: "text-indigo-500",
  },
  "Direct / Email": {
    icon: "link",
    bgColor: "bg-gray-100 dark:bg-gray-800",
    iconColor: "text-subtext-light dark:text-subtext-dark",
  },
};

interface TopReferrersProps {
  // 부모로부터 받는 데이터 (없을 수 있으므로 선택적 속성 처리 가능)
  referrers?: DetailItem[];
}

export default function TopReferrers({ referrers = [] }: TopReferrersProps) {
  return (
    <div className="flex flex-col gap-[16px] rounded-[8px] border border-border-light dark:border-border-dark bg-card-light dark:bg-card-dark p-[24px]">
      <h3 className="text-[18px] font-semibold leading-normal">Top Referrers</h3>

      <div className="flex flex-col gap-[16px] pt-[8px]">
        {referrers.length === 0 ? (
          <p className="text-center py-[16px] text-[14px] text-subtext-light dark:text-subtext-dark">
            No referrer data available
          </p>
        ) : (
          referrers.map((referrer) => {
            // 아이콘 설정 (매칭되는 이름이 없으면 기본 아이콘 사용)
            const iconConfig =
              referrerIcons[referrer.label] || referrerIcons["Direct / Email"];

            return (
              <div
                key={referrer.label}
                className="flex items-center gap-[16px] group cursor-pointer"
              >
                <span
                  className={`material-symbols-outlined text-[20px] ${iconConfig.bgColor} p-[4px] rounded-[4px] ${iconConfig.iconColor}`}
                >
                  {iconConfig.icon}
                </span>
                <div className="flex-1">
                  <div className="flex justify-between mb-[4px]">
                    <p className="text-[14px] font-medium truncate">
                      {referrer.label}
                    </p>
                    <p className="text-[14px] font-semibold">
                      {referrer.count.toLocaleString()}
                    </p>
                  </div>
                  <div className="bg-background-light dark:bg-background-dark rounded-[9999px] h-[6px] w-full">
                    <div
                      className="bg-primary h-[6px] rounded-[9999px] transition-all duration-500"
                      style={{ width: `${referrer.percentage}%` }}
                    ></div>
                  </div>
                </div>
              </div>
            );
          })
        )}
      </div>
    </div>
  );
}
