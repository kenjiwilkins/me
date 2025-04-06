import { type Locale } from "@/i18n/i18n-config";

const dictionaries = {
  ja: () =>
    import("./dictionaries/ja/common.json").then((module) => module.default),
  en: () =>
    import("./dictionaries/en/common.json").then((module) => module.default),
};

export const getDictionary = async (locale: 'en' | 'ja') => dictionaries[locale]()
