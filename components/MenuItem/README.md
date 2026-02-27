# MenuItem Component

A menu item component that integrates with the design token system. Supports different states (default, hover, disabled) and selection states.

## Design Reference

- **Figma Node**: 167:267
- **File**: Multi-Brand Design System

## Usage

```tsx
import { MenuItem } from './components/MenuItem';
import { Settings } from './icons';

// Basic usage
<MenuItem label="Menu Item" />

// With icons
<MenuItem 
  label="Settings" 
  iconRight={<Settings />} 
/>

// Selected state
<MenuItem 
  label="Active Item" 
  selected 
/>

// Disabled state
<MenuItem 
  label="Disabled Item" 
  status="disabled" 
/>

// With click handler
<MenuItem 
  label="Clickable Item" 
  onClick={() => console.log('clicked')} 
/>
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `label` | `string` | required | Menu item label text |
| `status` | `'default' \| 'hover' \| 'disabled'` | `'default'` | Interactive state |
| `selected` | `boolean` | `false` | Whether the item is selected |
| `iconLeft` | `React.ReactNode` | - | Icon component to display on the left |
| `iconRight` | `React.ReactNode` | - | Icon component to display on the right |
| `showIconLeft` | `boolean` | `true` | Whether to show the left icon |
| `showIconRight` | `boolean` | `true` | Whether to show the right icon |
| `onClick` | `() => void` | - | Callback when item is clicked |

## States

### Default
- Background: `var(--surface-default)`
- Border: `var(--border-default)`
- Text: `var(--text-body)`

### Selected
- Background: `var(--surface-action)`
- Border: `var(--border-action)`
- Text: `var(--text-on-action)`

### Hover (non-selected)
- Background: `var(--surface-action-hover-light)`
- Border: `var(--border-action-hover)`
- Text: `var(--text-action-hover)`

### Hover (selected)
- Background: `var(--surface-action-hover)`
- Border: `var(--border-action-hover)`
- Text: `var(--text-on-action)`

### Disabled
- Background: `var(--surface-disabled)`
- Border: `var(--border-disabled)`
- Text: `var(--text-disabled)`

## Design Tokens Used

### Colors
- `--surface-default`
- `--surface-action`
- `--surface-action-hover`
- `--surface-action-hover-light`
- `--surface-disabled`
- `--border-default`
- `--border-action`
- `--border-action-hover`
- `--border-disabled`
- `--text-body`
- `--text-on-action`
- `--text-action-hover`
- `--text-disabled`

### Typography
- `--fontfamily-body`
- `--fontweight-regular`
- `--p-md-fontsize`
- `--p-md-lineheight`

### Spacing
- `--borderwidth-sm`

## Accessibility

- Uses semantic `role="menuitem"` attribute
- Supports `aria-disabled` for disabled state
- Keyboard navigation supported through standard div interactions
- Focus states inherit from interactive elements
