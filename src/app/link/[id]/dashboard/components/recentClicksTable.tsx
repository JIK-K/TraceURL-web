"use client";

import { recentClicks } from "../mock/analytics";

export default function RecentClicksTable() {
  return (
    <div className="flex flex-col gap-4 rounded-lg border border-border-light dark:border-border-dark bg-card-light dark:bg-card-dark p-6">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span className="relative flex h-3 w-3">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3 w-3 bg-primary"></span>
          </span>
          <h3 className="text-lg font-semibold leading-normal">Recent Click Activity</h3>
        </div>
        <button className="text-sm text-subtext-light dark:text-subtext-dark hover:text-primary flex items-center gap-1">
          <span className="material-symbols-outlined text-base">download</span> Export CSV
        </button>
      </div>
      <div className="overflow-x-auto rounded-lg border border-border-light dark:border-border-dark">
        <table className="w-full text-left border-collapse">
          <thead className="bg-background-light dark:bg-background-dark text-xs uppercase text-subtext-light dark:text-subtext-dark font-semibold">
            <tr>
              <th className="py-3 px-4">Time</th>
              <th className="py-3 px-4">Visitor IP</th>
              <th className="py-3 px-4">Location</th>
              <th className="py-3 px-4">Device / OS</th>
              <th className="py-3 px-4">Referrer</th>
              <th className="py-3 px-4 text-center">Type</th>
            </tr>
          </thead>
          <tbody className="text-sm text-text-light dark:text-text-dark divide-y divide-border-light dark:divide-border-dark">
            {recentClicks.map((click, index) => (
              <tr
                key={index}
                className="hover:bg-background-light dark:hover:bg-background-dark/50 transition-colors"
              >
                <td className="py-3 px-4 whitespace-nowrap">{click.time}</td>
                <td className="py-3 px-4 font-mono text-xs">{click.ip}</td>
                <td className="py-3 px-4">
                  <div className="flex items-center gap-2">
                    <img alt={click.locationCode} className="w-4 rounded-sm" src={click.flagImage} />
                    {click.location}
                  </div>
                </td>
                <td className="py-3 px-4">
                  <div className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-base text-subtext-light dark:text-subtext-dark">
                      {click.deviceIcon}
                    </span>
                    <span>{click.device}</span>
                  </div>
                </td>
                <td
                  className="py-3 px-4 max-w-[150px] truncate text-subtext-light dark:text-subtext-dark"
                  title={click.referrerFull}
                >
                  {click.referrer}
                </td>
                <td className="py-3 px-4 text-center">
                  <span
                    className={`px-2 py-0.5 rounded-full text-xs font-medium ${
                      click.type === "New"
                        ? "bg-green-100 dark:bg-green-900 text-green-700 dark:text-green-300"
                        : "bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300"
                    }`}
                  >
                    {click.type}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="flex items-center justify-center pt-2">
        <button className="text-sm font-medium text-primary hover:underline">View All Activity</button>
      </div>
    </div>
  );
}

