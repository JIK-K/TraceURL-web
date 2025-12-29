"use client";

import { CountryItem } from "@/common/dtos/analytics.dto";

interface VisitsByLocationProps {
  countries?: CountryItem[];
}

export default function VisitsByLocation({
  countries = [],
}: VisitsByLocationProps) {
  return (
    <div className="flex flex-col gap-4 rounded-lg border border-border-light dark:border-border-dark bg-card-light dark:bg-card-dark p-6">
      <div className="flex items-center justify-between">
        <h3 className="text-lg font-semibold leading-normal">
          Visits by Location
        </h3>
        <button className="text-primary text-sm font-medium hover:underline">
          View Full Report
        </button>
      </div>

      {/* 지도 배경 이미지 */}
      <div
        className="w-full h-48 bg-center bg-no-repeat bg-cover rounded-lg object-cover mb-2 border border-border-light dark:border-border-dark"
        style={{
          backgroundImage: `url("https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?w=800&q=80")`,
        }}
      ></div>

      <div className="grid grid-cols-2 gap-4">
        {/* 데이터가 없을 경우 처리 */}
        {countries.length === 0 ? (
          <div className="col-span-2 text-center py-4 text-sm text-subtext-light dark:text-subtext-dark">
            No location data available
          </div>
        ) : (
          countries.map((location) => (
            <div
              key={location.countryCode}
              className="flex items-center justify-between p-2 rounded bg-background-light dark:bg-background-dark"
            >
              <div className="flex items-center gap-2">
                {/* ✅ 이미지 src 오류 방지: flagUrl이 있을 때만 렌더링 */}
                {location.flagUrl ? (
                  <img
                    alt={`${location.countryName} Flag`}
                    className="w-5 rounded shadow-sm"
                    src={location.flagUrl}
                  />
                ) : (
                  <span className="w-5 h-3 bg-gray-200 rounded-sm" />
                )}
                <span className="text-sm font-medium">
                  {location.countryName}
                </span>
              </div>
              <span className="text-sm font-bold">
                {location.count.toLocaleString()}
              </span>
            </div>
          ))
        )}
      </div>
    </div>
  );
}
