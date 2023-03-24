import React from 'react';
import { IconProp } from '@/types/icons/IconSvgProp';

const DEFAULT_PROPS = {
  fill: 'none',
  viewBox: '0 0 24 24',
  strokeWidth: 1.5,
  stroke: 'currentColor',
  className: 'w-6 h-6',
  width: 24,
  height: 24,
};

export function SearchIcon({ ...props }: IconProp): React.ReactElement {
  const {
    fill = DEFAULT_PROPS.fill,
    viewBox = DEFAULT_PROPS.viewBox,
    strokeWidth = DEFAULT_PROPS.strokeWidth,
    stroke = DEFAULT_PROPS.stroke,
    className = DEFAULT_PROPS.className,
    width = DEFAULT_PROPS.width,
    height = DEFAULT_PROPS.height,
  } = props;

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill={fill}
      viewBox={viewBox}
      strokeWidth={strokeWidth}
      stroke={stroke}
      className={className}
      width={width}
      height={height}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M15.75 15.75l-2.489-2.489m0 0a3.375 3.375 0 10-4.773-4.773 3.375 3.375 0 004.774 4.774zM21 12a9 9 0 11-18 0 9 9 0 0118 0z"
      />
    </svg>
  );
}
