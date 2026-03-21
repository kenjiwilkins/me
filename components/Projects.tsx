"use client";
import { FC } from "react";
import { Github, ExternalLink } from "lucide-react";
import { Section } from "./Section";
import { Card } from "./cards";
import english from "@/i18n/dictionaries/en/common.json";
import japanese from "@/i18n/dictionaries/ja/common.json";

interface Props {
  lang: string;
}

const getText = (lang: string) => lang === "ja" ? japanese : english;

export const Projects: FC<Props> = ({ lang }) => {
  const t = getText(lang);
  const projects = t.projects;

  return (
    <Section id="projects" title={projects.title}>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {projects.content.map((project, i) => (
          <Card key={i} className="p-6 hover:border-indigo-500/30 transition-colors">
            <div className="flex items-start justify-between mb-3">
              <h3 className="text-xl font-bold">{project.title}</h3>
              <div className="flex gap-2">
                {project.github && (
                  <a href={project.github} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-indigo-400 transition-colors">
                    <Github size={20} />
                  </a>
                )}
                {project.url && (
                  <a href={project.url} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-indigo-400 transition-colors">
                    <ExternalLink size={20} />
                  </a>
                )}
              </div>
            </div>
            <p className="text-sm text-gray-300 mb-4">{project.description}</p>
            <div className="flex flex-wrap gap-1.5">
              {project.techstack.map((tech) => (
                <span key={tech} className="text-xs px-2 py-0.5 rounded-full bg-indigo-500/20 text-indigo-300">
                  {tech}
                </span>
              ))}
            </div>
          </Card>
        ))}
      </div>
    </Section>
  );
}
