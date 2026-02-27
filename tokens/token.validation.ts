/**
 * TOKEN VALIDATION & VERIFICATION CHECKLIST
 * 
 * This file verifies that the design token system is set up correctly
 * and provides diagnostic information.
 */

import {
  neutralColors,
  universalBlueColors,
  redOrangeColors,
  tealColors,
  goldColors,
  violetColors,
  darkGreenColors,
  accentColorFamilies,
  getAccentColor,
} from './colors.base';

import {
  createSemanticTokens,
  type SemanticTokenAlias,
} from './colors.semantic';

import {
  CorporateTechBrand,
  CreativeRetailBrand,
  HealthWellnessBrand,
  LuxuryPremiumBrand,
  LifestyleCosmeticsBrand,
  EnvironmentalTrustBrand,
  brandRegistry,
  getBrand,
  getAllBrands,
} from './brands';

import {
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
} from './design-tokens.types';

// ============================================================================
// VALIDATION RESULTS
// ============================================================================

export interface ValidationResult {
  name: string;
  status: 'pass' | 'fail' | 'warning';
  message: string;
  details?: string[];
}

export interface ValidationReport {
  timestamp: string;
  totalChecks: number;
  passed: number;
  failed: number;
  warnings: number;
  results: ValidationResult[];
}

// ============================================================================
// VALIDATION FUNCTIONS
// ============================================================================

/**
 * Validate base color tokens
 */
function validateBaseColors(): ValidationResult[] {
  const results: ValidationResult[] = [];

  // Check neutral colors
  const neutralCheck: ValidationResult = {
    name: 'Neutral Colors',
    status: 'pass',
    message: 'Neutral colors defined',
    details: Object.entries(neutralColors).map(([key, value]) => `${key}: ${value}`),
  };
  results.push(neutralCheck);

  // Check all accent color families
  const accentFamilies = Object.keys(accentColorFamilies);
  const expectedFamilies = 6; // blue, red-orange, teal, gold, violet, green

  if (accentFamilies.length === expectedFamilies) {
    results.push({
      name: 'Accent Color Families',
      status: 'pass',
      message: `All ${expectedFamilies} accent color families defined`,
      details: accentFamilies,
    });
  } else {
    results.push({
      name: 'Accent Color Families',
      status: 'fail',
      message: `Expected ${expectedFamilies} families, got ${accentFamilies.length}`,
      details: accentFamilies,
    });
  }

  // Check tonal scale for each family
  const tonalScales = [50, 100, 200, 300, 400, 500, 600, 700, 800, 900];
  accentFamilies.forEach((family) => {
    const familyData = accentColorFamilies[family as keyof typeof accentColorFamilies];
    const missingTones: number[] = [];

    tonalScales.forEach((tone) => {
      if (!familyData[tone as keyof typeof familyData]) {
        missingTones.push(tone);
      }
    });

    if (missingTones.length === 0) {
      results.push({
        name: `${family} - Tonal Scale`,
        status: 'pass',
        message: 'Complete tonal scale (50-900)',
      });
    } else {
      results.push({
        name: `${family} - Tonal Scale`,
        status: 'fail',
        message: `Missing tones: ${missingTones.join(', ')}`,
      });
    }
  });

  return results;
}

/**
 * Validate semantic tokens
 */
function validateSemanticTokens(): ValidationResult[] {
  const results: ValidationResult[] = [];
  const sampleTokens = createSemanticTokens('universalBlue');

  // Required semantic color names
  const requiredTokens: (keyof SemanticTokenAlias)[] = [
    'background-primary',
    'surface-default',
    'text-primary',
    'text-secondary',
    'divider',
    'border-default',
    'action-primary',
    'action-primary-hover',
    'action-primary-active',
    'status-success',
    'status-error',
    'focus-ring',
  ];

  const missingTokens: string[] = [];
  requiredTokens.forEach((token) => {
    if (!(token in sampleTokens)) {
      missingTokens.push(token);
    }
  });

  if (missingTokens.length === 0) {
    results.push({
      name: 'Semantic Color Tokens',
      status: 'pass',
      message: `All ${requiredTokens.length} required semantic tokens defined`,
    });
  } else {
    results.push({
      name: 'Semantic Color Tokens',
      status: 'fail',
      message: `Missing tokens: ${missingTokens.join(', ')}`,
    });
  }

  // Check that semantic tokens are strings (colors)
  const colorCheck = Object.entries(sampleTokens).every(
    ([, value]) => typeof value === 'string' && value.startsWith('#')
  );

  results.push({
    name: 'Semantic Token Format',
    status: colorCheck ? 'pass' : 'fail',
    message: colorCheck
      ? 'All semantic tokens are hex color values'
      : 'Some tokens are not valid hex colors',
  });

  return results;
}

