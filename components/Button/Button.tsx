/**
 * Button Component
 * 
 * A multi-variant button component that integrates with the design token system.
 * Supports default, outline, and transparent variants with icon support.
 * 
 * Design Reference: Figma Multi-Brand Design System (node 84:145)
 */

import React, { useState } from 'react';
import { ButtonProps } from './Button.types';
import { getButtonStyles } from './Button.styles';

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      variant = 'default',
      size = 'md',
      children,
      iconLeft,
      iconRight,
      fullWidth = false,
      disabled = false,
      className = '',
      onMouseEnter,
      onMouseLeave,
      onFocus,
      onBlur,
      ...rest
    },
    ref
  ) => {
    const [isHovered, setIsHovered] = useState(false);
    const [isFocused, setIsFocused] = useState(false);

    // Determine status based on state
    const status = disabled 
      ? 'disabled' 
      : isFocused 
      ? 'focus' 
      : isHovered 
      ? 'hover' 
      : 'default';

    const styles = getButtonStyles({ variant, status, size, fullWidth });

    const handleMouseEnter = (e: React.MouseEvent<HTMLButtonElement>) => {
      setIsHovered(true);
      onMouseEnter?.(e);
    };

    const handleMouseLeave = (e: React.MouseEvent<HTMLButtonElement>) => {
      setIsHovered(false);
      onMouseLeave?.(e);
    };

    const handleFocus = (e: React.FocusEvent<HTMLButtonElement>) => {
      setIsFocused(true);
      onFocus?.(e);
    };

    const handleBlur = (e: React.FocusEvent<HTMLButtonElement>) => {
      setIsFocused(false);
      onBlur?.(e);
    };

    return (
      <button
        ref={ref}
        disabled={disabled}
        className={className}
        style={styles.button}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onFocus={handleFocus}
        onBlur={handleBlur}
        {...rest}
      >
        <span style={styles.content}>
          {iconLeft && <span style={styles.iconLeft}>{iconLeft}</span>}
          <span style={styles.label}>{children}</span>
          {iconRight && <span style={styles.iconRight}>{iconRight}</span>}
        </span>
        {isFocused && !disabled && <span style={styles.focusRing} />}
      </button>
    );
  }
);

Button.displayName = 'Button';
