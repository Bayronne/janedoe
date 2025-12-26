import { SVGProps } from "react";
import onlineJobsLogo from "@/assets/onlinejobs-logo.svg";

export function OnlineJobsIcon(props: SVGProps<SVGSVGElement>) {
  const { className, ...rest } = props;
  return (
    <img 
      src={onlineJobsLogo} 
      alt="OnlineJobs.ph" 
      className={className as string}
      style={{ width: props.width || '1em', height: props.height || '1em' }}
    />
  );
}
