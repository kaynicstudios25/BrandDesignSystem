/**
 * Label Styles
 * 
 * Style generator for the Label component using design tokens.
 * These styles replace Tailwind classes with our design token system.
 */

import { LabelType } from './Label.types';

interface LabelStyleConfig {
  type: LabelType;
  hasIcon: boolean;
}

interface LabelStyles {
  container: React.CSSProperties;
  labelText: React.CSSProperties;
  icon: React.CSSProperties;
  iconWrapper: React.CSSProperties;
  asterisk: React.CSSProperties;
}

/**
 * Get label styles based on type configuration
 */
function getLabelTextStyles() {
  return {
    fontSize: 'var(--p-md-font-size, 16px)',
    lineHeight: 'var(--p-md-line-height, 20px)',
    fontWeight: 'var(--fontweight-regular, 400)',
    fontFamily: 'var(--fontfamily-body, "Inter", sans-serif)',
    color: 'var(--text-body, #2f2f2f)',
    whiteSpace: 'nowrap' as const,
    margin: 0,
    padding: 0,
  };
}

/**
 * Get icon styles
 */
function getIconStyles() {
  return {
    width: '24px',
    height: '24px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexShrink: 0,
    color: 'var(--icon-default, #666)',
  };
}

/**
 * Get asterisk (required indicator) styles
 */
function getAsteriskStyles() {
  return {
    fontSize: 'var(--p-md-font-size, 16px)',
    lineHeight: 'var(--p-md-line-height, 20px)',
    fontWeight: 'var(--fontweight-regular, 400)',
    fontFamily: 'var(--fontfamily-body, "Inter", sans-serif)',
    color: 'var(--icon-error, #f33)',
    whiteSpace: 'nowrap' as const,
    margin: 0,
    padding: 0,
    position: 'absolute' as const,
    left: '-8px',
    top: '0',
  };
}

/**
 * Generate all styles for the Label component
 */
export function getLabelStyles(config: LabelStyleConfig): LabelStyles {
  return {
    container: {
      display: 'flex',
      gap: '8px',
      alignItems: 'center',
      justifyContent: 'center',
      position: 'relative',
      width: 'fit-content',
    },
    labelText: getLabelTextStyles(),
    iconWrapper: getIconStyles(),
    icon: {
      width: '100%',
      height: '100%',
      display: 'block',
    },
    asterisk: getAsteriskStyles(),
  };
}
