'use client';

import { motion, useScroll, useSpring } from 'framer-motion';
import usePrefersReducedMotion from '@/hooks/usePrefersReducedMotion';
import { motionSpring } from '@/lib/motionSystem';

export default function ScrollProgress() {
  const reduceMotion = usePrefersReducedMotion();
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, motionSpring.hover);
  const progressValue = reduceMotion ? scrollYProgress : scaleX;

  return (
    <motion.div
      aria-hidden="true"
      data-motion-component="scroll-progress"
      className="fixed left-0 top-0 z-[60] h-px w-full origin-left bg-ice/70 shadow-[0_0_18px_rgba(191,239,255,0.55)]"
      style={{ scaleX: progressValue }}
    />
  );
}
