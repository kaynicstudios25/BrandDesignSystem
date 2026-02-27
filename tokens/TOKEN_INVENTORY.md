# Design Tokens - Complete Inventory

This document provides a complete inventory of all design tokens available in the system, organized by category.

## Color Tokens (Semantic Aliases)

### 60% Primary Layer (Foundation)
- `background-primary` - Main page background (#ffffff)
- `background-secondary` - Secondary page areas (#f5f5f5)
- `surface-default` - Cards, modals, panels (#fafafa)
- `surface-subtle` - Subtle container distinction (#f0f0f0)

### 30% Secondary Layer (Structure & Typography)
- `text-primary` - Primary heading/body text (#000000)
- `text-secondary` - Support text, captions (#666666)
- `text-tertiary` - Hints, placeholders (#999999)
- `text-disabled` - Disabled state text (#cccccc)
- `divider` - Visual separators (#e5e5e5)
- `border-subtle` - Light borders (#f0f0f0)
- `border-default` - Standard borders (#e0e0e0)

### 10% Accent Layer (Brand-Swappable)
- `action-primary` - Primary button/CTA (varies by brand)
- `action-primary-hover` - Primary button hover state
- `action-primary-active` - Primary button pressed state
- `action-primary-disabled` - Primary button disabled state
- `action-secondary` - Secondary buttons
- `action-secondary-hover` - Secondary button hover
- `action-secondary-active` - Secondary button active
- `action-secondary-disabled` - Secondary button disabled

### Status & Feedback
- `status-success` - Success message (#22c55e)
- `status-success-bg` - Success background (#f0fdf4)
- `status-error` - Error message (#ef4444)
- `status-error-bg` - Error background (#fef2f2)
- `status-warning` - Warning message (#eab308)
- `status-warning-bg` - Warning background (#fefce8)
- `status-info` - Info message (#3b82f6)
- `status-info-bg` - Info background (#eff6ff)

### Interactive & Focus
- `focus-ring` - Focus indicator (varies by brand)
- `focus-ring-offset` - Focus ring background (#ffffff)
- `overlay` - Modal overlays (rgba(0, 0, 0, 0.5))
- `accent-background-light` - Light brand tint (varies by brand)
- `accent-background-lighter` - Very light brand tint (varies by brand)

**Total Color Tokens: 43**

---

## Spacing Tokens

Micro to macro spacing scale:

- `xs` - 4px (extra small)
- `sm` - 8px (small)
- `md` - 12px (medium)
- `lg` - 16px (large)
- `xl` - 20px (extra large)
- `2xl` - 24px (2x large)
- `3xl` - 32px (3x large)
- `4xl` - 40px (4x large)
- `5xl` - 48px (5x large)
- `6xl` - 56px (6x large)
- `7xl` - 64px (7x large)
- `8xl` - 80px (8x large)
- `9xl` - 96px (9x large)

### Semantic Spacing Aliases
- `gutter` - 16px (horizontal padding)
- `stackSmall` - 8px (small vertical spacing)
- `stackMedium` - 16px (medium vertical spacing)
- `stackLarge` - 24px (large vertical spacing)
- `stackXLarge` - 32px (extra large vertical spacing)

**Total Spacing Tokens: 18**

---

## Typography Tokens

### Display Sizes (Large Headlines)
```
displayXL
├─ fontSize: 48px
├─ fontWeight: 700
└─ lineHeight: 56px

displayLg
├─ fontSize: 40px
├─ fontWeight: 700
└─ lineHeight: 48px

displayMd
├─ fontSize: 32px
├─ fontWeight: 700
└─ lineHeight: 40px
```

### Heading Sizes
```
headingXL     (28px, 700 weight, 36px line)
headingLg     (24px, 700 weight, 32px line)
headingMd     (20px, 700 weight, 28px line)
headingSm     (16px, 600 weight, 24px line)
headingXs     (14px, 600 weight, 20px line)
```

### Body Text Sizes
```
bodyLg        (16px, 400 weight, 24px line)
bodyMd        (14px, 400 weight, 20px line)
bodySm        (12px, 400 weight, 16px line)
bodyXs        (11px, 400 weight, 14px line)
```

### Label/Caption Sizes
```
labelLg       (14px, 500 weight, 20px line)
labelMd       (12px, 500 weight, 16px line)
labelSm       (11px, 500 weight, 14px line)
```

### Code/Monospace
```
monoBg
├─ fontFamily: Menlo, Monaco, Courier New
├─ fontSize: 13px
└─ lineHeight: 20px
```

**Total Typography Tokens: 14**

---

## Sizing Tokens

### Component Sizes
- `sizeXs` - 24px
- `sizeSm` - 32px
- `sizeMd` - 40px
- `sizeLg` - 48px
- `sizeXl` - 56px
- `size2Xl` - 64px

### Container Widths (Responsive Breakpoints)
- `containerSm` - 640px (Mobile)
- `containerMd` - 768px (Tablet)
- `containerLg` - 1024px (Desktop)
- `containerXl` - 1280px (Large Desktop)
- `container2Xl` - 1536px (Extra Large)

### Icon Sizes
- `iconXs` - 12px
- `iconSm` - 16px
- `iconMd` - 24px
- `iconLg` - 32px
- `iconXl` - 48px
- `icon2Xl` - 64px

**Total Sizing Tokens: 17**

---

## Border Radius Tokens

- `none` - 0px
- `sm` - 4px
- `md` - 6px
- `lg` - 8px
- `xl` - 12px
- `2xl` - 16px
- `3xl` - 24px
- `full` - 9999px (fully rounded)

**Total Border Radius Tokens: 8**

---

## Border Width Tokens

- `none` - 0px
- `xs` - 1px
- `sm` - 2px
- `md` - 3px
- `lg` - 4px
- `xl` - 6px

**Total Border Width Tokens: 6**

---

## Shadow Tokens

### Elevation Levels
- `shadowNone` - none
- `shadowXs` - Small shadow (1px, 0.05 blur)
- `shadowSm` - Small shadow (3px, 0.1 blur)
- `shadowMd` - Medium shadow (6px, 0.1 blur)
- `shadowLg` - Large shadow (15px, 0.1 blur)
- `shadowXl` - Extra large shadow (25px, 0.1 blur)
- `shadow2Xl` - 2x large shadow (50px, 0.25 blur)
- `shadow3Xl` - 3x large shadow (60px, 0.3 blur)

### Inset Shadows
- `shadowInsetSm` - Small inset shadow
- `shadowInsetMd` - Medium inset shadow

**Total Shadow Tokens: 10**

---

## Opacity Tokens

Granular opacity scale for transparency effects:

- `opacityNone` - 0 (fully transparent)
- `opacity5` - 0.05 (95% transparent)
- `opacity10` - 0.1
- `opacity20` - 0.2
- `opacity25` - 0.25
- `opacity30` - 0.3
- `opacity40` - 0.4
- `opacity50` - 0.5 (50% transparent)
- `opacity60` - 0.6
- `opacity70` - 0.7
- `opacity75` - 0.75
- `opacity80` - 0.8
- `opacity90` - 0.9
- `opacity95` - 0.95
- `opacityFull` - 1 (fully opaque)

**Total Opacity Tokens: 15**

---

## Transition Tokens

### Duration (Animation Speed)
- `durationFast` - 75ms (quick interactions)
- `durationQuick` - 150ms (standard quick)
- `durationBase` - 200ms (standard)
- `durationSlow` - 300ms (slower transitions)
- `durationSlower` - 500ms (very slow)

### Easing (Animation Curves)
- `easeLinear` - constant speed
- `easeIn` - slow start, fast end
- `easeOut` - fast start, slow end
- `easeInOut` - slow start/end, fast middle

**Total Transition Tokens: 9**

---

## Z-Index Tokens

Hierarchical stacking context:

- `zIndexHide` - -1 (below normal flow)
- `zIndexBase` - 0 (default)
- `zIndexDropdown` - 1000 (dropdowns)
- `zIndexSticky` - 1020 (sticky elements)
- `zIndexFixed` - 1030 (fixed elements)
- `zIndexModal` - 1040 (modal dialogs)
- `zIndexPopover` - 1050 (popovers, tooltips)
- `zIndexTooltip` - 1060 (tooltips)
- `zIndexNotification` - 1070 (notifications, alerts)

**Total Z-Index Tokens: 9**

---

## Brand-Specific Accent Colors

### Universal Blue (Corporate Tech)
Tones: 50 (#e5f2ff) → 900 (#003166)
- Primary: 500 (#3395ff)
- Hover: 600 (#007aff)
- Active: 700 (#0062cc)

### Red-Orange (Creative Retail)
Tones: 50 (#fdded8) → 900 (#31120c)
- Primary: 500 (#f75c3c)
- Hover: 600 (#c64a30)
- Active: 700 (#943724)

### Teal (Health & Wellness)
Tones: 50 (#d4eded) → 900 (#041010)
- Primary: 500 (#2aa4a4)
- Hover: 600 (#196262)
- Active: 700 (#114242)

### Gold (Luxury Premium)
Tones: 50 (#fcf3e0) → 900 (#302714)
- Primary: 500 (#efc466)
- Hover: 600 (#bf9d52)
- Active: 700 (#8f763d)

### Violet (Lifestyle Cosmetics)
Tones: 50 (#e9e0ff) → 900 (#1d1433)
- Primary: 500 (#8f65ff)
- Hover: 600 (#7251cc)
- Active: 700 (#563d99)

### Dark Green (Environmental Trust)
Tones: 50 (#d5e7d9) → 900 (#091b0d)
- Primary: 500 (#2e8540)
- Hover: 600 (#256a33)
- Active: 700 (#1c5026)

**Total Accent Color Tones: 60 (10 tones × 6 families)**

---

## Token Totals

| Category | Count |
|----------|-------|
| Semantic Color Tokens | 43 |
| Spacing Tokens | 18 |
| Typography Tokens | 14 |
| Sizing Tokens | 17 |
| Border Radius Tokens | 8 |
| Border Width Tokens | 6 |
| Shadow Tokens | 10 |
| Opacity Tokens | 15 |
| Transition Tokens | 9 |
| Z-Index Tokens | 9 |
| Accent Color Families | 6 |
| Accent Color Tones | 60 |
| **TOTAL TOKENS** | **232+** |

---

## Quick Reference by Use Case

### Building a Button
```typescript
tokens.colors['action-primary']     // Background color
tokens.spacing.md                   // Padding
tokens.borderRadius.md              // Corner radius
tokens.typography.labelMd           // Text style
tokens.shadow.shadowSm              // Elevation
tokens.transition.durationQuick     // Animation
```

### Building a Card
```typescript
tokens.colors['surface-default']    // Background
tokens.shadow.shadowMd              // Elevation
tokens.spacing.lg                   // Padding
tokens.borderRadius.lg              // Corners
tokens.zIndex.zIndexBase            // Stacking
```

### Building Form Input
```typescript
tokens.colors['border-default']     // Border color
tokens.colors['text-primary']       // Text color
tokens.spacing.md                   // Padding
tokens.sizing.sizeMd                // Height
tokens.typography.bodyMd            // Font style
tokens.colors['focus-ring']         // Focus state
```

### Building Modal
```typescript
tokens.colors['overlay']            // Background overlay
tokens.colors['surface-default']    // Modal background
tokens.spacing['2xl']               // Modal padding
tokens.shadow.shadow3Xl             // Elevation
tokens.zIndex.zIndexModal           // Stacking
tokens.borderRadius['2xl']          // Corners
```

---

## Notes

- All color tokens are designed to work across all 6 brands
- Spacing values follow the 4-unit baseline (4px, 8px, 12px, etc.)
- Typography includes font-family, weight, size, and line-height
- Transition tokens are designed for smooth, accessible animations
- Z-index values provide clear stacking hierarchy
- Status colors are fixed (not brand-dependent) for clarity

---

*Last Updated: 2026-02-26*
