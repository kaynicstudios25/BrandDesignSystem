/**
 * RadioButton Component Page
 * 
 * Showcases all RadioButton component variants and states.
 */

import React, { useState } from 'react';
import { RadioButton } from '../../components/RadioButton';

export const RadioButtonPage: React.FC = () => {
  const [selectedPlan, setSelectedPlan] = useState<'starter' | 'pro' | 'enterprise'>('pro');
  const [selectedDelivery, setSelectedDelivery] = useState<'weekly' | 'monthly'>('weekly');

  return (
    <>
      <section className="component-section">
        <h2>RadioButton Component</h2>
        <p className="section-description">
          Single-select radio input with multiple interactive states and optional label.
          Based on Figma design specifications (nodes 169:9079, 170:9113).
        </p>

        {/* Basic States */}
        <div className="demo-group">
          <h3>Basic RadioButton States</h3>
          <div className="component-grid">
            <div className="demo-item">
              <label>Unchecked</label>
              <RadioButton name="basic" />
            </div>
            <div className="demo-item">
              <label>Checked</label>
              <RadioButton name="basic" defaultChecked />
            </div>
            <div className="demo-item">
              <label>Disabled Unchecked</label>
              <RadioButton name="basic" disabled />
            </div>
            <div className="demo-item">
              <label>Disabled Checked</label>
              <RadioButton name="basic" disabled defaultChecked />
            </div>
          </div>
        </div>

        {/* With Labels */}
        <div className="demo-group">
          <h3>RadioButton with Labels</h3>
          <div className="component-grid">
            <div className="demo-item">
              <label>Default Label</label>
              <RadioButton name="labels" label="Standard shipping" />
            </div>
            <div className="demo-item">
              <label>Checked with Label</label>
              <RadioButton name="labels" label="Express shipping" defaultChecked />
            </div>
            <div className="demo-item">
              <label>Disabled with Label</label>
              <RadioButton name="labels" label="Unavailable option" disabled />
            </div>
            <div className="demo-item">
              <label>Hidden Label</label>
              <RadioButton name="labels" label="Hidden label" hideLabel />
            </div>
          </div>
        </div>

        {/* Controlled Examples */}
        <div className="demo-group">
          <h3>Controlled Radio Groups</h3>
          <div className="component-grid">
            <div className="demo-item">
              <label>Plan Selection</label>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                <RadioButton
                  name="plan"
                  label="Starter"
                  checked={selectedPlan === 'starter'}
                  onChange={() => setSelectedPlan('starter')}
                />
                <RadioButton
                  name="plan"
                  label="Pro"
                  checked={selectedPlan === 'pro'}
                  onChange={() => setSelectedPlan('pro')}
                />
                <RadioButton
                  name="plan"
                  label="Enterprise"
                  checked={selectedPlan === 'enterprise'}
                  onChange={() => setSelectedPlan('enterprise')}
                />
              </div>
              <p style={{ marginTop: '8px', fontSize: '14px', color: '#666' }}>
                Selected: {selectedPlan}
              </p>
            </div>

            <div className="demo-item">
              <label>Delivery Frequency</label>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                <RadioButton
                  name="delivery"
                  label="Weekly"
                  checked={selectedDelivery === 'weekly'}
                  onChange={() => setSelectedDelivery('weekly')}
                />
                <RadioButton
                  name="delivery"
                  label="Monthly"
                  checked={selectedDelivery === 'monthly'}
                  onChange={() => setSelectedDelivery('monthly')}
                />
              </div>
              <p style={{ marginTop: '8px', fontSize: '14px', color: '#666' }}>
                Selected: {selectedDelivery}
              </p>
            </div>
          </div>
        </div>

        {/* Interactive States Demo */}
        <div className="demo-group">
          <h3>Interactive States (Hover & Focus)</h3>
          <p className="section-description">
            Try hovering over or tabbing to these radio buttons to see the interactive states.
          </p>
          <div className="component-grid">
            <div className="demo-item">
              <label>Hover me (unchecked)</label>
              <RadioButton name="interactive" label="Hover to see effect" />
            </div>
            <div className="demo-item">
              <label>Hover me (checked)</label>
              <RadioButton name="interactive" label="Hover to see effect" defaultChecked />
            </div>
            <div className="demo-item">
              <label>Tab to focus (unchecked)</label>
              <RadioButton name="interactive" label="Focus with keyboard" />
            </div>
            <div className="demo-item">
              <label>Tab to focus (checked)</label>
              <RadioButton name="interactive" label="Focus with keyboard" defaultChecked />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