/**
 * Validate brands
 */
function validateBrands(): ValidationResult[] {
  const results: ValidationResult[] = [];

  const allBrands = getAllBrands();
  const expectedBrands = 6;

  if (allBrands.length === expectedBrands) {
    results.push({
      name: 'Brand Count',
      status: 'pass',
      message: `All ${expectedBrands} brands registered`,
      details: allBrands.map((b) => b.id),
    });
  } else {
    results.push({
      name: 'Brand Count',
      status: 'fail',
      message: `Expected ${expectedBrands} brands, found ${allBrands.length}`,
    });
  }

  // Verify each brand has required properties
  allBrands.forEach((brand) => {
    const hasRequiredProps =
      brand.name &&
      brand.id &&
      brand.accentFamily &&
      brand.description &&
      brand.industries &&
      brand.tokens;

    results.push({
      name: `Brand: ${brand.name}`,
      status: hasRequiredProps ? 'pass' : 'fail',
      message: hasRequiredProps
        ? `All required properties present`
        : 'Missing required properties',
    });
  });

  return results;
}

/**
 * Validate design system tokens
 */
function validateDesignSystemTokens(): ValidationResult[] {
  const results: ValidationResult[] = [];

  const tokenCategories = [
    { name: 'Spacing', tokens: spacingTokens, minCount: 10 },
    { name: 'Typography', tokens: typographyTokens, minCount: 12 },
    { name: 'Sizing', tokens: sizingTokens, minCount: 10 },
    { name: 'Border Radius', tokens: borderRadiusTokens, minCount: 8 },
    { name: 'Border Width', tokens: borderWidthTokens, minCount: 6 },
    { name: 'Shadow', tokens: shadowTokens, minCount: 8 },
    { name: 'Opacity', tokens: opacityTokens, minCount: 10 },
    { name: 'Transition', tokens: transitionTokens, minCount: 8 },
    { name: 'Z-Index', tokens: zIndexTokens, minCount: 8 },
  ];

  tokenCategories.forEach(({ name, tokens, minCount }) => {
    const count = Object.keys(tokens).length;
    const status = count >= minCount ? 'pass' : 'fail';

    results.push({
      name: `${name} Tokens`,
      status,
      message:
        status === 'pass'
          ? `${count} tokens defined (≥ ${minCount})`
          : `Only ${count} tokens, expected ≥ ${minCount}`,
    });
  });

  return results;
}

/**
 * Validate brand switching
 */
function validateBrandSwitching(): ValidationResult[] {
  const results: ValidationResult[] = [];

  try {
    // Test getting different brands
    const corporate = getBrand('corporate-tech');
    const creative = getBrand('creative-retail');

    if (corporate.accentFamily === 'universalBlue') {
      results.push({
        name: 'Corporate Tech Brand',
        status: 'pass',
        message: 'Uses universalBlue accent family',
      });
    } else {
      results.push({
        name: 'Corporate Tech Brand',
        status: 'fail',
        message: `Expected universalBlue, got ${corporate.accentFamily}`,
      });
    }

    if (creative.accentFamily === 'redOrange') {
      results.push({
        name: 'Creative Retail Brand',
        status: 'pass',
        message: 'Uses redOrange accent family',
      });
    } else {
      results.push({
        name: 'Creative Retail Brand',
        status: 'fail',
        message: `Expected redOrange, got ${creative.accentFamily}`,
      });
    }

    // Verify that different brands have different accent colors
    const corpColor = corporate.tokens['action-primary'];
    const creativColor = creative.tokens['action-primary'];

    if (corpColor !== creativColor) {
      results.push({
        name: 'Brand Token Differentiation',
        status: 'pass',
        message: 'Different brands have different accent colors',
        details: [
          `Corporate: ${corpColor}`,
          `Creative: ${creativColor}`,
        ],
      });
    } else {
      results.push({
        name: 'Brand Token Differentiation',
        status: 'fail',
        message: 'Different brands have same accent colors',
      });
    }
  } catch (error) {
    results.push({
      name: 'Brand Switching',
      status: 'fail',
      message: `Error switching brands: ${error}`,
    });
  }

  return results;
}

