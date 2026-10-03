import * as rootParams from "next/root-params";
import {hasLocale} from "next-intl";
import {getRequestConfig} from "next-intl/server";
import {notFound} from "next/navigation";
import {routing} from "./routing";

export default getRequestConfig(async ({locale}) => {
  const matched = locale ?? await rootParams.locale();
  if (!hasLocale(routing.locales, matched)) notFound();
  return {
    locale: matched,
    timeZone: "America/Bogota",
    messages: (await import(`../../messages/${matched}.json`)).default,
  };
});
