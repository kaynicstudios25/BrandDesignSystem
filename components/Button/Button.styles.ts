/**
 * Button Styles
 * 
 * Style generator for the Button component using design tokens.
 * These styles replace Tailwind classes with our design token system.
 */

import { ButtonVariant, ButtonStatus, ButtonSize } from './Button.types';

interface ButtonStyleConfig {
  variant: ButtonVariant;
  status: ButtonStatus;
  size: ButtonSize;
  fullWidth: boolean;
}

interface ButtonStyles {
  button: React.CSSProperties;
  content: React.CSSProperties;
  label: React.CSSProperties;
  iconLeft: React.CSSProperties;
  iconRight: React.CSSProperties;
  focusRing: React.CSSProperties;
}

/**
 * Get button background and border colors based on variant and status
 */
function getColorStyles(variant: ButtonVariant, status: ButtonStatus) {
  // Default variant (filled)
  if (variant === 'default') {
    if (status === 'disabled') {
      return {
        background: 'var(--surface-disabled, #ebebeb)',
        border: 'var(--border-disabled, #d8d8d8)',
        color: 'var(--text-disabled, #3b3b3b)',
      };
    }
    if (status === 'hover') {
      return {
        background: 'var(--surface-action-hover, #0062cc)',
        border: 'var(--surface-action-hover, #0062cc)',
        color: 'var(--text-on-action, white)',
      };
    }
    // default and focus
    return {
      background: 'var(--surface-action, #007aff)',
      border: 'var(--border-action, #007aff)',
      color: 'var(--text-on-action, white)',
    };
  }

  // Outline variant
  if (variant === 'outline') {
    if (status === 'disabled') {
      return {
        background: 'var(--surface-disabled, #ebebeb)',
        border: 'var(--border-disabled, #d8d8d8)',
        color: 'var(--text-disabled, #3b3b3b)',
      };
    }
    if (status === 'hover') {
      return {
        background: 'var(--surface-default, white)',
        border: 'var(--surface-action-hover, #0062cc)',
        color: 'var(--text-action-hover, #0062cc)',
      };
    }
    // default and focus
    return {
      background: 'var(--surface-default, white)',
      border: 'var(--border-action, #007aff)',
      color: 'var(--text-action, #007aff)',
    };
  }

  // Transparent variant
  if (status === 'disabled') {
    return {
      background: 'transparent',
      border: 'transparent',
      color: 'var(--text-disabled, #3b3b3b)',
    };
  }
  if (status === 'hover') {
    return {
      background: 'transparent',
      border: 'transparent',
      color: 'var(--text-action-hover, #0062cc)',
    };
  }
  // default and focus
  return {
    background: 'transparent',
    border: 'transparent',
    color: 'var(--text-action, #007aff)',
  };
}

/**
 * Get size-based styles
 */
function getSizeStyles(size: ButtonSize) {
  const sizes = {
    sm: {
      height: '32px',
      padding: '6px 10px',
      fontSize: 'var(--p-sm-fontsize, 14px)',
      gap: '6px',
    },
    md: {
      height: '36px',
      padding: '8px 12px',
      fontSize: 'var(--p-sm-fontsize, 14px)',
      gap: '8px',
    },
    lg: {
      height: '44px',
      padding: '12px 16px',
      fontSize: 'var(--p-md-fontsize, 16px)',
      gap: '10px',
    },
  };

  return sizes[size];
}

/**
 * Generate complete button styles
 */
export function getButtonStyles(config: ButtonStyleConfig): ButtonStyles {
  const { variant, status, size, fullWidth } = config;
  const colorStyles = getColorStyles(variant, status);
  const sizeStyles = getSizeStyles(size);

  return {
    button: {
      position: 'relative',
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      width: fullWidth ? '100%' : 'auto',
      height: sizeStyles.height,
      padding: sizeStyles.padding,
      backgroundColor: colorStyles.background,
      border: `1px solid ${colorStyles.border}`,
      borderRadius: 'var(--boderradius-sm, 2px)',
      color: colorStyles.color,
      fontFamily: "var(--fontfamily-body, 'Inter', sans-serif)",
      fontSize: sizeStyles.fontSize,
      fontWeight: 'var(--fontweight-regular, 400)',
      lineHeight: 'var(--p-sm-lineheight, 16px)',
      cursor: status === 'disabled' ? 'not-allowed' : 'pointer',
      outline: 'none',
      transition: 'all 0.2s ease-in-out',
      userSelect: 'none',
    },
    content: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      gap: sizeStyles.gap,
    },
    label: {
      display: 'block',
    },
    iconLeft: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      width: '24px',
      height: '24px',
      flexShrink: 0,
    },
    iconRight: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      width: '24px',
      height: '24px',
      flexShrink: 0,
    },
    focusRing: {
      position: 'absolute',
      top: variant === 'transparent' ? '-4px' : '-5px',
      right: variant === 'transparent' ? '-4px' : '-5px',
      bottom: variant === 'transparent' ? '-4px' : '-5px',
      left: variant === 'transparent' ? '-4px' : '-5px',
      border: 'var(--boderwidth-md, 2px) solid var(--border-focus, #007aff)',
      borderRadius: 'var(--boderradius-sm, 2px)',
      pointerEvents: 'none',
    },
  };
}
