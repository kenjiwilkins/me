import { FC, ReactNode } from "react";

interface SectionProps {
  children: ReactNode;
  id: string;
  class?: string;
}

export const Section: FC<SectionProps> = (props) => {
  const defaultClass = "min-h-screen w-full flex items-center justify-center";
  const className = props.class ? `${defaultClass} ${props.class}` : defaultClass;
  return (
    <section id={props.id} className={className}>
      {props.children}
    </section>
  );
}