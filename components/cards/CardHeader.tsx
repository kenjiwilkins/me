import { FC, ReactNode } from "react";

interface CardProps {
  children: ReactNode;
}

export const CardHeader: FC<CardProps> = ({ children }) => {
  return (
    <div className="flex flex-col space-y-1.5 p-6">
      {children}
    </div>
  );
}