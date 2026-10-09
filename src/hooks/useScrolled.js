import { useEffect, useState } from 'react';

/**
 * useScrolled hook
 * Returns true if window scroll exceeds the threshold (default 40px)
 */
export function useScrolled(threshold = 40) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isPast = window.scrollY > threshold;
      setScrolled(isPast);
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [threshold]);

  return scrolled;
}
