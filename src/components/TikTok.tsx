
import React from 'react';

export const TikTok = ({ size = 24, color = 'currentColor', ...props }) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke={color}
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M9 12.5V17.5C9 18.6046 8.10457 19.5 7 19.5C5.89543 19.5 5 18.6046 5 17.5C5 16.3954 5.89543 15.5 7 15.5"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        d="M9 8.5V4.5H11C11 7 13.5 8.5 16 8.5V10.5"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        d="M16 10.5V15C16 17.2091 14.2091 19 12 19C9.79086 19 8 17.2091 8 15V10.5H9"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
};
