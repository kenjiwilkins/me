import { FC } from "react";

interface EachTechProps {
  tech: string;
  level: string;
  contents: string[]
}

export const EachTech: FC<EachTechProps> = (props) => {
  return (
    <div className="flex flex-col md:flex-row items-start justify-center gap-2">
      <p className="text-lg md:text-xl font-bold">
        {props.tech}
      </p>
      <p className="font-semibold">
        {props.level}
      </p>
      <p className="flex flex-col gap-2">
        {props.contents.map((content, index) => (
          <span key={`${props.tech}-${index}`}>{content}</span>
        ))}
      </p>
    </div>
  );
}