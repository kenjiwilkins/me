"use client";
import { FC } from "react";
import { ArrowRight } from "lucide-react";
import { Section } from "./Section";
import { Card } from "./cards";
import english from "@/i18n/dictionaries/en/common.json";
import japanese from "@/i18n/dictionaries/ja/common.json";

interface Props {
  lang: string;
}

const getText = (lang: string) => lang === "ja" ? japanese : english;

export const Blog: FC<Props> = ({ lang }) => {
  const t = getText(lang);
  const blog = t.blog;

  return (
    <Section id="blog" title={blog.title}>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {blog.content.map((post, i) => (
          <Card key={i} className="p-6 hover:border-indigo-500/30 transition-colors">
            <p className="text-xs text-gray-500 mb-2">{post.date}</p>
            <h3 className="text-lg font-bold mb-2">{post.title}</h3>
            <p className="text-sm text-gray-400 mb-4">{post.excerpt}</p>
            <div className="flex flex-wrap gap-1.5 mb-4">
              {post.tags.map((tag) => (
                <span key={tag} className="text-xs px-2 py-0.5 rounded-full bg-indigo-500/20 text-indigo-300">
                  {tag}
                </span>
              ))}
            </div>
            <a href="#" className="text-sm text-indigo-400 hover:text-indigo-300 transition-colors inline-flex items-center gap-1">
              Read more <ArrowRight size={14} />
            </a>
          </Card>
        ))}
      </div>
    </Section>
  );
}
