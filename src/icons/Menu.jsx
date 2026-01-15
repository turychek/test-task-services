import React from 'react';

export default function MenuIcon({ size = 32, className, ...props }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      fill="currentColor"
      viewBox="0 0 32 32"
      className={className}
      {...props}
    >
      <path
        fill="none"
        strokeLinejoin="round"
        strokeLinecap="round"
        strokeMiterlimit="4"
        strokeWidth="2.6667"
        stroke="#ffffff"
        d="M4 16h24"
      ></path>
      <path
        fill="none"
        strokeLinejoin="round"
        strokeLinecap="round"
        strokeMiterlimit="4"
        strokeWidth="2.6667"
        stroke="#ffffff"
        d="M4 8h24"
      ></path>
      <path
        fill="none"
        strokeLinejoin="round"
        strokeLinecap="round"
        strokeMiterlimit="4"
        strokeWidth="2.6667"
        stroke="#ffffff"
        d="M4 24h24"
      ></path>
    </svg>
  );
}
