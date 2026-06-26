'use client';

import { ArrowRight } from 'lucide-react';
import { motion, useMotionValue, useSpring } from 'framer-motion';
import { MouseEvent, ReactNode } from 'react';
import usePrefersReducedMotion from '@/hooks/usePrefersReducedMotion';
import { motionSpring } from '@/lib/motionSystem';

type MagneticButtonProps = {
  children: ReactNode;
  href: string;
  variant?: 'dark' | 'light';
  className?: string;
  ariaLabel?: string;
};

export default function MagneticButton({ children, href, variant = 'dark', className = '', ariaLabel }: MagneticButtonProps) {
  const reduceMotion = usePrefersReducedMotion();
  const x = useSpring(useMotionValue(0), motionSpring.magnetic);
  const y = useSpring(useMotionValue(0), motionSpring.magnetic);

  const handleMove = (event: MouseEvent<HTMLAnchorElement>) => {
    if (reduceMotion) {
      return;
    }

    const rect = event.currentTarget.getBoundingClientRect();
    x.set((event.clientX - rect.left - rect.width / 2) * 0.18);
    y.set((event.clientY - rect.top - rect.height / 2) * 0.18);
  };

  const handleLeave = () => {
    x.set(0);
    y.set(0);
  };

  const classes =
    variant === 'dark'
      ? 'border-white/20 bg-white/10 text-white hover:border-ice/60 hover:bg-ice/15'
      : 'border-white/30 bg-white text-ink hover:border-ice hover:bg-ice';

  return (
    <motion.a
      style={{ x, y }}
      href={href}
      aria-label={ariaLabel}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      whileHover={reduceMotion ? undefined : { scale: 1.025 }}
      whileTap={reduceMotion ? undefined : { scale: 0.98 }}
      className={`group relative inline-flex min-h-12 items-center justify-center gap-3 overflow-hidden rounded-full border px-5 text-sm font-semibold transition-colors duration-500 ${classes} ${className}`}
    >
      <span className="pointer-events-none absolute inset-0 -translate-x-full bg-[linear-gradient(110deg,transparent,rgba(255,255,255,0.26),transparent)] transition-transform duration-700 group-hover:translate-x-full" />
      <span className="relative">{children}</span>
      <ArrowRight className="relative transition-transform duration-300 group-hover:translate-x-1" size={18} strokeWidth={1.8} />
    </motion.a>
  );
}