/**
 * Validate color accessibility
 */
function validateAccessibility(): ValidationResult[] {
  const results: ValidationResult[] = [];

  // Basic accessibility checks
  results.push({
    name: 'Contrast Ratios',
    status: 'warning',
    message: 'Manual verification needed: Ensure 4.5:1 WCAG AA contrast for text colors',
    details: [
      'text-primary should have 4.5:1 contrast with backgrounds',
      'text-secondary should have 3:1 contrast minimum',
      'Status colors should meet WCAG AA standards',
    ],
  });

  results.push({
    name: 'Color Blindness',
    status: 'warning',
    message: 'Verify design tokens work for colorblind users',
    details: [
      'Red-green colorblind: Check red-orange palette',
      'Blue-yellow colorblind: Check all palettes',
      'Grayscale: Ensure success/error distinction beyond color',
    ],
  });

  return results;
}

// ============================================================================
// MAIN VALIDATION FUNCTION
// ============================================================================

/**
 * Run all validations and generate report
 */
export function validateTokenSystem(): ValidationReport {
  const allResults: ValidationResult[] = [
    ...validateBaseColors(),
    ...validateSemanticTokens(),
    ...validateBrands(),
    ...validateDesignSystemTokens(),
    ...validateBrandSwitching(),
    ...validateAccessibility(),
  ];

  const passed = allResults.filter((r) => r.status === 'pass').length;
  const failed = allResults.filter((r) => r.status === 'fail').length;
  const warnings = allResults.filter((r) => r.status === 'warning').length;

  return {
    timestamp: new Date().toISOString(),
    totalChecks: allResults.length,
    passed,
    failed,
    warnings,
    results: allResults,
  };
}

/**
 * Print validation report to console
 */
export function printValidationReport(report: ValidationReport): void {
  console.group('🎨 Design Token System Validation');
  console.log(`Timestamp: ${report.timestamp}`);
  console.log(`Total Checks: ${report.totalChecks}`);
  console.log(`✅ Passed: ${report.passed}`);
  console.log(`❌ Failed: ${report.failed}`);
  console.log(`⚠️  Warnings: ${report.warnings}`);
  console.groupEnd();

  console.group('Results');
  report.results.forEach((result) => {
    const icon =
      result.status === 'pass' ? '✅' : result.status === 'fail' ? '❌' : '⚠️ ';
    console.group(`${icon} ${result.name}`);
    console.log(result.message);
    if (result.details) {
      console.table(result.details);
    }
    console.groupEnd();
  });
  console.groupEnd();

  if (report.failed === 0) {
    console.log('%c✨ All critical checks passed! ✨', 'color: green; font-size: 16px; font-weight: bold;');
  } else {
    console.log(
      `%c⚠️  ${report.failed} checks failed ⚠️ `,
      'color: red; font-size: 16px; font-weight: bold;'
    );
  }
}

// ============================================================================
// AUTO VALIDATION ON MODULE LOAD
// ============================================================================

/**
 * Automatically validate on development
 * Comment out for production
 */
if (process.env.NODE_ENV === 'development') {
  try {
    const report = validateTokenSystem();
    if (report.failed === 0) {
      console.log('✅ Design token system validated successfully');
    } else {
      console.warn(
        `⚠️  Design token validation found ${report.failed} issues`
      );
      printValidationReport(report);
    }
  } catch (error) {
    console.error('Failed to validate design tokens:', error);
  }
}

// ============================================================================
// EXPORT FOR TESTING
// ============================================================================

export {
  validateBaseColors,
  validateSemanticTokens,
  validateBrands,
  validateDesignSystemTokens,
  validateBrandSwitching,
  validateAccessibility,
};
