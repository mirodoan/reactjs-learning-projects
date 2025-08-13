import type { ReactNode } from "react";

interface JobProps {
  title: string;
  icon: ReactNode;
  bgClass: string;
}

export const Job: React.FC<JobProps> = ({
  title,
  icon,
  bgClass: bgColor,
}: JobProps) => {
  return (
    <div
      className={`${bgColor} flex aspect-square h-32 w-32 flex-col items-center justify-center rounded-lg p-4`}
    >
      <div className="mb-2 flex h-12 items-center justify-center">{icon}</div>
      <p className="text-center text-base font-medium">{title}</p>
    </div>
  );
};
