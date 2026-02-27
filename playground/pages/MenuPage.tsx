/**
 * Menu Component Page
 * 
 * Showcases Menu component with various configurations.
 */

import React, { useState } from 'react';
import { Menu } from '../../components/Menu';
import { MenuIcon, SettingsIcon, HomeIcon, UserIcon, ChevronRightIcon, InfoIcon } from '../icons';

export const MenuPage: React.FC = () => {
  const [selectedIndex1, setSelectedIndex1] = useState(1);
  const [selectedIndex2, setSelectedIndex2] = useState(0);

  return (
    <>
      <section className="component-section">
        <h2>Menu Component</h2>
        <p className="section-description">
          Navigation menu component with multiple items and optional scrollbar.
          Based on Figma design specifications.
        </p>

        {/* Basic Menu */}
        <div className="demo-group">
          <h3>Basic Menu</h3>
          <div className="component-grid">
            <div className="demo-item">
              <label>Simple Menu</label>
              <Menu
                items={[
                  { label: 'Menu Item' },
                  { label: 'Menu Item' },
                  { label: 'Menu Item' },
                ]}
                showScrollbar={false}
              />
            </div>
            <div className="demo-item">
              <label>Menu with Icons</label>
              <Menu
                items={[
                  { label: 'Home', iconRight: <HomeIcon /> },
                  { label: 'Profile', iconRight: <UserIcon /> },
                  { label: 'Settings', iconRight: <SettingsIcon /> },
                ]}
                showScrollbar={false}
              />
            </div>
          </div>
        </div>

        {/* Interactive Menu */}
        <div className="demo-group">
          <h3>Interactive Menu (Controlled)</h3>
          <p className="section-description">
            Click on items to select them. The selection is controlled by component state.
          </p>
          <div className="component-grid">
            <div className="demo-item">
              <label>Navigation Menu</label>
              <Menu
                items={[
                  { label: 'Dashboard', iconLeft: <HomeIcon />, showIconRight: false },
                  { label: 'Projects', iconLeft: <MenuIcon />, showIconRight: false },
                  { label: 'Team', iconLeft: <UserIcon />, showIconRight: false },
                  { label: 'Settings', iconLeft: <SettingsIcon />, showIconRight: false },
                ]}
                selectedIndex={selectedIndex1}
                onItemSelect={setSelectedIndex1}
                showScrollbar={false}
              />
            </div>
            <div className="demo-item">
              <label>Settings Menu</label>
              <Menu
                items={[
                  { label: 'Account', iconRight: <ChevronRightIcon /> },
                  { label: 'Privacy', iconRight: <ChevronRightIcon /> },
                  { label: 'Notifications', iconRight: <ChevronRightIcon /> },
                  { label: 'Help', iconRight: <InfoIcon /> },
                ]}
                selectedIndex={selectedIndex2}
                onItemSelect={setSelectedIndex2}
                showScrollbar={false}
              />
            </div>
          </div>
        </div>

        {/* Menu with Scrollbar */}
        <div className="demo-group">
          <h3>Menu with Scrollbar</h3>
          <div className="component-grid">
            <div className="demo-item">
              <label>Default (with scrollbar)</label>
              <Menu
                items={[
                  { label: 'Menu Item', iconRight: <SettingsIcon /> },
                  { label: 'Menu Item', iconRight: <SettingsIcon /> },
                  { label: 'Menu Item', iconRight: <SettingsIcon /> },
                  { label: 'Menu Item', iconRight: <SettingsIcon /> },
                  { label: 'Menu Item', iconRight: <SettingsIcon /> },
                  { label: 'Menu Item', iconRight: <SettingsIcon /> },
                ]}
                showScrollbar={true}
              />
            </div>
          </div>
        </div>

        {/* Long Menu with Scroll */}
        <div className="demo-group">
          <h3>Scrollable Menu</h3>
          <p className="section-description">
            Menu with max height constraint and scrollable content.
          </p>
          <div className="component-grid">
            <div className="demo-item">
              <label>Long Menu (max-height: 300px)</label>
              <Menu
                items={Array.from({ length: 15 }, (_, i) => ({
                  label: `Menu Item ${i + 1}`,
                  iconRight: <SettingsIcon />,
                }))}
                maxHeight="300px"
                showScrollbar={true}
              />
            </div>
          </div>
        </div>

        {/* Menu States */}
        <div className="demo-group">
          <h3>Menu Item States</h3>
          <div className="component-grid">
            <div className="demo-item">
              <label>Mixed States</label>
              <Menu
                items={[
                  { label: 'Active Item', iconRight: <SettingsIcon /> },
                  { label: 'Normal Item', iconRight: <SettingsIcon /> },
                  { label: 'Normal Item', iconRight: <SettingsIcon /> },
                  { label: 'Disabled Item', iconRight: <SettingsIcon />, status: 'disabled' },
                  { label: 'Normal Item', iconRight: <SettingsIcon /> },
                ]}
                selectedIndex={0}
                showScrollbar={false}
              />
            </div>
          </div>
        </div>

        {/* Design Reference */}
        <div className="demo-group">
          <h3>Design Reference</h3>
          <p className="section-description">
            Matches the Figma design with selected state (blue background), hover states, and proper spacing.
          </p>
          <div className="component-grid">
            <div className="demo-item">
              <label>Figma Design Match</label>
              <Menu
                items={[
                  { label: 'Menu Item', iconRight: <SettingsIcon /> },
                  { label: 'Menu Item', iconRight: <SettingsIcon /> },
                  { label: 'Menu Item', iconRight: <SettingsIcon /> },
                ]}
                selectedIndex={1}
                showScrollbar={true}
              />
            </div>
          </div>
        </div>

        {/* Usage Notes */}
        <div className="demo-group">
          <h3>Usage Notes</h3>
          <ul className="usage-notes">
            <li><strong>Width:</strong> Fixed at 298px + 23px scrollbar when shown</li>
            <li><strong>Selection:</strong> Can be controlled or uncontrolled</li>
            <li><strong>Scrollbar:</strong> Optional, with custom styling matching design system</li>
            <li><strong>Max Height:</strong> Can be set to enable scrolling for long lists</li>
            <li><strong>Interactive:</strong> Hover states on individual items, click to select</li>
          </ul>
        </div>
      </section>
    </>
  );
};
