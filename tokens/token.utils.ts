/**
 * Token Utilities
 * 
 * Helper functions and utilities for working with design tokens.
 */

import { CompleteDesignTokens } from './design-tokens.types';
import { SemanticTokenAlias } from './colors.semantic';
import { BrandId, getBrand } from './brands';

// ============================================================================
// TOKEN VALUE RESOLUTION
// ============================================================================

/**
 * Type for token path (e.g., "colors.action-primary" or "spacing.md")
 */
export type TokenPath = string;

/**
 * Get a token value using a path string
 * @param tokens - Complete token bundle
 * @param path - Dot-separated path to token (e.g., "colors.action-primary")
 * @returns The token value
 */
export function getTokenValue(
  tokens: CompleteDesignTokens,
  path: TokenPath
): string | number | undefined {
  const parts = path.split('.');
  let current: any = tokens;

  for (const part of parts) {
    current = current[part];
    if (current === undefined) {
      console.warn(`Token not found: ${path}`);
      return undefined;
    }
  }

  return current;
}

/**
 * Get a color token value by semantic name
 * @param tokens - Token bundle
 * @param colorName - Semantic color name (e.g., "action-primary")
 * @returns The hex color value
 */
export function getColorToken(
  tokens: CompleteDesignTokens,
  colorName: keyof SemanticTokenAlias
): string {
  return tokens.colors[colorName] as string;
}

/**
 * Get a spacing token value
 * @param tokens - Token bundle
 * @param spacingName - Spacing token name (e.g., "md", "lg")
 * @returns The spacing value
 */
export function getSpacingToken(
  tokens: CompleteDesignTokens,
  spacingName: string
): string {
  return getTokenValue(tokens, `spacing.${spacingName}`) as string;
}

/**
 * React hook to use tokens (for React components)
 * @param brandId - Active brand ID
 * @returns Complete token bundle for that brand
 */
export function useTokenValue(brandId: BrandId): CompleteDesignTokens {
  const brand = getBrand(brandId);
  return {
    colors: brand.tokens,
    spacing: require('./design-tokens.types').spacingTokens,
    typography: require('./design-tokens.types').typographyTokens,
    sizing: require('./design-tokens.types').sizingTokens,
    borderRadius: require('./design-tokens.types').borderRadiusTokens,
    borderWidth: require('./design-tokens.types').borderWidthTokens,
    shadow: require('./design-tokens.types').shadowTokens,
    opacity: require('./design-tokens.types').opacityTokens,
    transition: require('./design-tokens.types').transitionTokens,
    zIndex: require('./design-tokens.types').zIndexTokens,
  };
}

// ============================================================================
// CSS GENERATION
// ============================================================================

/**
 * Generate CSS variable declarations from tokens
 * @param tokens - Complete token bundle
 * @param prefix - Optional CSS variable prefix (default: "--token-")
 * @returns CSS string with variable declarations
 */
export function createTokenCSSVariables(
  tokens: CompleteDesignTokens,
  prefix: string = '--token-'
): string {
  const lines: string[] = [];

  // Color tokens
  Object.entries(tokens.colors).forEach(([key, value]) => {
    lines.push(`${prefix}color-${kebabCase(key)}: ${value};`);
  });

  // Spacing tokens
  Object.entries(tokens.spacing).forEach(([key, value]) => {
    lines.push(`${prefix}spacing-${kebabCase(key)}: ${value};`);
  });

  // Shadow tokens
  Object.entries(tokens.shadow).forEach(([key, value]) => {
    lines.push(`${prefix}shadow-${kebabCase(key)}: ${value};`);
  });

  // Border radius tokens
  Object.entries(tokens.borderRadius).forEach(([key, value]) => {
    lines.push(`${prefix}radius-${kebabCase(key)}: ${value};`);
  });

  // Border width tokens
  Object.entries(tokens.borderWidth).forEach(([key, value]) => {
    lines.push(`${prefix}border-width-${kebabCase(key)}: ${value};`);
  });

  // Sizing tokens
  Object.entries(tokens.sizing).forEach(([key, value]) => {
    lines.push(`${prefix}size-${kebabCase(key)}: ${value};`);
  });

  // Z-index tokens
  Object.entries(tokens.zIndex).forEach(([key, value]) => {
    lines.push(`${prefix}z-${kebabCase(key)}: ${value};`);
  });

  return `:root {\n  ${lines.join('\n  ')}\n}`;
}

