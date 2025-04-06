import Image from "next/image";
import { FC, ReactNode } from "react";
import { getDictionary } from "@/i18n/dictionaries";
import { formatBrowserTitle } from "@/utils/metadata";
import { EachTech } from "@/components/techstacks/EachTech";

export async function generateMetadata(
  { params } : { params: Promise<{ lang: "en" | "ja" }>}
) {
  const lang = (await params).lang;
  const dictionary = await getDictionary(lang);
  return {
    title: formatBrowserTitle(dictionary.title.about),
    description: "introduction page",
    locale: lang,
  };
}

interface AboutSectionProps {
  title: string;
  children?: ReactNode;
}

const AboutSection: FC<AboutSectionProps> = (props) => {
  return (
    <section id="about" className="scroll-mt-14 px-4 flex flex-col items-start justify-center py-4">
      <h2 className="text-2xl md:text-4xl font-bold py-4">{props.title}</h2>
      {props.children}
    </section>
  );
}


export default async function Home({ params}: { params: Promise<{ lang: "en" | "ja" }> }) {
  const  lang = (await params).lang
  const dictionary = await getDictionary(lang);

  return (
    <div className="relative min-h-screen bg-background">
      <main className="space-y-4">
        <h1 className="text-2xl md:text-4xl font-bold p-4">{dictionary.title.about}</h1>  
        <AboutSection
          title="Skills"
        >
          <h3 className="text-xl md:text-2xl font-bold py-4">Markup</h3>
          {dictionary.techstack.content.map((tech, index) => (
            <EachTech key={`tech-${index}`} tech={tech.name} level={tech.level} contents={tech.contents}/>
          ))}
        </AboutSection>
      </main>
    </div>
  );
}
