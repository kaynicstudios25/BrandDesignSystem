/**
 * Theme Context
 * 
 * Manages the active brand and theme mode (light/dark), applying color tokens as CSS variables
 */

import { createContext, useContext, useState, ReactNode, useEffect } from 'react';

export type BrandId = 'universal-blue' | 'red-orange' | 'teal' | 'gold' | 'violet' | 'dark-green';
export type ThemeMode = 'light' | 'dark';

interface BrandTokens {
  surfaceAction: string;
  surfaceActionHover: string;
  textAction: string;
  textActionHover: string;
  textOnAction: string;
  borderAction: string;
  borderFocus: string;
  surfaceDisabled: string;
  borderDisabled: string;
  textDisabled: string;
}

interface ThemeContextType {
  activeBrand: BrandId;
  setBrand: (brand: BrandId) => void;
  brandName: string;
  themeMode: ThemeMode;
  toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

// Brand color configurations
const brandConfigs: Record<BrandId, BrandTokens> = {
  'universal-blue': {
    surfaceAction: '#007aff',
    surfaceActionHover: '#0062cc',
    textAction: '#007aff',
    textActionHover: '#0062cc',
    textOnAction: '#ffffff',
    borderAction: '#007aff',
    borderFocus: '#007aff',
    surfaceDisabled: '#ebebeb',
    borderDisabled: '#d8d8d8',
    textDisabled: '#3b3b3b',
  },
  'red-orange': {
    surfaceAction: '#ff6b35',
    surfaceActionHover: '#e55a24',
    textAction: '#ff6b35',
    textActionHover: '#e55a24',
    textOnAction: '#ffffff',
    borderAction: '#ff6b35',
    borderFocus: '#ff6b35',
    surfaceDisabled: '#ebebeb',
    borderDisabled: '#d8d8d8',
    textDisabled: '#3b3b3b',
  },
  'teal': {
    surfaceAction: '#1abc9c',
    surfaceActionHover: '#16a085',
    textAction: '#1abc9c',
    textActionHover: '#16a085',
    textOnAction: '#ffffff',
    borderAction: '#1abc9c',
    borderFocus: '#1abc9c',
    surfaceDisabled: '#ebebeb',
    borderDisabled: '#d8d8d8',
    textDisabled: '#3b3b3b',
  },
  'gold': {
    surfaceAction: '#d4af37',
    surfaceActionHover: '#c9a227',
    textAction: '#d4af37',
    textActionHover: '#c9a227',
    textOnAction: '#1a1a1a',
    borderAction: '#d4af37',
    borderFocus: '#d4af37',
    surfaceDisabled: '#ebebeb',
    borderDisabled: '#d8d8d8',
    textDisabled: '#3b3b3b',
  },
  'violet': {
    surfaceAction: '#9b59b6',
    surfaceActionHover: '#8e44ad',
    textAction: '#9b59b6',
    textActionHover: '#8e44ad',
    textOnAction: '#ffffff',
    borderAction: '#9b59b6',
    borderFocus: '#9b59b6',
    surfaceDisabled: '#ebebeb',
    borderDisabled: '#d8d8d8',
    textDisabled: '#3b3b3b',
  },
  'dark-green': {
    surfaceAction: '#27ae60',
    surfaceActionHover: '#229954',
    textAction: '#27ae60',
    textActionHover: '#229954',
    textOnAction: '#ffffff',
    borderAction: '#27ae60',
    borderFocus: '#27ae60',
    surfaceDisabled: '#ebebeb',
    borderDisabled: '#d8d8d8',
    textDisabled: '#3b3b3b',
  },
};

const brandNames: Record<BrandId, string> = {
  'universal-blue': 'Universal Blue (Corporate)',
  'red-orange': 'Red-Orange (Creative)',
  'teal': 'Teal (Health & Wellness)',
  'gold': 'Gold (Luxury)',
  'violet': 'Violet (Lifestyle)',
  'dark-green': 'Dark Green (Environmental)',
};

/**
 * Apply brand tokens to CSS variables
 */
function applyBrandTokens(brand: BrandId) {
  const tokens = brandConfigs[brand];
  const root = document.documentElement;

  root.style.setProperty('--surface-action', tokens.surfaceAction);
  root.style.setProperty('--surface-action-hover', tokens.surfaceActionHover);
  root.style.setProperty('--text-action', tokens.textAction);
  root.style.setProperty('--text-action-hover', tokens.textActionHover);
  root.style.setProperty('--text-on-action', tokens.textOnAction);
  root.style.setProperty('--border-action', tokens.borderAction);
  root.style.setProperty('--border-focus', tokens.borderFocus);
  root.style.setProperty('--surface-disabled', tokens.surfaceDisabled);
  root.style.setProperty('--border-disabled', tokens.borderDisabled);
  root.style.setProperty('--text-disabled', tokens.textDisabled);
}

/**
 * Apply theme mode (light/dark) tokens to CSS variables
 */
function applyThemeMode(mode: ThemeMode) {
  const root = document.documentElement;
  
  if (mode === 'dark') {
    // Dark mode colors
    root.style.setProperty('--surface-default', '#1a1a1a');
    root.style.setProperty('--surface-subtle', '#2a2a2a');
    root.style.setProperty('--surface-elevated', '#252525');
    root.style.setProperty('--text-primary', '#ffffff');
    root.style.setProperty('--text-secondary', '#b0b0b0');
    root.style.setProperty('--text-tertiary', '#808080');
    root.style.setProperty('--border-default', '#3a3a3a');
    root.style.setProperty('--border-subtle', '#2a2a2a');
    root.style.setProperty('--background-page', '#121212');
    root.style.setProperty('--icon-default', '#b0b0b0');
    root.style.setProperty('--icon-error', '#ff6b6b');
    root.style.setProperty('--text-body', '#e0e0e0');
  } else {
    // Light mode colors
    root.style.setProperty('--surface-default', '#ffffff');
    root.style.setProperty('--surface-subtle', '#f5f5f5');
    root.style.setProperty('--surface-elevated', '#ffffff');
    root.style.setProperty('--text-primary', '#000000');
    root.style.setProperty('--text-secondary', '#3b3b3b');
    root.style.setProperty('--text-tertiary', '#6e6e6e');
    root.style.setProperty('--border-default', '#e5e5e5');
    root.style.setProperty('--border-subtle', '#f0f0f0');
    root.style.setProperty('--background-page', '#fafafa');
    root.style.setProperty('--icon-default', '#666666');
    root.style.setProperty('--icon-error', '#f33333');
    root.style.setProperty('--text-body', '#2f2f2f');
  }
  
  // Set data attribute for CSS selectors
  root.setAttribute('data-theme', mode);
}

interface ThemeProviderProps {
  children: ReactNode;
  initialBrand?: BrandId;
  initialThemeMode?: ThemeMode;
}

export function ThemeProvider({ 
  children, 
  initialBrand = 'universal-blue',
  initialThemeMode = 'light'
}: ThemeProviderProps) {
  const [activeBrand, setActiveBrand] = useState<BrandId>(initialBrand);
  const [themeMode, setThemeMode] = useState<ThemeMode>(initialThemeMode);

  // Apply brand tokens when brand changes
  useEffect(() => {
    applyBrandTokens(activeBrand);
  }, [activeBrand]);

  // Apply theme mode tokens when theme mode changes
  useEffect(() => {
    applyThemeMode(themeMode);
  }, [themeMode]);

  const toggleTheme = () => {
    setThemeMode(prev => prev === 'light' ? 'dark' : 'light');
  };

  const value: ThemeContextType = {
    activeBrand,
    setBrand: setActiveBrand,
    brandName: brandNames[activeBrand],
    themeMode,
    toggleTheme,
  };

  return (
    <ThemeContext.Provider value={value}>
      {children}
    </ThemeContext.Provider>
  );
}

/**
 * Hook to use theme context
 */
export function useTheme() {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within ThemeProvider');
  }
  return context;
}
