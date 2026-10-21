import { useEffect } from 'react';
import { siteContent } from '../data/content';

export function usePageTitle() {
  useEffect(() => {
    if (typeof window === 'undefined' || !('IntersectionObserver' in window)) {
      return;
    }

    const titles = siteContent.pageTitles || {};
    const sectionIds = Object.keys(titles);

    const visibleSections = new Map();

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            visibleSections.set(entry.target.id, entry.intersectionRatio);
          } else {
            visibleSections.delete(entry.target.id);
          }
        });

        if (visibleSections.size > 0) {
          let bestId = null;
          let highestRatio = -1;
          for (const [id, ratio] of visibleSections.entries()) {
            if (ratio > highestRatio) {
              highestRatio = ratio;
              bestId = id;
            }
          }
          if (bestId && titles[bestId]) {
            document.title = titles[bestId];
          }
        }
      },
      {
        rootMargin: '-10% 0px -40% 0px',
        threshold: [0, 0.2, 0.5, 0.8],
      }
    );

    const elements = sectionIds
      .map((id) => document.getElementById(id))
      .filter(Boolean);

    elements.forEach((el) => observer.observe(el));

    return () => {
      observer.disconnect();
    };
  }, []);
}
