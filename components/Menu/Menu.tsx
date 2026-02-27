/**
 * Menu Component
 * 
 * A menu component that displays a list of menu items with optional scrollbar.
 * Integrates with the design token system.
 * 
 * Design Reference: Figma Multi-Brand Design System (node 167:8905)
 */

import React, { useState, useRef, useEffect } from 'react';
import { MenuProps } from './Menu.types';
import { getMenuStyles } from './Menu.styles';
import { MenuItem } from '../MenuItem';

export const Menu = React.forwardRef<HTMLDivElement, MenuProps>(
  (
    {
      items,
      showScrollbar = true,
      selectedIndex: controlledSelectedIndex,
      onItemSelect,
      maxHeight,
      className = '',
      ...rest
    },
    ref
  ) => {
    const [internalSelectedIndex, setInternalSelectedIndex] = useState<number | undefined>(
      controlledSelectedIndex
    );
    const menuListRef = useRef<HTMLDivElement>(null);
    const [scrollbarHeight, setScrollbarHeight] = useState(45);

    // Use controlled or uncontrolled selected index
    const selectedIndex = controlledSelectedIndex !== undefined 
      ? controlledSelectedIndex 
      : internalSelectedIndex;

    const styles = getMenuStyles({
      showScrollbar,
      maxHeight,
    });

    // Calculate scrollbar thumb height based on content
    useEffect(() => {
      if (!showScrollbar || !menuListRef.current) return;

      const updateScrollbar = () => {
        const element = menuListRef.current;
        if (!element) return;

        const { scrollHeight, clientHeight } = element;
        if (scrollHeight > clientHeight) {
          const ratio = clientHeight / scrollHeight;
          const thumbHeight = Math.max(clientHeight * ratio, 30);
          setScrollbarHeight(thumbHeight);
        }
      };

      updateScrollbar();
      window.addEventListener('resize', updateScrollbar);
      return () => window.removeEventListener('resize', updateScrollbar);
    }, [items, showScrollbar, maxHeight]);

    const handleItemClick = (index: number) => {
      if (controlledSelectedIndex === undefined) {
        setInternalSelectedIndex(index);
      }
      onItemSelect?.(index);
    };

    return (
      <div
        ref={ref}
        className={className}
        style={styles.container}
        role="menu"
        {...rest}
      >
        <div ref={menuListRef} style={styles.menuList}>
          {items.map((item, index) => (
            <MenuItem
              key={index}
              {...item}
              selected={selectedIndex === index}
              onClick={() => {
                handleItemClick(index);
                item.onClick?.();
              }}
            />
          ))}
        </div>
        {showScrollbar && (
          <div style={styles.scrollbar}>
            <div 
              style={{
                ...styles.scrollbarThumb,
                height: `${scrollbarHeight}px`,
              }} 
            />
          </div>
        )}
      </div>
    );
  }
);

Menu.displayName = 'Menu';
