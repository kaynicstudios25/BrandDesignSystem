# Design Tokens Quick Reference

## 🎯 Most Used Tokens

### Colors (Copy-Paste Ready)

**Primary Actions:**
```typescript
tokens.colors['action-primary']        // Button backgrounds
tokens.colors['action-primary-hover']  // Button hover state
tokens.colors['action-primary-active'] // Button active state
```

**Text:**
```typescript
tokens.colors['text-primary']          // Headings, main text
tokens.colors['text-secondary']        // Secondary text, labels
tokens.colors['text-tertiary']         // Hints, placeholders
```

**Backgrounds:**
```typescript
tokens.colors['background-primary']    // Page background
tokens.colors['surface-default']       // Cards, modals, panels
```

**Borders & Dividers:**
```typescript
tokens.colors['border-default']        // Input borders
tokens.colors['divider']               // Section dividers
```

---

## 📏 Most Used Spacing

```typescript
tokens.spacing.xs   // 4px   - Micro spacing
tokens.spacing.sm   // 8px   - Small spacing
tokens.spacing.md   // 12px  - Default padding
tokens.spacing.lg   // 16px  - Standard padding
tokens.spacing.xl   // 20px  - Large spacing
tokens.spacing['2xl'] // 24px  - Extra large spacing
```

---

## 🔤 Most Used Typography

```typescript
tokens.typography.displayLg     // Large headlines
tokens.typography.headingMd     // Section headers
tokens.typography.bodyMd        // Body text (default)
tokens.typography.labelMd       // Form labels
```

---

## 🎨 Component Token Map

### Button Component
```typescript
const buttonStyles = {
  backgroundColor: tokens.colors['action-primary'],
  color: tokens.colors['text-primary'],
  padding: `${tokens.spacing.sm} ${tokens.spacing.md}`,
  borderRadius: tokens.borderRadius.md,
  border: 'none',
  cursor: 'pointer',
  fontSize: tokens.typography.labelMd.fontSize,
  fontWeight: tokens.typography.labelMd.fontWeight,
  transition: `all ${tokens.transition.durationBase} ${tokens.transition.easeInOut}`,
  
  '&:hover': {
    backgroundColor: tokens.colors['action-primary-hover'],
    boxShadow: tokens.shadow.shadowMd,
  },
  
  '&:active': {
    backgroundColor: tokens.colors['action-primary-active'],
  },
  
  '&:disabled': {
    backgroundColor: tokens.colors['action-primary-disabled'],
    cursor: 'not-allowed',
    opacity: '0.5',
  },
  
  '&:focus': {
    outline: 'none',
    boxShadow: `0 0 0 3px ${tokens.colors['focus-ring-offset']}, 0 0 0 5px ${tokens.colors['focus-ring']}`,
  },
};
```

### Card Component
```typescript
const cardStyles = {
  backgroundColor: tokens.colors['surface-default'],
  padding: tokens.spacing['2xl'],
  borderRadius: tokens.borderRadius.lg,
  boxShadow: tokens.shadow.shadowMd,
  border: `${tokens.borderWidth.xs} solid ${tokens.colors['border-subtle']}`,
};
```

### Input Component
```typescript
const inputStyles = {
  padding: `${tokens.spacing.sm} ${tokens.spacing.md}`,
  fontSize: tokens.typography.bodyMd.fontSize,
  lineHeight: tokens.typography.bodyMd.lineHeight,
  borderRadius: tokens.borderRadius.md,
  border: `${tokens.borderWidth.xs} solid ${tokens.colors['border-default']}`,
  color: tokens.colors['text-primary'],
  backgroundColor: tokens.colors['background-primary'],
  
  '&:focus': {
    outline: 'none',
    borderColor: tokens.colors['action-primary'],
    boxShadow: `0 0 0 3px ${tokens.colors['accent-background-lighter']}`,
  },
  
  '&::placeholder': {
    color: tokens.colors['text-tertiary'],
  },
};
```

---

## 🚀 React Hook Usage

```typescript
import { useTheme, useTokens, useBrand } from '@/tokens';

// Option 1: Use all context
const { tokens, activeBrand, setActiveBrandId } = useTheme();

// Option 2: Just tokens
const tokens = useTokens();

// Option 3: Just brand
const brand = useBrand();

// Option 4: Brand switching
const { activeBrandId, setActiveBrandId } = useBrandSwitcher();
```

---

## 🎯 Common Pattern: Responsive Spacing

```typescript
const boxStyles = {
  padding: tokens.spacing.md,           // Mobile
  '@media (min-width: 768px)': {
    padding: tokens.spacing.lg,         // Tablet+
  },
  '@media (min-width: 1024px)': {
    padding: tokens.spacing['2xl'],     // Desktop+
  },
};
```

---

## 🌈 Switching Brands

