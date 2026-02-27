/**
 * Table Component
 * 
 * A comprehensive table component family that integrates with the design token system.
 * Supports headers, rows, cells, and various styling options.
 * Features include hoverable rows, striped backgrounds, and resizable columns.
 * 
 * Design Reference: Figma Multi-Brand Design System (node 454:3544)
 */

import React, { useState, useRef } from 'react';
import {
  TableProps,
  TableHeaderProps,
  TableBodyProps,
  TableRowProps,
  TableHeaderCellProps,
  TableCellProps,
  ResizableTableProps,
  ColumnWidth,
} from './Table.types';
import {
  getTableStyles,
  getTableHeaderStyles,
  getTableBodyStyles,
  getTableRowStyles,
  getTableRowHoverStyles,
  getTableHeaderCellStyles,
  getTableCellStyles,
  getResizeHandleStyles,
  getResizeHandleHoverStyles,
  getResizableHeaderCellStyles,
} from './Table.styles';

// ============================================================================
// RESIZABLE TABLE HEADER CELL
// ============================================================================

interface ResizableTableHeaderCellProps extends TableHeaderCellProps {
  columnIndex: number;
  onResizeStart: (columnIndex: number, startX: number) => void;
}

export const ResizableTableHeaderCell = React.forwardRef<
  HTMLTableCellElement,
  ResizableTableHeaderCellProps
>(
  (
    {
      children,
      align = 'left',
      width,
      resizable = true,
      columnIndex,
      onResizeStart,
      className = '',
      ...rest
    },
    ref
  ) => {
    const [isHovered, setIsHovered] = useState(false);
    const bordered = false;
    const styles = getTableHeaderCellStyles({ align, bordered });
    const resizeHandleStyles = getResizeHandleStyles();
    const resizeHandleHoverStyles = isHovered ? getResizeHandleHoverStyles() : {};
    const resizableStyles = resizable ? getResizableHeaderCellStyles() : {};

    const handleMouseDown = (e: React.MouseEvent) => {
      if (resizable) {
        e.preventDefault();
        onResizeStart(columnIndex, e.clientX);
      }
    };

    return (
      <th
        ref={ref}
        className={className}
        style={{
          ...styles,
          ...resizableStyles,
          width: width ? `${width}px` : 'auto',
          minWidth: width ? `${width}px` : 'auto',
          maxWidth: width ? `${width}px` : 'auto',
        }}
        {...rest}
      >
        {children}
        {resizable && (
          <div
            style={{
              ...resizeHandleStyles,
              ...resizeHandleHoverStyles,
            }}
            onMouseDown={handleMouseDown}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          />
        )}
      </th>
    );
  }
);

ResizableTableHeaderCell.displayName = 'ResizableTableHeaderCell';

// ============================================================================
// TABLE CONTAINER
// ============================================================================

export const Table = React.forwardRef<HTMLTableElement, TableProps>(
  (
    {
      children,
      bordered = false,
      hoverable = false,
      striped = false,
      className = '',
      ...rest
    },
    ref
  ) => {
    const styles = getTableStyles({ bordered, hoverable, striped });

    return (
      <table
        ref={ref}
        className={className}
        style={{
          ...styles,
          tableLayout: 'fixed',
        }}
        data-bordered={bordered}
        data-hoverable={hoverable}
        data-striped={striped}
        {...rest}
      >
        {children}
      </table>
    );
  }
);

Table.displayName = 'Table';

// ============================================================================
// TABLE HEADER
// ============================================================================

export const TableHeader = React.forwardRef<HTMLTableSectionElement, TableHeaderProps>(
  ({ children, className = '', ...rest }, ref) => {
    const styles = getTableHeaderStyles();

    return (
      <thead ref={ref} className={className} style={styles} {...rest}>
        {children}
      </thead>
    );
  }
);

TableHeader.displayName = 'TableHeader';

// ============================================================================
// TABLE BODY
// ============================================================================

