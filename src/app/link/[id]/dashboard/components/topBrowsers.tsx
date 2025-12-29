"use client";

import { DetailItem } from "@/common/dtos/analytics.dto";

interface TopBrowsersProps {
  browsers?: DetailItem[];
}

export default function TopBrowsers({ browsers = [] }: TopBrowsersProps) {
  const sortedBrowsers = [...browsers].sort(
    (a, b) => b.percentage - a.percentage
  );

  if (browsers.length === 0) {
    return (
      <div className="flex flex-col gap-4 rounded-lg border border-border-light dark:border-border-dark bg-card-light dark:bg-card-dark p-6 items-center justify-center min-h-[200px]">
        <p className="text-sm text-subtext-light">
          브라우저 데이터가 없습니다.
        </p>
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-6 rounded-lg border border-border-light dark:border-border-dark bg-card-light dark:bg-card-dark p-6">
      <div className="flex items-center justify-between">
        <h3 className="text-lg font-semibold leading-normal text-foreground-light dark:text-foreground-dark">
          Top Browsers
        </h3>
        <span className="text-xs text-subtext-light dark:text-subtext-dark">
          Usage %
        </span>
      </div>

      <div className="flex flex-col gap-5">
        {sortedBrowsers.map((browser) => (
          <div key={browser.label} className="group flex flex-col gap-2">
            <div className="flex justify-between text-sm">
              <span className="font-medium text-foreground-light dark:text-foreground-dark group-hover:text-primary transition-colors">
                {browser.label}
              </span>
              <span className="font-semibold text-primary">
                {browser.percentage}%
              </span>
            </div>

            <div className="w-full bg-gray-100 dark:bg-gray-800 rounded-full h-2.5 overflow-hidden">
              <div
                className="bg-primary h-full rounded-full transition-all duration-700 ease-out shadow-[0_0_8px_rgba(16,185,129,0.3)]"
                style={{
                  width: `${browser.percentage}%`,
                }}
              ></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
