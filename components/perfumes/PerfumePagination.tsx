import React from 'react';

interface PerfumePaginationProps {
  currentPage: number;
  totalPages: number;
  setCurrentPage: (n: number) => void;
}

export default function PerfumePagination({ currentPage, totalPages, setCurrentPage }: PerfumePaginationProps) {
  if (totalPages <= 1) return null;
  return (
    <div className="flex justify-center items-center gap-2 my-6">
      <button
        className="px-3 py-1 rounded bg-gray-100"
        disabled={currentPage === 1}
        onClick={() => setCurrentPage(currentPage - 1)}
      >
        Anterior
      </button>
      <span className="px-2">Página {currentPage} de {totalPages}</span>
      <button
        className="px-3 py-1 rounded bg-gray-100"
        disabled={currentPage === totalPages}
        onClick={() => setCurrentPage(currentPage + 1)}
      >
        Siguiente
      </button>
    </div>
  );
}
