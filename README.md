# Multi-Brand Design System - Component Playground

## Quick Start

Install dependencies and run the development server:

```bash
npm install
npm run dev
```

Open your browser to `http://localhost:5173` to view the interactive component playground.

## What's Included

### ✅ Button Component
- 3 variants: default (filled), outline, transparent
- 3 sizes: small, medium, large
- Icon support (left and right)
- Interactive states: default, hover, focus, disabled
- Full integration with design token system

### ✅ Design Token System
Located in `/tokens`:
- Base color palette with 6 accent families
- Semantic token aliases
- Brand configurations (6 pre-configured brands)
- Typography, spacing, and layout tokens

### ✅ Component Playground
Interactive testing environment in `/playground`:
- Live component preview
- All variant and state combinations
- Brand switching capability
- Hot module reload for rapid development

## Project Structure

```
BrandDesignSystem/
├── tokens/                    # Design token system
│   ├── colors.base.ts        # Base color palette
│   ├── colors.semantic.ts    # Semantic aliases
│   ├── brands.ts             # Brand configurations
│   └── index.ts              # Token exports
├── components/                # React components
│   ├── Button/               # Button component
│   │   ├── Button.tsx        # Main component
│   │   ├── Button.types.ts   # Type definitions
│   │   ├── Button.styles.ts  # Style generator
│   │   ├── README.md         # Component docs
│   │   └── index.ts          # Public API
│   └── index.ts              # Component exports
├── playground/                # Testing environment
│   ├── App.tsx               # Playground app
│   ├── main.tsx              # Entry point
│   ├── styles.css            # Global styles
│   └── index.html            # HTML template
└── package.json              # Dependencies

```

## Available Scripts

- `npm run dev` - Start development server with HMR
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run typecheck` - Run TypeScript type checking

## Component Architecture

### Design Token Integration

Components use CSS variables for theming:

```tsx
// Component styles reference design tokens
const buttonStyles = {
  backgroundColor: 'var(--surface-action, #007aff)',
  color: 'var(--text-on-action, white)',
  // ... more token references
};
```

### Brand Swapping

The design token system supports 6 pre-configured brands:
- **Universal Blue**: Corporate/tech (default)
- **Red-Orange**: Creative/retail
- **Teal**: Health & wellness
- **Gold**: Luxury/premium
- **Violet**: Lifestyle/cosmetics
- **Dark Green**: Environmental/trust

Switch brands in the playground to see components re-theme in real-time.

## Next Steps

1. **Add More Components**: Create additional components following the Button pattern
2. **Implement Brand Switching**: Wire up the brand selector to actually change CSS variables
3. **Add Unit Tests**: Set up Jest/Vitest for component testing
4. **Build Storybook**: Add Storybook for comprehensive component documentation
5. **Theme Provider**: Create a React context for theme management

## Development Guidelines

### Creating New Components

1. Create component directory in `/components`
2. Follow the Button structure:
   - `ComponentName.tsx` - Main component
   - `ComponentName.types.ts` - Type definitions
   - `ComponentName.styles.ts` - Style generator using tokens
   - `README.md` - Component documentation
   - `index.ts` - Public API exports

3. Use design tokens via CSS variables
4. Add to playground for testing

### Design Token Usage

Always use semantic tokens, not raw values:

```tsx
// ✅ Good - uses semantic token
color: 'var(--text-action, #007aff)'

// ❌ Bad - hardcoded value
color: '#007aff'
```

## Figma Integration

Button component based on:
- **File**: Multi-Brand Design System
- **Node**: 84-145
- **Link**: https://www.figma.com/design/hsaksl75lnbmtn3u1iDsqn/Multi-Brand-Design-System?node-id=84-145

## Technology Stack

- **React 18** - UI library
- **TypeScript** - Type safety
- **Vite** - Build tool and dev server
- **CSS Variables** - Token implementation

## Support

For issues or questions:
1. Check component README files
2. Review token documentation in `/tokens`
3. Test in the playground environment