export const TableBody = React.forwardRef<HTMLTableSectionElement, TableBodyProps>(
  ({ children, className = '', ...rest }, ref) => {
    const styles = getTableBodyStyles();

    return (
      <tbody ref={ref} className={className} style={styles} {...rest}>
        {children}
      </tbody>
    );
  }
);

TableBody.displayName = 'TableBody';

// ============================================================================
// TABLE ROW
// ============================================================================

export const TableRow = React.forwardRef<HTMLTableRowElement, TableRowProps>(
  (
    {
      children,
      selected = false,
      className = '',
      onMouseEnter,
      onMouseLeave,
      ...rest
    },
    ref
  ) => {
    const [isHovered, setIsHovered] = useState(false);
    
    // Determine if this row is in a header by checking parent element
    const isHeader = false; // This will be determined by context in real usage
    
    // Get row index from parent - for striping
    const rowIndex = 0; // This would come from mapping in real usage
    
    // Check if table is hoverable from parent context
    const hoverable = false; // This would come from context

    const baseStyles = getTableRowStyles({
      isHeader,
      hoverable,
      striped: false, // This would come from context
      rowIndex,
      selected,
    });

    const hoverStyles = hoverable && isHovered ? getTableRowHoverStyles() : {};

    const handleMouseEnter = (e: React.MouseEvent<HTMLTableRowElement>) => {
      setIsHovered(true);
      onMouseEnter?.(e);
    };

    const handleMouseLeave = (e: React.MouseEvent<HTMLTableRowElement>) => {
      setIsHovered(false);
      onMouseLeave?.(e);
    };

    return (
      <tr
        ref={ref}
        className={className}
        style={{ ...baseStyles, ...hoverStyles }}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        {...rest}
      >
        {children}
      </tr>
    );
  }
);

TableRow.displayName = 'TableRow';

// ============================================================================
// TABLE HEADER CELL
// ============================================================================

export const TableHeaderCell = React.forwardRef<HTMLTableCellElement, TableHeaderCellProps>(
  ({ children, align = 'left', width, className = '', ...rest }, ref) => {
    const bordered = false; // This would come from context
    const styles = getTableHeaderCellStyles({ align, bordered });

    return (
      <th
        ref={ref}
        className={className}
        style={{
          ...styles,
          width: width ? `${width}px` : 'auto',
          minWidth: width ? `${width}px` : 'auto',
        }}
        {...rest}
      >
        {children}
      </th>
    );
  }
);

TableHeaderCell.displayName = 'TableHeaderCell';

// ============================================================================
// TABLE CELL
// ============================================================================

export const TableCell = React.forwardRef<HTMLTableCellElement, TableCellProps>(
  ({ children, align = 'left', width, className = '', ...rest }, ref) => {
    const bordered = false; // This would come from context
    const styles = getTableCellStyles({ align, bordered });

    return (
      <td
        ref={ref}
        className={className}
        style={{
          ...styles,
          width: width ? `${width}px` : 'auto',
          minWidth: width ? `${width}px` : 'auto',
          maxWidth: width ? `${width}px` : 'auto',
        }}
        {...rest}
      >
        {children}
      </td>
    );
  }
);

TableCell.displayName = 'TableCell';

// ============================================================================
// RESIZABLE TABLE
// ============================================================================

