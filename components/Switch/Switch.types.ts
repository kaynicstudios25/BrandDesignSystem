/**
 * Switch Component Types
 * 
 * Type definitions for the Switch component derived from the 
 * Multi-Brand Design System Figma specifications.
 */

export type SwitchStatus = 'default' | 'hover' | 'focus' | 'disabled';

export interface SwitchProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'type' | 'size'> {
  /**
   * Interactive state (typically managed internally)
   */
  status?: SwitchStatus;
  
  /**
   * Checked state (on/off)
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
   * Label text to display next to the switch
   */
  label?: string;
  
  /**
   * Whether to hide the label
   */
  hideLabel?: boolean;
  
  /**
   * Position of the label (left or right)
   * @default 'right'
   */
  labelPosition?: 'left' | 'right';
  
  /**
   * Custom styling for the container
   */
  containerStyle?: React.CSSProperties;
  
  /**
   * Whether to disable the switch
   */
  disabled?: boolean;
}
