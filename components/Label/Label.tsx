/**
 * Label Component
 * 
 * A flexible label component that integrates with the design token system.
 * Supports optional icons and required field indicators.
 * 
 * Design Reference: Figma Multi-Brand Design System (node 146:405)
 */

import React from 'react';
import { LabelProps } from './Label.types';
import { getLabelStyles } from './Label.styles';

export const Label = React.forwardRef<HTMLDivElement, LabelProps>(
  (
    {
      label = 'Label',
      icon = true,
      type = 'default',
      iconComponent,
      className = '',
      ...rest
    },
    ref
  ) => {
    const isRequired = type === 'required';
    const styles = getLabelStyles({
      type,
      hasIcon: icon,
    });

    return (
      <div
        ref={ref}
        className={className}
        style={styles.container}
        data-node-id={isRequired ? 'node-146_406' : 'node-146_384'}
        {...rest}
      >
        <p style={styles.labelText}>
          {label}
        </p>
        
        {icon && (
          <div style={styles.iconWrapper} data-name="help_outline" data-node-id="108:380">
            {iconComponent}
          </div>
        )}

        {isRequired && (
          <p style={styles.asterisk} data-node-id="146:411">
            *
          </p>
        )}
      </div>
    );
  }
);

Label.displayName = 'Label';
