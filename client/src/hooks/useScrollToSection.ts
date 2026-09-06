import { createRef, useCallback, useRef } from "react";
import { config } from "@/config";

export type SectionId = string;

const HOME_SECTION_ID = "home";

function collectSectionIds() {
  const ids = new Set<string>([HOME_SECTION_ID]);
  for (const item of config.navigation.items) {
    ids.add(item.id);
  }
  ids.add(config.navigation.cta.target);
  ids.add(config.hero.cta.target);
  return ids;
}

function createSectionRefs() {
  const refs: Record<string, React.RefObject<HTMLDivElement>> = {};
  collectSectionIds().forEach((id) => {
    refs[id] = createRef<HTMLDivElement>();
  });
  return refs;
}

const scrollToElement = (ref?: React.RefObject<HTMLDivElement>) => {
  ref?.current?.scrollIntoView({
    behavior: "smooth",
    block: "start",
    inline: "nearest",
  });
};

export const useScrollToSection = () => {
  const refsHolder = useRef<Record<string, React.RefObject<HTMLDivElement>> | null>(null);
  if (!refsHolder.current) {
    refsHolder.current = createSectionRefs();
  }
  const refs = refsHolder.current;

  const getRef = useCallback((id: SectionId) => {
    if (!refs[id]) {
      refs[id] = createRef<HTMLDivElement>();
    }
    return refs[id];
  }, [refs]);

  const scrollToSection = useCallback((section?: SectionId) => {
    const target = section && refs[section] ? section : HOME_SECTION_ID;
    scrollToElement(refs[target]);

    if (section) {
      window.history.pushState(null, "", `#${section}`);
    }
  }, [refs]);

  return { refs, getRef, scrollToSection };
};
