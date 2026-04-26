import { useEffect } from "react";

type MetaTag = {
  title?: string;
  name?: string;
  property?: string;
  content?: string;
};

const MANAGED_ATTR = "data-page-meta";

function setManagedMeta(meta: MetaTag[]) {
  // Remove previously managed tags
  document.head
    .querySelectorAll(`meta[${MANAGED_ATTR}="true"]`)
    .forEach((el) => el.remove());

  meta.forEach((m) => {
    if (m.title) {
      document.title = m.title;
      return;
    }
    if (!m.content) return;
    const el = document.createElement("meta");
    if (m.name) el.setAttribute("name", m.name);
    if (m.property) el.setAttribute("property", m.property);
    el.setAttribute("content", m.content);
    el.setAttribute(MANAGED_ATTR, "true");
    document.head.appendChild(el);
  });
}

export function usePageMeta(meta: MetaTag[]) {
  useEffect(() => {
    setManagedMeta(meta);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
}
