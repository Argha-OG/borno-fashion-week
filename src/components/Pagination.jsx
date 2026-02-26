import React from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
    // Generate page numbers to display
    const getPageNumbers = () => {
        const pages = [];
        const maxDisplayed = 5;

        if (totalPages <= maxDisplayed) {
            for (let i = 1; i <= totalPages; i++) {
                pages.push(i);
            }
        } else {
            // Complex logic for many pages
            if (currentPage <= 3) {
                // Near the start
                for (let i = 1; i <= 4; i++) pages.push(i);
                pages.push('...');
                pages.push(totalPages);
            } else if (currentPage >= totalPages - 2) {
                // Near the end
                pages.push(1);
                pages.push('...');
                for (let i = totalPages - 3; i <= totalPages; i++) pages.push(i);
            } else {
                // Somewhere in the middle
                pages.push(1);
                pages.push('...');
                for (let i = currentPage - 1; i <= currentPage + 1; i++) pages.push(i);
                pages.push('...');
                pages.push(totalPages);
            }
        }
        return pages;
    };

    if (totalPages <= 1) return null;

    return (
        <div className="flex items-center justify-center gap-2 mt-12 w-full">
            <button
                onClick={() => onPageChange(currentPage - 1)}
                disabled={currentPage === 1}
                className="p-2 rounded-full glassmorphism text-white/50 hover:text-gold hover:border-gold/30 disabled:opacity-30 disabled:hover:text-white/50 disabled:hover:border-transparent transition-all"
                aria-label="Previous page"
            >
                <ChevronLeft className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-1 sm:gap-2 mx-2">
                {getPageNumbers().map((page, index) => (
                    <React.Fragment key={index}>
                        {page === '...' ? (
                            <span className="px-2 text-white/30">...</span>
                        ) : (
                            <button
                                onClick={() => onPageChange(page)}
                                className={`w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 ${currentPage === page
                                        ? 'bg-gold text-black font-bold'
                                        : 'glassmorphism text-white/70 hover:text-gold hover:border-gold/30'
                                    }`}
                            >
                                {page}
                            </button>
                        )}
                    </React.Fragment>
                ))}
            </div>

            <button
                onClick={() => onPageChange(currentPage + 1)}
                disabled={currentPage === totalPages}
                className="p-2 rounded-full glassmorphism text-white/50 hover:text-gold hover:border-gold/30 disabled:opacity-30 disabled:hover:text-white/50 disabled:hover:border-transparent transition-all"
                aria-label="Next page"
            >
                <ChevronRight className="w-5 h-5" />
            </button>
        </div>
    );
};

export default Pagination;
