"use client";

import { getShortUrlList } from "@/api/shortUrl.api";
import Pagination from "@/common/components/ui/pagination";
import { ShortUrlResponseDto } from "@/common/dtos/shortUrl.dto";
import { BaseStatus } from "@/common/enums/baseStatus.enum";
import { formatKoreanDatetime } from "@/utils/string/string.util";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function LinksSection() {
  const router = useRouter();
  const [statusFilter, setStatusFilter] = useState<PageStatus>("All");
  const [sortOrder, setSortOrder] = useState<SortOrder>("desc");
  const [links, setLinks] = useState<ShortUrlResponseDto[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  useEffect(() => {
    const statusParam =
      statusFilter === "All"
        ? undefined
        : statusFilter === "Active"
        ? BaseStatus.ACTIVE
        : BaseStatus.INACTIVE;

    getShortUrlList(
      currentPage,
      itemsPerPage,
      `createdAt,${sortOrder}`,
      statusParam
    )
      .then((response) => {
        console.log(response.data.data);
        setLinks(response.data.data);
      })
      .catch((error) => {
        console.error("Error fetching short URL list:", error);
      });
  }, [currentPage, sortOrder, statusFilter]);

  // 페이지네이션 적용
  const totalPages = Math.ceil(links.length / itemsPerPage);

  return (
    <div className="flex flex-col font-display border border-border-light rounded-[12px] bg-background-light text-[#1F2937] dark:bg-background-dark dark:text-gray-300">
      {/* Main Content */}
      <div className="px-[24px] py-[32px]">
        <div className="flex flex-col gap-[16px]">
          <div className="flex flex-col gap-[16px]">
            {/* Top row: Title + Create Button */}
            <div className="flex justify-between items-center">
              <h1 className="text-[36px] font-black tracking-tighter text-gray-900 dark:text-white">
                Your Links
              </h1>
              <button
                className="flex min-w-[84px] cursor-pointer items-center justify-center gap-[8px] overflow-hidden rounded-[8px] h-[40px] px-[16px] bg-primary text-white text-[14px] font-bold leading-normal tracking-wide hover:bg-primary/90 transition-colors"
                onClick={() => router.push("/link/create")}
              >
                <span className="material-symbols-outlined">add</span>
                <span className="truncate">Create New Link</span>
              </button>
            </div>

            {/* Bottom row: Search + Filters + Sort */}
            <div className="flex flex-col md:flex-row md:justify-end md:items-center gap-[12px]">
              {/* Search */}
              <div className="w-full max-w-[320px]">
                <input
                  className="w-full rounded-[8px] border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 py-[8px]  p-[16px] focus:border-primary focus:ring-primary"
                  placeholder="Search links..."
                  type="text"
                />
              </div>

              {/* Status Filter */}
              <div className="flex gap-[8px]">
                {(["All", "Active", "Inactive"] as PageStatus[]).map(
                  (status) => (
                    <button
                      key={status}
                      onClick={() => {
                        setStatusFilter(status);
                        setCurrentPage(1);
                      }}
                      className={`h-[40px] px-[16px] rounded-[8px] text-[14px] font-medium ${
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
                className="flex h-[40px] shrink-0 items-center justify-center gap-x-[8px] rounded-[8px] bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 px-[16px] hover:bg-gray-50 dark:hover:bg-gray-700/50"
                onClick={() =>
                  setSortOrder((prev) => (prev === "desc" ? "asc" : "desc"))
                }
              >
                <p className="text-[14px] font-medium">
                  By Date {sortOrder === "desc" ? "↓" : "↑"}
                </p>
                <span className="material-symbols-outlined text-[18px]">
                  expand_more
                </span>
              </button>
            </div>
          </div>

          {/* Table */}
          <div className="overflow-hidden rounded-[12px] border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900/50">
            <div className="overflow-x-auto">
              <table className="w-full text-[14px]">
                <thead className="bg-gray-50 dark:bg-gray-800/50">
                  <tr>
                    <th className="px-[12px] py-[8px] text-left font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                      Title
                    </th>
                    <th className="px-[12px] py-[8px] text-left font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                      Short Link
                    </th>
                    <th className="px-[12px] py-[8px] text-left font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                      Original URL
                    </th>
                    <th className="px-[12px] py-[8px] text-left font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                      Status
                    </th>
                    <th className="px-[12px] py-[8px] text-left font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                      Created
                    </th>
                    <th className="px-[12px] py-[8px] text-right font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200 dark:divide-gray-800">
                  {links.map((link, i) => (
                    <tr key={i}>
                      <td className="px-[12px] py-[8px] text-gray-500 dark:text-gray-400">
                        <div className="max-w-[120px] truncate">
                          {link.title}
                        </div>
                      </td>
                      <td className="px-[12px] py-[8px] whitespace-nowrap">
                        <div className="flex items-center gap-[8px]">
                          <a
                            className="font-medium text-primary hover:underline"
                            href={`${process.env.NEXT_PUBLIC_SERVER_URL}/${link.shortCode}`}
                          >
                            {process.env.NEXT_PUBLIC_SERVER_URL}/
                            {link.shortCode}
                          </a>
                          <button
                            className="text-gray-400 hover:text-primary"
                            onClick={() => {
                              const fullUrl = `${process.env.NEXT_PUBLIC_SERVER_URL}/${link.shortCode}`;
                              navigator.clipboard
                                .writeText(fullUrl)
                                .then(() => alert("Copied!"))
                                .catch(() => alert("Failed to copy"));
                            }}
                          >
                            <span className="p-[8px] material-symbols-outlined text-[16px] cursor-pointer">
                              content_copy
                            </span>
                          </button>
                        </div>
                      </td>
                      <td className="px-[12px] py-[8px] max-w-[200px] truncate text-gray-500 dark:text-gray-400">
                        {link.originalUrl}
                      </td>
                      <td className="px-[12px] py-[8px] whitespace-nowrap">
                        <span
                          className={`inline-flex items-center rounded-[9999px] px-[10px] py-[2px] text-[12px] font-medium ${
                            link.status === BaseStatus.ACTIVE
                              ? "bg-green-100 dark:bg-green-900/50 text-green-800 dark:text-green-300"
                              : "bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-300"
                          }`}
                        >
                          {link.status}
                        </span>
                      </td>
                      <td className="px-[12px] py-[8px] whitespace-nowrap text-gray-500 dark:text-gray-400">
                        {formatKoreanDatetime(link.createdAt?.toString())}
                      </td>
                      <td className="px-[12px] py-[8px] whitespace-nowrap text-right">
                        <div className="flex items-center justify-end gap-[8px]">
                          <button
                            className="text-gray-500 hover:text-primary rounded-[9999px] hover:bg-primary/10"
                            onClick={() =>
                              router.push(`/link/${link.shortCode}/edit`)
                            }
                          >
                            <span className="p-[8px] material-symbols-outlined text-[20px]">
                              edit
                            </span>
                          </button>
                          <button
                            className="text-gray-500 hover:text-primary rounded-[9999px] hover:bg-primary/10"
                            onClick={() =>
                              router.push(`/link/${link.shortCode}/dashboard`)
                            }
                          >
                            <span className="p-[8px] material-symbols-outlined text-[20px]">
                              bar_chart
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
    </div>
  );
}
