import { getDictionary } from "@/i18n/dictionaries";

export default async function Home({ params}: { params: Promise<{ lang: "en" | "ja" }> }) {
  const  lang = (await params).lang
  const dictionary = await getDictionary(lang);

  return (
    <div className="relative flex justify-center min-h-screen bg-background">
      <main className="container space-y-4">
        <h1 className="text-2xl md:text-4xl font-bold p-4">Blog</h1>  
        <section id="blog" className="scroll-mt-14 px-4 flex flex-col items-start justify-center py-4">
          <h2 className="text-2xl md:text-4xl font-bold py-4">Blog</h2>
          <p>Blog page</p>
        </section>
      </main>
    </div>
  );
}