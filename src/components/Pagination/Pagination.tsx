import React from 'react';
import {PaginationContainer, Button, ActiveButton, PageLink} from './PaginationStyled.style'

export interface PaginationProps {
    /**
   * Total number of pages.
   */
    totalPages: number;

    /**
     * Current page number (1-based).
     */
    currentPage: number;
  
    /**
     * Callback function to handle page changes.
     */
    onPageChange: (pageNumber: number) => void;
    /**
   * Custom CSS class names for styling.
   */
  className?: string;
}

export const Pagination = React.forwardRef<HTMLElement, PaginationProps>(({
  totalPages,
  currentPage,
  onPageChange,
  className=''
}) => {
  const handlePageChange = (pageNumber: number) => {
    if (pageNumber < 1 || pageNumber > totalPages) {
      return; // Prevent invalid page numbers
    }
    onPageChange(pageNumber);
  };

  const renderPageLink = (pageNumber: number) => {
    const isActive = pageNumber === currentPage;

    return (
      <PageLink key={pageNumber}>
        <Button
          type="button"
          onClick={() => handlePageChange(pageNumber)}
          disabled={isActive}
          aria-label={`Go to page ${pageNumber}`}
          aria-current={isActive ? 'page' : undefined}
        >
          {isActive ? <ActiveButton>{pageNumber}</ActiveButton> : pageNumber}
        </Button>
      </PageLink>
    );
  };

  const previousEnabled = currentPage > 1;
  const nextEnabled = currentPage < totalPages;

  return (
    <PaginationContainer className={className}>
      <Button
        type="button"
        onClick={() => handlePageChange(currentPage - 1)}
        disabled={!previousEnabled}
        aria-label="Go to previous page"
      >
      </Button>
      <ul className="pagination-list">
        {Array.from({ length: totalPages }, (_, i) => i + 1).map(renderPageLink)}
      </ul>
      <Button
        type="button"
        onClick={() => handlePageChange(currentPage + 1)}
        disabled={!nextEnabled}
        aria-label="Go to next page"
      >
      </Button>
    </PaginationContainer>
  );
});
