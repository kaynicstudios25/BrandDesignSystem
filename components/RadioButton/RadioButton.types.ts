/**
 * RadioButton Component Types
 * 
 * Type definitions for the RadioButton component derived from the 
 * Multi-Brand Design System Figma specifications.
 */

export type RadioButtonStatus = 'default' | 'hover' | 'focus' | 'disabled';

export interface RadioButtonProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'type' | 'size'> {
  /**
   * Interactive state (typically managed internally)
   */
  status?: RadioButtonStatus;
  
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
   * Label text to display next to the radio button
   */
  label?: string;
  
  /**
   * Whether to hide the label (useful for accessibility)
   */
  hideLabel?: boolean;
  
  /**
   * Custom className for styling override
   */
  className?: string;
  
  /**
   * Custom styles for the container
   */
  containerStyle?: React.CSSProperties;
}
