/**
 * Switch Component Page
 * 
 * Showcases all Switch component variants and states.
 */

import React, { useState } from 'react';
import { Switch } from '../../components/Switch';

export const SwitchPage: React.FC = () => {
  const [enabled1, setEnabled1] = useState(false);
  const [enabled2, setEnabled2] = useState(true);
  const [settings, setSettings] = useState({
    darkMode: false,
    notifications: true,
    autoSave: false,
  });

  return (
    <>
      <section className="component-section">
        <h2>Switch Component</h2>
        <p className="section-description">
          Interactive toggle switch component with multiple states and optional labels.
          Based on Figma design specifications (node 171:9156).
        </p>

        {/* Basic States */}
        <div className="demo-group">
          <h3>Basic Switch States</h3>
          <div className="component-grid">
            <div className="demo-item">
              <label>Unchecked</label>
              <Switch />
            </div>
            <div className="demo-item">
              <label>Checked</label>
              <Switch defaultChecked />
            </div>
            <div className="demo-item">
              <label>Disabled Unchecked</label>
              <Switch disabled />
            </div>
            <div className="demo-item">
              <label>Disabled Checked</label>
              <Switch disabled defaultChecked />
            </div>
          </div>
        </div>

        {/* With Labels */}
        <div className="demo-group">
          <h3>Switch with Labels</h3>
          <div className="component-grid">
            <div className="demo-item">
              <Switch label="Enable notifications" />
            </div>
            <div className="demo-item">
              <Switch label="Dark mode" defaultChecked />
            </div>
            <div className="demo-item">
              <Switch label="Auto-save enabled" disabled />
            </div>
            <div className="demo-item">
              <Switch label="Feature enabled" disabled defaultChecked />
            </div>
          </div>
        </div>

        {/* Label Positioning */}
        <div className="demo-group">
          <h3>Label Positioning</h3>
          <div className="component-grid">
            <div className="demo-item">
              <label className="section-label">Right (Default)</label>
              <Switch label="Option enabled" labelPosition="right" />
            </div>
            <div className="demo-item">
              <label className="section-label">Left</label>
              <Switch label="Option enabled" labelPosition="left" />
            </div>
          </div>
        </div>

        {/* Controlled Component */}
        <div className="demo-group">
          <h3>Controlled Switch</h3>
          <div className="component-grid">
            <div className="demo-item">
              <label className="section-label">Controlled State: {enabled1 ? 'On' : 'Off'}</label>
              <Switch
                checked={enabled1}
                onChange={(e) => setEnabled1(e.target.checked)}
                label="Toggle me"
              />
            </div>
            <div className="demo-item">
              <label className="section-label">Two-way Binding: {enabled2 ? 'Enabled' : 'Disabled'}</label>
              <Switch
                checked={enabled2}
                onChange={(e) => setEnabled2(e.target.checked)}
                label="Click to toggle"
              />
            </div>
          </div>
        </div>

        {/* Settings Group */}
        <div className="demo-group">
          <h3>Settings Form</h3>
          <div style={{ padding: '20px', backgroundColor: '#f9f9f9', borderRadius: '8px' }}>
            <Switch
              label="Dark Mode"
              checked={settings.darkMode}
              onChange={(e) =>
                setSettings({ ...settings, darkMode: e.target.checked })
              }
            />
            <div style={{ marginTop: '16px' }}>
              <Switch
                label="Email Notifications"
                checked={settings.notifications}
                onChange={(e) =>
                  setSettings({ ...settings, notifications: e.target.checked })
                }
              />
            </div>
            <div style={{ marginTop: '16px' }}>
              <Switch
                label="Auto-save Documents"
                checked={settings.autoSave}
                onChange={(e) =>
                  setSettings({ ...settings, autoSave: e.target.checked })
                }
              />
            </div>
            <div style={{ marginTop: '20px', padding: '12px', backgroundColor: 'white', borderRadius: '4px' }}>
              <h4 style={{ margin: '0 0 8px 0' }}>Current Settings:</h4>
              <code style={{ fontSize: '12px', color: '#666' }}>
                {JSON.stringify(settings, null, 2)}
              </code>
            </div>
          </div>
        </div>

        {/* Interactive States */}
        <div className="demo-group">
          <h3>Interactive States</h3>
          <p className="section-description">
            Hover over or click on the switches to see different states (default, hover, focus).
          </p>
          <div className="component-grid">
            <div className="demo-item">
              <label className="section-label">Default State</label>
              <Switch label="Interact with me" />
            </div>
            <div className="demo-item">
              <label className="section-label">Focused</label>
              <Switch
                label="Focus me"
                autoFocus
              />
            </div>
            <div className="demo-item">
              <label className="section-label">Checked & Interactive</label>
              <Switch
                label="Toggle enabled"
                defaultChecked
              />
            </div>
          </div>
        </div>

        {/* Feature Matrix */}
        <div className="demo-group">
          <h3>Feature Comparison</h3>
          <table className="feature-table">
            <thead>
              <tr>
                <th>Feature</th>
                <th>Switch</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Toggle On/Off</td>
                <td>✓</td>
              </tr>
              <tr>
                <td>Controlled & Uncontrolled</td>
                <td>✓</td>
              </tr>
              <tr>
                <td>Optional Label</td>
                <td>✓</td>
              </tr>
              <tr>
                <td>Multiple States</td>
                <td>✓</td>
              </tr>
              <tr>
                <td>Disabled State</td>
                <td>✓</td>
              </tr>
              <tr>
                <td>Keyboard Navigation</td>
                <td>✓</td>
              </tr>
              <tr>
                <td>Accessible (ARIA)</td>
                <td>✓</td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Code Example */}
        <div className="demo-group">
          <h3>Code Example</h3>
          <pre className="code-block">
{`import { Switch } from '@/components';
import { useState } from 'react';

export function MyComponent() {
  const [isEnabled, setIsEnabled] = useState(false);

  return (
    <Switch
      checked={isEnabled}
      onChange={(e) => setIsEnabled(e.target.checked)}
      label="Enable feature"
    />
  );
}`}
          </pre>
        </div>
      </section>
    </>
  );
};
