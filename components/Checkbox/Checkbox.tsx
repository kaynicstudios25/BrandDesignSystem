/**
 * Checkbox Component
 * 
 * A flexible checkbox component that integrates with the design token system.
 * Supports multiple states (default, hover, focus, disabled, error) with optional label.
 * 
 * Design Reference: Figma Multi-Brand Design System (nodes 167:8982, 167:9051)
 */

import React, { useState, useId } from 'react';
import { CheckboxProps } from './Checkbox.types';
import { getCheckboxStyles } from './Checkbox.styles';

/**
 * Checkmark Icon Component
 */
const CheckmarkIcon: React.FC<{ style?: React.CSSProperties }> = ({ style }) => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    style={style}
  >
    <path
      d="M16.6667 5L7.50004 14.1667L3.33337 10"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export const Checkbox = React.forwardRef<HTMLInputElement, CheckboxProps>(
  (
    {
      checked: controlledChecked,
      defaultChecked = false,
      onChange,
      label,
      hideLabel = false,
      error = false,
      disabled = false,
      className = '',
      containerStyle,
      onMouseEnter,
      onMouseLeave,
      onFocus,
      onBlur,
      id: providedId,
      ...rest
    },
    ref
  ) => {
    const generatedId = useId();
    const id = providedId || generatedId;
    
    // Controlled vs uncontrolled
    const [internalChecked, setInternalChecked] = useState(defaultChecked);
    const isControlled = controlledChecked !== undefined;
    const checked = isControlled ? controlledChecked : internalChecked;

    // Interactive states
    const [isHovered, setIsHovered] = useState(false);
    const [isFocused, setIsFocused] = useState(false);

    // Determine status based on state
    const status = disabled 
      ? 'disabled' 
      : error
      ? 'error'
      : isFocused 
      ? 'focus' 
      : isHovered 
      ? 'hover' 
      : 'default';

    const styles = getCheckboxStyles({ status, checked });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      if (disabled) return;
      
      if (!isControlled) {
        setInternalChecked(e.target.checked);
      }
      
      onChange?.(e);
    };

    const handleMouseEnter = (e: React.MouseEvent) => {
      if (disabled) return;
      setIsHovered(true);
      onMouseEnter?.(e as any);
    };

    const handleMouseLeave = (e: React.MouseEvent) => {
      setIsHovered(false);
      onMouseLeave?.(e as any);
    };

    const handleFocus = (e: React.FocusEvent<HTMLInputElement>) => {
      if (disabled) return;
      setIsFocused(true);
      onFocus?.(e);
    };

    const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
      setIsFocused(false);
      onBlur?.(e);
    };

    const handleBoxClick = () => {
      if (disabled) return;
      
      // Trigger the hidden input click
      const inputElement = document.getElementById(id) as HTMLInputElement;
      if (inputElement) {
        inputElement.click();
      }
    };

    const showLabel = label && !hideLabel;

    return (
      <div
        className={className}
        style={{ ...styles.container, ...containerStyle }}
        data-node-id="167:9051"
      >
        {/* Hidden native input for accessibility */}
        <input
          ref={ref}
          id={id}
          type="checkbox"
          checked={checked}
          onChange={handleChange}
          onFocus={handleFocus}
          onBlur={handleBlur}
          disabled={disabled}
          style={styles.hiddenInput}
          aria-label={label || 'Checkbox'}
          {...rest}
        />

        {/* Visual checkbox */}
        <div
          role="presentation"
          style={styles.checkboxBox}
          onClick={handleBoxClick}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          data-node-id={checked ? '167:8981' : '167:9021'}
        >
          <CheckmarkIcon style={styles.checkmark} />
        </div>

        {/* Label */}
        {showLabel && (
          <label
            htmlFor={id}
            style={styles.label}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            data-node-id="167:9049"
          >
            {label}
          </label>
        )}
      </div>
    );
  }
);

Checkbox.displayName = 'Checkbox';
