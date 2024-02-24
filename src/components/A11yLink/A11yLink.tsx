import React from 'react';
import {LinkButtonStyle} from './A11yLinkStyled.style'

// Define the LinkProps interface to encompass potential props
export interface LinkProps {
  /**
   * The text content of the link.
   */
  text: string;

  /**
   * The URL of the link.
   */
  href?: string;

  /**
   * Whether the link opens in a new window/tab.
   */
  isNewWindow?: boolean;

}

// Create a functional component using forwardRef for accessibility reference
export const A11yLink = React.forwardRef<HTMLAnchorElement, LinkProps>(
  ({ text, href, isNewWindow, ...props }, ref) => {
    const isButton = !href;

    // Construct an aria-label with descriptive text
    const ariaLabel = `${text}${isNewWindow ? ' (opens in a new window)' : ''}`;

    return (
      <span ref={ref}>
        {isButton ? (
          <LinkButtonStyle type="button" aria-label={ariaLabel} {...props}>
            {text}
          </LinkButtonStyle>
        ) : (
          <a
            ref={ref}
            href={href}
            aria-label={ariaLabel}
            rel={isNewWindow ? 'noopener noreferrer' : undefined}
            {...props}
          >
            {text}
          </a>
        )}
      </span>
    );
  }
);
