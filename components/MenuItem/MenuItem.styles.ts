/**
 * MenuItem Styles
 * 
 * Style generator for the MenuItem component using design tokens.
 */

import { MenuItemStatus } from './MenuItem.types';

interface MenuItemStyleConfig {
  status: MenuItemStatus;
  selected: boolean;
}

interface MenuItemStyles {
  container: React.CSSProperties;
  label: React.CSSProperties;
  iconLeft: React.CSSProperties;
  iconRight: React.CSSProperties;
}

/**
 * Get menu item background, border, and text colors based on status and selection
 */
function getColorStyles(status: MenuItemStatus, selected: boolean) {
  // Disabled state
  if (status === 'disabled') {
    return {
      background: 'var(--surface-disabled, #ebebeb)',
      borderColor: 'var(--border-disabled, #d8d8d8)',
      textColor: 'var(--text-disabled, #3b3b3b)',
      iconColor: 'var(--text-disabled, #3b3b3b)',
    };
  }

  // Selected states
  if (selected) {
    if (status === 'hover') {
      return {
        background: 'var(--surface-action-hover, #0062cc)',
        borderColor: 'var(--border-action-hover, #0062cc)',
        textColor: 'var(--text-on-action, white)',
        iconColor: 'var(--text-on-action, white)',
      };
    }
    // selected default
    return {
      background: 'var(--surface-action, #007aff)',
      borderColor: 'var(--border-action, #007aff)',
      textColor: 'var(--text-on-action, white)',
      iconColor: 'var(--text-on-action, white)',
    };
  }

  // Non-selected states
  if (status === 'hover') {
    return {
      background: 'var(--surface-action-hover-light, #e5f2ff)',
      borderColor: 'var(--border-action-hover, #0062cc)',
      textColor: 'var(--text-action-hover, #0062cc)',
      iconColor: 'var(--text-action-hover, #0062cc)',
    };
  }

  // default non-selected
  return {
    background: 'var(--surface-default, white)',
    borderColor: 'var(--border-default, #ebebeb)',
    textColor: 'var(--text-body, #2f2f2f)',
    iconColor: 'var(--text-body, #2f2f2f)',
  };
}

/**
 * Generate complete styles for MenuItem based on its state
 */
export function getMenuItemStyles({
  status,
  selected,
}: MenuItemStyleConfig): MenuItemStyles {
  const colors = getColorStyles(status, selected);

  return {
    container: {
      display: 'flex',
      alignItems: 'center',
      gap: '12px',
      padding: '8px 12px',
      width: '100%',
      maxWidth: '298px',
      backgroundColor: colors.background,
      borderBottom: `var(--borderwidth-sm, 1px) solid ${colors.borderColor}`,
      cursor: status === 'disabled' ? 'not-allowed' : 'pointer',
      transition: 'all 0.2s ease',
      boxSizing: 'border-box',
    },
    label: {
      flex: '1 0 0',
      fontFamily: 'var(--fontfamily-body, Inter, sans-serif)',
      fontWeight: 'var(--fontweight-regular, 400)',
      fontSize: 'var(--p-md-fontsize, 16px)',
      lineHeight: 'var(--p-md-lineheight, 20px)',
      color: colors.textColor,
      margin: 0,
      minWidth: 0,
    },
    iconLeft: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      width: '24px',
      height: '24px',
      flexShrink: 0,
      color: colors.iconColor,
    },
    iconRight: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      width: '24px',
      height: '24px',
      flexShrink: 0,
      color: colors.iconColor,
    },
  };
}
