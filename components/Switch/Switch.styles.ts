/**
 * Switch Styles
 * 
 * Style generator for the Switch component using design tokens.
 * These styles match the Figma design specifications.
 */

import { SwitchStatus } from './Switch.types';

interface SwitchStyleConfig {
  status: SwitchStatus;
  checked: boolean;
}

interface SwitchStyles {
  container: React.CSSProperties;
  hiddenInput: React.CSSProperties;
  switchTrack: React.CSSProperties;
  switchThumb: React.CSSProperties;
  label: React.CSSProperties;
}

/**
 * Get switch colors based on status and checked state
 */
function getColorStyles(status: SwitchStatus, checked: boolean) {
  // Disabled state
  if (status === 'disabled') {
    if (checked) {
      return {
        trackBackground: 'var(--surface-disabled, #ebebeb)',
        trackBorder: 'var(--border-disabled, #d8d8d8)',
        thumbBackground: 'white',
        thumbBorder: 'var(--border-disabled, #d8d8d8)',
      };
    }
    return {
      trackBackground: 'var(--surface-disabled, #ebebeb)',
      trackBorder: 'var(--border-disabled, #d8d8d8)',
      thumbBackground: 'white',
      thumbBorder: 'var(--border-disabled, #d8d8d8)',
    };
  }
  
  // Hover state
  if (status === 'hover') {
    if (checked) {
      return {
        trackBackground: 'var(--surface-action-hover, #0062cc)',
        trackBorder: 'var(--border-action-hover, #0062cc)',
        thumbBackground: 'white',
        thumbBorder: 'var(--border-action-hover, #0062cc)',
      };
    }
    return {
      trackBackground: 'var(--surface-subtle, #f5f5f5)',
      trackBorder: 'var(--border-default, #d8d8d8)',
      thumbBackground: 'white',
      thumbBorder: 'var(--border-default, #d8d8d8)',
    };
  }
  
  // Focus state
  if (status === 'focus') {
    if (checked) {
      return {
        trackBackground: 'var(--surface-action, #007aff)',
        trackBorder: 'var(--border-action, #007aff)',
        thumbBackground: 'white',
        thumbBorder: 'var(--border-action, #007aff)',
      };
    }
    return {
      trackBackground: 'var(--surface-subtle, #f5f5f5)',
      trackBorder: 'var(--border-action, #007aff)',
      thumbBackground: 'white',
      thumbBorder: 'var(--border-default, #d8d8d8)',
    };
  }
  
  // Default state
  if (checked) {
    return {
      trackBackground: 'var(--surface-action, #007aff)',
      trackBorder: 'var(--border-action, #007aff)',
      thumbBackground: 'white',
      thumbBorder: 'var(--border-action, #007aff)',
    };
  }
  
  return {
    trackBackground: 'var(--surface-default, white)',
    trackBorder: 'var(--border-default, #d8d8d8)',
    thumbBackground: 'white',
    thumbBorder: 'var(--border-default, #d8d8d8)',
  };
}

/**
 * Generate styles for the switch component
 */
export function getSwitchStyles({ status, checked }: SwitchStyleConfig): SwitchStyles {
  const colors = getColorStyles(status, checked);
  
  return {
    container: {
      display: 'flex',
      alignItems: 'center',
      gap: 'var(--spacing-md, 12px)',
      cursor: status === 'disabled' ? 'not-allowed' : 'pointer',
      opacity: status === 'disabled' ? 0.6 : 1,
    },
    
    hiddenInput: {
      display: 'none',
    },
    
    switchTrack: {
      position: 'relative',
      width: '64px',
      height: '32px',
      backgroundColor: colors.trackBackground,
      border: `1px solid ${colors.trackBorder}`,
      borderRadius: '999px',
      padding: '4px',
      display: 'flex',
      alignItems: 'center',
      cursor: status === 'disabled' ? 'not-allowed' : 'pointer',
      transition: 'all 200ms ease-in-out',
      flexShrink: 0,
    },
    
    switchThumb: {
      position: 'absolute',
      width: '24px',
      height: '24px',
      backgroundColor: colors.thumbBackground,
      border: `1px solid ${colors.thumbBorder}`,
      borderRadius: '50%',
      left: checked ? '36px' : '4px',
      transition: 'all 200ms ease-in-out',
      cursor: status === 'disabled' ? 'not-allowed' : 'pointer',
      boxShadow: status === 'focus' 
        ? '0 0 0 3px rgba(0, 122, 255, 0.1)' 
        : 'none',
    },
    
    label: {
      fontFamily: 'var(--fontfamily-body, "Inter", sans-serif)',
      fontSize: 'var(--p-md-fontsize, 16px)',
      fontWeight: 'var(--fontweight-regular, 400)',
      lineHeight: 'var(--p-md-lineheight, 20px)',
      color: 'var(--text-primary, black)',
      cursor: status === 'disabled' ? 'not-allowed' : 'pointer',
      userSelect: 'none',
      whiteSpace: 'nowrap',
    },
  };
}
