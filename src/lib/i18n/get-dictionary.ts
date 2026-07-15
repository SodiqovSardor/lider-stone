import type { Locale } from "./config";
import en from "./dictionaries/en";
import ru from "./dictionaries/ru";
import uz from "./dictionaries/uz";

export type Dictionary = typeof en;

const dicts = { en, ru, uz } as unknown as Record<Locale, Dictionary>;

export function getDictionary(locale: Locale): Dictionary {
  return dicts[locale] ?? en;
}
