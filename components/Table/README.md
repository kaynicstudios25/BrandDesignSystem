# Table Component

A comprehensive table component for displaying structured data with semantic styling and advanced features.

## Components

- `Table` - Main table container
- `TableHeader` - Table header section (`<thead>`)
- `TableBody` - Table body section (`<tbody>`)
- `TableRow` - Table row (`<tr>`)
- `TableHeaderCell` - Header cell (`<th>`)
- `TableCell` - Data cell (`<td>`)
- `ResizableTable` - Table with resizable columns
- `ResizableTableHeaderCell` - Header cell with resize handle

## Features

- **Flexible Structure**: Compose tables with semantic HTML elements
- **Token Integration**: Uses design tokens for consistent styling
- **Multiple Options**: Bordered, hoverable, striped, and selected states
- **Resizable Columns**: Drag column borders to adjust widths
- **Responsive**: Adapts to different screen sizes
- **Accessible**: Semantic HTML with proper ARIA attributes
- **Dark Theme Support**: Automatically adapts to light/dark mode

## Basic Usage

```tsx
import {
  Table,
  TableHeader,
  TableBody,
  TableRow,
  TableHeaderCell,
  TableCell,
} from './components/Table';

function MyTable() {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHeaderCell>Name</TableHeaderCell>
          <TableHeaderCell>Email</TableHeaderCell>
          <TableHeaderCell>Role</TableHeaderCell>
        </TableRow>
      </TableHeader>
      <TableBody>
        <TableRow>
          <TableCell>John Doe</TableCell>
          <TableCell>john@example.com</TableCell>
          <TableCell>Admin</TableCell>
        </TableRow>
        <TableRow>
          <TableCell>Jane Smith</TableCell>
          <TableCell>jane@example.com</TableCell>
          <TableCell>User</TableCell>
        </TableRow>
      </TableBody>
    </Table>
  );
}
```

## Props

### Table

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `bordered` | `boolean` | `false` | Display borders between cells |
| `hoverable` | `boolean` | `false` | Enable hover effects on rows |
| `striped` | `boolean` | `false` | Alternate row background colors |
| `children` | `ReactNode` | - | Table content |

### TableHeaderCell / TableCell

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `align` | `'left' \| 'center' \| 'right'` | `'left'` | Text alignment |
| `children` | `ReactNode` | - | Cell content |

### TableRow

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `selected` | `boolean` | `false` | Highlight row as selected |
| `children` | `ReactNode` | - | Row cells |

## Examples

### Bordered Table

```tsx
<Table bordered>
  {/* ... */}
</Table>
```

### Hoverable Table

```tsx
<Table hoverable>
  {/* ... */}
</Table>
```

### Striped Table

```tsx
<Table striped>
  {/* ... */}
</Table>
```

### With Cell Alignment

```tsx
<TableRow>
  <TableCell align="left">Left aligned</TableCell>
  <TableCell align="center">Center aligned</TableCell>
  <TableCell align="right">Right aligned</TableCell>
</TableRow>
```

## Resizable Columns

The `ResizableTable` component allows users to drag column borders to adjust column widths:

```tsx
import { ResizableTable, TableHeader, TableBody, TableRow, TableHeaderCell, TableCell } from './components/Table';
import { useState } from 'react';

function MyTable() {
  const [columnWidths, setColumnWidths] = useState({
    0: 150, // First column width
    1: 200, // Second column width
    2: 180, // etc.
  });

  return (
    <ResizableTable
      resizable={true}
      columnWidths={columnWidths}
      onColumnWidthChange={setColumnWidths}
      minColumnWidth={80}
      hoverable
    >
      <TableHeader>
        <TableRow>
          <TableHeaderCell>Column 1</TableHeaderCell>
          <TableHeaderCell>Column 2</TableHeaderCell>
          <TableHeaderCell>Column 3</TableHeaderCell>
        </TableRow>
      </TableHeader>
      <TableBody>
        <TableRow>
          <TableCell>Data 1</TableCell>
          <TableCell>Data 2</TableCell>
          <TableCell>Data 3</TableCell>
        </TableRow>
      </TableBody>
    </ResizableTable>
  );
}
```

### ResizableTable Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `resizable` | `boolean` | `true` | Enable column resizing |
| `columnWidths` | `ColumnWidth` | `{}` | Object mapping column index to width in pixels |
| `onColumnWidthChange` | `function` | - | Callback when a column is resized |
| `minColumnWidth` | `number` | `80` | Minimum width for columns in pixels |
| `hoverable` | `boolean` | `false` | Enable hover effects on rows |

## Usage Notes

- **Column Resizing**: Hover over column borders to see the resize handle (blue line). Drag to resize.
- **Persistence**: Store `columnWidths` state to persist user's column width preferences
- **Keyboard Accessible**: Resize handles are keyboard accessible through JS events
- **Touch Friendly**: Works with touch events on mobile devices

## Design Reference

Based on Figma design: [My Advisors Table](https://www.figma.com/design/hsaksl75lnbmtn3u1iDsqn/Multi-Brand-Design-System?node-id=454-3544)

## Accessibility

- Uses semantic HTML table elements
- Proper header/cell relationships
- ARIA attributes where appropriate
- Keyboard navigation support
