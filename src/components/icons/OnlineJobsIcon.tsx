import { SVGProps } from "react";

export function OnlineJobsIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 100 100"
      xmlns="http://www.w3.org/2000/svg"
      fill="currentColor"
      {...props}
    >
      {/* OnlineJobs.ph logo - person sitting inside circular arc */}
      {/* Left circular arc */}
      <path
        d="M15 55 C10 30, 30 5, 55 5"
        fill="none"
        stroke="currentColor"
        strokeWidth="10"
        strokeLinecap="round"
      />
      {/* Right circular arc */}
      <path
        d="M85 55 C90 30, 70 5, 55 5"
        fill="none"
        stroke="currentColor"
        strokeWidth="10"
        strokeLinecap="round"
      />
      {/* Head */}
      <ellipse cx="52" cy="25" rx="12" ry="14" />
      {/* Hair bump */}
      <path d="M48 12 C50 8, 58 10, 56 18 C54 14, 50 14, 48 12" />
      {/* Ear */}
      <ellipse cx="65" cy="27" rx="4" ry="5" />
      {/* Body/Torso */}
      <path
        d="M38 42 C36 50, 36 58, 40 65 L48 65 L50 55 L54 55 L56 65 L64 65 C68 58, 68 50, 66 42 C62 38, 56 36, 52 36 C48 36, 42 38, 38 42Z"
      />
      {/* Left arm - hand on hip */}
      <path
        d="M36 48 C28 52, 26 58, 30 62 C34 64, 40 60, 44 54"
        fill="none"
        stroke="currentColor"
        strokeWidth="8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      {/* Right arm - hand on hip */}
      <path
        d="M68 48 C76 52, 78 58, 74 62 C70 64, 64 60, 60 54"
        fill="none"
        stroke="currentColor"
        strokeWidth="8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      {/* Left leg - seated position */}
      <path
        d="M40 65 L32 80 L20 92 L32 95 L48 78 L50 70"
      />
      {/* Right leg - seated position */}
      <path
        d="M64 65 L62 80 L58 95 L70 95 L72 78 L68 70"
      />
    </svg>
  );
}
