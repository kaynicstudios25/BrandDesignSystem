/**
 * Menu Component Types
 * 
 * Type definitions for the Menu component derived from the 
 * Multi-Brand Design System Figma specifications.
 */

import { MenuItemProps } from '../MenuItem';

export interface MenuProps extends React.HTMLAttributes<HTMLDivElement> {
  /**
   * Array of menu items to display
   */
  items: MenuItemProps[];
  
  /**
   * Whether to show the scrollbar
   */
  showScrollbar?: boolean;
  
  /**
   * Currently selected item index (for controlled component)
   */
  selectedIndex?: number;
  
  /**
   * Callback when a menu item is selected
   */
  onItemSelect?: (index: number) => void;
  
  /**
   * Maximum height before scrolling
   */
  maxHeight?: string | number;
}
