# Checkbox Component

A flexible, accessible checkbox component that integrates seamlessly with the Multi-Brand Design System's token architecture.

## Design Reference

- **Figma Node IDs**: 167:8982 (Checkbox states), 167:9051 (Checkbox with label)
- **Design System**: Multi-Brand Design System
- **Component Family**: Form Controls

## Features

- ✅ Full state management (default, hover, focus, disabled, error)
- ✅ Controlled and uncontrolled modes
- ✅ Optional label support
- ✅ Keyboard accessible (native input integration)
- ✅ Design token integration
- ✅ TypeScript support
- ✅ Error state support

## Usage

### Basic Checkbox

```tsx
import { Checkbox } from '@/components';

function MyForm() {
  return <Checkbox />;
}
```

### Checkbox with Label

```tsx
import { Checkbox } from '@/components';

function MyForm() {
  return <Checkbox label="Accept terms and conditions" />;
}
```

### Controlled Checkbox

```tsx
import { Checkbox } from '@/components';
import { useState } from 'react';

function MyForm() {
  const [accepted, setAccepted] = useState(false);
  
  return (
    <Checkbox
      label="I agree"
      checked={accepted}
      onChange={(e) => setAccepted(e.target.checked)}
    />
  );
}
```

### Error State

```tsx
import { Checkbox } from '@/components';

function MyForm() {
  return (
    <Checkbox
      label="Required field"
      error={true}
    />
  );
}
```

### Disabled State

```tsx
import { Checkbox } from '@/components';

function MyForm() {
  return (
    <Checkbox
      label="Unavailable option"
      disabled={true}
    />
  );
}
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `checked` | `boolean` | `undefined` | Controlled checked state |
| `defaultChecked` | `boolean` | `false` | Default checked state (uncontrolled) |
| `onChange` | `(event) => void` | `undefined` | Change handler |
| `label` | `string` | `undefined` | Label text to display |
| `hideLabel` | `boolean` | `false` | Visually hide the label (still accessible) |
| `error` | `boolean` | `false` | Error state |
| `disabled` | `boolean` | `false` | Disabled state |
| `className` | `string` | `''` | Custom CSS class |
| `containerStyle` | `CSSProperties` | `undefined` | Custom container styles |

All standard HTML input attributes are also supported.

## States

The component automatically manages the following visual states:

- **Default**: Normal unchecked/checked state
- **Hover**: Mouse hover state
- **Focus**: Keyboard focus state (with focus ring)
- **Disabled**: Non-interactive state
- **Error**: Validation error state

## Accessibility

- Uses native `<input type="checkbox">` for full keyboard and screen reader support
- Proper label association with `htmlFor` and `id`
- Supports `aria-label` for checkboxes without visible labels
- Keyboard navigation (Space to toggle, Tab to focus)
- Focus indicators for keyboard users

## Design Tokens Used

### Colors
- `--surface-action`: Primary checkbox background
- `--surface-action-hover`: Hover state background
- `--surface-disabled`: Disabled state background
- `--surface-error`: Error state background
- `--border-action`: Primary border color
- `--border-action-hover`: Hover border color
- `--border-disabled`: Disabled border color
- `--border-error`: Error border color
- `--text-on-action`: Checkmark color
- `--text-body`: Label text color
- `--text-disabled`: Disabled text color

### Sizing & Spacing
- `--boderradius-md`: Border radius (4px)
- `--boderwidth-sm`: Border width (1px)
- Fixed size: 36x36px

### Typography (for labels)
- `--fontfamily-body`: Font family
- `--p-md-fontsize`: Font size (16px)
- `--p-md-lineheight`: Line height (20px)
- `--fontweight-regular`: Font weight (400)

## Examples

### Form with Multiple Checkboxes

```tsx
function PreferencesForm() {
  const [preferences, setPreferences] = useState({
    newsletter: false,
    notifications: true,
    marketing: false,
  });

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
      <Checkbox
        label="Email newsletter"
        checked={preferences.newsletter}
        onChange={(e) => setPreferences({ ...preferences, newsletter: e.target.checked })}
      />
      <Checkbox
        label="Push notifications"
        checked={preferences.notifications}
        onChange={(e) => setPreferences({ ...preferences, notifications: e.target.checked })}
      />
      <Checkbox
        label="Marketing emails"
        checked={preferences.marketing}
        onChange={(e) => setPreferences({ ...preferences, marketing: e.target.checked })}
      />
    </div>
  );
}
```

## Notes

- The checkbox uses a visual box with 36x36px size for better touch targets
- The checkmark icon is 20x20px, centered within the box
- Label spacing is 12px gap from the checkbox
- The component supports both controlled and uncontrolled usage patterns
- Error state takes precedence over other interactive states
