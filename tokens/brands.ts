/**
 * Brand-Specific Token Sets
 * 
 * These define complete token sets for different brands,
 * each using the same semantic structure but with different accent colors.
 * 
 * Each brand can be easily swapped by changing the active brand reference.
 */

import { createSemanticTokens, SemanticTokenAlias, AccentColorFamily } from './colors.semantic';

// ============================================================================
// BRAND DEFINITIONS
// ============================================================================

/**
 * Brand Configuration
 */
export interface BrandConfig {
  name: string;
  id: string;
  accentFamily: AccentColorFamily;
  description: string;
  industries: string[];
  tokens: SemanticTokenAlias;
}

/**
 * CORPORATE TECH BRAND
 * Uses Universal Blue accent family
 * Industries: Technology, Finance, Healthcare, B2B SaaS
 */
export const CorporateTechBrand: BrandConfig = {
  name: 'Corporate Tech',
  id: 'corporate-tech',
  accentFamily: 'universalBlue',
  description: 'Professional, trustworthy, stable brand identity',
  industries: ['Technology', 'Finance', 'Healthcare', 'Professional Services'],
  tokens: createSemanticTokens('universalBlue'),
};

/**
 * CREATIVE RETAIL BRAND
 * Uses Red-Orange accent family
 * Industries: Retail, Marketing, Creative, Fashion
 */
export const CreativeRetailBrand: BrandConfig = {
  name: 'Creative Retail',
  id: 'creative-retail',
  accentFamily: 'redOrange',
  description: 'Energetic, vibrant, action-oriented brand identity',
  industries: ['Retail', 'Marketing', 'Creative', 'Fashion'],
  tokens: createSemanticTokens('redOrange'),
};

/**
 * HEALTH & WELLNESS BRAND
 * Uses Teal accent family
 * Industries: Healthcare, Education, Mental Wellness, Lifestyle
 */
export const HealthWellnessBrand: BrandConfig = {
  name: 'Health & Wellness',
  id: 'health-wellness',
  accentFamily: 'teal',
  description: 'Calm, trustworthy, supportive brand identity',
  industries: ['Healthcare', 'Education', 'Mental Wellness', 'Fitness'],
  tokens: createSemanticTokens('teal'),
};

/**
 * LUXURY PREMIUM BRAND
 * Uses Gold accent family
 * Industries: Luxury, Wellness, Jewelry, Hospitality
 */
export const LuxuryPremiumBrand: BrandConfig = {
  name: 'Luxury Premium',
  id: 'luxury-premium',
  accentFamily: 'gold',
  description: 'Warm, premium, sophisticated brand identity',
  industries: ['Luxury', 'Wellness', 'Hospitality', 'Beauty'],
  tokens: createSemanticTokens('gold'),
};

/**
 * LIFESTYLE COSMETICS BRAND
 * Uses Violet accent family
 * Industries: Cosmetics, Beauty, Lifestyle, Fashion
 */
export const LifestyleCosmeticsBrand: BrandConfig = {
  name: 'Lifestyle Cosmetics',
  id: 'lifestyle-cosmetics',
  accentFamily: 'violet',
  description: 'Creative, expressive, modern brand identity',
  industries: ['Cosmetics', 'Beauty', 'Lifestyle', 'Fashion'],
  tokens: createSemanticTokens('violet'),
};

/**
 * ENVIRONMENTAL TRUST BRAND
 * Uses Dark Green accent family
 * Industries: Environment, Sustainability, Nature, Wellness
 */
export const EnvironmentalTrustBrand: BrandConfig = {
  name: 'Environmental Trust',
  id: 'environmental-trust',
  accentFamily: 'darkGreen',
  description: 'Natural, sustainable, grounded brand identity',
  industries: ['Environment', 'Sustainability', 'Agriculture', 'Wellness'],
  tokens: createSemanticTokens('darkGreen'),
};

// ============================================================================
// BRAND REGISTRY
// ============================================================================

export const brandRegistry = {
  'corporate-tech': CorporateTechBrand,
  'creative-retail': CreativeRetailBrand,
  'health-wellness': HealthWellnessBrand,
  'luxury-premium': LuxuryPremiumBrand,
  'lifestyle-cosmetics': LifestyleCosmeticsBrand,
  'environmental-trust': EnvironmentalTrustBrand,
} as const;

export type BrandId = keyof typeof brandRegistry;

/**
 * Get brand configuration by ID
 */
export function getBrand(brandId: BrandId): BrandConfig {
  return brandRegistry[brandId];
}

/**
 * Get all available brands
 */
export function getAllBrands(): BrandConfig[] {
  return Object.values(brandRegistry);
}

// ============================================================================
// BRAND CONTEXT TYPE (for React Context/Providers)
// ============================================================================

/**
 * Brand context that should be used throughout the application
 */
export interface BrandContext {
  activeBrand: BrandConfig;
  brandId: BrandId;
  setActiveBrand: (brandId: BrandId) => void;
  tokens: SemanticTokenAlias;
}

// ============================================================================
// QUICK REFERENCE DOCUMENTATION
// ============================================================================

/**
 * BRAND SELECTION GUIDE
 * 
 * When building a product, select a brand based on:
 * 
 * 1. CORPORATE TECH
 *    - Professional services, B2B SaaS, fintech
 *    - Color: Blue (trustworthy, stable)
 *    - Use when: You need corporate credibility
 * 
 * 2. CREATIVE RETAIL
 *    - E-commerce, marketing agencies, fashion
 *    - Color: Red-Orange (energetic, action-oriented)
 *    - Use when: You need to drive engagement and sales
 * 
 * 3. HEALTH & WELLNESS
 *    - Healthcare, education, fitness apps
 *    - Color: Teal (calm, supportive)
 *    - Use when: You need to convey care and trust
 * 
 * 4. LUXURY PREMIUM
 *    - High-end products, luxury hospitality
 *    - Color: Gold (warm, sophisticated)
 *    - Use when: You need to convey exclusivity
 * 
 * 5. LIFESTYLE COSMETICS
 *    - Beauty brands, lifestyle products
 *    - Color: Violet (creative, expressive)
 *    - Use when: You need modern, trendy identity
 * 
 * 6. ENVIRONMENTAL TRUST
 *    - Sustainability, agriculture, eco-products
 *    - Color: Dark Green (natural, grounded)
 *    - Use when: You need to convey environmental responsibility
 * 
 * HOW TO SWITCH BRANDS
 * The beauty of this system is that switching brands requires changing
 * only the active brand ID. All components automatically update their colors
 * because they reference semantic tokens, which are derived from the
 * brand's accent color family.
 * 
 * Example:
 * 1. Change activeBrand from 'corporate-tech' to 'creative-retail'
 * 2. All buttons, links, and accent elements automatically turn red-orange
 * 3. No component code needs to change
 * 4. Visual consistency is maintained across the entire product
 */
