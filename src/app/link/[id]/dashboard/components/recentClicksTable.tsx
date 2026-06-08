"use client";

import { RecentClickResponseDto } from "@/common/dtos/analytics.dto";

interface RecentClicksTableProps {
  clicks: RecentClickResponseDto[];
  onLoadMore: () => void;
  isLoading: boolean;
}

export default function RecentClicksTable(props: RecentClicksTableProps) {
  const { clicks, onLoadMore, isLoading } = props;
  return (
    <div className="flex flex-col gap-[16px] rounded-[8px] border border-border-light dark:border-border-dark bg-card-light dark:bg-card-dark p-[24px]">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-[8px]">
          <span className="relative flex h-[12px] w-[12px]">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-[9999px] bg-primary opacity-75"></span>
            <span className="relative inline-flex rounded-[9999px] h-[12px] w-[12px] bg-primary"></span>
          </span>
          <h3 className="text-[18px] font-semibold leading-normal">
            Recent Click Activity
          </h3>
        </div>
        <button className="text-[14px] text-subtext-light dark:text-subtext-dark hover:text-primary flex items-center gap-[4px]">
          <span className="material-symbols-outlined text-[16px]">download</span>{" "}
          Export CSV
        </button>
      </div>
      <div className="overflow-x-auto rounded-[8px] border border-border-light dark:border-border-dark">
        <table className="w-full text-left border-collapse">
          <thead className="bg-background-light dark:bg-background-dark text-[12px] uppercase text-subtext-light dark:text-subtext-dark font-semibold">
            <tr>
              <th className="py-[12px] px-[16px]">Time</th>
              <th className="py-[12px] px-[16px]">Visitor IP</th>
              <th className="py-[12px] px-[16px]">Location</th>
              <th className="py-[12px] px-[16px]">Device / OS</th>
              <th className="py-[12px] px-[16px]">Referrer</th>
              <th className="py-[12px] px-[16px] text-center">Type</th>
            </tr>
          </thead>
          <tbody className="text-[14px] text-text-light dark:text-text-dark divide-y divide-border-light dark:divide-border-dark">
            {clicks.map((click, index) => (
              <tr
                key={index}
                className="hover:bg-background-light dark:hover:bg-background-dark/50 transition-colors"
              >
                <td className="py-[12px] px-[16px] whitespace-nowrap">{click.time}</td>
                <td className="py-[12px] px-[16px] font-mono text-[12px]">{click.ip}</td>
                <td className="py-[12px] px-[16px]">
                  <div className="flex items-center gap-[8px]">
                    {
                      click.locationCode === "local" ? "" : 
                      <img
                        alt={click.locationCode}
                        className="w-[16px] rounded-[2px]"
                        src={click.flagImage}
                      />
                    }
                    {click.location}
                  </div>
                </td>
                <td className="py-[12px] px-[16px]">
                  <div className="flex items-center gap-[8px]">
                    <span className="material-symbols-outlined text-[16px] text-subtext-light dark:text-subtext-dark">
                      {click.deviceIcon}
                    </span>
                    <span>{click.device}</span>
                  </div>
                </td>
                <td
                  className="py-[12px] px-[16px] max-w-[150px] truncate text-subtext-light dark:text-subtext-dark"
                  title={click.referrerFull}
                >
                  {click.referrer}
                </td>
                <td className="py-[12px] px-[16px] text-center">
                  <span
                    className={`px-[8px] py-[2px] rounded-[9999px] text-[12px] font-medium ${
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
      <div className="flex items-center justify-center pt-[8px]">
        <button
          className="text-[14px] font-medium text-primary hover:underline"
          onClick={onLoadMore}
        >
          View More Activity
        </button>
      </div>
    </div>
  );
}
