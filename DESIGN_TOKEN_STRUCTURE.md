# Multi-Brand Design System: Design Token Structure

## Overview
The Multi-Brand Design System is a comprehensive color palette framework designed to support multiple brand identities while maintaining visual consistency through a hierarchical variable structure. The system uses a **60/30/10 color distribution rule** to ensure brand flexibility while maintaining effective visual hierarchy.

---

## System Architecture

### Core Color Distribution Model
The design system follows the **60/30/10 Design Principle**:

| Layer | Proportion | Purpose | Usage |
|-------|-----------|---------|-------|
| **Primary (60%)** | 60% of palette | Foundation & Neutrals | Backgrounds, cards, layouts, large surfaces |
| **Secondary (30%)** | 30% of palette | Structure, Typography & Depth | Internal structure, supporting readability, tinted backgrounds |
| **Accent (10%)** | 10% of palette | Swappable per Brand | Brand differentiation, interactive elements, calls-to-action |

---

## Variable Collection Hierarchy

### 1. **Base Color Collections**
The system is built on six core color families, each with a tonal scale ranging from 100 (lightest) to 900 (darkest):

#### Universal Base Colors (Neutral & Primary)
- **neutral/black**: `#000000` - Neutral black

#### Accent Color Collections (Brand-Swappable)

##### Universal Blue Collection
- Tonal range: blue/50 through blue/800
- **Use Case**: Corporate, tech, medical, professional industries
- **Primary tones**:
  - blue/50: `#e5f2ff` (lightest)
  - blue/500: `#3395ff` (primary emphasis)
  - blue/900: `#003166` (darkest)

##### Red-Orange Collection
- Tonal range: red-orange/50 through red-orange/800
- **Use Case**: Creative, retail, marketing-focused brands
- **Primary tones**:
  - red-orange/50: `#fdded8` (lightest)
  - red-orange/500: `#f75c3c` (primary emphasis)
  - red-orange/800: `#31120c` (darkest)

##### Teal Collection
- Tonal range: teal/50 through teal/800
- **Use Case**: Health, education, mental wellness sectors
- **Primary tones**:
  - teal/50: `#d4eded` (lightest)
  - teal/500: `#2aa4a4` (primary emphasis)
  - teal/800: `#041010` (darkest)

##### Gold Collection
- Tonal range: gold/50 through gold/800
- **Use Case**: Luxury, wellness, spiritual, feminine brands
- **Primary tones**:
  - gold/50: `#fcf3e0` (lightest)
  - gold/500: `#bf9d52` (primary emphasis)
  - gold/800: `#302714` (darkest)

##### Violet/Purple Collection
- Tonal range: purple/50 through purple/800
- **Use Case**: Cosmetics, lifestyle, holistic brands
- **Primary tones**:
  - purple/50: `#e9e0ff` (lightest)
  - purple/500: `#8f65ff` (primary emphasis)
  - purple/800: `#1d1433` (darkest)

##### Dark Green Collection
- Tonal range: dgreen/50 through dgreen/800
- **Use Case**: Environmental responsibility, calm trust, nature-focused brands
- **Primary tones**:
  - dgreen/50: `#d5e7d9` (lightest)
  - dgreen/500: `#2e8540` (primary emphasis)
  - dgreen/800: `#091b0d` (darkest)

---

## Variable Connection Points

### Level 1: Base Variables → Color Collections
**Connection Type**: Direct Color Definition

Each base variable maps directly to a specific color value:
```
neutral/black → #000000
gold/50 → #fcf3e0
gold/100 → #f9e7c2
... [continues through tonal scale] ...
gold/800 → #302714
```

### Level 2: Brand Selection → Accent Collection Assignment
**Connection Type**: Brand-to-Palette Mapping

The system allows brands to select their preferred accent color family:

```
Brand Identities:
├── Corporate/Professional Brands → Universal Blue Collection
├── Creative/Marketing Brands → Red-Orange Collection
├── Health/Education Brands → Teal Collection
├── Luxury/Wellness Brands → Gold Collection
├── Cosmetics/Lifestyle Brands → Violet Collection
└── Environmental/Trustworthy Brands → Dark Green Collection
```

