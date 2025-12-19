"use client";

import { hourlyStats } from "../mock/analytics";

export default function HourlyVisits() {
  return (
    <div className="flex flex-col gap-4 rounded-lg border border-border-light dark:border-border-dark bg-card-light dark:bg-card-dark p-6">
      <div className="flex items-center justify-between">
        <h3 className="text-lg font-semibold leading-normal">Visits by Time</h3>
        <span className="text-xs text-subtext-light dark:text-subtext-dark">24h GMT</span>
      </div>
      <div className="flex items-end justify-between h-48 gap-1 pt-4">
        {hourlyStats.map((stat, index) => {
          const opacity = stat.height <= 20 ? 0.2 : stat.height <= 40 ? 0.4 : stat.height <= 60 ? 0.6 : 1;
          return (
            <div
              key={index}
              className="w-full rounded-t-sm hover:bg-primary transition-colors relative group"
              style={{
                height: `${stat.height}%`,
                backgroundColor: `rgba(16, 185, 129, ${opacity})`,
              }}
            >
              <div className="hidden group-hover:block absolute -top-8 left-1/2 -translate-x-1/2 bg-black text-white text-[10px] px-1 py-0.5 rounded whitespace-nowrap z-10">
                {stat.hour}
              </div>
            </div>
          );
        })}
      </div>
      <div className="flex justify-between text-xs text-subtext-light dark:text-subtext-dark">
        <span>00:00</span>
        <span>12:00</span>
        <span>23:00</span>
      </div>
    </div>
  );
}

