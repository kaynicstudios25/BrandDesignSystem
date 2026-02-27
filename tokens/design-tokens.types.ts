/**
 * Complete Design Token System
 * 
 * Comprehensive token types and interfaces for the entire design system.
 * Covers: colors, spacing, typography, sizing, shadows, borders, and more.
 */

import { SemanticTokenAlias } from './colors.semantic';

// ============================================================================
// SPACING TOKENS
// ============================================================================

export const spacingTokens = {
  // Micro spacing (atoms)
  xs: '4px',
  sm: '8px',
  md: '12px',
  lg: '16px',
  xl: '20px',
  '2xl': '24px',
  '3xl': '32px',
  '4xl': '40px',
  '5xl': '48px',
  '6xl': '56px',
  '7xl': '64px',
  '8xl': '80px',
  '9xl': '96px',

  // Aliases for common patterns
  gutter: '16px', // Standard horizontal padding
  stackSmall: '8px', // Small vertical spacing
  stackMedium: '16px', // Medium vertical spacing
  stackLarge: '24px', // Large vertical spacing
  stackXLarge: '32px', // Extra large vertical spacing
} as const;

export type SpacingToken = keyof typeof spacingTokens;

// ============================================================================
// TYPOGRAPHY TOKENS
// ============================================================================

export interface FontConfig {
  fontFamily: string;
  fontWeight: number;
  fontSize: string;
  lineHeight: string;
  letterSpacing?: string;
}

export const typographyTokens = {
  // Display sizes (headings)
  displayXL: {
    fontFamily: 'Inter, sans-serif',
    fontWeight: 700,
    fontSize: '48px',
    lineHeight: '56px',
  } as FontConfig,

  displayLg: {
    fontFamily: 'Inter, sans-serif',
    fontWeight: 700,
    fontSize: '40px',
    lineHeight: '48px',
  } as FontConfig,

  displayMd: {
    fontFamily: 'Inter, sans-serif',
    fontWeight: 700,
    fontSize: '32px',
    lineHeight: '40px',
  } as FontConfig,

  // Heading sizes
  headingXL: {
    fontFamily: 'Inter, sans-serif',
    fontWeight: 700,
    fontSize: '28px',
    lineHeight: '36px',
  } as FontConfig,

  headingLg: {
    fontFamily: 'Inter, sans-serif',
    fontWeight: 700,
    fontSize: '24px',
    lineHeight: '32px',
  } as FontConfig,

  headingMd: {
    fontFamily: 'Inter, sans-serif',
    fontWeight: 700,
    fontSize: '20px',
    lineHeight: '28px',
  } as FontConfig,

  headingSm: {
    fontFamily: 'Inter, sans-serif',
    fontWeight: 600,
    fontSize: '16px',
    lineHeight: '24px',
  } as FontConfig,

  headingXs: {
    fontFamily: 'Inter, sans-serif',
    fontWeight: 600,
    fontSize: '14px',
    lineHeight: '20px',
  } as FontConfig,

  // Body text sizes
  bodyLg: {
    fontFamily: 'Inter, sans-serif',
    fontWeight: 400,
    fontSize: '16px',
    lineHeight: '24px',
  } as FontConfig,

  bodyMd: {
    fontFamily: 'Inter, sans-serif',
    fontWeight: 400,
    fontSize: '14px',
    lineHeight: '20px',
  } as FontConfig,

  bodySm: {
    fontFamily: 'Inter, sans-serif',
    fontWeight: 400,
    fontSize: '12px',
    lineHeight: '16px',
  } as FontConfig,

  bodyXs: {
    fontFamily: 'Inter, sans-serif',
    fontWeight: 400,
    fontSize: '11px',
    lineHeight: '14px',
  } as FontConfig,

  // Label/Caption sizes
  labelLg: {
    fontFamily: 'Inter, sans-serif',
    fontWeight: 500,
    fontSize: '14px',
    lineHeight: '20px',
  } as FontConfig,

  labelMd: {
    fontFamily: 'Inter, sans-serif',
    fontWeight: 500,
    fontSize: '12px',
    lineHeight: '16px',
  } as FontConfig,

  labelSm: {
    fontFamily: 'Inter, sans-serif',
    fontWeight: 500,
    fontSize: '11px',
    lineHeight: '14px',
  } as FontConfig,

  // Code/Mono
  monoBg: {
    fontFamily: 'Menlo, Monaco, Courier New, monospace',
    fontWeight: 400,
    fontSize: '13px',
    lineHeight: '20px',
  } as FontConfig,
} as const;

export type TypographyToken = keyof typeof typographyTokens;

// ============================================================================
// SIZING TOKENS
// ============================================================================

export const sizingTokens = {
  // Standard component sizes
  sizeXs: '24px',
  sizeSm: '32px',
  sizeMd: '40px',
  sizeLg: '48px',
  sizeXl: '56px',
  size2Xl: '64px',

  // Common container widths
  containerSm: '640px',
  containerMd: '768px',
  containerLg: '1024px',
  containerXl: '1280px',
  container2Xl: '1536px',

  // Icon sizes
  iconXs: '12px',
  iconSm: '16px',
  iconMd: '24px',
  iconLg: '32px',
  iconXl: '48px',
  icon2Xl: '64px',
} as const;

