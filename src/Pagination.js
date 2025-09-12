///pagination hook


import { useState, useEffect } from "react";

const usePagination = (data = [], itemsPerPage = 10) => {
  const [currentPage, setCurrentPage] = useState(1);

  // Validate inputs
  const safeData = Array.isArray(data) ? data : [];
  const safeItemsPerPage = Number.isInteger(itemsPerPage) && itemsPerPage > 0 ? itemsPerPage : 10;

  const totalPages = Math.ceil(safeData.length / safeItemsPerPage);

  useEffect(() => {
    setCurrentPage(1); // Reset page when data changes
  }, [safeData]);

  const startIndex = (currentPage - 1) * safeItemsPerPage;
  const endIndex = startIndex + safeItemsPerPage;
  const currentData = safeData.slice(startIndex, endIndex);

  const goToNextPage = () => setCurrentPage((prev) => Math.min(prev + 1, totalPages));
  const goToPreviousPage = () => setCurrentPage((prev) => Math.max(prev - 1, 1));
  const goToPage = (pageNumber) => {
    const page = Math.max(1, Math.min(pageNumber, totalPages));
    setCurrentPage(page);
  };

  return {
    currentData,
    currentPage,
    totalPages,
    goToNextPage,
    goToPreviousPage,
    goToPage,
  };
};

export default usePagination;