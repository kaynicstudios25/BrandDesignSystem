# Label Component - Usage Guide

## Overview

The Label component is a flexible label element that integrates seamlessly with the Multi-Brand Design System token architecture. It supports optional icons and required field indicators.

## Design Reference

Based on the Figma Multi-Brand Design System:
- **File**: Multi-Brand Design System
- **Node ID**: 146-405
- **Link**: [View in Figma](https://www.figma.com/design/hsaksl75lnbmtn3u1iDsqn/Multi-Brand-Design-System?node-id=146-405)

## Installation

```typescript
import { Label } from '@components/Label';
```

## Basic Usage

```tsx
// Simple label
<Label label="Username" />

// Label with icon
<Label label="Email" icon={true} iconComponent={<InfoIcon />} />

// Required field label
<Label label="Password" type="required" icon={true} />

// Label without icon
<Label label="Name" icon={false} />
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `label` | `string` | `'Label'` | The label text to display |
| `icon` | `boolean` | `true` | Whether to show the icon |
| `type` | `'default' \| 'required'` | `'default'` | Label type; 'required' shows asterisk indicator |
| `iconComponent` | `React.ReactNode` | `undefined` | Custom icon component to render |
| `className` | `string` | `''` | Additional CSS classes |

## Examples

### Simple Label
```tsx
<Label label="First Name" />
```

### Required Field With Icon
```tsx
import { InfoIcon } from '@playground/icons';

<Label 
  label="Email Address"
  type="required"
  icon={true}
  iconComponent={<InfoIcon />}
/>
```

### Custom Styling
```tsx
<Label 
  label="Phone Number"
  className="custom-label-class"
  style={{ marginBottom: '16px' }}
/>
```

## Design Tokens Used

The Label component integrates with these design tokens:

- **Typography**: `--fontfamily-body`, `--fontweight-regular`, `--p-md-font-size`, `--p-md-line-height`
- **Colors**: 
  - `--text-body` (label text)
  - `--icon-default` (icon)
  - `--icon-error` (required asterisk)

## Accessibility

The Label component:
- Renders as a semantic `<div>` with flex layout
- Supports `data-node-id` attributes for tracking
- Uses semantic HTML for text content
- Supports standard HTML attributes via spread operator

## States

### Default
- Standard label with optional icon
- Uses `--text-body` color token

### Required
- Shows red asterisk indicator
- Uses `--icon-error` color token for asterisk
- Helps identify required form fields

## Integration with Forms

```tsx
<form>
  <Label label="Full Name" type="required" icon={false} />
  <input type="text" placeholder="Enter your name" />
  
  <Label label="Email" type="required" icon={true} iconComponent={<InfoIcon />} />
  <input type="email" placeholder="Enter your email" />
</form>
```
