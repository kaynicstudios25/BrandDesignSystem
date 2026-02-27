/**
 * Component Playground
 * 
 * Interactive testing environment for design system components.
 */

import { useState, useMemo } from 'react';
import { Sidebar, PageType } from './Sidebar';
import { ButtonPage } from './pages/ButtonPage';
import { CheckboxPage } from './pages/CheckboxPage';
import { SwitchPage } from './pages/SwitchPage';
import { RadioButtonPage } from './pages/RadioButtonPage';
import { LabelPage } from './pages/LabelPage';
import { MenuItemPage } from './pages/MenuItemPage';
import { MenuPage } from './pages/MenuPage';
import { TablePage } from './pages/TablePage';
import { AllComponentsPage } from './pages/AllComponentsPage';
import { useTheme } from './ThemeContext';

function App() {
  const { activeBrand, setBrand, brandName } = useTheme();
  const [currentPage, setCurrentPage] = useState<PageType>('all');

  // Get the brand color from the active brand's primary color
  const brandColor = useMemo(() => {
    const brandColorMap: Record<string, string> = {
      'universal-blue': '#007aff',
      'red-orange': '#ff5722',
      'teal': '#008b8b',
      'gold': '#ffd700',
      'violet': '#8b00ff',
      'dark-green': '#1b5e20',
    };
    return brandColorMap[activeBrand] || '#007aff';
  }, [activeBrand]);

  const renderPage = () => {
    switch (currentPage) {
      case 'button':
        return <ButtonPage />;
      case 'checkbox':
        return <CheckboxPage />;
      case 'switch':
        return <SwitchPage />;
      case 'radiobutton':
        return <RadioButtonPage />;
      case 'label':
        return <LabelPage />;
      case 'menuitem':
        return <MenuItemPage />;
      case 'menu':
        return <MenuPage />;
      case 'table':
        return <TablePage />;
      case 'all':
      default:
        return <AllComponentsPage />;
    }
  };

  return (
    <div className="playground">
      <Sidebar 
        currentPage={currentPage}
        onPageChange={setCurrentPage}
        brandColor={brandColor}
      />

      <div className="playground-main">
        <header className="playground-header">
          <h1>Multi-Brand Design System</h1>
          <p className="subtitle">Component Playground</p>
        </header>

        <div className="brand-selector">
          <label htmlFor="brand-select">Active Brand:</label>
          <select
            id="brand-select"
            value={activeBrand}
            onChange={(e) => setBrand(e.target.value as any)}
          >
            <option value="universal-blue">Universal Blue (Corporate)</option>
            <option value="red-orange">Red-Orange (Creative)</option>
            <option value="teal">Teal (Health & Wellness)</option>
            <option value="gold">Gold (Luxury)</option>
            <option value="violet">Violet (Lifestyle)</option>
            <option value="dark-green">Dark Green (Environmental)</option>
          </select>
        </div>

        <main className="playground-content">
          {renderPage()}
        </main>

        <footer className="playground-footer">
          <p>
            Multi-Brand Design System • Built with React & TypeScript • 
            Active Brand: {brandName}
          </p>
        </footer>
      </div>
    </div>
  );
}

export default App;
