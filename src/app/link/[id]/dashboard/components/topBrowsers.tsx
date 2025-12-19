"use client";

import { browserStats } from "../mock/analytics";

export default function TopBrowsers() {
  return (
    <div className="flex flex-col gap-4 rounded-lg border border-border-light dark:border-border-dark bg-card-light dark:bg-card-dark p-6">
      <h3 className="text-lg font-semibold leading-normal">Top Browsers</h3>
      <div className="flex flex-col gap-3">
        {browserStats.map((browser) => (
          <div key={browser.name} className="flex flex-col gap-1">
            <div className="flex justify-between text-sm">
              <span className="font-medium">{browser.name}</span>
              <span className="font-semibold text-primary">{browser.percent}%</span>
            </div>
            <div className="w-full bg-background-light dark:bg-background-dark rounded-full h-2">
              <div className="bg-primary h-2 rounded-full" style={{ width: `${browser.percent}%` }}></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

