import * as rootParams from "next/root-params";
import {hasLocale} from "next-intl";
import {getRequestConfig} from "next-intl/server";
import {notFound} from "next/navigation";
import {routing} from "./routing";

// Explicit imports keep extraction data and editorial overrides out of the
// deployable module graph; only the four runtime catalogs belong here.
const catalogs = {
  es: () => import("../../messages/es.json"),
  en: () => import("../../messages/en.json"),
  pt: () => import("../../messages/pt.json"),
  fr: () => import("../../messages/fr.json"),
};

export default getRequestConfig(async ({locale}) => {
  const matched = locale ?? await rootParams.locale();
  if (!hasLocale(routing.locales, matched)) notFound();
  return {
    locale: matched,
    timeZone: "America/Bogota",
    messages: (await catalogs[matched]()).default,
  };
});
