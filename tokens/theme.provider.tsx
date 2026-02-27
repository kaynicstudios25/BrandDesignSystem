/**
 * Theme Configuration & Provider Setup
 * 
 * This file provides setup patterns for using the design token system
 * in a React application with theme switching capabilities.
 */

import React, { createContext, useContext, useState, ReactNode } from 'react';
import {
  getBrand,
  BrandId,
  BrandConfig,
  createCompleteTokens,
  CompleteDesignTokens,
  spacingTokens,
  typographyTokens,
  sizingTokens,
  borderRadiusTokens,
  borderWidthTokens,
  shadowTokens,
  opacityTokens,
  transitionTokens,
  zIndexTokens,
} from './index';

// ============================================================================
// THEME CONTEXT TYPE
// ============================================================================

export interface ThemeContextType {
  // Brand management
  activeBrandId: BrandId;
  activeBrand: BrandConfig;
  setActiveBrandId: (brandId: BrandId) => void;

  // Tokens
  tokens: CompleteDesignTokens;

  // Utilities
  toggleBrand: () => void; // Cycle through brands
  availableBrands: BrandConfig[];
}

// ============================================================================
// THEME CONTEXT
// ============================================================================

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

// ============================================================================
// THEME PROVIDER
// ============================================================================

export interface ThemeProviderProps {
  children: ReactNode;
  defaultBrandId?: BrandId;
}

/**
 * ThemeProvider component
 * Wrap your entire app with this provider to enable theme switching
 * 
 * Usage:
 * ```tsx
 * <ThemeProvider defaultBrandId="corporate-tech">
 *   <App />
 * </ThemeProvider>
 * ```
 */
export function ThemeProvider({
  children,
  defaultBrandId = 'corporate-tech',
}: ThemeProviderProps): JSX.Element {
  const [activeBrandId, setActiveBrandId] = useState<BrandId>(defaultBrandId);
  const activeBrand = getBrand(activeBrandId);

  // Create complete token bundle for active brand
  const tokens = createCompleteTokens(activeBrand.tokens);

  // Get all available brands for cycling
  const allBrands = [
    getBrand('corporate-tech'),
    getBrand('creative-retail'),
    getBrand('health-wellness'),
    getBrand('luxury-premium'),
    getBrand('lifestyle-cosmetics'),
    getBrand('environmental-trust'),
  ];

  // Helper to toggle through brands
  const toggleBrand = () => {
    const currentIndex = allBrands.findIndex((b) => b.id === activeBrandId);
    const nextIndex = (currentIndex + 1) % allBrands.length;
    setActiveBrandId(allBrands[nextIndex].id);
  };

  const value: ThemeContextType = {
    activeBrandId,
    activeBrand,
    setActiveBrandId,
    tokens,
    toggleBrand,
    availableBrands: allBrands,
  };

  return (
    <ThemeContext.Provider value={value}>
      {children}
    </ThemeContext.Provider>
  );
}

// ============================================================================
// THEME HOOK
// ============================================================================

/**
 * Hook to use theme context in components
 * 
 * Usage:
 * ```tsx
 * const { tokens, activeBrand, setActiveBrandId } = useTheme();
 * ```
 */
export function useTheme(): ThemeContextType {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
}

/**
 * Hook to use just tokens from theme
 * Shorthand when you only need tokens
 */
export function useTokens(): CompleteDesignTokens {
  const { tokens } = useTheme();
  return tokens;
}

/**
 * Hook to get current brand
 */
export function useBrand(): BrandConfig {
  const { activeBrand } = useTheme();
  return activeBrand;
}

/**
 * Hook to switch brands
 */
export function useBrandSwitcher(): {
  activeBrandId: BrandId;
  setActiveBrandId: (brandId: BrandId) => void;
  toggleBrand: () => void;
  availableBrands: BrandConfig[];
} {
  const { activeBrandId, setActiveBrandId, toggleBrand, availableBrands } = useTheme();
  return { activeBrandId, setActiveBrandId, toggleBrand, availableBrands };
}

// ============================================================================
// CSS THEME APPLICATION
// ============================================================================

/**
 * Apply theme tokens as CSS variables to DOM
 * Useful for global theming without provider
 */
export function applyThemeToDom(brandId: BrandId, rootElement?: HTMLElement): void {
  const brand = getBrand(brandId);
  const root = rootElement || document.documentElement;

  // Apply color tokens
  Object.entries(brand.tokens).forEach(([key, value]) => {
    root.style.setProperty(`--color-${key}`, value);
  });

  // Apply other tokens
  Object.entries(spacingTokens).forEach(([key, value]) => {
    root.style.setProperty(`--spacing-${key}`, value);
  });

  Object.entries(shadowTokens).forEach(([key, value]) => {
    root.style.setProperty(`--shadow-${key}`, value);
  });

  Object.entries(borderRadiusTokens).forEach(([key, value]) => {
    root.style.setProperty(`--radius-${key}`, value);
  });

  Object.entries(zIndexTokens).forEach(([key, value]) => {
    root.style.setProperty(`--z-${key}`, value);
  });
}

// ============================================================================
// STYLE GENERATION FOR STYLED COMPONENTS / EMOTION / ETC
// ============================================================================

