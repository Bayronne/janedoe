import { SVGProps } from "react";

export function LinkedInIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      aria-label="LinkedIn"
      role="img"
      {...props}
    >
      <rect x="2" y="2" width="20" height="20" rx="2" fill="#0A66C2" />
      <path
        d="M7 10V17M7 7V7.01M11 17V13C11 11.8954 11.8954 11 13 11C14.1046 11 15 11.8954 15 13V17M11 10V17"
        stroke="white"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
