/**
 * Button Component Types
 * 
 * Type definitions for the Button component derived from the 
 * Multi-Brand Design System Figma specifications.
 */

export type ButtonVariant = 'default' | 'outline' | 'transparent';
export type ButtonStatus = 'default' | 'hover' | 'focus' | 'disabled';
export type ButtonSize = 'sm' | 'md' | 'lg';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  /**
   * Visual style variant
   * - default: Filled button with background
   * - outline: Button with border, transparent background
   * - transparent: No border or background, text only
   */
  variant?: ButtonVariant;
  
  /**
   * Interactive state (typically managed internally)
   */
  status?: ButtonStatus;
  
  /**
   * Button size
   */
  size?: ButtonSize;
  
  /**
   * Button label text
   */
  children: React.ReactNode;
  
  /**
   * Icon component to display on the left
   */
  iconLeft?: React.ReactNode;
  
  /**
   * Icon component to display on the right
   */
  iconRight?: React.ReactNode;
  
  /**
   * Full width button
   */
  fullWidth?: boolean;
  
  /**
   * Additional CSS class names
   */
  className?: string;
}
