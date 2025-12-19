"use client";

import { deviceStats } from "../mock/analytics";

export default function DeviceBreakdown() {
  const mobilePercent = deviceStats[0].percent;
  const desktopPercent = deviceStats[1].percent;
  const tabletPercent = deviceStats[2].percent;

  const mobileEnd = mobilePercent;
  const desktopEnd = mobileEnd + desktopPercent;

  return (
    <div className="flex flex-col gap-4 rounded-lg border border-border-light dark:border-border-dark bg-card-light dark:bg-card-dark p-6">
      <h3 className="text-lg font-semibold leading-normal">Device Breakdown</h3>
      <div className="flex items-center justify-center py-4 relative">
        <div
          className="relative size-40 rounded-full"
          style={{
            background: `conic-gradient(#10b981 0% ${mobileEnd}%, #6ee7b7 ${mobileEnd}% ${desktopEnd}%, #d1fae5 ${desktopEnd}% 100%)`,
          }}
        ></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="size-28 rounded-full bg-card-light dark:bg-card-dark flex flex-col items-center justify-center">
            <span className="text-2xl font-bold">{mobilePercent}%</span>
            <span className="text-xs text-subtext-light dark:text-subtext-dark">Mobile</span>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-2">
        {deviceStats.map((device, index) => {
          const colors = ["bg-primary", "bg-primary-light", "bg-green-100 dark:bg-green-900"];
          return (
            <div key={device.label} className="flex items-center justify-between text-sm">
              <div className="flex items-center gap-2">
                <div className={`size-3 rounded-full ${colors[index]}`}></div>
                {device.label}
              </div>
              <span className="font-semibold">{device.percent}%</span>
            </div>
          );
        })}
      </div>
    </div>
  );
}

