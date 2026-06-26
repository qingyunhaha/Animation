'use client';

import Lenis from '@studio-freight/lenis';
import { useEffect } from 'react';
import { gsap, ScrollTrigger } from '@/lib/gsap';
import { motionDuration } from '@/lib/motionSystem';

export default function SmoothScrollProvider() {
  useEffect(() => {
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const scrollToHash = (lenis?: Lenis) => {
      const hash = window.location.hash;
      if (!hash) {
        return;
      }

      const target = document.querySelector(hash);
      if (!(target instanceof HTMLElement)) {
        return;
      }

      ScrollTrigger.refresh();
      window.requestAnimationFrame(() => {
        const offset = -8;
        const top = target.getBoundingClientRect().top + window.scrollY + offset;
        if (lenis && !reduceMotion) {
          lenis.scrollTo(top, { immediate: true });
          return;
        }

        window.scrollTo({ top, behavior: 'auto' });
      });
    };
    const scheduleHashScroll = (lenis?: Lenis) => {
      const timers = [80, 260, 700, 1300, 2100].map((delay) => window.setTimeout(() => scrollToHash(lenis), delay));
      return () => timers.forEach((timer) => window.clearTimeout(timer));
    };

    if (reduceMotion) {
      const clearScheduled = scheduleHashScroll();
      const handleHashChange = () => scheduleHashScroll();
      window.addEventListener('hashchange', handleHashChange);
      return () => {
        clearScheduled();
        window.removeEventListener('hashchange', handleHashChange);
      };
    }

    const lenis = new Lenis({
      duration: motionDuration.slow,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true
    });

    const update = (time: number) => {
      lenis.raf(time * 1000);
    };

    lenis.on('scroll', ScrollTrigger.update);

    gsap.ticker.add(update);
    gsap.ticker.lagSmoothing(0);
    const clearScheduled = scheduleHashScroll(lenis);
    const handleHashChange = () => scheduleHashScroll(lenis);
    window.addEventListener('hashchange', handleHashChange);

    return () => {
      clearScheduled();
      window.removeEventListener('hashchange', handleHashChange);
      gsap.ticker.remove(update);
      lenis.destroy();
    };
  }, []);

  return null;
}
