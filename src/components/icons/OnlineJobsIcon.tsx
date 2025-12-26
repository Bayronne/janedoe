import { SVGProps } from "react";

export function OnlineJobsIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      aria-label="OnlineJobs.ph"
      role="img"
      {...props}
    >
      <rect x="2" y="2" width="20" height="20" rx="2" fill="#1B5E7A" />
      {/* Simplified person silhouette */}
      <circle cx="12" cy="8" r="2.5" fill="white" />
      <path
        d="M8 20V16C8 14.3431 9.34315 13 11 13H13C14.6569 13 16 14.3431 16 16V20"
        stroke="white"
        strokeWidth="1.5"
        strokeLinecap="round"
        fill="none"
      />
      {/* Circular arc */}
      <path
        d="M6 12C6 8.68629 8.68629 6 12 6C15.3137 6 18 8.68629 18 12"
        stroke="white"
        strokeWidth="1.5"
        strokeLinecap="round"
        fill="none"
        opacity="0.6"
      />
    </svg>
  );
}
