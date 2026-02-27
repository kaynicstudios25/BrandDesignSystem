/**
 * Table Styles
 * 
 * Style generator for the Table component family using design tokens.
 * Creates consistent table styling across the design system.
 */

import React from 'react';

// ============================================================================
// TABLE STYLES
// ============================================================================

export interface TableStyleConfig {
  bordered: boolean;
  hoverable: boolean;
  striped: boolean;
}

export function getTableStyles(config: TableStyleConfig): React.CSSProperties {
  const { bordered } = config;

  return {
    width: '100%',
    borderCollapse: bordered ? 'collapse' : 'separate',
    borderSpacing: bordered ? '0' : '0',
    backgroundColor: 'var(--surface-subtle, #f5f5f5)',
    fontSize: 'var(--font-size-sm, 14px)',
    lineHeight: 'var(--line-height-md, 1.5)',
    fontFamily: 'var(--font-family-body, system-ui, -apple-system, sans-serif)',
    color: 'var(--text-primary, #000000)',
  };
}

// ============================================================================
// TABLE HEADER STYLES
// ============================================================================

export function getTableHeaderStyles(): React.CSSProperties {
  return {
    backgroundColor: 'var(--surface-subtle, #f5f5f5)',
    borderBottom: '1px solid var(--border-default, #e5e5e5)',
  };
}

// ============================================================================
// TABLE BODY STYLES
// ============================================================================

export function getTableBodyStyles(): React.CSSProperties {
  return {
    backgroundColor: 'var(--surface-default, #ffffff)',
  };
}

// ============================================================================
// TABLE ROW STYLES
// ============================================================================

export interface TableRowStyleConfig {
  isHeader: boolean;
  hoverable: boolean;
  striped: boolean;
  rowIndex?: number;
  selected: boolean;
}

export function getTableRowStyles(config: TableRowStyleConfig): React.CSSProperties {
  const { isHeader, hoverable, striped, rowIndex = 0, selected } = config;

  const baseStyles: React.CSSProperties = {
    borderBottom: '1px solid var(--border-default, #e5e5e5)',
    transition: 'background-color 0.2s ease',
  };

  // Header row styling
  if (isHeader) {
    return {
      ...baseStyles,
      backgroundColor: 'var(--surface-subtle, #f5f5f5)',
    };
  }

  // Selected row
  if (selected) {
    return {
      ...baseStyles,
      backgroundColor: 'rgba(0, 122, 255, 0.1)',
    };
  }

  // Striped rows
  if (striped && rowIndex % 2 === 1) {
    return {
      ...baseStyles,
      backgroundColor: 'var(--surface-subtle, #f5f5f5)',
    };
  }

  // Hoverable rows
  if (hoverable) {
    return {
      ...baseStyles,
      cursor: 'pointer',
    };
  }

  return baseStyles;
}

export function getTableRowHoverStyles(): React.CSSProperties {
  return {
    backgroundColor: 'rgba(0, 122, 255, 0.05)',
  };
}

// ============================================================================
// TABLE HEADER CELL STYLES
// ============================================================================

export interface TableHeaderCellStyleConfig {
  align: 'left' | 'center' | 'right';
  bordered: boolean;
}

export function getTableHeaderCellStyles(
  config: TableHeaderCellStyleConfig
): React.CSSProperties {
  const { align, bordered } = config;

  return {
    padding: 'var(--spacing-3, 12px) var(--spacing-4, 16px)',
    textAlign: align,
    fontWeight: 600,
    fontSize: 'var(--font-size-sm, 14px)',
    lineHeight: 'var(--line-height-md, 1.5)',
    color: 'var(--text-primary, #000000)',
    borderRight: bordered ? '1px solid var(--border-default, #e5e5e5)' : 'none',
    whiteSpace: 'nowrap',
  };
}

// ============================================================================
// TABLE CELL STYLES
// ============================================================================

export interface TableCellStyleConfig {
  align: 'left' | 'center' | 'right';
  bordered: boolean;
}

export function getTableCellStyles(config: TableCellStyleConfig): React.CSSProperties {
  const { align, bordered } = config;

  return {
    padding: 'var(--spacing-3, 12px) var(--spacing-4, 16px)',
    textAlign: align,
    fontWeight: 400,
    fontSize: 'var(--font-size-sm, 14px)',
    lineHeight: 'var(--line-height-md, 1.5)',
    color: 'var(--text-primary, #000000)',
    borderRight: bordered ? '1px solid var(--border-default, #e5e5e5)' : 'none',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    whiteSpace: 'nowrap',
  };
}

// ============================================================================
// COLUMN RESIZE HANDLE STYLES
// ============================================================================

export function getResizeHandleStyles(): React.CSSProperties {
  return {
    position: 'absolute',
    right: 0,
    top: 0,
    bottom: 0,
    width: '4px',
    cursor: 'col-resize',
    userSelect: 'none',
    backgroundColor: 'transparent',
    transition: 'background-color 0.2s ease',
  };
}

export function getResizeHandleHoverStyles(): React.CSSProperties {
  return {
    backgroundColor: 'var(--surface-action, #007aff)',
    opacity: 0.3,
  };
}

export function getResizableHeaderCellStyles(): React.CSSProperties {
  return {
    position: 'relative',
  };
}
