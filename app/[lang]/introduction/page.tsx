import { Profile } from "@/components/Profile";
import { About } from "@/components/About";
import { getDictionary } from "@/i18n/dictionaries";
import { formatBrowserTitle } from "@/utils/metadata";

export async function generateMetadata(
  { params } : { params: Promise<{ lang: "en" | "ja" }>}
) {
  const lang = (await params).lang;
  const dictionary = await getDictionary(lang);
  return {
    title: formatBrowserTitle(dictionary.title.home),
    description: "introduction page",
    locale: lang,
  };
}

export default async function Home({ params}: { params: Promise<{ lang: "en" | "ja" }> }) {
  const  lang = (await params).lang
  const dictionary = await getDictionary(lang);
  const introductionItems = [
    {
      title: dictionary.introduction.title,
      description: dictionary.introduction.content
    },
    {
      title: dictionary.introduction.latest.title,
      description: dictionary.introduction.latest.content
    }
  ]
  return (
    <div className="relative min-h-screen bg-background">
      <main className="space-y-4">
        <Profile 
          name={dictionary.profile.name}
          role={dictionary.profile.role}
        />
        <About 
          items={introductionItems}
        />
      </main>
    </div>
  );
}
