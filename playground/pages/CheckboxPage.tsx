/**
 * Checkbox Component Page
 * 
 * Showcases all Checkbox component variants and states.
 */

import React, { useState } from 'react';
import { Checkbox } from '../../components/Checkbox';

export const CheckboxPage: React.FC = () => {
  const [checked1, setChecked1] = useState(false);
  const [checked2, setChecked2] = useState(true);
  const [preferences, setPreferences] = useState({
    newsletter: false,
    notifications: true,
    marketing: false,
  });

  return (
    <>
      <section className="component-section">
        <h2>Checkbox Component</h2>
        <p className="section-description">
          Interactive checkbox component with multiple states and optional labels.
          Based on Figma design specifications (nodes 167:8982, 167:9051).
        </p>

        {/* Basic States */}
        <div className="demo-group">
          <h3>Basic Checkbox States</h3>
          <div className="component-grid">
            <div className="demo-item">
              <label>Unchecked</label>
              <Checkbox />
            </div>
            <div className="demo-item">
              <label>Checked</label>
              <Checkbox defaultChecked />
            </div>
            <div className="demo-item">
              <label>Disabled Unchecked</label>
              <Checkbox disabled />
            </div>
            <div className="demo-item">
              <label>Disabled Checked</label>
              <Checkbox disabled defaultChecked />
            </div>
            <div className="demo-item">
              <label>Error Unchecked</label>
              <Checkbox error />
            </div>
            <div className="demo-item">
              <label>Error Checked</label>
              <Checkbox error defaultChecked />
            </div>
          </div>
        </div>

        {/* With Labels */}
        <div className="demo-group">
          <h3>Checkbox with Labels</h3>
          <div className="component-grid">
            <div className="demo-item">
              <label>Default Label</label>
              <Checkbox label="Accept terms and conditions" />
            </div>
            <div className="demo-item">
              <label>Checked with Label</label>
              <Checkbox label="I agree to receive newsletters" defaultChecked />
            </div>
            <div className="demo-item">
              <label>Disabled with Label</label>
              <Checkbox label="This option is unavailable" disabled />
            </div>
            <div className="demo-item">
              <label>Error with Label</label>
              <Checkbox label="Required field" error />
            </div>
          </div>
        </div>

        {/* Controlled Examples */}
        <div className="demo-group">
          <h3>Controlled Checkboxes</h3>
          <div className="component-grid">
            <div className="demo-item">
              <label>Controlled (Click to toggle)</label>
              <Checkbox
                label="Controlled checkbox"
                checked={checked1}
                onChange={(e) => setChecked1(e.target.checked)}
              />
              <p style={{ marginTop: '8px', fontSize: '14px', color: '#666' }}>
                Status: {checked1 ? 'Checked' : 'Unchecked'}
              </p>
            </div>
            <div className="demo-item">
              <label>Pre-checked Controlled</label>
              <Checkbox
                label="Initially checked"
                checked={checked2}
                onChange={(e) => setChecked2(e.target.checked)}
              />
              <p style={{ marginTop: '8px', fontSize: '14px', color: '#666' }}>
                Status: {checked2 ? 'Checked' : 'Unchecked'}
              </p>
            </div>
          </div>
        </div>

        {/* Form Example */}
        <div className="demo-group">
          <h3>Form Example - User Preferences</h3>
          <div style={{ 
            padding: '24px', 
            backgroundColor: 'var(--surface-default, white)',
            borderRadius: 'var(--boderradius-lg, 8px)',
            border: '1px solid var(--border-default, #e0e0e0)',
            maxWidth: '400px'
          }}>
            <h4 style={{ marginTop: 0, marginBottom: '16px' }}>Communication Preferences</h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              <Checkbox
                label="Email newsletter"
                checked={preferences.newsletter}
                onChange={(e) => setPreferences({ ...preferences, newsletter: e.target.checked })}
              />
              <Checkbox
                label="Push notifications"
                checked={preferences.notifications}
                onChange={(e) => setPreferences({ ...preferences, notifications: e.target.checked })}
              />
              <Checkbox
                label="Marketing emails"
                checked={preferences.marketing}
                onChange={(e) => setPreferences({ ...preferences, marketing: e.target.checked })}
              />
            </div>
            <div style={{ 
              marginTop: '24px', 
              padding: '12px', 
              backgroundColor: '#f5f5f5', 
              borderRadius: '4px',
              fontSize: '14px'
            }}>
              <strong>Selected preferences:</strong>
              <ul style={{ margin: '8px 0 0 0', paddingLeft: '20px' }}>
                {preferences.newsletter && <li>Email newsletter</li>}
                {preferences.notifications && <li>Push notifications</li>}
                {preferences.marketing && <li>Marketing emails</li>}
                {!preferences.newsletter && !preferences.notifications && !preferences.marketing && (
                  <li style={{ color: '#999' }}>None selected</li>
                )}
              </ul>
            </div>
          </div>
        </div>

        {/* Accessibility Notes */}
        <div className="demo-group">
          <h3>Accessibility Features</h3>
          <div style={{ 
            padding: '16px', 
            backgroundColor: '#f0f8ff', 
            borderRadius: '4px',
            marginTop: '16px'
          }}>
            <ul style={{ margin: 0, paddingLeft: '20px' }}>
              <li>Uses native <code>&lt;input type="checkbox"&gt;</code> for full keyboard support</li>
              <li>Proper label association with <code>htmlFor</code> and <code>id</code></li>
              <li>Supports <code>aria-label</code> for checkboxes without visible labels</li>
              <li>Keyboard navigation: <kbd>Tab</kbd> to focus, <kbd>Space</kbd> to toggle</li>
              <li>Visual focus indicators for keyboard users</li>
              <li>Disabled state prevents interaction and changes cursor</li>
            </ul>
          </div>
        </div>

        {/* Interactive States Demo */}
        <div className="demo-group">
          <h3>Interactive States (Hover & Focus)</h3>
          <p className="section-description">
            Try hovering over or tabbing to these checkboxes to see the interactive states.
          </p>
          <div className="component-grid">
            <div className="demo-item">
              <label>Hover me (unchecked)</label>
              <Checkbox label="Hover to see effect" />
            </div>
            <div className="demo-item">
              <label>Hover me (checked)</label>
              <Checkbox label="Hover to see effect" defaultChecked />
            </div>
            <div className="demo-item">
              <label>Tab to focus (unchecked)</label>
              <Checkbox label="Focus with keyboard" />
            </div>
            <div className="demo-item">
              <label>Tab to focus (checked)</label>
              <Checkbox label="Focus with keyboard" defaultChecked />
            </div>
          </div>
        </div>

      </section>
    </>
  );
};
