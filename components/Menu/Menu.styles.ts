/**
 * Menu Styles
 * 
 * Style generator for the Menu component using design tokens.
 */

interface MenuStyleConfig {
  showScrollbar: boolean;
  maxHeight?: string | number;
}

interface MenuStyles {
  container: React.CSSProperties;
  menuList: React.CSSProperties;
  scrollbar: React.CSSProperties;
  scrollbarThumb: React.CSSProperties;
}

/**
 * Generate complete styles for Menu based on configuration
 */
export function getMenuStyles({
  showScrollbar,
  maxHeight,
}: MenuStyleConfig): MenuStyles {
  return {
    container: {
      display: 'flex',
      alignItems: 'flex-start',
      position: 'relative',
    },
    menuList: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'flex-start',
      width: '298px',
      flexShrink: 0,
      maxHeight: maxHeight || 'auto',
      overflowY: maxHeight ? 'auto' : 'visible',
      boxSizing: 'border-box',
      // Custom scrollbar styling (Webkit browsers)
      scrollbarWidth: showScrollbar ? 'thin' : 'none',
      scrollbarColor: showScrollbar 
        ? 'var(--border-default, #ebebeb) transparent' 
        : 'transparent transparent',
    },
    scrollbar: {
      display: showScrollbar ? 'flex' : 'none',
      alignItems: 'flex-start',
      padding: '8px',
      width: '23px',
      flexShrink: 0,
      alignSelf: 'stretch',
    },
    scrollbarThumb: {
      width: '7px',
      height: '45px',
      backgroundColor: 'var(--border-default, #ebebeb)',
      borderRadius: 'var(--borderradius-lg, 8px)',
      flexShrink: 0,
    },
  };
}
