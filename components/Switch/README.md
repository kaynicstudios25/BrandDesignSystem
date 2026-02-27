# Switch Component

A flexible toggle switch component for the multi-brand design system. The Switch component provides a visual representation of an on/off state and integrates seamlessly with the design token system.

## Features

- **Flexible State Management**: Supports both controlled and uncontrolled modes
- **Multiple States**: Default, hover, focus, and disabled states
- **Optional Label**: Built-in label support with flexible positioning
- **Design Token Integration**: Uses semantic color tokens for brand consistency
- **Accessibility**: Proper ARIA attributes and keyboard navigation support
- **Type Safe**: Full TypeScript support with detailed prop types

## Usage

### Basic Usage

```tsx
import { Switch } from '@/components';

export function BasicSwitch() {
  return <Switch defaultChecked label="Enable feature" />;
}
```

### Controlled Component

```tsx
import { useState } from 'react';
import { Switch } from '@/components';

export function ControlledSwitch() {
  const [isEnabled, setIsEnabled] = useState(false);

  return (
    <Switch
      checked={isEnabled}
      onChange={(e) => setIsEnabled(e.target.checked)}
      label="Enable notifications"
    />
  );
}
```

### Label Positioning

```tsx
<Switch
  label="Off"
  labelPosition="left"
  defaultChecked
/>

<Switch
  label="On"
  labelPosition="right"
  defaultChecked
/>
```

### Disabled State

```tsx
<Switch 
  label="Disabled feature" 
  disabled 
/>

<Switch 
  label="Disabled and checked" 
  disabled 
  defaultChecked 
/>
```

## Design Specifications

### Dimensions

- **Track Width**: 64px
- **Track Height**: 32px
- **Thumb Diameter**: 24px
- **Gap (with label)**: 12px

### States

- **Default**: Neutral gray/blue depending on checked state
- **Hover**: Slightly darkened or highlighted
- **Focus**: Enhanced border and shadow styling
- **Disabled**: Reduced opacity (60%) with cursor changes

### Colors

The component uses semantic color tokens:

- **Action Primary**: Used for the enabled/checked state
- **Surface Subtle**: Used for the disabled/unchecked track
- **Border tokens**: Applied based on interaction state

## Props

### `checked?: boolean`

The controlled checked state of the switch.

```tsx
<Switch checked={isEnabled} onChange={handleChange} />
```

### `defaultChecked?: boolean`

The initial checked state (uncontrolled mode).

```tsx
<Switch defaultChecked label="Enabled by default" />
```

### `onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void`

Called when the switch state changes.

```tsx
<Switch onChange={(e) => console.log(e.target.checked)} />
```

### `label?: string`

Optional label text displayed next to the switch.

```tsx
<Switch label="Enable dark mode" />
```

### `hideLabel?: boolean`

Hide the label visually while maintaining accessibility.

```tsx
<Switch label="Hidden label" hideLabel aria-label="Visible label" />
```

### `labelPosition?: 'left' | 'right'`

Position of the label relative to the switch. Default: `'right'`.

```tsx
<Switch label="Left side" labelPosition="left" />
```

### `disabled?: boolean`

Disable the switch and prevent interactions.

```tsx
<Switch label="Disabled" disabled />
```

### `containerStyle?: React.CSSProperties`

Custom styles for the container div.

```tsx
<Switch 
  label="Custom styling" 
  containerStyle={{ gap: '20px' }}
/>
```

## Accessibility

The Switch component is built with accessibility in mind:

- **Keyboard Navigation**: Use `Tab` to focus and `Space`/`Enter` to toggle
- **ARIA Attributes**: Proper `role` and `aria-*` attributes
- **Label Association**: Labels are properly associated via `htmlFor`
- **Focus Management**: Clear focus indicators for keyboard navigation
- **Disabled State**: Proper behavior and visual indication when disabled

### Accessibility Example

```tsx
<Switch
  label="Accept terms and conditions"
  id="terms-switch"
  aria-describedby="terms-description"
/>
<p id="terms-description">
  By enabling this, you agree to our terms of service.
</p>
```

## Design Token Integration

The component automatically uses the following design tokens:

```
--spacing-md: Gap between switch and label
--p-md-fontsize: Label font size
--p-md-lineheight: Label line height
--fontweight-regular: Label font weight
--fontfamily-body: Label font family
--surface-action: Background color when enabled
--border-action: Border color when enabled
--surface-subtle: Background color when disabled
--border-default: Border color in default state
--text-primary: Label text color
--surface-disabled: Background in disabled state
--border-disabled: Border in disabled state
```

## Testing

Example test cases for the Switch component:

```tsx
import { render, screen, fireEvent } from '@testing-library/react';
import { Switch } from '@/components';

describe('Switch', () => {
  it('toggles the switch on click', () => {
    const { container } = render(<Switch />);
    const switchElement = container.querySelector('input[type="checkbox"]');
    
    fireEvent.click(switchElement!);
    expect(switchElement).toBeChecked();
  });

  it('respects controlled checked state', () => {
    const { rerender } = render(<Switch checked={false} onChange={() => {}} />);
    expect(screen.getByRole('checkbox')).not.toBeChecked();
    
    rerender(<Switch checked={true} onChange={() => {}} />);
    expect(screen.getByRole('checkbox')).toBeChecked();
  });

  it('disables when disabled prop is true', () => {
    render(<Switch disabled />);
    expect(screen.getByRole('checkbox')).toBeDisabled();
  });
});
```

## Related Components

- [Checkbox](../Checkbox) - For multiple selection options
- [RadioButton](../RadioButton) - For single selection from multiple options
- [Label](../Label) - For standalone label elements

## Figma Reference

Component design references from the Multi-Brand Design System:
- **Node ID**: 171:9156 (Switch Label variant)
- **Design**: Toggle switch with label support

---

Last Updated: 2026-02-26
