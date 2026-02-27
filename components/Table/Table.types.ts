/**
 * Table Component Types
 * 
 * Type definitions for the Table component family.
 * Supports flexible table structures with semantic styling.
 */

import { ReactNode, HTMLAttributes, ThHTMLAttributes, TdHTMLAttributes } from 'react';

// ============================================================================
// TABLE CONTAINER
// ============================================================================

export interface TableProps extends HTMLAttributes<HTMLTableElement> {
  /** Table content (typically TableHeader and TableBody) */
  children: ReactNode;
  
  /** Whether to display borders between cells */
  bordered?: boolean;
  
  /** Whether rows should have hover effects */
  hoverable?: boolean;
  
  /** Whether to stripe alternate rows */
  striped?: boolean;
  
  /** Additional CSS class */
  className?: string;
}

// ============================================================================
// TABLE HEADER
// ============================================================================

export interface TableHeaderProps extends HTMLAttributes<HTMLTableSectionElement> {
  /** Header row content */
  children: ReactNode;
  
  /** Additional CSS class */
  className?: string;
}

// ============================================================================
// TABLE BODY
// ============================================================================

export interface TableBodyProps extends HTMLAttributes<HTMLTableSectionElement> {
  /** Table rows */
  children: ReactNode;
  
  /** Additional CSS class */
  className?: string;
}

// ============================================================================
// TABLE ROW
// ============================================================================

export interface TableRowProps extends HTMLAttributes<HTMLTableRowElement> {
  /** Row cells */
  children: ReactNode;
  
  /** Whether this row is selected */
  selected?: boolean;
  
  /** Additional CSS class */
  className?: string;
}

// ============================================================================
// TABLE HEADER CELL
// ============================================================================

export interface TableHeaderCellProps extends ThHTMLAttributes<HTMLTableCellElement> {
  /** Cell content */
  children: ReactNode;
  
  /** Text alignment */
  align?: 'left' | 'center' | 'right';
  
  /** Column width (can be fixed or dynamic) */
  width?: string | number;
  
  /** Allow column to be resized */
  resizable?: boolean;
  
  /** Callback when column is resized */
  onResize?: (width: number) => void;
  
  /** Additional CSS class */
  className?: string;
}

// ============================================================================
// TABLE CELL
// ============================================================================

export interface TableCellProps extends TdHTMLAttributes<HTMLTableCellElement> {
  /** Cell content */
  children: ReactNode;
  
  /** Text alignment */
  align?: 'left' | 'center' | 'right';
  
  /** Column width (can be fixed or dynamic) */
  width?: string | number;
  
  /** Additional CSS class */
  className?: string;
}

// ============================================================================
// RESIZABLE TABLE
// ============================================================================

export interface ColumnWidth {
  [columnIndex: number]: number;
}

export interface ResizableTableProps extends Omit<TableProps, 'children'> {
  /** Table content (typically TableHeader and TableBody) */
  children: ReactNode;
  
  /** Enable column resizing */
  resizable?: boolean;
  
  /** Column widths in pixels */
  columnWidths?: ColumnWidth;
  
  /** Callback when column widths change */
  onColumnWidthChange?: (widths: ColumnWidth) => void;
  
  /** Minimum column width in pixels */
  minColumnWidth?: number;
}
