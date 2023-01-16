import React, { ReactElement } from 'react';
import { IconProp } from '@/types/icons/IconSvgProp';

export function BarsIcon(props: IconProp): ReactElement {
  const { fill, viewBox, strokeWidth, stroke, className, width, height } = props;
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill={fill ?? 'none'}
      viewBox={viewBox ?? '0 0 24 24'}
      strokeWidth={strokeWidth ?? 1.5}
      stroke={stroke ?? 'currentColor'}
      className={className ?? ''}
      width={width ?? 24}
      height={height ?? 24}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
      />
    </svg>
  );
}