### Level 3: Alias Variables → Component Semantic Mapping
**Connection Type**: Purpose-Based Semantic Tokens

Alias variables abstract the base colors into semantic categories for reusable application:

#### Recommended Alias Structure
```
Primary Colors (60% of design)
├── background-primary: [Selected Brand Neutral/Light tone]
├── background-secondary: [Tinted warm or cool variant]
└── surface-default: [Support surface tone]

Secondary Colors (30% of design)
├── text-primary: [Dark neutral or brand secondary]
├── text-secondary: [Medium neutral]
├── divider: [Light neutral]
└── border-subtle: [Ultra-light neutral]

Accent Colors (10% of design)
├── accent-primary: [Selected Brand Accent at 500 level]
├── accent-hover: [Brand Accent at 600 level]
├── accent-active: [Brand Accent at 700 level]
└── accent-disabled: [Light brand tone at 100-200 level]
```

### Level 4: Mapped Collections → Component Implementation
**Connection Type**: Direct Component Variable Application

Components bind semantic aliases to actual design properties:

```
Button Component
├── Default State → accent-primary (background)
├── Hover State → accent-hover (background)
├── Active State → accent-active (background)
├── Disabled State → accent-disabled (opacity reduced)
└── Text → text-primary (color)

Card Component
├── Background → background-primary
├── Border → border-subtle
└── Shadow support → text-secondary (opacity)
```

---

## Multi-Brand Application Flow

### Brand Implementation Pattern

#### Step 1: Select Brand Accent Palette
Choose which accent collection matches the brand identity:
- **Decision Point**: Which industry/brand personality does this serve?
- **Selection Examples**:
  - Tech Startup → Use Universal Blue
  - Cosmetics Line → Use Violet
  - Eco-Brand → Use Dark Green

#### Step 2: Create Brand-Specific Alias Variables
Define semantic aliases that point to selected accent palette:
```
[Brand Name] Variables:
├── primary-action → [selected-accent]/500
├── primary-action-hover → [selected-accent]/600
├── primary-action-active → [selected-accent]/700
├── surface-tint → [selected-accent]/50
└── text-strong → neutral/black or [selected-accent]/900
```

#### Step 3: Implement in Components
Components reference alias variables, ensuring consistency across the brand:
```
Button.tsx uses "primary-action" variable
  → When brand switches from Blue to Gold,
    → All buttons automatically update to gold tones
```

---

## Color Scaling Rules

### Tonal Scale Mapping (100-900)
Each color family follows a consistent scaling structure:

| Scale | Lightness | Use Case | Implementation |
|-------|-----------|----------|-----------------|
| 50 | Extreme Light | Not typically used in variables | Experimentation |
| 100 | Very Light | Light backgrounds, minimal contrast | Backgrounds |
| 200 | Light | Support backgrounds | Secondary backgrounds |
| 300 | Light-Medium | Hover states, subtle elements | Hover/focus states |
| 400 | Medium-Light | Medium interactive states | Secondary buttons |
| 500 | Primary | Primary interactive elements | Primary emphasis |
| 600 | Medium-Dark | Hover/active enhancement | Hover states |
| 700 | Dark | Active/pressed states | Active states |
| 800 | Very Dark | Text, strong contrasts | Text/dark elements |
| 900 | Extreme Dark | Maximum contrast | Not typically used |

---

## Safety & Accessibility Features

### Universal Neutral Foundation (60%)
- **Rationale**: Primary layer uses neutrals across all brands
- **Benefit**: 
  - Works safely across all industries
  - Maintains consistency regardless of brand
  - Ensures WCAG contrast compliance base layer

### Flexible Secondary Layer (30%)
- **Rationale**: Secondary colors can be tinted warmer (gold) or cooler (blue)
- **Benefit**:
  - Supports brand personality variation
  - Can enhance specific brand palettes
  - Maintains readability for typography

