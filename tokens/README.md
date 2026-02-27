# Design Tokens System

## Overview

The Multi-Brand Design System tokens are organized into a hierarchical structure that supports multiple brands while maintaining visual consistency.

## File Structure

```
tokens/
├── colors.base.ts              # Base color definitions (hex values)
├── colors.semantic.ts          # Semantic color aliases (60/30/10 principle)
├── brands.ts                   # Brand configurations (6 brands)
├── design-tokens.types.ts      # Complete token system (spacing, typography, etc.)
├── token.utils.ts              # Utility functions and helpers
├── index.ts                    # Main export file
└── README.md                   # This file
```

## Token Hierarchy

### Level 1: Base Colors
Raw hex color values organized by family:
- `neutralColors` - Black and grays
- `universalBlueColors` - Blue accent family
- `redOrangeColors` - Red-orange accent family
- `tealColors` - Teal accent family
- `goldColors` - Gold accent family
- `violetColors` - Violet accent family
- `darkGreenColors` - Dark green accent family

**File:** `colors.base.ts`

### Level 2: Semantic Aliases
Purpose-based color tokens following 60/30/10 principle:
- **60% Primary**: `background-primary`, `surface-default`
- **30% Secondary**: `text-primary`, `divider`, `border-default`
- **10% Accent**: `action-primary`, `action-primary-hover`

**File:** `colors.semantic.ts`

### Level 3: Brand Configuration
Brand-specific token sets with selected accent family:
- Corporate Tech (Blue)
- Creative Retail (Red-Orange)
- Health & Wellness (Teal)
- Luxury Premium (Gold)
- Lifestyle Cosmetics (Violet)
- Environmental Trust (Dark Green)

**File:** `brands.ts`

### Level 4: Design System
Complete token categories:
- Colors (semantic aliases)
- Spacing (4px–96px)
- Typography (display, heading, body, code)
- Sizing (components, containers, icons)
- Border Radius (0px–9999px)
- Border Width (1px–6px)
- Shadows (elevation system)
- Opacity (0–1)
- Transitions (duration & easing)
- Z-Index (hierarchy)

**File:** `design-tokens.types.ts`

## Usage

### Basic Token Access

```typescript
import { getBrand, spacingTokens, typographyTokens } from '@/tokens';

const brand = getBrand('corporate-tech');
const tokens = brand.tokens;

// Access color token
const primaryColor = tokens['action-primary']; // '#3395ff'

// Access spacing token
const padding = spacingTokens.md; // '12px'

// Access typography token
const heading = typographyTokens.headingMd;
```

### Brand Switching

```typescript
import { getBrand, BrandId } from '@/tokens';

function switchBrand(brandId: BrandId) {
  const newBrand = getBrand(brandId);
  // Components automatically update through context/provider
}

// Available brands:
// 'corporate-tech'
// 'creative-retail'
// 'health-wellness'
// 'luxury-premium'
// 'lifestyle-cosmetics'
// 'environmental-trust'
```

### Using Token Utilities

```typescript
import {
  getTokenValue,
  getColorToken,
  createTokenCSSVariables,
  debugTokens,
} from '@/tokens';

// Get specific token value
const padding = getTokenValue(tokens, 'spacing.lg'); // '16px'

// Get color token
const textColor = getColorToken(tokens, 'text-primary'); // '#000000'

// Generate CSS variables
const css = createTokenCSSVariables(tokens, '--app-');
// Output: :root { --app-color-action-primary: #3395ff; ... }

// Debug available tokens
debugTokens(tokens);
```

### In React Components

```typescript
import { useTokenValue } from '@/tokens';

function MyComponent() {
  const tokens = useTokenValue('corporate-tech');

  return (
    <div
      style={{
        backgroundColor: tokens.colors['background-primary'],
        padding: tokens.spacing.md,
        color: tokens.colors['text-primary'],
      }}
    >
      Content
    </div>
  );
}
```

### CSS Variables Output

Generate CSS variables for global styling:

```typescript
import { createTokenCSSVariables } from '@/tokens';
import { getBrand } from '@/tokens';

const brand = getBrand('creative-retail');
const css = createTokenCSSVariables(brand.tokens);

// Write to CSS file or inject into DOM
document.documentElement.style.setProperty(...);
```

## Design System Principles

### 60/30/10 Rule

| Layer | Amount | Purpose | Example |
|-------|---------|---------|---------|
| **Primary** | 60% | Foundation (backgrounds, surfaces) | `background-primary`, `surface-default` |
| **Secondary** | 30% | Structure (text, borders, depth) | `text-primary`, `divider`, `border-default` |
| **Accent** | 10% | Brand (interactive, CTAs, emphasis) | `action-primary`, `focus-ring` |

### Brand Flexibility

Brands differ only in their accent color:
- Different brands = Different `AccentColorFamily`
- Same semantic aliases = Consistent component API
- Switching brands = Only change `AccentColorFamily`

