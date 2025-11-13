import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = () => {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    // Wait for DOM to fully update after route change
    const scrollTimeout = setTimeout(() => {
      if (hash) {
        // ✅ Handle in-page section scrolls
        const id = hash.replace("#", "");
        const el = document.getElementById(id);
        if (el) {
          el.scrollIntoView({ behavior: "smooth", block: "start" });
          return;
        }
      }

      // ✅ For new pages, force scroll to top (window + html + body)
      window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
      document.documentElement.scrollTop = 0;
      document.body.scrollTop = 0;
    }, 50); // short delay ensures route DOM renders first

    return () => clearTimeout(scrollTimeout);
  }, [pathname, hash]);

  return null;
};

export default ScrollToTop;
