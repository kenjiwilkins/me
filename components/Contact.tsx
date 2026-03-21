"use client";
import { FC } from "react";
import { Github, Linkedin, Mail } from "lucide-react";
import { Section } from "./Section";
import { Card } from "./cards";
import english from "@/i18n/dictionaries/en/common.json";
import japanese from "@/i18n/dictionaries/ja/common.json";

interface Props {
  lang: string;
}

const getText = (lang: string) => lang === "ja" ? japanese : english;

const iconMap: Record<string, FC<{ size?: number; className?: string }>> = {
  github: Github,
  linkedin: Linkedin,
  mail: Mail,
};

export const Contact: FC<Props> = ({ lang }) => {
  const t = getText(lang);
  const contact = t.contact;

  return (
    <Section id="contact" title={contact.title}>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-3xl mx-auto">
        {contact.content.map((item, i) => {
          const Icon = iconMap[item.icon] ?? Mail;
          return (
            <a key={i} href={item.url} target="_blank" rel="noopener noreferrer">
              <Card className="p-6 text-center hover:border-indigo-500/30 transition-colors group">
                <Icon size={32} className="mx-auto mb-3 text-indigo-400 group-hover:scale-110 transition-transform" />
                <h3 className="text-lg font-bold mb-1">{item.label}</h3>
                <p className="text-sm text-gray-400">{item.handle}</p>
              </Card>
            </a>
          );
        })}
      </div>
    </Section>
  );
}
