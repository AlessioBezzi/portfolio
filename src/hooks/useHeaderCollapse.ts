import { useEffect, useState } from "react";

export function useHeaderCollapse(threshold = 150) {
  const [headerCollapsed, setHeaderCollapsed] = useState(false);
  const [headerExpanded, setHeaderExpanded] = useState(false);

  useEffect(() => {
    let frame = 0;

    const updateHeaderState = () => {
      if (frame) {
        return;
      }

      frame = window.requestAnimationFrame(() => {
        const shouldCollapse = window.scrollY > threshold;
        setHeaderCollapsed(shouldCollapse);

        if (!shouldCollapse) {
          setHeaderExpanded(false);
        }

        frame = 0;
      });
    };

    updateHeaderState();
    window.addEventListener("scroll", updateHeaderState, { passive: true });

    return () => {
      window.removeEventListener("scroll", updateHeaderState);
      if (frame) {
        window.cancelAnimationFrame(frame);
      }
    };
  }, [threshold]);

  return {
    headerCollapsed,
    headerExpanded,
    setHeaderExpanded,
  };
}
