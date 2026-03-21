import { FC, ReactNode } from "react";

interface SectionProps {
  children: ReactNode;
  id: string;
  title?: string;
  className?: string;
  fullHeight?: boolean;
}

export const Section: FC<SectionProps> = ({ children, id, title, className, fullHeight }) => {
  const base = fullHeight ? "min-h-screen w-full flex items-center justify-center" : "w-full py-20 px-4 md:px-8";
  const classes = className ? `${base} ${className}` : base;
  return (
    <section id={id} className={classes}>
      {title ? (
        <div className="max-w-6xl mx-auto w-full">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">{title}</h2>
          {children}
        </div>
      ) : (
        children
      )}
    </section>
  );
}
