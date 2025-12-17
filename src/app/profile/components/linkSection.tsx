'use client";';

import Pagination from "@/common/components/ui/pagination";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

const links = [
  {
    short: "bit.ly/xyz123",
    original: "https://www.very-long-original-url-that-is-truncated.com",
    clicks: 1234,
    status: "Active",
    created: "2023-10-26",
  },
  {
    short: "bit.ly/abc456",
    original: "https://www.another-long-url-for-a-different-product.com",
    clicks: 5678,
    status: "Active",
    created: "2023-10-25",
  },
  {
    short: "bit.ly/def789",
    original: "https://www.inactive-link-example-for-demonstration.com",
    clicks: 987,
    status: "Inactive",
    created: "2023-10-24",
  },
  {
    short: "bit.ly/ghi012",
    original: "https://www.yet-another-example-of-a-destination-url.com",
    clicks: 2468,
    status: "Active",
    created: "2023-10-23",
  },
];

export default function LinksSection() {
  const router = useRouter();
  const [statusFilter, setStatusFilter] = useState<PageStatus>("All");
  const [sortOrder, setSortOrder] = useState<SortOrder>("desc"); // 기본 내림차순
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 1;

  const filteredLinks = links.filter((link) =>
    statusFilter === "All" ? true : link.status === statusFilter
  );

  // 페이지네이션 적용
  const totalPages = Math.ceil(filteredLinks.length / itemsPerPage);
  const paginatedLinks = filteredLinks.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const sortedLinks = [...filteredLinks].sort((a, b) => {
    const dateA = new Date(a.created).getTime();
    const dateB = new Date(b.created).getTime();
    return sortOrder === "asc" ? dateA - dateB : dateB - dateA;
  });

  return (
    <div className="relative flex h-auto min-h-screen w-full flex-col font-display border border-border-light rounded-xl bg-background-light text-[#1F2937] dark:bg-background-dark dark:text-gray-300">
      <main className="flex flex-1">
        {/* Main Content */}
        <div className="flex-1 px-4 py-8 md:px-6 lg:px-8">
          <div className="flex flex-col gap-4 mx-auto max-w-7xl">
            <div className="flex flex-col gap-4">
              {/* Top row: Title + Create Button */}
              <div className="flex justify-between items-center">
                <h1 className="text-4xl font-black tracking-tighter text-gray-900 dark:text-white">
                  Your Links
                </h1>
                <button
                  className="flex min-w-[84px] cursor-pointer items-center justify-center gap-2 overflow-hidden rounded-lg h-10 px-4 bg-primary text-white text-sm font-bold leading-normal tracking-wide hover:bg-primary/90 transition-colors"
                  onClick={() => router.push("/link/create")}
                >
                  <span className="material-symbols-outlined">add</span>
                  <span className="truncate">Create New Link</span>
                </button>
              </div>

              {/* Bottom row: Search + Filters + Sort */}
              <div className="flex flex-col md:flex-row md:justify-end md:items-center gap-3">
                {/* Search */}
                <div className="relative w-full max-w-xs">
                  <span className="material-symbols-outlined pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
                    search
                  </span>
                  <input
                    className="w-full rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 py-2 pl-10 pr-4 focus:border-primary focus:ring-primary"
                    placeholder="Search links..."
                    type="text"
                  />
                </div>

                {/* Status Filter */}
                <div className="flex gap-2">
                  {(["All", "Active", "Inactive"] as PageStatus[]).map(
                    (status) => (
                      <button
                        key={status}
                        onClick={() => {
                          setStatusFilter(status);
                          setCurrentPage(1);
                        }}
                        className={`h-10 px-4 rounded-lg text-sm font-medium ${
                          statusFilter === status
                            ? "bg-primary text-white"
                            : "bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700/50"
                        }`}
                      >
                        {status}
                      </button>
                    )
                  )}
                </div>

                {/* Sort by Date */}
                <button
                  className="flex h-10 shrink-0 items-center justify-center gap-x-2 rounded-lg bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 px-4 hover:bg-gray-50 dark:hover:bg-gray-700/50"
                  onClick={() =>
                    setSortOrder((prev) => (prev === "desc" ? "asc" : "desc"))
                  }
                >
                  <p className="text-sm font-medium">
                    By Date {sortOrder === "desc" ? "↓" : "↑"}
                  </p>
                  <span className="material-symbols-outlined text-lg">
                    expand_more
                  </span>
                </button>
              </div>
            </div>

            {/* Table */}
            <div className="overflow-hidden rounded-xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900/50">
              <div className="overflow-x-auto">
                <table className="min-w-full text-sm">
                  <thead className="bg-gray-50 dark:bg-gray-800/50">
                    <tr>
                      <th className="px-6 py-4 text-left font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                        Short Link
                      </th>
                      <th className="px-6 py-4 text-left font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                        Original URL
                      </th>
                      <th className="px-6 py-4 text-left font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                        Clicks
                      </th>
                      <th className="px-6 py-4 text-left font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                        Status
                      </th>
                      <th className="px-6 py-4 text-left font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                        Created
                      </th>
                      <th className="px-6 py-4 text-right font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                        Actions
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200 dark:divide-gray-800">
                    {links.map((link, i) => (
                      <tr key={i}>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="flex items-center gap-2">
                            <a
                              className="font-medium text-primary hover:underline"
                              href="#"
                            >
                              {link.short}
                            </a>
                            <button className="text-gray-400 hover:text-primary">
                              <span className="material-symbols-outlined text-base">
                                content_copy
                              </span>
                            </button>
                          </div>
                        </td>
                        <td className="px-6 py-4 max-w-xs truncate text-gray-500 dark:text-gray-400">
                          {link.original}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-gray-500 dark:text-gray-400">
                          {link.clicks.toLocaleString()}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <span
                            className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium ${
                              link.status === "Active"
                                ? "bg-green-100 dark:bg-green-900/50 text-green-800 dark:text-green-300"
                                : "bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-300"
                            }`}
                          >
                            {link.status}
                          </span>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-gray-500 dark:text-gray-400">
                          {link.created}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-right">
                          <div className="flex items-center justify-end gap-2">
                            <button className="p-2 text-gray-500 hover:text-primary rounded-full hover:bg-primary/10">
                              <span className="material-symbols-outlined text-xl">
                                edit
                              </span>
                            </button>
                            <button className="p-2 text-gray-500 hover:text-primary rounded-full hover:bg-primary/10">
                              <span className="material-symbols-outlined text-xl">
                                bar_chart
                              </span>
                            </button>
                            <button
                              className={`p-2 rounded-full hover:bg-${
                                link.status === "Active" ? "red" : "green"
                              }-500/10 text-gray-500 hover:text-${
                                link.status === "Active" ? "red" : "green"
                              }-500`}
                            >
                              <span
                                className={`material-symbols-outlined text-xl ${
                                  link.status === "Active"
                                    ? ""
                                    : "-scale-x-100 text-gray-400 dark:text-gray-600"
                                }`}
                              >
                                {link.status === "Active"
                                  ? "toggle_on"
                                  : "toggle_off"}
                              </span>
                            </button>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Pagination */}
            <Pagination
              currentPage={currentPage}
              totalPages={totalPages}
              onPageChange={(page) => setCurrentPage(page)}
            />
          </div>
        </div>
      </main>
    </div>
  );
}
