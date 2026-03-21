import { FC } from "react";
import { Section } from "./Section";
import { TechStackGrid } from "./TechStackGrid";
import english from "@/i18n/dictionaries/en/common.json";
import japanese from "@/i18n/dictionaries/ja/common.json";
import enAbout from "@/i18n/dictionaries/en/about.json";
import jaAbout from "@/i18n/dictionaries/ja/about.json";

interface Props {
  lang: string;
}

const getText = (lang: string) => lang === "ja" ? japanese : english;
const getAbout = (lang: string) => lang === "ja" ? jaAbout : enAbout;

export const About: FC<Props> = ({ lang }) => {
  const t = getText(lang);
  const about = getAbout(lang);

  return (
    <Section id="about" title={t.title.about}>
      <div className="flex flex-col gap-10">
        <div className="space-y-4 text-gray-300 text-lg leading-relaxed">
          {t.introduction.content.map((paragraph, i) => (
            <p key={i}>{paragraph}</p>
          ))}
        </div>

        <div>
          <h3 className="text-2xl font-bold mb-6">{about.techstack.title}</h3>
          <TechStackGrid techstack={about.techstack.content} />
        </div>
      </div>
    </Section>
  );
}
