/**
 * MenuItem Component Page
 * 
 * Showcases all MenuItem component variants and states.
 */

import React from 'react';
import { MenuItem } from '../../components/MenuItem';
import { MenuIcon, SettingsIcon, HomeIcon, UserIcon } from '../icons';

export const MenuItemPage: React.FC = () => {
  return (
    <>
      <section className="component-section">
        <h2>MenuItem Component</h2>
        <p className="section-description">
          Individual menu item component with states and icon support.
          Based on Figma design specifications.
        </p>

        {/* Default States */}
        <div className="demo-group">
          <h3>Default (Non-Selected) States</h3>
          <div className="component-grid">
            <div className="demo-item">
              <label>Default</label>
              <MenuItem label="Menu Item" />
            </div>
            <div className="demo-item">
              <label>With Right Icon</label>
              <MenuItem 
                label="Settings" 
                iconRight={<SettingsIcon />} 
              />
            </div>
            <div className="demo-item">
              <label>With Left Icon</label>
              <MenuItem 
                label="Menu" 
                iconLeft={<MenuIcon />} 
                showIconRight={false}
              />
            </div>
            <div className="demo-item">
              <label>With Both Icons</label>
              <MenuItem 
                label="Dashboard" 
                iconLeft={<HomeIcon />} 
                iconRight={<SettingsIcon />} 
              />
            </div>
          </div>
        </div>

        {/* Selected States */}
        <div className="demo-group">
          <h3>Selected States</h3>
          <div className="component-grid">
            <div className="demo-item">
              <label>Selected</label>
              <MenuItem 
                label="Menu Item" 
                selected 
              />
            </div>
            <div className="demo-item">
              <label>Selected with Right Icon</label>
              <MenuItem 
                label="Settings" 
                selected
                iconRight={<SettingsIcon />} 
              />
            </div>
            <div className="demo-item">
              <label>Selected with Left Icon</label>
              <MenuItem 
                label="Profile" 
                selected
                iconLeft={<UserIcon />} 
                showIconRight={false}
              />
            </div>
            <div className="demo-item">
              <label>Selected with Both Icons</label>
              <MenuItem 
                label="Dashboard" 
                selected
                iconLeft={<HomeIcon />} 
                iconRight={<SettingsIcon />} 
              />
            </div>
          </div>
        </div>

        {/* Disabled States */}
        <div className="demo-group">
          <h3>Disabled States</h3>
          <div className="component-grid">
            <div className="demo-item">
              <label>Disabled</label>
              <MenuItem 
                label="Disabled Item" 
                status="disabled"
              />
            </div>
            <div className="demo-item">
              <label>Disabled with Icon</label>
              <MenuItem 
                label="Disabled Settings" 
                status="disabled"
                iconRight={<SettingsIcon />} 
              />
            </div>
            <div className="demo-item">
              <label>Disabled Selected</label>
              <MenuItem 
                label="Disabled Selected" 
                status="disabled"
                selected
              />
            </div>
          </div>
        </div>

        {/* Icon Variations */}
        <div className="demo-group">
          <h3>Icon Configurations</h3>
          <div className="component-grid">
            <div className="demo-item">
              <label>No Icons</label>
              <MenuItem 
                label="Plain Item" 
                showIconLeft={false}
                showIconRight={false}
              />
            </div>
            <div className="demo-item">
              <label>Only Left Icon</label>
              <MenuItem 
                label="Home" 
                iconLeft={<HomeIcon />}
                showIconRight={false}
              />
            </div>
            <div className="demo-item">
              <label>Only Right Icon</label>
              <MenuItem 
                label="Settings" 
                iconRight={<SettingsIcon />}
                showIconLeft={false}
              />
            </div>
            <div className="demo-item">
              <label>Both Icons</label>
              <MenuItem 
                label="Dashboard" 
                iconLeft={<MenuIcon />}
                iconRight={<SettingsIcon />}
              />
            </div>
          </div>
        </div>

        {/* Interactive Demo */}
        <div className="demo-group">
          <h3>Interactive Demo</h3>
          <p className="section-description">
            Hover over these items to see the hover state.
          </p>
          <div className="component-grid">
            <div className="demo-item">
              <label>Hover (Non-Selected)</label>
              <MenuItem 
                label="Hover Me" 
                iconRight={<SettingsIcon />}
                onClick={() => console.log('Clicked!')}
              />
            </div>
            <div className="demo-item">
              <label>Hover (Selected)</label>
              <MenuItem 
                label="Hover Selected" 
                selected
                iconRight={<SettingsIcon />}
                onClick={() => console.log('Clicked!')}
              />
            </div>
          </div>
        </div>

        {/* Usage Notes */}
        <div className="demo-group">
          <h3>Usage Notes</h3>
          <ul className="usage-notes">
            <li><strong>Width:</strong> Fixed at 298px for consistency</li>
            <li><strong>Border:</strong> Bottom border only (1px solid)</li>
            <li><strong>Hover States:</strong> Different backgrounds for selected vs non-selected</li>
            <li><strong>Icons:</strong> 24x24px, can be shown on left, right, or both sides</li>
            <li><strong>Typography:</strong> Uses body/md/p-md token (16px, 400 weight, 20px line-height)</li>
          </ul>
        </div>
      </section>
    </>
  );
};