export const ResizableTable = React.forwardRef<HTMLTableElement, ResizableTableProps>(
  (
    {
      children,
      resizable = true,
      columnWidths = {},
      onColumnWidthChange,
      minColumnWidth = 80,
      bordered = false,
      hoverable = false,
      striped = false,
      className = '',
      ...rest
    },
    ref
  ) => {
    const [widths, setWidths] = useState<ColumnWidth>(columnWidths);
    const [isResizing, setIsResizing] = useState(false);
    const [resizingColumn, setResizingColumn] = useState<number | null>(null);
    const [startX, setStartX] = useState(0);
    const [startWidth, setStartWidth] = useState(0);
    const tableRef = useRef<HTMLTableElement>(null);

    // Sync internal widths state with columnWidths prop
    React.useEffect(() => {
      setWidths(columnWidths);
    }, [columnWidths]);

    const handleResizeStart = (columnIndex: number, clientX: number) => {
      setIsResizing(true);
      setResizingColumn(columnIndex);
      setStartX(clientX);
      setStartWidth(widths[columnIndex] || 150);
    };

    React.useEffect(() => {
      if (!isResizing) return;

      const handleMouseMove = (e: MouseEvent) => {
        if (resizingColumn === null) return;

        const delta = e.clientX - startX;
        const newWidth = Math.max(minColumnWidth, startWidth + delta);

        setWidths((prev) => {
          const updated = { ...prev, [resizingColumn]: newWidth };
          onColumnWidthChange?.(updated);
          return updated;
        });
      };

      const handleMouseUp = () => {
        setIsResizing(false);
        setResizingColumn(null);
      };

      document.addEventListener('mousemove', handleMouseMove);
      document.addEventListener('mouseup', handleMouseUp);

      return () => {
        document.removeEventListener('mousemove', handleMouseMove);
        document.removeEventListener('mouseup', handleMouseUp);
      };
    }, [isResizing, resizingColumn, startX, startWidth, minColumnWidth, onColumnWidthChange]);

    // Clone children and inject column width context
    const enhancedChildren = React.useMemo(() => {
      return React.Children.map(children, (child: any) => {
        if (!React.isValidElement(child)) return child;

        // Handle table header with resizable cells
        if (child.type === TableHeader) {
          const headerChildren = React.Children.map((child.props as any)?.children, (headerChild: any) => {
            if (!React.isValidElement(headerChild)) return headerChild;
            
            if (headerChild.type === TableRow) {
              const rowChildren = React.Children.map((headerChild.props as any)?.children, (cell: any, index: number) => {
                if (!React.isValidElement(cell)) return cell;
                
                if (cell.type === TableHeaderCell) {
                  return (
                    <ResizableTableHeaderCell
                      key={index}
                      columnIndex={index}
                      onResizeStart={handleResizeStart}
                      resizable={resizable}
                      width={widths[index]}
                      align={(cell.props as any)?.align}
                      className={(cell.props as any)?.className}
                    >
                      {(cell.props as any)?.children}
                    </ResizableTableHeaderCell>
                  );
                }
                return cell;
              });
              
              return React.cloneElement(headerChild, {}, rowChildren);
            }
            return headerChild;
          });
          
          return React.cloneElement(child, {}, headerChildren);
        }

        // Handle table body with column widths
        if (child.type === TableBody) {
          const bodyChildren = React.Children.map((child.props as any)?.children, (bodyChild: any) => {
            if (!React.isValidElement(bodyChild)) return bodyChild;
            
            if (bodyChild.type === TableRow) {
              const rowChildren = React.Children.map((bodyChild.props as any)?.children, (cell: any, index: number) => {
                if (!React.isValidElement(cell)) return cell;
                
                if (cell.type === TableCell) {
                  return React.cloneElement(cell, {
                    width: widths[index],
                    key: index,
                  } as any);
                }
                return cell;
              });
              
              return React.cloneElement(bodyChild, {}, rowChildren);
            }
            return bodyChild;
          });
          
          return React.cloneElement(child, {}, bodyChildren);
        }

        return child;
      });
    }, [children, widths, resizable, handleResizeStart]);

    return (
      <table
        ref={tableRef || ref}
        className={className}
        style={{
          ...getTableStyles({ bordered, hoverable, striped }),
          tableLayout: 'fixed',
          cursor: isResizing ? 'col-resize' : 'default',
        }}
        data-bordered={bordered}
        data-hoverable={hoverable}
        data-striped={striped}
        {...rest}
      >
        {enhancedChildren}
      </table>
    );
  }
);

ResizableTable.displayName = 'ResizableTable';
