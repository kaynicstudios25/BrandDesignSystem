/**
 * Switch Component
 * 
 * A flexible toggle switch component that integrates with the design token system.
 * Supports multiple states (default, hover, focus, disabled) with optional label.
 * 
 * Design Reference: Figma Multi-Brand Design System (node 171:9156)
 */

import React, { useState, useId } from 'react';
import { SwitchProps } from './Switch.types';
import { getSwitchStyles } from './Switch.styles';

export const Switch = React.forwardRef<HTMLInputElement, SwitchProps>(
  (
    {
      checked: controlledChecked,
      defaultChecked = false,
      onChange,
      label,
      hideLabel = false,
      labelPosition = 'right',
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

    const styles = getSwitchStyles({ status, checked });

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

    // Handle click on the switch track (label-like interaction)
    const handleTrackClick = () => {
      if (!disabled && ref && typeof ref === 'object' && 'current' in ref) {
        const input = ref.current;
        if (input) {
          const newChecked = !input.checked;
          if (!isControlled) {
            setInternalChecked(newChecked);
          }
          // Create and dispatch change event
          const event = new Event('change', { bubbles: true });
          Object.defineProperty(event, 'target', { 
            writable: false, 
            value: { ...input, checked: newChecked } 
          });
          onChange?.(event as any);
        }
      }
    };

    const labelElement = label && !hideLabel ? (
      <label
        htmlFor={id}
        style={styles.label}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        {label}
      </label>
    ) : null;

    return (
      <div
        style={{
          ...styles.container,
          flexDirection: labelPosition === 'left' ? 'row-reverse' : 'row',
          ...containerStyle,
        }}
        className={className}
      >
        <input
          ref={ref}
          id={id}
          type="checkbox"
          checked={checked}
          onChange={handleChange}
          disabled={disabled}
          onFocus={handleFocus}
          onBlur={handleBlur}
          style={styles.hiddenInput}
          {...rest}
        />
        
        <div
          style={styles.switchTrack}
          onClick={handleTrackClick}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          role="presentation"
          aria-hidden="true"
        >
          <div style={styles.switchThumb} />
        </div>

        {labelElement}
      </div>
    );
  }
);

Switch.displayName = 'Switch';
