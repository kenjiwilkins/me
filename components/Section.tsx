import { FC, ReactNode } from "react";

interface SectionProps {
  children: ReactNode;
  id: string;
  class?: string;
}

export const Section: FC<SectionProps> = (props) => {
  const defaultClass = "scroll-mt-14 flex flex-col items-center justify-center space-y-4 py-4";
  const className = props.class ? `${defaultClass} ${props.class}` : defaultClass;
  return (
    <section id={props.id} className={className}>
      {props.children}
    </section>
  );
}