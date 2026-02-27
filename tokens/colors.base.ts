/**
 * Base Color Tokens
 * 
 * Foundation color palette derived from the Multi-Brand Design System.
 * These are the raw color values that form the basis of all brand variations.
 * 
 * Organization:
 * - Neutral colors for the 60% foundation layer
 * - Six accent color families (each with 100-900 tonal scale) for brand swapping
 */

// ============================================================================
// NEUTRAL COLORS (60% - Foundation & Base)
// ============================================================================
export const neutralColors = {
  // Pure neutrals
  black: '#000000',
} as const;

// ============================================================================
// ACCENT COLOR FAMILIES (10% - Brand Swappable)
// Each family has a complete tonal scale from light (50/100) to dark (800/900)
// ============================================================================

/**
 * UNIVERSAL BLUE
 * Use Case: Corporate, tech, medical, professional industries
 * Characteristics: Trustworthy, stable, professional
 */
export const universalBlueColors = {
  50: '#e5f2ff',
  100: '#cce4ff',
  200: '#99caff',
  300: '#66afff',
  400: '#3395ff',
  500: '#3395ff', // Primary emphasis
  600: '#007aff',
  700: '#0062cc',
  800: '#004999',
  900: '#003166',
} as const;

/**
 * RED-ORANGE
 * Use Case: Creative, retail, marketing-focused brands
 * Characteristics: Energetic, vibrant, action-oriented
 */
export const redOrangeColors = {
  50: '#fdded8',
  100: '#fcbeb1',
  200: '#fa9d8a',
  300: '#f97d63',
  400: '#f75c3c',
  500: '#f75c3c', // Primary emphasis
  600: '#c64a30',
  700: '#943724',
  800: '#632518',
  900: '#31120c',
} as const;

/**
 * TEAL
 * Use Case: Health, education, mental wellness sectors
 * Characteristics: Calm, trustworthy, supportive
 */
export const tealColors = {
  50: '#d4eded',
  100: '#aadbdb',
  200: '#7fc8c8',
  300: '#55b6b6',
  400: '#2aa4a4',
  500: '#2aa4a4', // Primary emphasis
  600: '#196262',
  700: '#114242',
  800: '#082121',
  900: '#041010',
} as const;

/**
 * GOLD
 * Use Case: Luxury, wellness, spiritual, feminine brands
 * Characteristics: Warm, premium, sophisticated
 */
export const goldColors = {
  50: '#fcf3e0',
  100: '#f9e7c2',
  200: '#f5dca3',
  300: '#f2d085',
  400: '#efc466',
  500: '#efc466', // Primary emphasis
  600: '#bf9d52',
  700: '#8f763d',
  800: '#604e29',
  900: '#302714',
} as const;

/**
 * VIOLET / PURPLE
 * Use Case: Cosmetics, lifestyle, holistic brands
 * Characteristics: Creative, expressive, modern
 */
export const violetColors = {
  50: '#e9e0ff',
  100: '#d2c1ff',
  200: '#bca3ff',
  300: '#a584ff',
  400: '#8f65ff',
  500: '#8f65ff', // Primary emphasis
  600: '#7251cc',
  700: '#563d99',
  800: '#392866',
  900: '#1d1433',
} as const;

/**
 * DARK GREEN
 * Use Case: Environmental responsibility, calm trust, nature-focused brands
 * Characteristics: Natural, sustainable, grounded
 */
export const darkGreenColors = {
  50: '#d5e7d9',
  100: '#abceb3',
  200: '#82b68c',
  300: '#589d66',
  400: '#2e8540',
  500: '#2e8540', // Primary emphasis
  600: '#256a33',
  700: '#1c5026',
  800: '#12351a',
  900: '#091b0d',
} as const;

// ============================================================================
// COLOR FAMILY EXPORT
// Grouped by purpose for easy reference
// ============================================================================

/**
 * All accent color families available for brand selection
 */
export const accentColorFamilies = {
  universalBlue: universalBlueColors,
  redOrange: redOrangeColors,
  teal: tealColors,
  gold: goldColors,
  violet: violetColors,
  darkGreen: darkGreenColors,
} as const;

/**
 * Type definition for available accent color families
 */
export type AccentColorFamily = keyof typeof accentColorFamilies;

/**
 * Type definition for tonal scale (50-900)
 */
export type ToneScale = 50 | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900;

/**
 * Helper function to get a color value from an accent family and tone
 * @param family - The accent color family
 * @param tone - The tone scale (50-900)
 * @returns The hex color value
 */
export const getAccentColor = (
  family: AccentColorFamily,
  tone: ToneScale
): string => {
  return accentColorFamilies[family][tone];
};
