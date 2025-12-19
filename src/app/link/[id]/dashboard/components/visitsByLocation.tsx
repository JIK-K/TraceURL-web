"use client";

import { locationStats } from "../mock/analytics";

export default function VisitsByLocation() {
  return (
    <div className="flex flex-col gap-4 rounded-lg border border-border-light dark:border-border-dark bg-card-light dark:bg-card-dark p-6">
      <div className="flex items-center justify-between">
        <h3 className="text-lg font-semibold leading-normal">Visits by Location</h3>
        <button className="text-primary text-sm font-medium hover:underline">View Full Report</button>
      </div>
      <div
        className="w-full h-48 bg-center bg-no-repeat bg-cover rounded-lg object-cover mb-2 border border-border-light dark:border-border-dark"
        style={{
          backgroundImage: `url("https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?w=800&q=80")`,
        }}
      ></div>
      <div className="grid grid-cols-2 gap-4">
        {locationStats.map((location) => (
          <div
            key={location.country}
            className="flex items-center justify-between p-2 rounded bg-background-light dark:bg-background-dark"
          >
            <div className="flex items-center gap-2">
              <img alt={location.country} className="w-5 rounded shadow-sm" src={location.flagImage} />
              <span className="text-sm font-medium">{location.country}</span>
            </div>
            <span className="text-sm font-bold">{location.count.toLocaleString()}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

