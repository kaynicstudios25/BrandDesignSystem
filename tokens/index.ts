/**
 * Design Tokens - Main Export
 * 
 * Central export point for all design tokens.
 * This file organizes and re-exports tokens from individual files.
 */

// Color bases
export {
  neutralColors,
  universalBlueColors,
  redOrangeColors,
  tealColors,
  goldColors,
  violetColors,
  darkGreenColors,
  accentColorFamilies,
  getAccentColor,
  type AccentColorFamily,
  type ToneScale,
} from './colors.base';

// Semantic color aliases
export {
  createSemanticTokens,
  type SemanticTokenAlias,
} from './colors.semantic';

// Brand configurations
export {
  CorporateTechBrand,
  CreativeRetailBrand,
  HealthWellnessBrand,
  LuxuryPremiumBrand,
  LifestyleCosmeticsBrand,
  EnvironmentalTrustBrand,
  brandRegistry,
  getBrand,
  getAllBrands,
  type BrandId,
  type BrandConfig,
  type BrandContext,
} from './brands';

// Complete token system
export {
  spacingTokens,
  typographyTokens,
  sizingTokens,
  borderRadiusTokens,
  borderWidthTokens,
  shadowTokens,
  opacityTokens,
  transitionTokens,
  zIndexTokens,
  createCompleteTokens,
  type SpacingToken,
  type TypographyToken,
  type SizingToken,
  type BorderRadiusToken,
  type BorderWidthToken,
  type ShadowToken,
  type OpacityToken,
  type TransitionDurationToken,
  type TransitionEasingToken,
  type ZIndexToken,
  type CompleteDesignTokens,
  type FontConfig,
} from './design-tokens.types';

// Utilities
export {
  useTokenValue,
  getTokenValue,
  createTokenCSS,
  createTokenCSSVariables,
  type TokenPath,
} from './token.utils';

// Theme Provider & Hooks
export {
  ThemeProvider,
  useTheme,
  useTokens,
  useBrand,
  useBrandSwitcher,
  applyThemeToDom,
  createStyledComponentsTheme,
  createTailwindConfig,
  type ThemeContextType,
  type ThemeProviderProps,
} from './theme.provider';
