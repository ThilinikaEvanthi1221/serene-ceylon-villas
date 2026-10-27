
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollManager() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (!hash) {
      window.scrollTo(0, 0);
      return;
    }

    const frame = requestAnimationFrame(() => {
      const element = document.getElementById(
        decodeURIComponent(hash.slice(1))
      );

      if (element) {
        element.scrollIntoView({
          behavior: "instant",
          block: "start",
        });
      }
    });

    return () => cancelAnimationFrame(frame);
  }, [pathname, hash]);

  return null;
}
