import {useTranslations} from "next-intl";
import {useMemo} from "react";
import {createText} from "./text";

export function useText() {
  const t = useTranslations();
  return useMemo(() => createText(t), [t]);
}