/**
 * Generate styled-components theme object
 * 
 * Usage with styled-components:
 * ```tsx
 * const theme = createStyledComponentsTheme('corporate-tech');
 * <ThemeProvider theme={theme}>
 *   <App />
 * </ThemeProvider>
 * ```
 */
export function createStyledComponentsTheme(brandId: BrandId): Record<string, any> {
  const brand = getBrand(brandId);
  const tokens = createCompleteTokens(brand.tokens);

  return {
    colors: tokens.colors,
    spacing: tokens.spacing,
    typography: tokens.typography,
    sizing: tokens.sizing,
    borderRadius: tokens.borderRadius,
    borderWidth: tokens.borderWidth,
    shadow: tokens.shadow,
    opacity: tokens.opacity,
    transition: tokens.transition,
    zIndex: tokens.zIndex,

    // Add helper functions
    get(path: string): string {
      const parts = path.split('.');
      let current: any = { colors: tokens.colors, spacing: tokens.spacing };
      for (const part of parts) {
        current = current[part];
      }
      return current;
    },
  };
}

// ============================================================================
// TAILWIND CONFIG GENERATION
// ============================================================================

/**
 * Generate Tailwind configuration object for design tokens
 * 
 * Usage in tailwind.config.js:
 * ```js
 * const { createTailwindConfig } = require('@/tokens');
 * 
 * export default {
 *   ...createTailwindConfig('corporate-tech'),
 * };
 * ```
 */
export function createTailwindConfig(brandId: BrandId): Record<string, any> {
  const brand = getBrand(brandId);
  const tokens = createCompleteTokens(brand.tokens);

  // Convert token values to Tailwind format
  const colors: Record<string, string> = {};
  Object.entries(tokens.colors).forEach(([key, value]) => {
    const kebabKey = key.replace(/([a-z0-9]|(?=[A-Z]))([A-Z])/g, '$1-$2').toLowerCase();
    colors[kebabKey] = value;
  });

  const spacing: Record<string, string> = {};
  Object.entries(tokens.spacing).forEach(([key, value]) => {
    spacing[key] = value;
  });

  return {
    theme: {
      extend: {
        colors,
        spacing,
        boxShadow: tokens.shadow,
        borderRadius: tokens.borderRadius,
        borderWidth: tokens.borderWidth,
        fontSize: tokens.typography,
        zIndex: tokens.zIndex,
      },
    },
  };
}

// ============================================================================
// USAGE EXAMPLES
// ============================================================================

/**
 * EXAMPLE 1: Using ThemeProvider with hooks
 * 
 * App.tsx:
 * ```tsx
 * function App() {
 *   return (
 *     <ThemeProvider defaultBrandId="corporate-tech">
 *       <MyComponent />
 *     </ThemeProvider>
 *   );
 * }
 * ```
 * 
 * MyComponent.tsx:
 * ```tsx
 * function MyComponent() {
 *   const { tokens, setActiveBrandId, availableBrands } = useTheme();
 *   
 *   return (
 *     <div style={{ color: tokens.colors['text-primary'] }}>
 *       <button onClick={() => setActiveBrandId('creative-retail')}>
 *         Switch Brand
 *       </button>
 *     </div>
 *   );
 * }
 * ```
 */

/**
 * EXAMPLE 2: Using CSS variables without provider
 * 
 * main.tsx:
 * ```tsx
 * import { applyThemeToDom } from '@/tokens';
 * 
 * // Apply theme on app load
 * applyThemeToDom('corporate-tech');
 * 
 * // Or switch themes dynamically
 * function switchTheme(brandId) {
 *   applyThemeToDom(brandId);
 * }
 * ```
 * 
 * styles.css:
 * ```css
 * button {
 *   background-color: var(--color-action-primary);
 *   padding: var(--spacing-md);
 * }
 * ```
 */

/**
 * EXAMPLE 3: Using with styled-components
 * 
 * theme.ts:
 * ```tsx
 * import { createStyledComponentsTheme } from '@/tokens';
 * export const theme = createStyledComponentsTheme('corporate-tech');
 * ```
 * 
 * App.tsx:
 * ```tsx
 * import { ThemeProvider } from 'styled-components';
 * import { theme } from './theme';
 * 
 * function App() {
 *   return (
 *     <ThemeProvider theme={theme}>
 *       <MyComponent />
 *     </ThemeProvider>
 *   );
 * }
 * ```
 * 
 * MyComponent.tsx:
 * ```tsx
 * import styled from 'styled-components';
 * 
 * const Button = styled.button`
 *   background-color: ${(props) => props.theme.colors['action-primary']};
 *   padding: ${(props) => props.theme.spacing.md};
 * `;
 * ```
 */

/**
 * EXAMPLE 4: Using with Tailwind CSS
 * 
 * tailwind.config.js:
 * ```js
 * const { createTailwindConfig } = require('@/tokens');
 * const baseConfig = createTailwindConfig('corporate-tech');
 * 
 * export default {
 *   ...baseConfig,
 *   content: ['./src/**/*.{tsx,ts}'],
 * };
 * ```
 * 
 * MyComponent.tsx:
 * ```tsx
 * function MyComponent() {
 *   return (
 *     <button className="bg-action-primary text-text-primary px-md py-md">
 *       Click me
 *     </button>
 *   );
 * }
 * ```
 */
