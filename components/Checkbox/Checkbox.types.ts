/**
 * Checkbox Component Types
 * 
 * Type definitions for the Checkbox component derived from the 
 * Multi-Brand Design System Figma specifications.
 */

export type CheckboxStatus = 'default' | 'hover' | 'focus' | 'disabled' | 'error';

export interface CheckboxProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'type' | 'size'> {
  /**
   * Interactive state (typically managed internally)
   */
  status?: CheckboxStatus;
  
  /**
   * Checked state
   */
  checked?: boolean;
  
  /**
   * Default checked state (uncontrolled)
   */
  defaultChecked?: boolean;
  
  /**
   * Change handler
   */
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  
  /**
   * Label text to display next to the checkbox
   */
  label?: string;
  
  /**
   * Whether to hide the label (useful for accessibility)
   */
  hideLabel?: boolean;
  
  /**
   * Error state
   */
  error?: boolean;
  
  /**
   * Custom className for styling override
   */
  className?: string;
  
  /**
   * Custom styles for the container
   */
  containerStyle?: React.CSSProperties;
}
