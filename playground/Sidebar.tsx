/**
 * Sidebar Navigation Component
 * 
 * Navigation panel for switching between component views.
 */

import React from 'react';
import { ThemeToggle } from './ThemeToggle';

export type PageType = 'all' | 'button' | 'checkbox' | 'switch' | 'radiobutton' | 'label' | 'menuitem' | 'menu' | 'table';

interface SidebarProps {
  currentPage: PageType;
  onPageChange: (page: PageType) => void;
  brandColor: string;
}

const navigationItems: Array<{ id: PageType; label: string; icon: string }> = [
  { id: 'all', label: 'All Components', icon: '▦' },
  { id: 'button', label: 'Button', icon: '◼' },
  { id: 'checkbox', label: 'Checkbox', icon: '☑' },
  { id: 'switch', label: 'Switch', icon: '⊙' },
  { id: 'radiobutton', label: 'RadioButton', icon: '◉' },
  { id: 'label', label: 'Label', icon: '◭' },
  { id: 'menuitem', label: 'MenuItem', icon: '▥' },
  { id: 'menu', label: 'Menu', icon: '☰' },
  { id: 'table', label: 'Table', icon: '▦' },
];

export const Sidebar: React.FC<SidebarProps> = ({
  currentPage,
  onPageChange,
  brandColor,
}) => {
  return (
    <aside className="sidebar">
      <div className="sidebar-header">
        <div className="sidebar-logo">
          <div className="logo-dot" style={{ backgroundColor: brandColor }}></div>
          <span>DS</span>
        </div>
      </div>

      <nav className="sidebar-nav">
        <div className="nav-section">
          <p className="nav-section-title">Components</p>
          <ul className="nav-list">
            {navigationItems.map((item) => (
              <li key={item.id}>
                <button
                  className={`nav-link ${currentPage === item.id ? 'active' : ''}`}
                  onClick={() => onPageChange(item.id)}
                  style={
                    currentPage === item.id
                      ? { color: brandColor, borderLeftColor: brandColor }
                      : {}
                  }
                >
                  <span className="nav-icon">{item.icon}</span>
                  <span className="nav-label">{item.label}</span>
                </button>
              </li>
            ))}
          </ul>
        </div>
      </nav>

      <div className="sidebar-footer">
        <ThemeToggle />
        <p className="sidebar-version">v1.0.0</p>
      </div>
    </aside>
  );
};
