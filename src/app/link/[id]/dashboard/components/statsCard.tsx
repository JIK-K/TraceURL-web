"use client";

import { stats } from "../mock/analytics";

export default function StatsCards() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
      <div className="flex flex-col gap-1 rounded-lg p-5 bg-card-light dark:bg-card-dark border border-border-light dark:border-border-dark shadow-sm">
        <div className="flex items-center gap-2 mb-1">
          <span className="material-symbols-outlined text-primary text-xl">ads_click</span>
          <p className="text-sm font-semibold text-subtext-light dark:text-subtext-dark">Total Visits (PV)</p>
        </div>
        <div className="flex items-baseline gap-2">
          <p className="text-3xl font-bold leading-tight">{stats.pv.value.toLocaleString()}</p>
          <span className="text-xs font-medium text-primary bg-primary/10 px-1.5 py-0.5 rounded flex items-center gap-0.5">
            <span className="material-symbols-outlined text-[12px]">trending_up</span> {stats.pv.change}%
          </span>
        </div>
      </div>

      <div className="flex flex-col gap-1 rounded-lg p-5 bg-card-light dark:bg-card-dark border border-border-light dark:border-border-dark shadow-sm">
        <div className="flex items-center gap-2 mb-1">
          <span className="material-symbols-outlined text-primary text-xl">person</span>
          <p className="text-sm font-semibold text-subtext-light dark:text-subtext-dark">Unique Visitors (UV)</p>
        </div>
        <div className="flex items-baseline gap-2">
          <p className="text-3xl font-bold leading-tight">{stats.uv.value.toLocaleString()}</p>
          <span className="text-xs font-medium text-primary bg-primary/10 px-1.5 py-0.5 rounded flex items-center gap-0.5">
            <span className="material-symbols-outlined text-[12px]">trending_up</span> {stats.uv.change}%
          </span>
        </div>
      </div>

      <div className="flex flex-col gap-1 rounded-lg p-5 bg-card-light dark:bg-card-dark border border-border-light dark:border-border-dark shadow-sm justify-between">
        <div className="flex items-center gap-2 mb-1">
          <span className="material-symbols-outlined text-primary text-xl">group_add</span>
          <p className="text-sm font-semibold text-subtext-light dark:text-subtext-dark">New vs Returning</p>
        </div>
        <div className="flex flex-col gap-2 mt-1">
          <div className="flex justify-between text-xs font-medium">
            <span className="text-text-light dark:text-text-dark">New: {stats.newRate}%</span>
            <span className="text-subtext-light dark:text-subtext-dark">Returning: {stats.returnRate}%</span>
          </div>
          <div className="flex w-full h-2 rounded-full overflow-hidden bg-background-light dark:bg-background-dark">
            <div className="bg-primary h-full" style={{ width: `${stats.newRate}%` }}></div>
            <div className="bg-primary-light/30 h-full" style={{ width: `${stats.returnRate}%` }}></div>
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-1 rounded-lg p-5 bg-card-light dark:bg-card-dark border border-border-light dark:border-border-dark shadow-sm">
        <div className="flex items-center gap-2 mb-1">
          <span className="material-symbols-outlined text-primary text-xl">public</span>
          <p className="text-sm font-semibold text-subtext-light dark:text-subtext-dark">Top Country</p>
        </div>
        <div className="flex items-center gap-3 mt-1">
          <img
            alt={`${stats.topCountry.name} Flag`}
            className="rounded w-8 h-auto shadow-sm"
            src={stats.topCountry.flagImage}
          />
          <div>
            <p className="text-xl font-bold leading-tight">{stats.topCountry.name}</p>
            <p className="text-xs text-subtext-light dark:text-subtext-dark">{stats.topCountry.percent}% of total traffic</p>
          </div>
        </div>
      </div>
    </div>
  );
}

