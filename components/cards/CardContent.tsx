import { FC, ReactNode } from "react";

interface CardProps {
  children: ReactNode;
}

export const CardContent: FC<CardProps> = ({ children }) => {
  return (
    <div className="p-6 pt-0">
      {children}
    </div>
  );
}