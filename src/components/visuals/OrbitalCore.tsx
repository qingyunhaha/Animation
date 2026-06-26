'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import usePrefersReducedMotion from '@/hooks/usePrefersReducedMotion';

type OrbitalCoreProps = {
  compact?: boolean;
};

export default function OrbitalCore({ compact = false }: OrbitalCoreProps) {
  const reduceMotion = usePrefersReducedMotion();
  const { scrollYProgress } = useScroll();
  const rotate = useTransform(scrollYProgress, [0, 1], reduceMotion ? [0, 0] : [0, 24]);
  const scale = useTransform(scrollYProgress, [0, 0.35, 1], reduceMotion ? [1, 1, 1] : [1, 1.05, 0.96]);

  return (
    <motion.div
      style={{ rotate, scale }}
      className={`hero-orbital-core relative aspect-square ${compact ? 'w-[min(72vw,620px)]' : 'w-[min(70vw,860px)] max-md:w-[128vw]'}`}
      aria-hidden="true"
    >
      <div className="hero-orbital-core__aura absolute inset-0 rounded-full" />
      <div className="hero-orbital-core__body absolute inset-[15%] rounded-full" />
      <div className="hero-orbital-core__blade absolute left-[10%] right-[10%] top-[47%]" />
      <div className="hero-orbital-core__ring hero-orbital-core__ring--outer absolute inset-[18%] rounded-full" />
      <div className="hero-orbital-core__ring hero-orbital-core__ring--inner absolute inset-[31%] rounded-full" />
      <div className="hero-orbital-core__lens absolute left-1/2 top-1/2" />
    </motion.div>
  );
}
