/**
 * MenuItem Component
 * 
 * A menu item component that integrates with the design token system.
 * Supports default and selected states with hover and disabled variations.
 * 
 * Design Reference: Figma Multi-Brand Design System (node 167:267)
 */

import React, { useState } from 'react';
import { MenuItemProps } from './MenuItem.types';
import { getMenuItemStyles } from './MenuItem.styles';

export const MenuItem = React.forwardRef<HTMLDivElement, MenuItemProps>(
  (
    {
      label,
      status = 'default',
      selected = false,
      iconLeft,
      iconRight,
      showIconLeft = true,
      showIconRight = true,
      className = '',
      onClick,
      onMouseEnter,
      onMouseLeave,
      ...rest
    },
    ref
  ) => {
    const [isHovered, setIsHovered] = useState(false);

    // Determine effective status based on state
    const effectiveStatus = status === 'disabled' 
      ? 'disabled' 
      : isHovered 
      ? 'hover' 
      : 'default';

    const styles = getMenuItemStyles({
      status: effectiveStatus,
      selected,
    });

    const handleMouseEnter = (e: React.MouseEvent<HTMLDivElement>) => {
      if (status !== 'disabled') {
        setIsHovered(true);
      }
      onMouseEnter?.(e);
    };

    const handleMouseLeave = (e: React.MouseEvent<HTMLDivElement>) => {
      setIsHovered(false);
      onMouseLeave?.(e);
    };

    const handleClick = () => {
      if (status !== 'disabled' && onClick) {
        onClick();
      }
    };

    return (
      <div
        ref={ref}
        className={className}
        style={styles.container}
        onClick={handleClick}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        role="menuitem"
        aria-disabled={status === 'disabled'}
        {...rest}
      >
        {showIconLeft && iconLeft && (
          <span style={styles.iconLeft}>{iconLeft}</span>
        )}
        <p style={styles.label}>{label}</p>
        {showIconRight && iconRight && (
          <span style={styles.iconRight}>{iconRight}</span>
        )}
      </div>
    );
  }
);

MenuItem.displayName = 'MenuItem';
