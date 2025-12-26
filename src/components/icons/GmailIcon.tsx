import { SVGProps } from "react";

export function GmailIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M22 6C22 4.9 21.1 4 20 4H4C2.9 4 2 4.9 2 6V18C2 19.1 2.9 20 4 20H20C21.1 20 22 19.1 22 18V6Z"
        fill="#EA4335"
      />
      <path
        d="M22 6L12 13L2 6"
        stroke="white"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M2 6V18C2 19.1 2.9 20 4 20H20C21.1 20 22 19.1 22 18V6"
        fill="#EA4335"
      />
      <path
        d="M22 6L12 13L2 6"
        fill="#FFEB3B"
        opacity="0.3"
      />
      <path
        d="M2 6L12 13L22 6"
        stroke="white"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
