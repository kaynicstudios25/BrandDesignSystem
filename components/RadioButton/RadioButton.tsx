/**
 * RadioButton Component
 * 
 * A flexible radio button component that integrates with the design token system.
 * Supports multiple states (default, hover, focus, disabled) with optional label.
 * 
 * Design Reference: Figma Multi-Brand Design System (nodes 169:9079, 170:9113)
 */

import React, { useState, useId } from 'react';
import { RadioButtonProps } from './RadioButton.types';
import { getRadioButtonStyles } from './RadioButton.styles';

export const RadioButton = React.forwardRef<HTMLInputElement, RadioButtonProps>(
  (
    {
      checked: controlledChecked,
      defaultChecked = false,
      onChange,
      label,
      hideLabel = false,
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
      : isFocused 
      ? 'focus' 
      : isHovered 
      ? 'hover' 
      : 'default';

    const styles = getRadioButtonStyles({ status, checked });

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
        data-node-id="170:9113"
      >
        {/* Hidden native input for accessibility */}
        <input
          ref={ref}
          id={id}
          type="radio"
          checked={checked}
          onChange={handleChange}
          onFocus={handleFocus}
          onBlur={handleBlur}
          disabled={disabled}
          style={styles.hiddenInput}
          aria-label={label || 'Radio Button'}
          {...rest}
        />

        {/* Visual radio button */}
        <div
          role="presentation"
          style={styles.radioBox}
          onClick={handleBoxClick}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          data-node-id={checked ? '169:9078' : '170:9096'}
        >
          <div style={styles.innerDot} data-node-id={checked ? '169:9081' : undefined} />
        </div>

        {/* Label */}
        {showLabel && (
          <label
            htmlFor={id}
            style={styles.label}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            data-node-id="170:9111"
          >
            {label}
          </label>
        )}
      </div>
    );
  }
);

RadioButton.displayName = 'RadioButton';
