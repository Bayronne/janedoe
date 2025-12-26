import { SVGProps } from "react";

export function OnlineJobsIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      {/* OnlineJobs.ph logo - person silhouette with circular arc */}
      {/* Circular arc behind */}
      <path
        d="M4 12c0-4.4 3.6-8 8-8s8 3.6 8 8"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
      />
      {/* Person silhouette - simplified */}
      <ellipse cx="12" cy="7" rx="2.2" ry="2.5" />
      <path
        d="M9.5 10.5c0 0 0.5 1 2.5 1s2.5-1 2.5-1l1.5 3.5-1 0.5-0.5 5h-5l-0.5-5-1-0.5 1.5-3.5z"
      />
      <path
        d="M8 19c0.5-1 1.5-1.5 2-2l-1-2.5"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <path
        d="M16 19c-0.5-1-1.5-1.5-2-2l1-2.5"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  );
}
