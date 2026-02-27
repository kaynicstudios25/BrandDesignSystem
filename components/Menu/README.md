# Menu Component

A menu component that displays a list of menu items with optional scrollbar. Integrates with the design token system.

## Design Reference

- **Figma Node**: 167:8905
- **File**: Multi-Brand Design System

## Usage

```tsx
import { Menu } from './components/Menu';
import { Settings } from './icons';

// Basic usage
<Menu
  items={[
    { label: 'Home' },
    { label: 'About' },
    { label: 'Contact' },
  ]}
/>

// With icons
<Menu
  items={[
    { label: 'Settings', iconRight: <Settings /> },
    { label: 'Profile', iconRight: <Settings /> },
    { label: 'Logout', iconRight: <Settings /> },
  ]}
/>

// Controlled selection
const [selected, setSelected] = useState(0);

<Menu
  items={[
    { label: 'Option 1' },
    { label: 'Option 2' },
    { label: 'Option 3' },
  ]}
  selectedIndex={selected}
  onItemSelect={setSelected}
/>

// With scrollbar and max height
<Menu
  items={items}
  maxHeight="300px"
  showScrollbar={true}
/>

// Without scrollbar
<Menu
  items={items}
  showScrollbar={false}
/>
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `items` | `MenuItemProps[]` | required | Array of menu items to display |
| `showScrollbar` | `boolean` | `true` | Whether to show the scrollbar |
| `selectedIndex` | `number` | - | Currently selected item index (controlled) |
| `onItemSelect` | `(index: number) => void` | - | Callback when a menu item is selected |
| `maxHeight` | `string \| number` | - | Maximum height before scrolling |

## Features

- **Controlled and Uncontrolled**: Can be used as a controlled component with `selectedIndex` and `onItemSelect`, or uncontrolled for simple use cases
- **Custom Scrollbar**: Optional custom scrollbar that matches the design system
- **Responsive**: Scrollbar thumb height adjusts based on content
- **Flexible**: Accepts any MenuItem props for each item

## MenuItem Props

Each item in the `items` array supports all MenuItem props:

- `label` (required): Menu item text
- `status`: 'default' | 'hover' | 'disabled'
- `selected`: boolean (automatically managed by Menu)
- `iconLeft`: React.ReactNode
- `iconRight`: React.ReactNode
- `showIconLeft`: boolean
- `showIconRight`: boolean
- `onClick`: callback function

## Design Tokens Used

### Layout
- Fixed width: `298px` (menu list)
- Scrollbar width: `23px`
- Scrollbar thumb width: `7px`

### Colors
- Scrollbar thumb: `var(--border-default)`

### Spacing
- Scrollbar padding: `8px`

### Border Radius
- Scrollbar thumb: `var(--borderradius-lg)`

## Accessibility

- Uses semantic `role="menu"` attribute
- Delegates accessibility to MenuItem components
- Keyboard navigation supported through MenuItem components
- Proper ARIA attributes for menu items

## Examples

### Navigation Menu
```tsx
<Menu
  items={[
    { label: 'Dashboard', iconLeft: <DashboardIcon /> },
    { label: 'Projects', iconLeft: <ProjectIcon /> },
    { label: 'Team', iconLeft: <TeamIcon /> },
    { label: 'Settings', iconLeft: <SettingsIcon /> },
  ]}
  selectedIndex={0}
  onItemSelect={(index) => navigate(routes[index])}
/>
```

### Settings Menu
```tsx
<Menu
  items={[
    { label: 'Account Settings', iconRight: <ChevronRight /> },
    { label: 'Privacy', iconRight: <ChevronRight /> },
    { label: 'Notifications', iconRight: <ChevronRight /> },
    { label: 'Help', iconRight: <ChevronRight /> },
    { label: 'Logout', status: 'disabled' },
  ]}
/>
```

### Scrollable Menu
```tsx
<Menu
  items={Array.from({ length: 20 }, (_, i) => ({
    label: `Item ${i + 1}`,
  }))}
  maxHeight="400px"
  showScrollbar={true}
/>
```
