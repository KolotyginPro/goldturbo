import { useLanguage } from "@/i18n/LanguageContext";
import { Lang } from "@/i18n/translations";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

const flags: Record<Lang, { flag: string; label: string; short: string }> = {
  ru: { flag: "🇷🇺", label: "Русский", short: "RU" },
  en: { flag: "🇬🇧", label: "English", short: "EN" },
};

export const LanguageSwitcher = () => {
  const { lang, setLang } = useLanguage();
  return (
    <Select value={lang} onValueChange={(v) => setLang(v as Lang)}>
      <SelectTrigger className="h-9 w-[88px] border-border/60 bg-card/40 px-2 text-sm font-semibold">
        <SelectValue>
          <span className="inline-flex items-center gap-1.5">
            <span className="text-base leading-none">{flags[lang].flag}</span>
            <span>{flags[lang].short}</span>
          </span>
        </SelectValue>
      </SelectTrigger>
      <SelectContent align="end" className="min-w-[140px]">
        {(Object.keys(flags) as Lang[]).map((l) => (
          <SelectItem key={l} value={l}>
            <span className="inline-flex items-center gap-2">
              <span className="text-base leading-none">{flags[l].flag}</span>
              <span>{flags[l].label}</span>
            </span>
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
};
