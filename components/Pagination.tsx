"use client";

import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

export default function Pagination({
  currentPage,
  totalPages,
  onPageChange,
}: PaginationProps) {
  const pages = [];
  const maxVisiblePages = 5;

  let startPage = Math.max(1, currentPage - Math.floor(maxVisiblePages / 2));
  const endPage = Math.min(totalPages, startPage + maxVisiblePages - 1);

  if (endPage - startPage < maxVisiblePages - 1) {
    startPage = Math.max(1, endPage - maxVisiblePages + 1);
  }

  for (let i = startPage; i <= endPage; i++) {
    pages.push(i);
  }

  if (totalPages <= 1) return null;

  return (
    <div className="flex items-center justify-center gap-2 mt-12">
      <Button
        variant="outline"
        size="sm"
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
        className="border-emerald-400 text-emerald-400 hover:bg-emerald-50 disabled:opacity-50"
      >
        <ChevronLeft className="w-4 h-4" />
        <span className="ml-1 hidden sm:inline">Prethodna</span>
      </Button>

      <div className="flex items-center gap-1">
        {startPage > 1 && (
          <>
            <Button
              variant="outline"
              size="sm"
              onClick={() => onPageChange(1)}
              className="border-emerald-400 text-emerald-400 hover:bg-emerald-50 w-10 h-10"
            >
              1
            </Button>
            {startPage > 2 && <span className="px-2 text-gray-500">...</span>}
          </>
        )}

        {pages.map((page) => (
          <Button
            key={page}
            variant={currentPage === page ? "default" : "outline"}
            size="sm"
            onClick={() => onPageChange(page)}
            className={
              currentPage === page
                ? "bg-emerald-400 hover:bg-emerald-500 w-10 h-10"
                : "border-emerald-400 text-emerald-400 hover:bg-emerald-50 w-10 h-10"
            }
          >
            {page}
          </Button>
        ))}

        {endPage < totalPages && (
          <>
            {endPage < totalPages - 1 && (
              <span className="px-2 text-gray-500">...</span>
            )}
            <Button
              variant="outline"
              size="sm"
              onClick={() => onPageChange(totalPages)}
              className="border-emerald-400 text-emerald-400 hover:bg-emerald-50 w-10 h-10"
            >
              {totalPages}
            </Button>
          </>
        )}
      </div>

      <Button
        variant="outline"
        size="sm"
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        className="border-emerald-400 text-emerald-400 hover:bg-emerald-50 disabled:opacity-50"
      >
        <span className="mr-1 hidden sm:inline">Sledeća</span>
        <ChevronRight className="w-4 h-4" />
      </Button>
    </div>
  );
}
