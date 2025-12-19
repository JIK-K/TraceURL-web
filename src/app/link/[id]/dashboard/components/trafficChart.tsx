"use client";

import { useState } from "react";
import { chartData } from "../mock/analytics";

export default function TrafficChart() {
  const [selectedRange, setSelectedRange] = useState("Month");

  const ranges = ["Day", "Week", "Month"];

  const generatePath = (points: typeof chartData.points, isUV: boolean) => {
    const pathData = points.map((point, index) => {
      const x = point.x;
      const y = isUV ? 149 - (point.uv / chartData.maxValue) * 120 : 149 - (point.pv / chartData.maxValue) * 120;
      return index === 0 ? `M${x} ${y}` : `L${x} ${y}`;
    });
    return pathData.join(" ");
  };

  const generateAreaPath = (points: typeof chartData.points, isUV: boolean) => {
    const path = generatePath(points, isUV);
    const lastPoint = points[points.length - 1];
    const lastY = isUV
      ? 149 - (lastPoint.uv / chartData.maxValue) * 120
      : 149 - (lastPoint.pv / chartData.maxValue) * 120;
    return `${path} L${lastPoint.x} 149 L0 149 Z`;
  };

  return (
    <div className="flex flex-col gap-4 rounded-lg border border-border-light dark:border-border-dark bg-card-light dark:bg-card-dark p-6 shadow-sm">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div className="flex flex-col">
          <h3 className="text-lg font-bold leading-normal">Traffic Overview</h3>
          <div className="flex gap-4 text-xs font-medium mt-1">
            <div className="flex items-center gap-2 text-text-light dark:text-text-dark">
              <span className="w-2 h-2 rounded-full bg-primary"></span> Visits (PV)
            </div>
            <div className="flex items-center gap-2 text-subtext-light dark:text-subtext-dark">
              <span className="w-2 h-2 rounded-full bg-primary-light/40 border border-primary/40"></span> Unique (UV)
            </div>
          </div>
        </div>
        <div className="flex h-9 w-full sm:w-auto items-center justify-center rounded-lg bg-background-light dark:bg-background-dark p-1 border border-border-light dark:border-border-dark">
          {ranges.map((range) => (
            <label
              key={range}
              className={`flex cursor-pointer h-full grow items-center justify-center overflow-hidden rounded px-3 text-subtext-light dark:text-subtext-dark text-xs transition-all ${
                selectedRange === range ? "bg-card-light dark:bg-card-dark shadow-sm text-primary font-semibold" : ""
              }`}
            >
              <span className="truncate">{range}</span>
              <input
                className="invisible w-0"
                name="date-range-filter"
                type="radio"
                value={range}
                checked={selectedRange === range}
                onChange={() => setSelectedRange(range)}
              />
            </label>
          ))}
        </div>
      </div>
      <div className="flex min-h-[250px] flex-1 flex-col gap-8 py-4 relative group">
        <div className="absolute left-[60%] top-0 bottom-8 w-px bg-subtext-light/20 dark:bg-subtext-dark/20 z-10 hidden group-hover:block"></div>
        <div className="absolute left-[60%] top-[40%] transform -translate-x-1/2 -translate-y-full mb-2 bg-text-light dark:bg-text-dark text-card-light dark:text-card-dark text-xs p-2 rounded shadow-xl z-20 hidden group-hover:block">
          <p className="font-bold">May 18</p>
          <p>PV: 2,431</p>
          <p>UV: 1,043</p>
        </div>
        <svg
          className="overflow-visible"
          fill="none"
          height="100%"
          preserveAspectRatio="none"
          viewBox="-3 0 478 150"
          width="100%"
          xmlns="http://www.w3.org/2000/svg"
        >
          <line className="text-border-light dark:text-border-dark" stroke="currentColor" strokeDasharray="4 4" x1="0" x2="472" y1="129" y2="129"></line>
          <line className="text-border-light dark:text-border-dark" stroke="currentColor" strokeDasharray="4 4" x1="0" x2="472" y1="81" y2="81"></line>
          <line className="text-border-light dark:text-border-dark" stroke="currentColor" strokeDasharray="4 4" x1="0" x2="472" y1="33" y2="33"></line>

          <path d={generateAreaPath(chartData.points, true)} fill="url(#paint0_linear_chart)"></path>

          <path d={generatePath(chartData.points, false)} stroke="#10b981" strokeDasharray="4 2" strokeOpacity="0.3" strokeWidth="2"></path>

          <path d={generatePath(chartData.points, true)} stroke="#10b981" strokeLinecap="round" strokeWidth="3"></path>

          <defs>
            <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_chart" x1="236" x2="236" y1="1" y2="149">
              <stop stopColor="#10b981" stopOpacity="0.25"></stop>
              <stop offset="1" stopColor="#10b981" stopOpacity="0"></stop>
            </linearGradient>
          </defs>
        </svg>
      </div>
    </div>
  );
}

