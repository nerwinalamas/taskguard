"use client";

import { create } from "zustand";
import { useEffect } from "react";

type PaginationState = {
    currentPage: number;
    totalPages: number;
    ITEMS_PER_PAGE: number;
    setCurrentPage: (page: number) => void;
    setTotalPage: (total: number) => void;
    nextPage: () => void;
    previousPage: () => void;
}

const usePaginationStore = create<PaginationState>((set) => ({
    currentPage: 1,
    totalPages: 1,
    ITEMS_PER_PAGE: 10,
    setCurrentPage: (page: number) => set({ currentPage: page }),
    setTotalPage: (total: number) => set({ totalPages: total }),
    nextPage: () =>
        set((state) => {
            if (state.currentPage < state.totalPages) {
                return { currentPage: state.currentPage + 1 };
            }
            return {};
        }),
    previousPage: () =>
        set((state) => {
            if (state.currentPage > 1) {
                return { currentPage: state.currentPage - 1 };
            }
            return {};
        }),
}));

export const usePagination = (data: any[], totalCount: number) => {
    const {
        currentPage,
        totalPages,
        ITEMS_PER_PAGE,
        setCurrentPage,
        setTotalPage,
        nextPage,
        previousPage,
    } = usePaginationStore();

    useEffect(() => {
        setTotalPage(Math.ceil(totalCount / ITEMS_PER_PAGE));
    }, [data, totalCount, ITEMS_PER_PAGE, setTotalPage]);

    const dataPerPage = data.slice(
        (currentPage - 1) * ITEMS_PER_PAGE,
        currentPage * ITEMS_PER_PAGE
    );

    return {
        currentPage,
        totalPages,
        nextPage,
        previousPage,
        dataPerPage,
        setCurrentPage,
    };
};
