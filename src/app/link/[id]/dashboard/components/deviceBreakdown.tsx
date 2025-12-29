"use client";

import { DetailItem } from "@/common/dtos/analytics.dto";

interface DeviceBreakdownProps {
  devices?: DetailItem[];
}

export default function DeviceBreakdown({
  devices = [],
}: DeviceBreakdownProps) {
  const chartColors = ["#10b981", "#6ee7b7", "#d1fae5", "#9ca3af", "#e5e7eb"];

  const tailwindColors = [
    "bg-primary",
    "bg-primary-light",
    "bg-green-100 dark:bg-green-900",
    "bg-gray-400",
    "bg-gray-200",
  ];

  let cumulative = 0;
  const gradientStops = devices
    .map((device, index) => {
      const start = cumulative;
      cumulative += device.percentage;
      const color = chartColors[index] || chartColors[chartColors.length - 1];
      return `${color} ${start}% ${cumulative}%`;
    })
    .join(", ");

  const mobileData = devices.find((d) => d.label === "Mobile") || devices[0];

  return (
    <div className="flex flex-col gap-4 rounded-lg border border-border-light dark:border-border-dark bg-card-light dark:bg-card-dark p-6">
      <h3 className="text-lg font-semibold leading-normal">Device Breakdown</h3>

      <div className="flex items-center justify-center py-4 relative">
        {/* 도넛 차트 바깥 원 */}
        <div
          className="relative size-40 rounded-full"
          style={{
            background:
              devices.length > 0
                ? `conic-gradient(${gradientStops})`
                : "#e5e7eb",
          }}
        ></div>

        {/* 중앙 구멍 (Donut Hole) */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="size-28 rounded-full bg-card-light dark:bg-card-dark flex flex-col items-center justify-center">
            <span className="text-2xl font-bold">
              {mobileData?.percentage || 0}%
            </span>
            <span className="text-xs text-subtext-light dark:text-subtext-dark">
              {mobileData?.label || "Devices"}
            </span>
          </div>
        </div>
      </div>

      {/* 범례 리스트 */}
      <div className="flex flex-col gap-2">
        {devices.map((device, index) => (
          <div
            key={device.label}
            className="flex items-center justify-between text-sm"
          >
            <div className="flex items-center gap-2">
              <div
                className={`size-3 rounded-full ${
                  tailwindColors[index] || "bg-gray-200"
                }`}
              ></div>
              {device.label}
            </div>
            <span className="font-semibold">{device.percentage}%</span>
          </div>
        ))}
      </div>
    </div>
  );
}
