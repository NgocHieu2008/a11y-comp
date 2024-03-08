import React, { MouseEvent, KeyboardEvent } from 'react';

export interface LinkProps {
  href: string;
  children: React.ReactNode;
  newWindow?: boolean;
  onClick?: () => void;
}

export const Link: React.FC<LinkProps> = ({ href, children, newWindow, onClick }) => {
  const handleKeyDown = (event: KeyboardEvent<HTMLAnchorElement>) => {
    if (event.key === 'Enter') {
      event.preventDefault();
      onClick?.();
    }
  };

  const handleClick = (event: MouseEvent<HTMLAnchorElement>) => {
    if (newWindow) {
      const win = window.open(href, '_blank');
      win?.focus();
    } else {
      window.location.href = href;
    }
    event.preventDefault();
    onClick?.();
  };

  const ariaLabel = newWindow ? `${children} - Opens in a new window` : children as string;

  return (
    <a
      href={href}
      onClick={handleClick}
      onKeyDown={handleKeyDown}
      tabIndex={0}
      role="button"
      aria-label={ariaLabel}
    >
      {children}
    </a>
  );
};

Link.defaultProps = {
  newWindow: false,
  onClick: () => {},
};