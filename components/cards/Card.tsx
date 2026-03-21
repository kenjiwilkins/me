import { FC, ReactNode } from "react";

interface CardProps {
  children: ReactNode;
  className?: string;
}

export const Card: FC<CardProps> = ({ children, className }) => {
  return (
    <div className={`w-full rounded-lg glass text-card-foreground shadow-sm ${className ?? ""}`}>
      {children}
    </div>
  );
}