/**
 * Generate a CSS string for component styling
 * @param tokens - Complete token bundle
 * @param styles - Object mapping CSS properties to token paths
 * @returns CSS string
 */
export function createTokenCSS(
  tokens: CompleteDesignTokens,
  styles: Record<string, TokenPath>
): Record<string, string> {
  const result: Record<string, string> = {};

  Object.entries(styles).forEach(([prop, tokenPath]) => {
    const value = getTokenValue(tokens, tokenPath);
    if (value !== undefined) {
      result[prop] = String(value);
    }
  });

  return result;
}

// ============================================================================
// HELPER FUNCTIONS
// ============================================================================

/**
 * Convert camelCase to kebab-case
 */
function kebabCase(str: string): string {
  return str.replace(/([a-z0-9]|(?=[A-Z]))([A-Z])/g, '$1-$2').toLowerCase();
}

/**
 * Create a CSS class from tokens
 * Useful for generating scoped styles
 */
export function createTokenClass(
  tokens: CompleteDesignTokens,
  className: string,
  styles: Record<string, TokenPath>
): string {
  const cssVars: string[] = [];

  Object.entries(styles).forEach(([prop, tokenPath]) => {
    const value = getTokenValue(tokens, tokenPath);
    if (value !== undefined) {
      cssVars.push(`  --${kebabCase(prop)}: ${value};`);
    }
  });

  return `.${className} {\n${cssVars.join('\n')}\n}`;
}

// ============================================================================
// TOKEN VALIDATION
// ============================================================================

/**
 * Validate that a token exists
 */
export function tokenExists(tokens: CompleteDesignTokens, path: TokenPath): boolean {
  return getTokenValue(tokens, path) !== undefined;
}

/**
 * Get all available color tokens
 */
export function getAvailableColorTokens(tokens: CompleteDesignTokens): (keyof SemanticTokenAlias)[] {
  return Object.keys(tokens.colors) as (keyof SemanticTokenAlias)[];
}

/**
 * Get all available spacing tokens
 */
export function getAvailableSpacingTokens(): string[] {
  return Object.keys(require('./design-tokens.types').spacingTokens);
}

// ============================================================================
// DOCUMENTATION & DEBUGGING
// ============================================================================

/**
 * Log all available tokens (useful for debugging)
 */
export function debugTokens(tokens: CompleteDesignTokens): void {
  console.group('Design Tokens');

  console.group('Colors');
  Object.entries(tokens.colors).forEach(([key, value]) => {
    console.log(`${key}: ${value}`);
  });
  console.groupEnd();

  console.group('Spacing');
  Object.entries(tokens.spacing).forEach(([key, value]) => {
    console.log(`${key}: ${value}`);
  });
  console.groupEnd();

  console.groupEnd();
}

/**
 * Create a token reference guide as an object
 */
export function createTokenGuide(): {
  colors: Record<string, string>;
  spacing: Record<string, string>;
  sizing: Record<string, string>;
  shadows: Record<string, string>;
} {
  return {
    colors: {
      'action-primary': 'Primary action color (buttons, links)',
      'action-primary-hover': 'Primary action hover state',
      'action-primary-active': 'Primary action active/pressed state',
      'background-primary': 'Main page background',
      'surface-default': 'Default card/panel background',
      'text-primary': 'Primary text color',
      'text-secondary': 'Secondary text color',
    },
    spacing: {
      'xs': 'Extra small spacing (4px)',
      'sm': 'Small spacing (8px)',
      'md': 'Medium spacing (12px)',
      'lg': 'Large spacing (16px)',
      'xl': 'Extra large spacing (20px)',
    },
    sizing: {
      'sizeXs': 'Extra small component size (24px)',
      'sizeSm': 'Small component size (32px)',
      'sizeMd': 'Medium component size (40px)',
      'sizeLg': 'Large component size (48px)',
    },
    shadows: {
      'shadowXs': 'Extra small elevation shadow',
      'shadowSm': 'Small elevation shadow',
      'shadowMd': 'Medium elevation shadow',
      'shadowLg': 'Large elevation shadow',
    },
  };
}
