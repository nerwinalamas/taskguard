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
import { usePagination } from "@/hooks/usePagination";

const TaskTablePagination = ({
    data,
    count,
}: {
    data: any[] | [];
    count: number;
}) => {
    const { currentPage, totalPages, nextPage, previousPage, setCurrentPage } =
        usePagination(data, count);

    const getPageRange = () => {
        const range = [];
        const totalVisiblePages = 2;
        let start = Math.max(
            1,
            currentPage - Math.floor(totalVisiblePages / 2)
        );
        let end = start + totalVisiblePages - 1;

        if (end > totalPages) {
            end = totalPages;
            start = Math.max(1, end - totalVisiblePages + 1);
        }

        for (let i = start; i <= end; i++) {
            range.push(i);
        }

        return range;
    };

    const pageRange = getPageRange();

    return (
        <Pagination className="w-max mt-2 mb-5">
            <PaginationContent>
                <PaginationItem>
                    <PaginationPrevious href="#" onClick={previousPage} />
                </PaginationItem>
                {pageRange.map((page) => (
                    <PaginationItem key={page}>
                        <PaginationLink
                            href="#"
                            onClick={() => setCurrentPage(page)}
                            isActive={currentPage === page}
                            className={`${
                                currentPage === page
                                    ? "text-black"
                                    : "text-white"
                            }`}
                        >
                            {page}
                        </PaginationLink>
                    </PaginationItem>
                ))}
                {totalPages > pageRange[pageRange.length - 1] && (
                    <PaginationItem>
                        <PaginationEllipsis />
                    </PaginationItem>
                )}
                <PaginationItem>
                    <PaginationNext href="#" onClick={nextPage} />
                </PaginationItem>
            </PaginationContent>
        </Pagination>
    );
};

export default TaskTablePagination;
