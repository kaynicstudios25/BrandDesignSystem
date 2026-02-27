/**
 * Semantic Token Aliases
 * 
 * These tokens provide semantic meaning to colors based on their purpose
 * and follow the 60/30/10 design principle:
 * 
 * - 60% Primary Layer: Neutral foundation (backgrounds, cards, layouts)
 * - 30% Secondary Layer: Supporting colors (structure, typography, depth)
 * - 10% Accent Layer: Brand differentiation (interactive, CTAs, emphasis)
 * 
 * Components should use these tokens instead of raw color values.
 */

import { ToneScale, AccentColorFamily } from './colors.base';

// ============================================================================
// SEMANTIC TOKEN TYPES
// ============================================================================

/**
 * Semantic Token Alias - Maps purpose to actual color values
 */
export interface SemanticTokenAlias {
  // Primary Layer (60%) - Foundation & Neutrals
  'background-primary': string;
  'background-secondary': string;
  'surface-default': string;
  'surface-subtle': string;

  // Secondary Layer (30%) - Structure, Typography, Depth
  'text-primary': string;
  'text-secondary': string;
  'text-tertiary': string;
  'text-disabled': string;
  'divider': string;
  'border-subtle': string;
  'border-default': string;

  // Accent Layer (10%) - Brand differentiation
  'action-primary': string;
  'action-primary-hover': string;
  'action-primary-active': string;
  'action-primary-disabled': string;
  'action-secondary': string;
  'action-secondary-hover': string;
  'action-secondary-active': string;
  'action-secondary-disabled': string;

  // Status & Feedback
  'status-success': string;
  'status-success-bg': string;
  'status-error': string;
  'status-error-bg': string;
  'status-warning': string;
  'status-warning-bg': string;
  'status-info': string;
  'status-info-bg': string;

  // Interactive & Focus
  'focus-ring': string;
  'focus-ring-offset': string;
  'overlay': string;

  // Brand Accent Tints (for secondary backgrounds)
  'accent-background-light': string;
  'accent-background-lighter': string;
}

// ============================================================================
// TOKEN RESOLUTION FACTORY
// ============================================================================

/**
 * Factory function to create semantic aliases based on:
 * 1. Neutral palette (for primary/secondary layers)
 * 2. Selected accent family (for accent layer)
 * 
 * This enables brand switching by changing the accent family.
 */
export function createSemanticTokens(
  accentFamily: AccentColorFamily
): SemanticTokenAlias {
  return {
    // ========================================================================
    // PRIMARY LAYER (60%) - NEUTRAL FOUNDATION
    // ========================================================================
    'background-primary': '#ffffff', // Pure white for default backgrounds
    'background-secondary': '#f5f5f5', // Light gray for secondary areas
    'surface-default': '#fafafa', // Off-white for cards, panels
    'surface-subtle': '#f0f0f0', // Subtle background distinction

    // ========================================================================
    // SECONDARY LAYER (30%) - STRUCTURE & TYPOGRAPHY
    // ========================================================================
    'text-primary': '#000000', // Black for primary text
    'text-secondary': '#666666', // Medium gray for secondary text
    'text-tertiary': '#999999', // Light gray for tertiary text
    'text-disabled': '#cccccc', // Very light gray for disabled text
    'divider': '#e5e5e5', // Light gray for dividers
    'border-subtle': '#f0f0f0', // Very light border
    'border-default': '#e0e0e0', // Standard border color

    // ========================================================================
    // ACCENT LAYER (10%) - BRAND SWAPPABLE
    // Maps to selected accent family at different tone scales
    // ========================================================================
    'action-primary': getAccentColorByFamily(accentFamily, 500),
    'action-primary-hover': getAccentColorByFamily(accentFamily, 600),
    'action-primary-active': getAccentColorByFamily(accentFamily, 700),
    'action-primary-disabled': getAccentColorByFamily(accentFamily, 200),

    'action-secondary': getAccentColorByFamily(accentFamily, 100),
    'action-secondary-hover': getAccentColorByFamily(accentFamily, 200),
    'action-secondary-active': getAccentColorByFamily(accentFamily, 300),
    'action-secondary-disabled': getAccentColorByFamily(accentFamily, 50),

    // ========================================================================
    // STATUS & FEEDBACK COLORS
    // Note: These use dedicated colors, not the brand accent
    // ========================================================================
    'status-success': '#22c55e', // Green for success
    'status-success-bg': '#f0fdf4', // Green background
    'status-error': '#ef4444', // Red for error
    'status-error-bg': '#fef2f2', // Red background
    'status-warning': '#eab308', // Yellow for warning
    'status-warning-bg': '#fefce8', // Yellow background
    'status-info': '#3b82f6', // Blue for info
    'status-info-bg': '#eff6ff', // Blue background

    // ========================================================================
    // INTERACTIVE & FOCUS STATES
    // ========================================================================
    'focus-ring': getAccentColorByFamily(accentFamily, 500),
    'focus-ring-offset': '#ffffff',
    'overlay': 'rgba(0, 0, 0, 0.5)', // Semi-transparent overlay

    // ========================================================================
    // BRAND ACCENT TINTS (for secondary backgrounds & accents)
    // ========================================================================
    'accent-background-light': getAccentColorByFamily(accentFamily, 100),
    'accent-background-lighter': getAccentColorByFamily(accentFamily, 50),
  };
}

