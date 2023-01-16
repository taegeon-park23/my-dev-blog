import React, { HTMLAttributes, ReactElement } from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: JSX.Element | string;
}

export function Button(props: ButtonProps): ReactElement {
  const { children, className } = props;
  return (
    <button
      type="button"
      className={
        className ?? 'bg-lightBlue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'
      }
      {...props}
    >
      {children}
    </button>
  );
}
