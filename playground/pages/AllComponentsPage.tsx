/**
 * All Components Page
 * 
 * Quick overview of all components with basic examples.
 */

import React, { useState } from 'react';
import { Button } from '../../components/Button';
import { Checkbox } from '../../components/Checkbox';
import { Switch } from '../../components/Switch';
import { RadioButton } from '../../components/RadioButton';
import { Label } from '../../components/Label';
import { MenuItem } from '../../components/MenuItem';
import { Menu } from '../../components/Menu';
import { Table, TableHeader, TableBody, TableRow, TableHeaderCell, TableCell } from '../../components/Table';
import { InfoIcon, CheckIcon, SettingsIcon, HomeIcon, UserIcon } from '../icons';

export const AllComponentsPage: React.FC = () => {
  const [menuSelectedIndex, setMenuSelectedIndex] = useState(0);

  return (
    <>
      <section className="component-section">
        <h2>All Components</h2>
        <p className="section-description">
          Quick overview of all available components in the design system.
          Click on a component in the sidebar to see detailed variants and states.
        </p>
      </section>

      {/* Button Component Overview */}
      <section className="component-section">
        <div className="component-overview">
          <div className="overview-header">
            <h3>Button Component</h3>
            <span className="component-tag">Interactive</span>
          </div>
          <p className="overview-description">
            Multi-variant button with icon support and interactive states.
          </p>
        </div>

        <div className="demo-group">
          <h4>Quick Examples</h4>
          <div className="component-grid">
            <div className="demo-item">
              <label>Default</label>
              <Button variant="default">Primary Button</Button>
            </div>
            <div className="demo-item">
              <label>Outline</label>
              <Button variant="outline">Secondary Button</Button>
            </div>
            <div className="demo-item">
              <label>Transparent</label>
              <Button variant="transparent">Tertiary Button</Button>
            </div>
            <div className="demo-item">
              <label>With Icon</label>
              <Button variant="default" iconRight={<CheckIcon />}>
                Success
              </Button>
            </div>
            <div className="demo-item">
              <label>Large Size</label>
              <Button variant="default" size="lg">
                Large Button
              </Button>
            </div>
            <div className="demo-item">
              <label>Small Size</label>
              <Button variant="default" size="sm">
                Small Button
              </Button>
            </div>
          </div>
        </div>

        <div className="component-info">
          <p><strong>Documentation:</strong> Supports three variants (default, outline, transparent), three sizes (sm, md, lg), and optional icons.</p>
        </div>
      </section>

      {/* Checkbox Component Overview */}
      <section className="component-section">
        <div className="component-overview">
          <div className="overview-header">
            <h3>Checkbox Component</h3>
            <span className="component-tag">Form</span>
          </div>
          <p className="overview-description">
            Interactive checkbox with multiple states and optional label support.
          </p>
        </div>

        <div className="demo-group">
          <h4>Quick Examples</h4>
          <div className="component-grid">
            <div className="demo-item">
              <label>Basic Unchecked</label>
              <Checkbox />
            </div>
            <div className="demo-item">
              <label>Basic Checked</label>
              <Checkbox defaultChecked />
            </div>
            <div className="demo-item">
              <label>With Label</label>
              <Checkbox label="Accept terms" />
            </div>
            <div className="demo-item">
              <label>Checked with Label</label>
              <Checkbox label="Subscribe to newsletter" defaultChecked />
            </div>
            <div className="demo-item">
              <label>Disabled</label>
              <Checkbox label="Unavailable option" disabled />
            </div>
            <div className="demo-item">
              <label>Error State</label>
              <Checkbox label="Required field" error />
            </div>
          </div>
        </div>

        <div className="component-info">
          <p><strong>Documentation:</strong> Supports controlled and uncontrolled modes, optional labels, error states, and full keyboard accessibility.</p>
        </div>
      </section>

      {/* Switch Component Overview */}
      <section className="component-section">
        <div className="component-overview">
          <div className="overview-header">
            <h3>Switch Component</h3>
            <span className="component-tag">Form</span>
          </div>
          <p className="overview-description">
            Interactive toggle switch for on/off states with optional label support.
          </p>
        </div>

        <div className="demo-group">
          <h4>Quick Examples</h4>
          <div className="component-grid">
            <div className="demo-item">
              <label>Basic Unchecked</label>
              <Switch />
            </div>
            <div className="demo-item">
              <label>Basic Checked</label>
              <Switch defaultChecked />
            </div>
            <div className="demo-item">
              <label>With Label</label>
              <Switch label="Dark mode" />
            </div>
            <div className="demo-item">
              <label>Checked with Label</label>
              <Switch label="Notifications enabled" defaultChecked />
            </div>
            <div className="demo-item">
              <label>Label Left</label>
              <Switch label="Left side" labelPosition="left" />
            </div>
            <div className="demo-item">
              <label>Disabled</label>
              <Switch label="Unavailable option" disabled />
            </div>
          </div>
        </div>

        <div className="component-info">
          <p><strong>Documentation:</strong> Supports controlled and uncontrolled modes, optional labels with flexible positioning, and full keyboard accessibility.</p>
        </div>
      </section>

      {/* RadioButton Component Overview */}
      <section className="component-section">
        <div className="component-overview">
          <div className="overview-header">
            <h3>RadioButton Component</h3>
            <span className="component-tag">Form</span>
          </div>
          <p className="overview-description">
            Single-select radio input with multiple states and optional label support.
          </p>
        </div>

        <div className="demo-group">
          <h4>Quick Examples</h4>
          <div className="component-grid">
            <div className="demo-item">
              <label>Basic Unchecked</label>
              <RadioButton name="all-radio" />
            </div>
            <div className="demo-item">
              <label>Basic Checked</label>
              <RadioButton name="all-radio" defaultChecked />
            </div>
            <div className="demo-item">
              <label>With Label</label>
              <RadioButton name="all-radio" label="Option A" />
            </div>
            <div className="demo-item">
              <label>Checked with Label</label>
              <RadioButton name="all-radio" label="Option B" defaultChecked />
            </div>
            <div className="demo-item">
              <label>Disabled</label>
              <RadioButton name="all-radio" label="Unavailable" disabled />
            </div>
            <div className="demo-item">
              <label>Hidden Label</label>
              <RadioButton name="all-radio" label="Hidden label" hideLabel />
            </div>
          </div>
        </div>

        <div className="component-info">
          <p><strong>Documentation:</strong> Supports controlled and uncontrolled modes, radio group usage via <code>name</code>, and full keyboard accessibility.</p>
        </div>
      </section>

      {/* Label Component Overview */}
      <section className="component-section">
        <div className="component-overview">
          <div className="overview-header">
            <h3>Label Component</h3>
            <span className="component-tag">Form</span>
          </div>
          <p className="overview-description">
            Flexible label element with optional icons and required field indicators.
          </p>
        </div>

        <div className="demo-group">
          <h4>Quick Examples</h4>
          <div className="component-grid">
            <div className="demo-item">
              <label>Simple Label</label>
              <Label label="Username" icon={false} />
            </div>
            <div className="demo-item">
              <label>With Icon</label>
              <Label label="Email" icon={true} iconComponent={<InfoIcon />} />
            </div>
            <div className="demo-item">
              <label>Required Field</label>
              <Label label="Password" type="required" icon={false} />
            </div>
            <div className="demo-item">
              <label>Required with Icon</label>
              <Label label="Full Name" type="required" icon={true} iconComponent={<InfoIcon />} />
            </div>
            <div className="demo-item">
              <label>In Form Context</label>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                <Label label="Email Address" type="required" icon={false} />
                <input 
                  type="email" 
                  placeholder="your@email.com"
                  style={{
                    padding: '8px 12px',
                    border: '1px solid #d8d8d8',
                    borderRadius: '4px',
                    fontFamily: 'var(--fontfamily-body)',
                    fontSize: '14px',
                  }}
                />
              </div>
            </div>
          </div>
        </div>

        <div className="component-info">
          <p><strong>Documentation:</strong> Includes optional icons, required field indicators with asterisk, and integrates seamlessly with form elements.</p>
        </div>
      </section>

      {/* MenuItem Component Overview */}
      <section className="component-section">
        <div className="component-overview">
          <div className="overview-header">
            <h3>MenuItem Component</h3>
            <span className="component-tag">Navigation</span>
          </div>
          <p className="overview-description">
            Individual menu item with states and icon support.
          </p>
        </div>

        <div className="demo-group">
          <h4>Quick Examples</h4>
          <div className="component-grid">
            <div className="demo-item">
              <label>Default</label>
              <MenuItem label="Menu Item" />
            </div>
            <div className="demo-item">
              <label>With Icon</label>
              <MenuItem label="Settings" iconRight={<SettingsIcon />} />
            </div>
            <div className="demo-item">
              <label>Selected</label>
              <MenuItem label="Active Item" selected iconRight={<SettingsIcon />} />
            </div>
            <div className="demo-item">
              <label>Disabled</label>
              <MenuItem label="Disabled Item" status="disabled" iconRight={<SettingsIcon />} />
            </div>
          </div>
        </div>

        <div className="component-info">
          <p><strong>Documentation:</strong> Supports default and selected states, optional left/right icons, and hover/disabled variations.</p>
        </div>
      </section>

      {/* Menu Component Overview */}
      <section className="component-section">
        <div className="component-overview">
          <div className="overview-header">
            <h3>Menu Component</h3>
            <span className="component-tag">Navigation</span>
          </div>
          <p className="overview-description">
            Navigation menu with multiple items and optional scrollbar.
          </p>
        </div>

        <div className="demo-group">
          <h4>Quick Examples</h4>
          <div className="component-grid">
            <div className="demo-item">
              <label>Basic Menu</label>
              <Menu
                items={[
                  { label: 'Home', iconRight: <HomeIcon /> },
                  { label: 'Profile', iconRight: <UserIcon /> },
                  { label: 'Settings', iconRight: <SettingsIcon /> },
                ]}
                showScrollbar={false}
              />
            </div>
            <div className="demo-item">
              <label>Interactive Menu</label>
              <Menu
                items={[
                  { label: 'Dashboard', iconLeft: <HomeIcon />, showIconRight: false },
                  { label: 'Projects', iconLeft: <SettingsIcon />, showIconRight: false },
                  { label: 'Team', iconLeft: <UserIcon />, showIconRight: false },
                ]}
                selectedIndex={menuSelectedIndex}
                onItemSelect={setMenuSelectedIndex}
                showScrollbar={false}
              />
            </div>
          </div>
        </div>

        <div className="component-info">
          <p><strong>Documentation:</strong> Controlled or uncontrolled selection, optional scrollbar, and supports all MenuItem props per item.</p>
        </div>
      </section>

      {/* Table Component Overview */}
      <section className="component-section">
        <div className="component-overview">
          <div className="overview-header">
            <h3>Table Component</h3>
            <span className="component-tag">Data Display</span>
          </div>
          <p className="overview-description">
            Comprehensive table component for displaying structured data with various styling options.
          </p>
        </div>

        <div className="demo-group">
          <h4>Quick Examples</h4>
          <div className="demo-item">
            <label>Basic Table</label>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHeaderCell>Name</TableHeaderCell>
                  <TableHeaderCell>Email</TableHeaderCell>
                  <TableHeaderCell>Role</TableHeaderCell>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow>
                  <TableCell>Sarah Johnson</TableCell>
                  <TableCell>sarah@example.com</TableCell>
                  <TableCell>Admin</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Michael Chen</TableCell>
                  <TableCell>michael@example.com</TableCell>
                  <TableCell>User</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Emily Rodriguez</TableCell>
                  <TableCell>emily@example.com</TableCell>
                  <TableCell>Manager</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </div>
        </div>

        <div className="component-info">
          <p><strong>Documentation:</strong> Supports bordered, hoverable, and striped variants. Flexible cell alignment and selected row states. Resizable columns available with ResizableTable component.</p>
        </div>
      </section>

      {/* ction>

      {/* Integration Example */}
      <section className="component-section">
        <h3>Integration Example</h3>
        <p className="section-description">
          Components working together in a typical form scenario.
        </p>

        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '2rem',
          maxWidth: '800px',
        }}>
          <div>
            <Label label="First Name" type="required" icon={false} />
            <input 
              type="text" 
              placeholder="John"
              style={{
                width: '100%',
                padding: '10px 12px',
                marginTop: '8px',
                border: '1px solid #d8d8d8',
                borderRadius: '4px',
                fontFamily: 'var(--fontfamily-body)',
              }}
            />
          </div>
          <div>
            <Label label="Last Name" type="required" icon={false} />
            <input 
              type="text" 
              placeholder="Doe"
              style={{
                width: '100%',
                padding: '10px 12px',
                marginTop: '8px',
                border: '1px solid #d8d8d8',
                borderRadius: '4px',
                fontFamily: 'var(--fontfamily-body)',
              }}
            />
          </div>
        </div>

        <div style={{ marginTop: '2rem', display: 'flex', gap: '1rem' }}>
          <Button variant="default">Save Changes</Button>
          <Button variant="outline">Cancel</Button>
        </div>
      </section>
    </>
  );
};
