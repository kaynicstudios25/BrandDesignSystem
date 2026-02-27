/**
 * Label Component Types
 * 
 * Type definitions for the Label component derived from the 
 * Multi-Brand Design System Figma specifications.
 */

export type LabelType = 'default' | 'required';

export interface LabelProps extends React.HTMLAttributes<HTMLDivElement> {
  /**
   * The label text to display
   */
  label?: string;

  /**
   * Whether to show the help icon
   */
  icon?: boolean;

  /**
   * Label type
   * - default: Standard label
   * - required: Shows asterisk indicator
   */
  type?: LabelType;

  /**
   * Optional icon component to render
   */
  iconComponent?: React.ReactNode;
}
