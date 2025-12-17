"use client";

import React from "react";
import classNames from "classnames";

type PaginationProps = {
  currentPage: number;
  totalPages: number;
  onPageChange?: (page: number) => void;
};

export default function Pagination({
  currentPage,
  totalPages,
  onPageChange,
}: PaginationProps) {
  const pageNumbers: (number | string)[] = [];

  // 페이지 번호 배열 생성 (단순화: 1,2,3,...,totalPages)
  for (let i = 1; i <= totalPages; i++) {
    if (
      i === 1 ||
      i === totalPages ||
      (i >= currentPage - 1 && i <= currentPage + 1)
    ) {
      pageNumbers.push(i);
    } else if (pageNumbers[pageNumbers.length - 1] !== "...") {
      pageNumbers.push("...");
    }
  }

  const handleClick = (page: number | string) => {
    if (typeof page === "number" && page !== currentPage) {
      onPageChange?.(page);
    }
  };

  return (
    <div className="mt-6 flex items-center justify-center">
      <nav className="flex items-center gap-1">
        {/* 이전 버튼 */}
        <button
          className="flex h-9 w-9 items-center justify-center rounded-lg text-gray-500 hover:bg-gray-100 dark:hover:bg-gray-800 disabled:opacity-50"
          onClick={() => handleClick(currentPage - 1)}
          disabled={currentPage === 1}
        >
          <span className="material-symbols-outlined text-xl">
            chevron_left
          </span>
        </button>

        {/* 페이지 번호 */}
        {pageNumbers.map((page, idx) =>
          page === "..." ? (
            <span
              key={idx}
              className="flex h-9 w-9 items-center justify-center text-gray-500"
            >
              ...
            </span>
          ) : (
            <button
              key={idx}
              className={classNames(
                "flex h-9 w-9 items-center justify-center rounded-lg text-sm font-bold",
                page === currentPage
                  ? "bg-primary text-white"
                  : "text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800"
              )}
              onClick={() => handleClick(page)}
            >
              {page}
            </button>
          )
        )}

        {/* 다음 버튼 */}
        <button
          className="flex h-9 w-9 items-center justify-center rounded-lg text-gray-500 hover:bg-gray-100 dark:hover:bg-gray-800 disabled:opacity-50"
          onClick={() => handleClick(currentPage + 1)}
          disabled={currentPage === totalPages}
        >
          <span className="material-symbols-outlined text-xl">
            chevron_right
          </span>
        </button>
      </nav>
    </div>
  );
}
