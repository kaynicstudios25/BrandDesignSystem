/**
 * RadioButton Styles
 * 
 * Style generator for the RadioButton component using design tokens.
 * These styles match the Figma design specifications.
 */

import { RadioButtonStatus } from './RadioButton.types';

interface RadioButtonStyleConfig {
  status: RadioButtonStatus;
  checked: boolean;
}

interface RadioButtonStyles {
  container: React.CSSProperties;
  hiddenInput: React.CSSProperties;
  radioBox: React.CSSProperties;
  innerDot: React.CSSProperties;
  label: React.CSSProperties;
}

/**
 * Get radio button colors based on status and checked state
 */
function getColorStyles(status: RadioButtonStatus, checked: boolean) {
  // Disabled state
  if (status === 'disabled') {
    if (checked) {
      return {
        background: 'var(--surface-disabled, #ebebeb)',
        border: 'var(--border-disabled, #d8d8d8)',
        dotColor: 'var(--text-disabled, #3b3b3b)',
      };
    }
    return {
      background: 'var(--surface-disabled, #ebebeb)',
      border: 'var(--border-disabled, #d8d8d8)',
      dotColor: 'transparent',
    };
  }

  // Hover state
  if (status === 'hover') {
    if (checked) {
      return {
        background: 'var(--surface-action-hover, #0062cc)',
        border: 'var(--border-action-hover, #0062cc)',
        dotColor: 'var(--text-on-action, white)',
      };
    }
    return {
      background: 'var(--surface-action-hover-light, #e5f2ff)',
      border: 'var(--border-action-hover, #0062cc)',
      dotColor: 'transparent',
    };
  }

  // Focus state
  if (status === 'focus') {
    if (checked) {
      return {
        background: 'var(--surface-action, #007aff)',
        border: 'var(--border-action, #007aff)',
        dotColor: 'var(--text-on-action, white)',
      };
    }
    return {
      background: 'var(--surface-default, white)',
      border: 'var(--border-action, #007aff)',
      dotColor: 'transparent',
    };
  }

  // Default state
  if (checked) {
    return {
      background: 'var(--surface-action, #007aff)',
      border: 'var(--border-action, #007aff)',
      dotColor: 'var(--text-on-action, white)',
    };
  }
  return {
    background: 'var(--surface-default, white)',
    border: 'var(--border-action, #007aff)',
    dotColor: 'transparent',
  };
}

/**
 * Generate styles for RadioButton component
 */
export function getRadioButtonStyles(config: RadioButtonStyleConfig): RadioButtonStyles {
  const { status, checked } = config;
  const colors = getColorStyles(status, checked);

  return {
    container: {
      display: 'flex',
      alignItems: 'center',
      gap: 'var(--space-xs, 12px)',
    },
    hiddenInput: {
      position: 'absolute',
      width: '1px',
      height: '1px',
      padding: 0,
      margin: '-1px',
      overflow: 'hidden',
      clip: 'rect(0, 0, 0, 0)',
      whiteSpace: 'nowrap',
      borderWidth: 0,
    },
    radioBox: {
      position: 'relative',
      width: 'var(--size-md, 24px)',
      height: 'var(--size-md, 24px)',
      minWidth: 'var(--size-md, 24px)',
      minHeight: 'var(--size-md, 24px)',
      borderRadius: 'var(--border-radius-round, 64px)',
      border: `2px solid ${colors.border}`,
      backgroundColor: colors.background,
      cursor: status === 'disabled' ? 'not-allowed' : 'pointer',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      transition: 'all 0.2s ease-in-out',
      opacity: status === 'disabled' ? 0.6 : 1,
    },
    innerDot: {
      width: checked ? '8px' : '0px',
      height: checked ? '8px' : '0px',
      borderRadius: '50%',
      backgroundColor: colors.dotColor,
      transition: 'all 0.15s ease-in-out',
    },
    label: {
      fontFamily: 'var(--font-family-body, -apple-system, BlinkMacSystemFont, "Segoe UI", Inter, sans-serif)',
      fontSize: 'var(--font-size-body-md, 16px)',
      fontWeight: 'var(--font-weight-regular, 400)',
      lineHeight: 'var(--line-height-body-md, 20px)',
      color: status === 'disabled' 
        ? 'var(--text-disabled, #3b3b3b)' 
        : 'var(--text-body, #2f2f2f)',
      cursor: status === 'disabled' ? 'not-allowed' : 'pointer',
      userSelect: 'none',
    },
  };
}
