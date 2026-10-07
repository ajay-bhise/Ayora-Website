import { type ReactNode } from "react";

interface CardProps {
  children: ReactNode;
  className?: string;
  hover?: boolean;
  elevated?: boolean;
}

export default function Card({
  children,
  className = "",
  hover = false,
  elevated = false,
}: CardProps) {
  return (
    <div
      className={`
        rounded-xl border border-border p-6
        ${elevated ? "bg-elevated" : "bg-surface"}
        ${hover ? "transition-colors duration-200 hover:border-border-mid hover:bg-elevated" : ""}
        ${className}
      `}
    >
      {children}
    </div>
  );
}
