/**
 * MenuItem Component Types
 * 
 * Type definitions for the MenuItem component derived from the 
 * Multi-Brand Design System Figma specifications.
 */

export type MenuItemStatus = 'default' | 'hover' | 'disabled';
export type MenuItemType = 'default' | 'selected';

export interface MenuItemProps extends React.HTMLAttributes<HTMLDivElement> {
  /**
   * Menu item label text
   */
  label: string;
  
  /**
   * Interactive state
   */
  status?: MenuItemStatus;
  
  /**
   * Selection state
   */
  selected?: boolean;
  
  /**
   * Icon component to display on the left
   */
  iconLeft?: React.ReactNode;
  
  /**
   * Icon component to display on the right
   */
  iconRight?: React.ReactNode;
  
  /**
   * Whether to show the left icon
   */
  showIconLeft?: boolean;
  
  /**
   * Whether to show the right icon
   */
  showIconRight?: boolean;
  
  /**
   * Callback when item is clicked
   */
  onClick?: () => void;
}
