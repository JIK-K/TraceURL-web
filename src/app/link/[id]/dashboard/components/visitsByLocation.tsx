"use client";

import { CountryItem } from "@/common/dtos/analytics.dto";

interface VisitsByLocationProps {
  countries?: CountryItem[];
}

export default function VisitsByLocation({
  countries = [],
}: VisitsByLocationProps) {
  return (
    <div className="flex flex-col gap-[16px] rounded-[8px] border border-border-light dark:border-border-dark bg-card-light dark:bg-card-dark p-[24px]">
      <div className="flex items-center justify-between">
        <h3 className="text-[18px] font-semibold leading-normal">
          Visits by Location
        </h3>
        <button className="text-primary text-[14px] font-medium hover:underline">
          View Full Report
        </button>
      </div>

      {/* 지도 배경 이미지 */}
      <div
        className="w-full h-[192px] bg-center bg-no-repeat bg-cover rounded-[8px] object-cover mb-[8px] border border-border-light dark:border-border-dark"
        style={{
          backgroundImage: `url("https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?w=800&q=80")`,
        }}
      ></div>

      <div className="grid grid-cols-2 gap-[16px]">
        {/* 데이터가 없을 경우 처리 */}
        {countries.length === 0 ? (
          <div className="col-span-2 text-center py-[16px] text-[14px] text-subtext-light dark:text-subtext-dark">
            No location data available
          </div>
        ) : (
          countries.map((location) => (
            <div
              key={location.countryCode}
              className="flex items-center justify-between p-[8px] rounded-[4px] bg-background-light dark:bg-background-dark"
            >
              <div className="flex items-center gap-[8px]">
                {/* ✅ 이미지 src 오류 방지: flagUrl이 있을 때만 렌더링 */}
                {location.flagUrl ? (
                  <img
                    alt={`${location.countryName} Flag`}
                    className="w-[20px] rounded-[4px] shadow-sm"
                    src={location.flagUrl}
                  />
                ) : (
                  <span className="w-[20px] h-[12px] bg-gray-200 rounded-[2px]" />
                )}
                <span className="text-[14px] font-medium">
                  {location.countryName}
                </span>
              </div>
              <span className="text-[14px] font-bold">
                {location.count.toLocaleString()}
              </span>
            </div>
          ))
        )}
      </div>
    </div>
  );
}
