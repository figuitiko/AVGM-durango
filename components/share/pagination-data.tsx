"use client";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import { calculateTotalPages, ITEMS_PER_PAGE } from "@/lib/utils";
import { useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";

export const PaginationData = ({ total }: { total: number }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const searchParams = useSearchParams();
  const router = useRouter();
  const isNext = currentPage < calculateTotalPages(total, ITEMS_PER_PAGE);
  const isPrev = currentPage > 1;
  const currentTotalPages = calculateTotalPages(total, ITEMS_PER_PAGE);
  const handlePaginate = (page: number) => {
    setCurrentPage(page);
    const params = new URLSearchParams(searchParams.toString());
    params.set("page", page.toString());
    const queryString = params.toString();
    router.push(`/dashboard?${queryString}`);
  };

  return (
    <Pagination>
      <PaginationContent>
        {isPrev && (
          <PaginationItem onClick={() => handlePaginate(currentPage - 1)}>
            <PaginationPrevious href="#" />
          </PaginationItem>
        )}
        {Array.from({ length: currentTotalPages }, (_, i) => i + 1).map(
          (page) => (
            <PaginationItem key={page} onClick={() => handlePaginate(page)}>
              {page < 3 || page > currentPage - 3 ? (
                <PaginationLink
                  href="#"
                  className={
                    page === currentPage ? "bg-primary text-white" : ""
                  }
                >
                  {page}
                </PaginationLink>
              ) : (
                <PaginationEllipsis />
              )}
            </PaginationItem>
          )
        )}
        {isNext && (
          <PaginationItem onClick={() => handlePaginate(currentPage + 1)}>
            <PaginationNext href="#" />
          </PaginationItem>
        )}
      </PaginationContent>
    </Pagination>
  );
};
