/**
 * Label Component Page
 * 
 * Showcases all Label component variants and states.
 */

import React from 'react';
import { Label } from '../../components/Label';
import { InfoIcon } from '../icons';

export const LabelPage: React.FC = () => {
  return (
    <>
      <section className="component-section">
        <h2>Label Component</h2>
        <p className="section-description">
          Flexible labels with optional icons and required field indicators.
          Based on Figma design specifications.
        </p>

        {/* Basic Labels */}
        <div className="demo-group">
          <h3>Basic Labels</h3>
          <div className="component-grid">
            <div className="demo-item">
              <label>Simple Label</label>
              <Label label="Username" icon={false} />
            </div>
            <div className="demo-item">
              <label>Label with Icon</label>
              <Label label="Email Address" icon={true} iconComponent={<InfoIcon />} />
            </div>
            <div className="demo-item">
              <label>Required Label</label>
              <Label label="Password" type="required" icon={false} />
            </div>
            <div className="demo-item">
              <label>Required with Icon</label>
              <Label label="Full Name" type="required" icon={true} iconComponent={<InfoIcon />} />
            </div>
          </div>
        </div>

        {/* Label Variants */}
        <div className="demo-group">
          <h3>Label Type Variants</h3>
          <div className="component-grid">
            <div className="demo-item">
              <label>Default Type</label>
              <Label label="Phone Number" type="default" />
            </div>
            <div className="demo-item">
              <label>Required Type</label>
              <Label label="Company Name" type="required" />
            </div>
          </div>
        </div>

        {/* Icon Variants */}
        <div className="demo-group">
          <h3>Icon Options</h3>
          <div className="component-grid">
            <div className="demo-item">
              <label>Without Icon</label>
              <Label label="Street Address" icon={false} />
            </div>
            <div className="demo-item">
              <label>With Icon</label>
              <Label label="Postal Code" icon={true} iconComponent={<InfoIcon />} />
            </div>
            <div className="demo-item">
              <label>Custom Icon Content</label>
              <Label 
                label="Help Text" 
                icon={true} 
                iconComponent={
                  <span style={{ fontSize: '20px', cursor: 'pointer' }}>?</span>
                } 
              />
            </div>
          </div>
        </div>

        {/* Combined Examples */}
        <div className="demo-group">
          <h3>Form Field Examples</h3>
          <div className="component-grid">
            <div className="demo-item">
              <div style={{ marginBottom: '8px' }}>
                <Label label="Email" type="required" icon={true} iconComponent={<InfoIcon />} />
              </div>
              <input 
                type="email" 
                placeholder="Enter your email"
                style={{
                  padding: '8px 12px',
                  border: '1px solid #d8d8d8',
                  borderRadius: '4px',
                  fontFamily: 'var(--fontfamily-body)',
                }}
              />
            </div>
            <div className="demo-item">
              <div style={{ marginBottom: '8px' }}>
                <Label label="Message" type="default" icon={false} />
              </div>
              <textarea 
                placeholder="Enter your message"
                style={{
                  padding: '8px 12px',
                  border: '1px solid #d8d8d8',
                  borderRadius: '4px',
                  fontFamily: 'var(--fontfamily-body)',
                  minHeight: '100px',
                  resize: 'vertical',
                }}
              />
            </div>
            <div className="demo-item">
              <div style={{ marginBottom: '8px' }}>
                <Label label="Country" type="required" icon={false} />
              </div>
              <select
                style={{
                  padding: '8px 12px',
                  border: '1px solid #d8d8d8',
                  borderRadius: '4px',
                  fontFamily: 'var(--fontfamily-body)',
                  width: '100%',
                }}
              >
                <option>Select a country...</option>
                <option>United States</option>
                <option>Canada</option>
                <option>United Kingdom</option>
              </select>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
