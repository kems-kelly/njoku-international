import React from 'react';
import './Button.css';

/**
 * Reusable Button component
 * Exactly two variants: primary, secondary
 * Renders <a> if href is passed, otherwise <button>
 */
export default function Button({
  variant = 'primary',
  href,
  children,
  className = '',
  ...props
}) {
  const combinedClassName = `btn btn--${variant} ${className}`.trim();

  if (href) {
    return (
      <a href={href} className={combinedClassName} {...props}>
        {children}
      </a>
    );
  }

  return (
    <button type="button" className={combinedClassName} {...props}>
      {children}
    </button>
  );
}