export type SizingToken = keyof typeof sizingTokens;

// ============================================================================
// BORDER RADIUS TOKENS
// ============================================================================

export const borderRadiusTokens = {
  none: '0px',
  sm: '4px',
  md: '6px',
  lg: '8px',
  xl: '12px',
  '2xl': '16px',
  '3xl': '24px',
  full: '9999px',
} as const;

export type BorderRadiusToken = keyof typeof borderRadiusTokens;

// ============================================================================
// BORDER WIDTH TOKENS
// ============================================================================

export const borderWidthTokens = {
  none: '0px',
  xs: '1px',
  sm: '2px',
  md: '3px',
  lg: '4px',
  xl: '6px',
} as const;

export type BorderWidthToken = keyof typeof borderWidthTokens;

// ============================================================================
// SHADOW TOKENS
// ============================================================================

export const shadowTokens = {
  // Elevation shadows (depth)
  shadowNone: 'none',
  shadowXs: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
  shadowSm: '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)',
  shadowMd: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
  shadowLg: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
  shadowXl: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
  shadow2Xl: '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
  shadow3Xl: '0 35px 60px -15px rgba(0, 0, 0, 0.3)',

  // Inset shadows
  shadowInsetSm: 'inset 0 1px 2px 0 rgba(0, 0, 0, 0.05)',
  shadowInsetMd: 'inset 0 1px 3px 0 rgba(0, 0, 0, 0.1)',
} as const;

export type ShadowToken = keyof typeof shadowTokens;

// ============================================================================
// OPACITY TOKENS
// ============================================================================

export const opacityTokens = {
  opacityNone: '0',
  opacity5: '0.05',
  opacity10: '0.1',
  opacity20: '0.2',
  opacity25: '0.25',
  opacity30: '0.3',
  opacity40: '0.4',
  opacity50: '0.5',
  opacity60: '0.6',
  opacity70: '0.7',
  opacity75: '0.75',
  opacity80: '0.8',
  opacity90: '0.9',
  opacity95: '0.95',
  opacityFull: '1',
} as const;

export type OpacityToken = keyof typeof opacityTokens;

// ============================================================================
// TRANSITION & ANIMATION TOKENS
// ============================================================================

export const transitionTokens = {
  // Duration tokens
  durationFast: '75ms',
  durationQuick: '150ms',
  durationBase: '200ms',
  durationSlow: '300ms',
  durationSlower: '500ms',

  // Easing functions
  easeLinear: 'linear',
  easeIn: 'cubic-bezier(0.4, 0, 1, 1)',
  easeOut: 'cubic-bezier(0, 0, 0.2, 1)',
  easeInOut: 'cubic-bezier(0.4, 0, 0.2, 1)',
} as const;

export type TransitionDurationToken = 'durationFast' | 'durationQuick' | 'durationBase' | 'durationSlow' | 'durationSlower';
export type TransitionEasingToken = 'easeLinear' | 'easeIn' | 'easeOut' | 'easeInOut';

// ============================================================================
// Z-INDEX TOKENS
// ============================================================================

export const zIndexTokens = {
  zIndexHide: '-1',
  zIndexBase: '0',
  zIndexDropdown: '1000',
  zIndexSticky: '1020',
  zIndexFixed: '1030',
  zIndexModal: '1040',
  zIndexPopover: '1050',
  zIndexTooltip: '1060',
  zIndexNotification: '1070',
} as const;

export type ZIndexToken = keyof typeof zIndexTokens;

// ============================================================================
// COMPLETE DESIGN TOKEN BUNDLE
// ============================================================================

/**
 * Complete token set for a brand
 * Includes all token categories needed for component development
 */
export interface CompleteDesignTokens {
  // Brand-specific color aliases
  colors: SemanticTokenAlias;

  // All other design properties
  spacing: typeof spacingTokens;
  typography: typeof typographyTokens;
  sizing: typeof sizingTokens;
  borderRadius: typeof borderRadiusTokens;
  borderWidth: typeof borderWidthTokens;
  shadow: typeof shadowTokens;
  opacity: typeof opacityTokens;
  transition: typeof transitionTokens;
  zIndex: typeof zIndexTokens;
}

/**
 * Factory function to create a complete token bundle
 */
export function createCompleteTokens(
  colorTokens: SemanticTokenAlias
): CompleteDesignTokens {
  return {
    colors: colorTokens,
    spacing: spacingTokens,
    typography: typographyTokens,
    sizing: sizingTokens,
    borderRadius: borderRadiusTokens,
    borderWidth: borderWidthTokens,
    shadow: shadowTokens,
    opacity: opacityTokens,
    transition: transitionTokens,
    zIndex: zIndexTokens,
  };
}