### Controlled Accent Layer (10%)
- **Rationale**: Only the accent color is truly brand-swappable
- **Benefit**:
  - Prevents visual chaos
  - Maintains design system coherence
  - Enables rapid brand switching

---

## Variable Connection Summary

```
┌─────────────────────────────────────────────────────────────────┐
│                    VARIABLE HIERARCHY FLOW                      │
├─────────────────────────────────────────────────────────────────┤
│                                                                  │
│  Level 1: BASE VARIABLES (Hex Colors)                           │
│  ├─ neutral/black: #000000                                      │
│  ├─ [color-family]/[100-900]: #hexvalue                         │
│  └─ (6 color families × 8-9 tones each)                         │
│                          ↓                                       │
│  Level 2: BRAND SELECTION (Accent Palette Choice)               │
│  ├─ Brand Identity A → Universal Blue                           │
│  ├─ Brand Identity B → Gold                                     │
│  └─ Brand Identity C → Teal                                     │
│                          ↓                                       │
│  Level 3: ALIAS VARIABLES (Semantic Purpose)                    │
│  ├─ primary-action → selected-accent/500                        │
│  ├─ surface-default → neutral/100                               │
│  ├─ text-primary → neutral/900                                  │
│  └─ [Other semantic tokens...]                                  │
│                          ↓                                       │
│  Level 4: COMPONENT IMPLEMENTATION                              │
│  ├─ Button(variant="primary") → primary-action alias            │
│  ├─ Card(type="default") → surface-default alias                │
│  └─ Text(level="primary") → text-primary alias                  │
│                          ↓                                       │
│  VISUAL OUTPUT: Consistent, On-Brand Design                     │
│                                                                  │
└─────────────────────────────────────────────────────────────────┘
```

---

## Implementation Best Practices

### 1. Variable Naming Convention
- **Pattern**: `[purpose]-[level]` or `[category]-[intensity]`
- **Examples**: 
  - `primary-action`, `primary-action-hover`
  - `background-primary`, `surface-subtle`
  - `text-primary`, `text-secondary`

### 2. Brand Switching Mechanism
- Update the accent collection reference in alias variables
- All components automatically reflect the new brand colors
- No component-level changes required

### 3. Accessibility Considerations
- Maintain `4.5:1` WCAG AA contrast ratio for text
- Use neutral foundation to ensure universal accessibility
- Test color selections against accessibility tools

### 4. Documentation Requirements
- Document which brand uses which accent palette
- Maintain a color application guide per brand
- Create audit trails for color selection decisions

---

## Design Tokens File Structure

The Figma Variables Panel organizes tokens as:

```
Colors (Root Collection)
├── Neutral
│   └── black: #000000
├── Gold
│   ├── 50: #fcf3e0
│   ├── 100: #f9e7c2
│   ├── ... [continues through 800]
│   └── 800: #302714
├── Teal
├── Red-Orange
├── Dark Green
├── Purple
└── Universal Blue

[Brand Name] Variables (Separate Collection)
├── Primary Actions
│   ├── primary-action: {reference to base/500}
│   └── primary-action-hover: {reference to base/600}
├── Surfaces
│   ├── background-primary: {reference to neutral/50}
│   └── surface-default: {reference to neutral/100}
└── Text
    ├── text-primary: {reference to neutral/900}
    └── text-secondary: {reference to neutral/600}
```

---

## Conclusion

The Multi-Brand Design System achieves flexibility through a **four-level variable hierarchy**:

1. **Base Variables** provide the raw color palette
2. **Brand Selection** determines accent color direction
3. **Alias Variables** create semantic meaning
4. **Component Integration** applies tokens consistently

This structure allows organizations to maintain:
- ✅ **Visual Consistency** across all brands
- ✅ **Brand Flexibility** through accent swapping
- ✅ **System Scalability** with new brands
- ✅ **Component Reusability** across products
- ✅ **Accessibility Compliance** through structured contrast

Each level acts as a connection point, enabling rapid brand iteration while maintaining design system integrity.