### Semantic Naming

All color tokens use semantic names, NOT design descriptions:

❌ Bad: `blue-500`, `red-600`, `gray-400`
✅ Good: `action-primary`, `text-secondary`, `surface-default`

Benefits:
- Tokens describe purpose, not appearance
- Switching colors doesn't require code changes
- Easier to maintain and refactor
- Self-documenting component interfaces

## Available Token Categories

### Colors
```typescript
tokens.colors['action-primary'] // Primary action color
tokens.colors['text-primary']   // Primary text
tokens.colors['background-primary'] // Main background
```

### Spacing
```typescript
tokens.spacing.xs   // 4px
tokens.spacing.sm   // 8px
tokens.spacing.md   // 12px
tokens.spacing.lg   // 16px
tokens.spacing.xl   // 20px
```

### Typography
```typescript
tokens.typography.displayXL  // 48px, 700 weight
tokens.typography.headingMd  // 20px, 700 weight
tokens.typography.bodyMd     // 14px, 400 weight
tokens.typography.labelSm    // 11px, 500 weight
```

### Sizing
```typescript
tokens.sizing.sizeXs      // 24px
tokens.sizing.sizeMd      // 40px
tokens.sizing.iconLg      // 32px
tokens.sizing.containerLg // 1024px
```

### Shadows
```typescript
tokens.shadow.shadowXs // Small shadow
tokens.shadow.shadowMd // Medium shadow
tokens.shadow.shadowLg // Large shadow
```

### Border Radius
```typescript
tokens.borderRadius.sm    // 4px
tokens.borderRadius.md    // 6px
tokens.borderRadius.lg    // 8px
tokens.borderRadius.full  // 9999px
```

## Extending Tokens

### Add New Semantic Color

```typescript
// In colors.semantic.ts
export interface SemanticTokenAlias {
  // ... existing tokens ...
  'custom-color': string; // Add new token
}

// In the factory function:
export function createSemanticTokens(...) {
  return {
    // ... existing tokens ...
    'custom-color': '#your-color',
  };
}
```

### Add New Brand

```typescript
// In brands.ts
export const YourBrandName: BrandConfig = {
  name: 'Your Brand',
  id: 'your-brand-id',
  accentFamily: 'universalBlue', // Choose accent family
  description: '...',
  industries: [...],
  tokens: createSemanticTokens('universalBlue'),
};

// Register in brandRegistry
export const brandRegistry = {
  // ... existing brands ...
  'your-brand-id': YourBrandName,
};
```

## Best Practices

### 1. Always Use Semantic Tokens
In components, reference semantic tokens, not base colors:
```typescript
// ✅ Good
const btn = <button style={{ color: colors['action-primary'] }} />

// ❌ Bad
const btn = <button style={{ color: '#3395ff' }} /> // Hardcoded!
```

### 2. Organize by Category
Group tokens by purpose in component code:
```typescript
const tokenStyles = {
  // Colors
  backgroundColor: tokens.colors['background-primary'],
  color: tokens.colors['text-primary'],
  
  // Spacing
  padding: tokens.spacing.md,
  margin: tokens.spacing.lg,
  
  // Sizing
  width: tokens.sizing.containerMd,
};
```

### 3. Use Type Safety
Leverage TypeScript to prevent token errors:
```typescript
// TypeScript will error if token name is wrong
const color: SemanticTokenAlias['action-primary'] = tokens.colors['action-primary'];
```

### 4. Document Custom Overrides
If a component needs custom values, document why:
```typescript
// Why: Special case for this component's visual design
const customSpacing = '18px'; // Should use tokenized value instead
```

## Migration Guide

### From Hardcoded Colors to Tokens

**Before:**
```typescript
<button style={{ backgroundColor: '#3395ff', color: 'white' }} />
```

**After:**
```typescript
<button style={{
  backgroundColor: tokens.colors['action-primary'],
  color: tokens.colors['text-primary'],
}} />
```

### From Multiple Color Systems to Single Design System

1. Map existing colors to token structure
2. Create aliases for custom colors
3. Update components incrementally
4. Test across all brands

## Troubleshooting

### Token Not Found Error
```typescript
// Error: Token not found: "colors.unknown-token"
// Solution: Check spelling and available token names
console.log(Object.keys(tokens.colors)); // List all available colors
```

### Colors Not Updating on Brand Switch
```typescript
// Problem: Components not re-rendering with new tokens
// Solution: Ensure using React Context/Provider pattern
// (See next section: Theme Provider Setup)
```

## See Also

- [DESIGN_TOKEN_STRUCTURE.md](../DESIGN_TOKEN_STRUCTURE.md) - Detailed token structure documentation
- [brands.ts](./brands.ts) - Brand configuration details
- [colors.semantic.ts](./colors.semantic.ts) - Semantic token definitions
- [token.utils.ts](./token.utils.ts) - Utility function reference
