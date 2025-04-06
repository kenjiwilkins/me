import { FC, ReactNode } from "react";

interface CardProps {
  children: ReactNode;
}

export const CardTitle: FC<CardProps> = ({ children }) => {
  return (
    <div className="text-2xl font-semibold leading-none tracking-tight">
      {children}
    </div>
  );
}