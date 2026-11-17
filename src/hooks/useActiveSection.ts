import { useEffect, useState } from "react";

// Håller koll på vilken sektion som syns på skärmen, så att menyn kan markera
// rätt länk. Bara en smal rand strax ovanför mitten av skärmen räknas, så det
// blir alltid högst en sektion i taget.
export const useActiveSection = (ids: readonly string[]) => {
  const [activeId, setActiveId] = useState(ids[0]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      { rootMargin: "-40% 0px -55% 0px" },
    );

    ids.forEach((id) => {
      const section = document.getElementById(id);

      if (section) {
        observer.observe(section);
      }
    });

    return () => observer.disconnect();
  }, [ids]);

  return activeId;
};
