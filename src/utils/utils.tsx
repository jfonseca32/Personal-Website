function getImageUrl(name: string | undefined) {
  return new URL(`../assets/${name}`, import.meta.url).href;
}

export { getImageUrl };

import { useEffect } from "react";

function DocumentTitle(title: string) {
  useEffect(() => {
    document.title = title;
  }, [title]);
}
export { DocumentTitle };
