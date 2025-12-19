"use client";

import { referrerStats } from "../mock/analytics";

const referrerIcons: Record<string, { icon: string; bgColor: string; iconColor: string }> = {
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

export default function TopReferrers() {
  return (
    <div className="flex flex-col gap-4 rounded-lg border border-border-light dark:border-border-dark bg-card-light dark:bg-card-dark p-6">
      <h3 className="text-lg font-semibold leading-normal">Top Referrers</h3>
      <div className="flex flex-col gap-4 pt-2">
        {referrerStats.map((referrer) => {
          const iconConfig = referrerIcons[referrer.name] || referrerIcons["Direct / Email"];
          return (
            <div key={referrer.name} className="flex items-center gap-4 group cursor-pointer">
              <div className={`${iconConfig.bgColor} p-2 rounded`}>
                <span className={`material-symbols-outlined text-xl ${iconConfig.iconColor}`}>{iconConfig.icon}</span>
              </div>
              <div className="flex-1">
                <div className="flex justify-between mb-1">
                  <p className="text-sm font-medium truncate">{referrer.name}</p>
                  <p className="text-sm font-semibold">{referrer.count.toLocaleString()}</p>
                </div>
                <div className="bg-background-light dark:bg-background-dark rounded-full h-1.5 w-full">
                  <div className="bg-primary h-1.5 rounded-full" style={{ width: `${referrer.percent}%` }}></div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

