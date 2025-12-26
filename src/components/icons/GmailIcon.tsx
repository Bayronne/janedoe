import { SVGProps } from "react";

export function GmailIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      aria-label="Gmail"
      role="img"
      {...props}
    >
      <rect x="2" y="4" width="20" height="16" rx="2" fill="#EA4335" />
      <path
        d="M22 6L12 13L2 6"
        stroke="white"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
    </svg>
  );
}
