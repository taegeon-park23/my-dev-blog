// Button.tsx
import React, { ReactElement, useCallback } from 'react';
import { ButtonProps } from './Button.types';
import './Button.scss';

/**
 * @name Button
 * @description A reusable button component.
 * @param {ButtonProps} props The component props.
 * @returns {ReactElement} A React component.
 */
export function Button(props: ButtonProps): ReactElement {
  const { children, className, disabled, loading, icon, onClick } = props;

  const handleClick = useCallback(
    (event: React.MouseEvent<HTMLButtonElement>): void => {
      if (loading || disabled) {
        return;
      }

      if (onClick) {
        onClick(event);
      }
    },
    [disabled, onClick],
  );

  return (
    <div className={`Button ${loading ? 'opacity-50 cursor-not-allowed' : ''}}`}>
      <button
        {...props} // eslint-disable-line react/jsx-props-no-spreading -- We want to pass all props to the button. This is a generic component. We don't know what props the user will want to pass.
        type="button"
        disabled={!!loading || !!disabled}
        className={`${
          className ?? 'bg-lightBlue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'
        } `}
        onClick={handleClick}
      >
        {children}
        {icon ? <div className="Button__icon">{icon}</div> : null}
      </button>
      <div className="Button__loading">
        <div className="Button__loading__spinner" />
      </div>
    </div>
  );
}