// ============================================================================
// HELPER FUNCTION
// ============================================================================

/**
 * Maps accent color families to their semantic names
 * Returns the color value for the specified tone
 */
function getAccentColorByFamily(family: AccentColorFamily, tone: ToneScale): string {
  const colorMap: Record<AccentColorFamily, Record<ToneScale, string>> = {
    universalBlue: {
      50: '#e5f2ff',
      100: '#cce4ff',
      200: '#99caff',
      300: '#66afff',
      400: '#3395ff',
      500: '#3395ff',
      600: '#007aff',
      700: '#0062cc',
      800: '#004999',
      900: '#003166',
    },
    redOrange: {
      50: '#fdded8',
      100: '#fcbeb1',
      200: '#fa9d8a',
      300: '#f97d63',
      400: '#f75c3c',
      500: '#f75c3c',
      600: '#c64a30',
      700: '#943724',
      800: '#632518',
      900: '#31120c',
    },
    teal: {
      50: '#d4eded',
      100: '#aadbdb',
      200: '#7fc8c8',
      300: '#55b6b6',
      400: '#2aa4a4',
      500: '#2aa4a4',
      600: '#196262',
      700: '#114242',
      800: '#082121',
      900: '#041010',
    },
    gold: {
      50: '#fcf3e0',
      100: '#f9e7c2',
      200: '#f5dca3',
      300: '#f2d085',
      400: '#efc466',
      500: '#efc466',
      600: '#bf9d52',
      700: '#8f763d',
      800: '#604e29',
      900: '#302714',
    },
    violet: {
      50: '#e9e0ff',
      100: '#d2c1ff',
      200: '#bca3ff',
      300: '#a584ff',
      400: '#8f65ff',
      500: '#8f65ff',
      600: '#7251cc',
      700: '#563d99',
      800: '#392866',
      900: '#1d1433',
    },
    darkGreen: {
      50: '#d5e7d9',
      100: '#abceb3',
      200: '#82b68c',
      300: '#589d66',
      400: '#2e8540',
      500: '#2e8540',
      600: '#256a33',
      700: '#1c5026',
      800: '#12351a',
      900: '#091b0d',
    },
  };

  return colorMap[family][tone];
}

// ============================================================================
// SEMANTIC TOKEN DESCRIPTIONS
// ============================================================================

/**
 * Token Usage Guide
 * 
 * PRIMARY LAYER (60%) - Foundation & Neutrals
 * - background-primary: Main page background, large surfaces
 * - background-secondary: Secondary page areas, sections
 * - surface-default: Cards, modals, panels, containers
 * - surface-subtle: Subtle container distinction, light backgrounds
 * 
 * SECONDARY LAYER (30%) - Structure, Typography & Depth
 * - text-primary: Headings, main body text
 * - text-secondary: Support text, captions, descriptions
 * - text-tertiary: Very light text, hints, placeholders
 * - text-disabled: Disabled input text
 * - divider: Visual separators between sections
 * - border-subtle: Light borders, minimalist designs
 * - border-default: Standard borders for inputs, containers
 * 
 * ACCENT LAYER (10%) - Brand Differentiation
 * - action-primary: Primary buttons, main CTAs
 * - action-primary-hover: Primary button hover state
 * - action-primary-active: Primary button active/pressed state
 * - action-primary-disabled: Primary button disabled state
 * - action-secondary: Secondary buttons, tertiary CTAs
 * - action-secondary-hover: Secondary button hover state
 * - action-secondary-active: Secondary button active state
 * - action-secondary-disabled: Secondary button disabled state
 * 
 * STATUS & FEEDBACK
 * - status-success: Success message text color
 * - status-success-bg: Success message background
 * - status-error: Error message text color
 * - status-error-bg: Error message background
 * - status-warning: Warning message text color
 * - status-warning-bg: Warning message background
 * - status-info: Info message text color
 * - status-info-bg: Info message background
 * 
 * INTERACTIVE & FOCUS
 * - focus-ring: Focus ring color for accessibility
 * - focus-ring-offset: Background of focus ring
 * - overlay: Modal overlays, backdrop colors
 * 
 * BRAND ACCENT TINTS
 * - accent-background-light: Light tinted background using brand accent
 * - accent-background-lighter: Very light tinted background
 */
