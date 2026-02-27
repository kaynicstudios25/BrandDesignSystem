/**
 * Checkbox Styles
 * 
 * Style generator for the Checkbox component using design tokens.
 * These styles match the Figma design specifications.
 */

import { CheckboxStatus } from './Checkbox.types';

interface CheckboxStyleConfig {
  status: CheckboxStatus;
  checked: boolean;
}

interface CheckboxStyles {
  container: React.CSSProperties;
  hiddenInput: React.CSSProperties;
  checkboxBox: React.CSSProperties;
  checkmark: React.CSSProperties;
  label: React.CSSProperties;
}

/**
 * Get checkbox colors based on status and checked state
 */
function getColorStyles(status: CheckboxStatus, checked: boolean) {
  // Error state
  if (status === 'error') {
    if (checked) {
      return {
        background: 'var(--surface-error, #ffe5e5)',
        border: 'var(--border-error, #ff9999)',
        checkmarkColor: 'var(--text-error, #cc0000)',
      };
    }
    return {
      background: 'var(--surface-error, #ffe5e5)',
      border: 'var(--border-error, #ff9999)',
      checkmarkColor: 'transparent',
    };
  }
  
  // Disabled state
  if (status === 'disabled') {
    if (checked) {
      return {
        background: 'var(--surface-disabled, #ebebeb)',
        border: 'var(--border-disabled, #d8d8d8)',
        checkmarkColor: 'var(--text-disabled, #3b3b3b)',
      };
    }
    return {
      background: 'var(--surface-disabled, #ebebeb)',
      border: 'var(--border-disabled, #d8d8d8)',
      checkmarkColor: 'transparent',
    };
  }
  
  // Hover state
  if (status === 'hover') {
    if (checked) {
      return {
        background: 'var(--surface-action-hover, #0062cc)',
        border: 'var(--border-action-hover, #0062cc)',
        checkmarkColor: 'var(--text-on-action, white)',
      };
    }
    return {
      background: 'var(--surface-action-hover-light, #e5f2ff)',
      border: 'var(--border-action-hover, #0062cc)',
      checkmarkColor: 'transparent',
    };
  }
  
  // Focus state
  if (status === 'focus') {
    if (checked) {
      return {
        background: 'var(--surface-action, #007aff)',
        border: 'var(--border-action, #007aff)',
        checkmarkColor: 'var(--text-on-action, white)',
      };
    }
    return {
      background: 'var(--surface-default, white)',
      border: 'var(--border-action, #007aff)',
      checkmarkColor: 'transparent',
    };
  }
  
  // Default state
  if (checked) {
    return {
      background: 'var(--surface-action, #007aff)',
      border: 'var(--border-action, #007aff)',
      checkmarkColor: 'var(--text-on-action, white)',
    };
  }
  return {
    background: 'var(--surface-default, white)',
    border: 'var(--border-action, #007aff)',
    checkmarkColor: 'transparent',
  };
}

/**
 * Generate styles for the Checkbox component
 */
export function getCheckboxStyles({ status, checked }: CheckboxStyleConfig): CheckboxStyles {
  const colors = getColorStyles(status, checked);
  const isInteractive = status !== 'disabled';

  return {
    container: {
      display: 'flex',
      alignItems: 'center',
      gap: '12px',
      position: 'relative',
    },
    
    hiddenInput: {
      position: 'absolute',
      opacity: 0,
      width: 0,
      height: 0,
      pointerEvents: 'none',
    },
    
    checkboxBox: {
      position: 'relative',
      width: '36px',
      height: '36px',
      flexShrink: 0,
      borderRadius: 'var(--boderradius-md, 4px)',
      borderWidth: 'var(--boderwidth-sm, 1px)',
      borderStyle: 'solid',
      backgroundColor: colors.background,
      borderColor: colors.border,
      cursor: isInteractive ? 'pointer' : 'not-allowed',
      transition: 'all 0.2s ease',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: checked ? '8px' : '0',
    },
    
    checkmark: {
      width: '20px',
      height: '20px',
      color: colors.checkmarkColor,
      opacity: checked ? 1 : 0,
      transition: 'opacity 0.2s ease',
    },
    
    label: {
      fontFamily: 'var(--fontfamily-body, "Inter", sans-serif)',
      fontSize: 'var(--p-md-fontsize, 16px)',
      lineHeight: 'var(--p-md-lineheight, 20px)',
      fontWeight: 'var(--fontweight-regular, 400)',
      color: status === 'disabled' ? 'var(--text-disabled, #3b3b3b)' : 'var(--text-body, #2f2f2f)',
      cursor: isInteractive ? 'pointer' : 'not-allowed',
      userSelect: 'none',
    },
  };
}
