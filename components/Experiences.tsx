"use client";
import { FC } from "react";
import { GraduationCap, Briefcase } from "lucide-react";
import { Section } from "./Section";
import { Card } from "./cards";
import english from "@/i18n/dictionaries/en/common.json";
import japanese from "@/i18n/dictionaries/ja/common.json";

interface Props {
  lang: string;
}

const getText = (lang: string) => lang === "ja" ? japanese : english;

export const Experiences: FC<Props> = ({ lang }) => {
  const t = getText(lang);
  const history = t.history;
  const education = history.content[0];
  const work = history.content[1];

  return (
    <Section id="experiences" title={history.title}>
      <div className="space-y-12">
        <div>
          <div className="flex items-center gap-3 mb-6">
            <GraduationCap className="text-indigo-400" size={28} />
            <h3 className="text-2xl font-bold">{education.title}</h3>
          </div>
          {education.content.map((edu, i) => (
            <Card key={i} className="p-6">
              <h4 className="text-xl font-bold">{edu.title}</h4>
              {"major" in edu && <p className="text-gray-400 mt-1">{edu.major}</p>}
              {"minor" in edu && <p className="text-gray-400">{edu.minor}</p>}
              <p className="text-sm text-indigo-400 mt-2">{edu.period}</p>
            </Card>
          ))}
        </div>

        <div>
          <div className="flex items-center gap-3 mb-6">
            <Briefcase className="text-indigo-400" size={28} />
            <h3 className="text-2xl font-bold">{work.title}</h3>
          </div>
          {work.content.filter((c): c is typeof c & { projects: Array<{ title: string; description: string; role: string; period: string; techstack: string[] }> } => "projects" in c).map((company, ci) => (
            <div key={ci} className="space-y-4">
              <div className="flex flex-col sm:flex-row sm:items-center gap-2 mb-4">
                <h4 className="text-xl font-bold">{company.title}</h4>
                <span className="text-sm text-gray-400">{company.period}</span>
                {"position" in company && <span className="text-sm text-indigo-400">{company.position}</span>}
              </div>
              <div className="border-l-2 border-indigo-500/30 ml-4 space-y-4">
                {company.projects.map((project, pi) => (
                  <div key={pi} className="relative pl-8">
                    <div className="absolute left-[-5px] top-2 w-2 h-2 rounded-full bg-indigo-400" />
                    <Card className="p-5">
                      <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-1 mb-2">
                        <h5 className="text-lg font-semibold">{project.title}</h5>
                        <span className="text-xs text-gray-400 whitespace-nowrap">{project.period}</span>
                      </div>
                      <p className="text-sm text-indigo-400 mb-2">{project.role}</p>
                      <p className="text-sm text-gray-300 mb-3">{project.description}</p>
                      <div className="flex flex-wrap gap-1.5">
                        {project.techstack.map((tech) => (
                          <span key={tech} className="text-xs px-2 py-0.5 rounded-full bg-indigo-500/20 text-indigo-300">
                            {tech}
                          </span>
                        ))}
                      </div>
                    </Card>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}
