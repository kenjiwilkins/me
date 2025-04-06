import { FC, ReactNode } from "react";

interface CardProps {
  children: ReactNode;
}

export const Card: FC<CardProps> = ({ children }) => {
  return (
    <div className="w-full rounded-lg border bg-card text-card-foreground shadow-sm">
      {children}
    </div>
  );
}