```typescript
// Available brands:
const brands = [
  'corporate-tech',        // Blue
  'creative-retail',       // Red-Orange
  'health-wellness',       // Teal
  'luxury-premium',        // Gold
  'lifestyle-cosmetics',   // Violet
  'environmental-trust',   // Green
];

// Switch in React:
const { setActiveBrandId } = useTheme();
setActiveBrandId('creative-retail');

// Switch without React:
import { applyThemeToDom } from '@/tokens';
applyThemeToDom('luxury-premium');
```

---

## 📋 Accessibility Checklist

When building components:

- ✅ `text-primary` (black) on `background-primary` (white) = 21:1 contrast (AAA)
- ✅ `text-secondary` on backgrounds = 4.5:1+ ratio (AA)
- ✅ Use `focus-ring` for focus states (3px width)
- ✅ Use `status-success`, `status-error` for color + iconography
- ✅ Test with brand switching for consistent contrast
- ✅ Verify transitions use `durationBase` or slower (≥200ms)

---

## 🔧 Common Mistakes to Avoid

❌ **DON'T:** Hardcode colors
```typescript
// Bad
const button = <button style={{ color: '#3395ff' }} />
```

✅ **DO:** Use semantic tokens
```typescript
// Good
const button = (
  <button style={{ color: tokens.colors['action-primary'] }} />
)
```

---

❌ **DON'T:** Use random spacing values
```typescript
// Bad
const div = <div style={{ padding: '18px' }} />
```

✅ **DO:** Use spacing scale
```typescript
// Good
const div = <div style={{ padding: tokens.spacing.lg }} />
```

---

❌ **DON'T:** Create custom shadows
```typescript
// Bad
const box = <div style={{ boxShadow: '0 4px 8px rgba(0,0,0,0.15)' }} />
```

✅ **DO:** Use token shadows
```typescript
// Good
const box = <div style={{ boxShadow: tokens.shadow.shadowMd }} />
```

---

## 💡 Pro Tips

1. **Use margin sparingly** - Prefer padding on parent containers
2. **Stack spacing vertically** - Use `stackSmall`, `stackMedium`, `stackLarge`
3. **Combine shadows with borders** - `shadowMd` + `border-default` for depth
4. **Use rounded corners strategically** - `borderRadius.md` for inputs, `borderRadius.lg` for cards
5. **Reference tokens in comments** - Document why specific tokens were chosen

---

## 🧪 Testing Tokens

```typescript
import { validateTokenSystem, debugTokens } from '@/tokens';

// Validate all tokens
const report = validateTokenSystem();
console.log(report);

// Debug tokens in component
const { tokens } = useTheme();
debugTokens(tokens);

// Check specific token
if (tokens.colors['action-primary']) {
  console.log('Token exists:', tokens.colors['action-primary']);
}
```

---

## 📚 Full Token Reference

See these files for complete documentation:

- **[TOKEN_INVENTORY.md](./TOKEN_INVENTORY.md)** - Complete list of all 232+ tokens
- **[README.md](./README.md)** - Detailed usage guide
- **[SETUP_SUMMARY.md](./SETUP_SUMMARY.md)** - Setup and integration guide
- **[/DESIGN_TOKEN_STRUCTURE.md](../DESIGN_TOKEN_STRUCTURE.md)** - Architecture documentation

---

## ⚡ Quick Copy-Paste Templates

### React Component with Tokens
```tsx
import { useTheme } from '@/tokens';

export function MyComponent() {
  const { tokens } = useTheme();

  return (
    <div
      style={{
        backgroundColor: tokens.colors['surface-default'],
        padding: tokens.spacing.lg,
        borderRadius: tokens.borderRadius.md,
        boxShadow: tokens.shadow.shadowSm,
      }}
    >
      <h2 style={{
        color: tokens.colors['text-primary'],
        fontSize: tokens.typography.headingMd.fontSize,
        marginBottom: tokens.spacing.md,
      }}>
        Title
      </h2>
      <p style={{
        color: tokens.colors['text-secondary'],
        fontSize: tokens.typography.bodyMd.fontSize,
        lineHeight: tokens.typography.bodyMd.lineHeight,
      }}>
        Content
      </p>
    </div>
  );
}
```

### Styled Component with Tokens
```tsx
import styled from 'styled-components';

const StyledButton = styled.button`
  background-color: ${props => props.theme.colors['action-primary']};
  color: white;
  padding: ${props => `${props.theme.spacing.sm} ${props.theme.spacing.md}`};
  border-radius: ${props => props.theme.borderRadius.md};
  border: none;
  cursor: pointer;
  
  &:hover {
    background-color: ${props => props.theme.colors['action-primary-hover']};
    box-shadow: ${props => props.theme.shadow.shadowMd};
  }
`;
```

### Raw CSS with Variables
```css
:root {
  --color-primary: var(--color-action-primary);
  --color-text: var(--color-text-primary);
  --spacing-default: var(--spacing-md);
  --radius-default: var(--radius-md);
}

.button {
  background-color: var(--color-primary);
  color: var(--color-text);
  padding: calc(var(--spacing-default) / 2) var(--spacing-default);
  border-radius: var(--radius-default);
}
```

---

*Quick Reference - Always available for copy-paste*
