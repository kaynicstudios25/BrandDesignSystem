/**
 * Button Component Page
 * 
 * Showcases all Button component variants and states.
 */

import React from 'react';
import { Button } from '../../components/Button';
import { InfoIcon, CheckIcon } from '../icons';

export const ButtonPage: React.FC = () => {
  return (
    <>
      <section className="component-section">
        <h2>Button Component</h2>
        <p className="section-description">
          Interactive buttons with multiple variants and states.
          Based on Figma design specifications.
        </p>

        {/* Default Variant */}
        <div className="demo-group">
          <h3>Default (Filled) Variant</h3>
          <div className="component-grid">
            <div className="demo-item">
              <label>Default</label>
              <Button variant="default">
                Join Starlight Preceptor
              </Button>
            </div>
            <div className="demo-item">
              <label>With Left Icon</label>
              <Button variant="default" iconLeft={<InfoIcon />}>
                Join Starlight Preceptor
              </Button>
            </div>
            <div className="demo-item">
              <label>With Right Icon</label>
              <Button variant="default" iconRight={<CheckIcon />}>
                Join Starlight Preceptor
              </Button>
            </div>
            <div className="demo-item">
              <label>With Both Icons</label>
              <Button variant="default" iconLeft={<InfoIcon />} iconRight={<InfoIcon />}>
                Join Starlight Preceptor
              </Button>
            </div>
            <div className="demo-item">
              <label>Disabled</label>
              <Button variant="default" disabled>
                Join Starlight Preceptor
              </Button>
            </div>
          </div>
        </div>

        {/* Outline Variant */}
        <div className="demo-group">
          <h3>Outline Variant</h3>
          <div className="component-grid">
            <div className="demo-item">
              <label>Default</label>
              <Button variant="outline">
                Join Starlight Preceptor
              </Button>
            </div>
            <div className="demo-item">
              <label>With Left Icon</label>
              <Button variant="outline" iconLeft={<InfoIcon />}>
                Join Starlight Preceptor
              </Button>
            </div>
            <div className="demo-item">
              <label>With Right Icon</label>
              <Button variant="outline" iconRight={<CheckIcon />}>
                Join Starlight Preceptor
              </Button>
            </div>
            <div className="demo-item">
              <label>With Both Icons</label>
              <Button variant="outline" iconLeft={<InfoIcon />} iconRight={<InfoIcon />}>
                Join Starlight Preceptor
              </Button>
            </div>
            <div className="demo-item">
              <label>Disabled</label>
              <Button variant="outline" disabled>
                Join Starlight Preceptor
              </Button>
            </div>
          </div>
        </div>

        {/* Transparent Variant */}
        <div className="demo-group">
          <h3>Transparent Variant</h3>
          <div className="component-grid">
            <div className="demo-item">
              <label>Default</label>
              <Button variant="transparent">
                Join Starlight Preceptor
              </Button>
            </div>
            <div className="demo-item">
              <label>With Left Icon</label>
              <Button variant="transparent" iconLeft={<InfoIcon />}>
                Join Starlight Preceptor
              </Button>
            </div>
            <div className="demo-item">
              <label>With Right Icon</label>
              <Button variant="transparent" iconRight={<CheckIcon />}>
                Join Starlight Preceptor
              </Button>
            </div>
            <div className="demo-item">
              <label>With Both Icons</label>
              <Button variant="transparent" iconLeft={<InfoIcon />} iconRight={<InfoIcon />}>
                Join Starlight Preceptor
              </Button>
            </div>
            <div className="demo-item">
              <label>Disabled</label>
              <Button variant="transparent" disabled>
                Join Starlight Preceptor
              </Button>
            </div>
          </div>
        </div>

        {/* Size Variants */}
        <div className="demo-group">
          <h3>Size Variants</h3>
          <div className="component-grid">
            <div className="demo-item">
              <label>Small</label>
              <Button variant="default" size="sm">
                Small Button
              </Button>
            </div>
            <div className="demo-item">
              <label>Medium (Default)</label>
              <Button variant="default" size="md">
                Medium Button
              </Button>
            </div>
            <div className="demo-item">
              <label>Large</label>
              <Button variant="default" size="lg">
                Large Button
              </Button>
            </div>
          </div>
        </div>

        {/* Interactive States Demo */}
        <div className="demo-group">
          <h3>Interactive States</h3>
          <div className="state-info">
            <p>Try hovering and focusing on these buttons to see state transitions:</p>
            <ul>
              <li><strong>Hover:</strong> Darker shade on filled, colored border on outline</li>
              <li><strong>Focus:</strong> Blue focus ring appears around button</li>
              <li><strong>Disabled:</strong> Grayed out, not interactive</li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
};
