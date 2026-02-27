# RadioButton Component

A flexible radio button component that integrates with the design token system. Supports multiple interactive states (default, hover, focus, disabled) with optional label support.

## Features

- **Multiple States**: default, hover, focus, and disabled
- **Label Support**: Optional label with independent control
- **Controlled & Uncontrolled**: Both patterns supported
- **Design Token Integration**: Uses CSS custom properties for consistent theming
- **Accessibility**: Semantic HTML and ARIA attributes
- **State Management**: Internal state management with full control options

## Usage

### Basic RadioButton

```tsx
import { RadioButton } from '@/components';

<RadioButton 
  label="Option 1"
  onChange={(e) => console.log(e.target.checked)}
/>
```

### With Default Checked State

```tsx
<RadioButton 
  label="Selected Option"
  defaultChecked={true}
/>
```

### Controlled Component

```tsx
const [selected, setSelected] = useState(false);

<RadioButton 
  label="Controlled Option"
  checked={selected}
  onChange={(e) => setSelected(e.target.checked)}
/>
```

### With Custom Styling

```tsx
<RadioButton 
  label="Custom Style"
  className="custom-class"
  containerStyle={{ gap: '16px' }}
/>
```

### Hidden Label

```tsx
<RadioButton 
  label="Accessibility Label"
  hideLabel={true}
/>
```

### Disabled State

```tsx
<RadioButton 
  label="Disabled Option"
  disabled={true}
/>
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `checked` | boolean | - | Controlled checked state |
| `defaultChecked` | boolean | false | Default checked state (uncontrolled) |
| `onChange` | function | - | Change handler callback |
| `label` | string | - | Label text to display |
| `hideLabel` | boolean | false | Hide label visually (still accessible) |
| `disabled` | boolean | false | Disable the radio button |
| `className` | string | '' | Custom class name for container |
| `containerStyle` | CSSProperties | - | Custom inline styles for container |
| `id` | string | - | HTML id attribute |

## Design Specifications

The RadioButton component follows these design specifications from Figma:

- **Size**: 24px × 24px (default)
- **Inner Dot**: 8px × 8px when selected
- **Border Radius**: 64px (fully rounded)
- **States**:
  - **Default**: White background with blue border
  - **Hover**: 
    - Selected: Dark blue background with white dot
    - Unselected: Light blue background with blue border
  - **Focus**: Same as hover with visual focus ring treatment
  - **Disabled**: Gray background with gray border

## Design Tokens

The component uses the following design tokens:

- `--surface-action`: Primary action background (#007aff)
- `--surface-action-hover`: Action hover state (#0062cc)
- `--surface-action-hover-light`: Action hover light (#e5f2ff)
- `--surface-disabled`: Disabled background (#ebebeb)
- `--surface-default`: Default background (white)
- `--border-action`: Action border color
- `--border-action-hover`: Action hover border
- `--border-disabled`: Disabled border color
- `--text-on-action`: Text on action background (white)
- `--text-body`: Body text color (#2f2f2f)
- `--text-disabled`: Disabled text color

## Accessibility

- Native HTML `<input type="radio">` for accessibility
- Proper `<label>` associations via `id`
- ARIA labels for screen readers
- Keyboard navigable
- Focus indicators for keyboard users

## Integration with Design System

This component integrates with the design system through:

- Design token system for theming
- Consistent state management pattern
- Figma node IDs for design reference tracking
- Component reuse and composition ready

## Related Components

- [Checkbox](../Checkbox) - For multiple selections
- [Label](../Label) - For form labeling
- [Button](../Button) - For form actions
