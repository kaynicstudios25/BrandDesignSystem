# Button Component - Usage Guide

## Overview

The Button component is a flexible, multi-variant button that integrates seamlessly with the Multi-Brand Design System token architecture. It supports three variants (default, outline, transparent), multiple sizes, and interactive states.

## Design Reference

Based on the Figma Multi-Brand Design System:
- **File**: Multi-Brand Design System
- **Node ID**: 84-145
- **Link**: [View in Figma](https://www.figma.com/design/hsaksl75lnbmtn3u1iDsqn/Multi-Brand-Design-System?node-id=84-145)

## Installation

```typescript
import { Button } from '@components/Button';
```

## Basic Usage

```tsx
// Simple button
<Button>Click Me</Button>

// With variant
<Button variant="outline">Outlined Button</Button>

// With icons
<Button 
  iconLeft={<InfoIcon />}
  iconRight={<CheckIcon />}
>
  Button with Icons
</Button>

// Different sizes
<Button size="sm">Small</Button>
<Button size="md">Medium</Button>
<Button size="lg">Large</Button>

// Disabled state
<Button disabled>Disabled Button</Button>
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `variant` | `'default' \| 'outline' \| 'transparent'` | `'default'` | Visual style variant |
| `size` | `'sm' \| 'md' \| 'lg'` | `'md'` | Button size |
| `iconLeft` | `React.ReactNode` | `undefined` | Icon component for left side |
| `iconRight` | `React.ReactNode` | `undefined` | Icon component for right side |
| `fullWidth` | `boolean` | `false` | Makes button full width |
| `disabled` | `boolean` | `false` | Disables the button |
| `className` | `string` | `''` | Additional CSS classes |
| `children` | `React.ReactNode` | *required* | Button label/content |

All standard HTML button attributes are also supported.

## Variants

### Default (Filled)
Primary action button with solid background and border.
```tsx
<Button variant="default">Primary Action</Button>
```

### Outline
Secondary action with border, transparent background.
```tsx
<Button variant="outline">Secondary Action</Button>
```

### Transparent
Tertiary action with no background or border.
```tsx
<Button variant="transparent">Tertiary Action</Button>
```

## States

The component automatically handles interactive states:
- **Default**: Normal resting state
- **Hover**: Activated on mouse over
- **Focus**: Activated on keyboard focus (shows focus ring)
- **Disabled**: Non-interactive state

## Design Token Integration

The Button component uses CSS variables from the design token system:

```css
/* Action Colors */
--surface-action: Primary action background
--surface-action-hover: Hover state background
--text-action: Action text color
--text-action-hover: Hover state text color
--text-on-action: Text on filled buttons

/* Border & Focus */
--border-action: Border color
--border-focus: Focus ring color
--border-disabled: Disabled state border

/* Typography */
--fontfamily-body: Font family
--p-sm-fontsize: Small text size
--p-md-fontsize: Medium text size

/* Layout */
--boderradius-sm: Border radius
```

## Testing in the Playground

Run the development server to see all button variants and states:

```bash
npm install
npm run dev
```

Navigate to `http://localhost:5173` to view the interactive component playground.

## Accessibility

- Fully keyboard accessible
- Clear focus indicators
- Proper disabled state handling
- Uses semantic `<button>` element
- Supports all ARIA attributes via spread props

## Examples

```tsx
// Call-to-action button
<Button 
  variant="default" 
  size="lg"
  iconRight={<ArrowRight />}
>
  Get Started
</Button>

// Cancel action
<Button 
  variant="outline" 
  onClick={handleCancel}
>
  Cancel
</Button>

// Link-style button
<Button 
  variant="transparent"
  onClick={handleLearnMore}
>
  Learn More
</Button>
```
