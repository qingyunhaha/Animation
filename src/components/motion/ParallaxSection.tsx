'use client';

import { motion, type MotionValue, useScroll, useTransform } from 'framer-motion';
import { ReactNode, RefObject, useRef } from 'react';
import usePrefersReducedMotion from '@/hooks/usePrefersReducedMotion';

type ParallaxSectionProps = {
  children: (values: {
    ref: RefObject<HTMLElement>;
    progress: MotionValue<number>;
    copyY: MotionValue<number>;
    copyOpacity: MotionValue<number>;
    visualY: MotionValue<number>;
    visualOpacity: MotionValue<number>;
    gridOpacity: MotionValue<number>;
  }) => ReactNode;
  className?: string;
  id?: string;
};

export default function ParallaxSection({ children, className, id }: ParallaxSectionProps) {
  const ref = useRef<HTMLElement>(null);
  const reduceMotion = usePrefersReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start']
  });
  const copyY = useTransform(scrollYProgress, [0, 1], reduceMotion ? [0, 0] : [0, -72]);
  const copyOpacity = useTransform(scrollYProgress, [0, 0.62, 1], reduceMotion ? [1, 1, 1] : [1, 0.82, 0]);
  const visualY = useTransform(scrollYProgress, [0, 1], reduceMotion ? [0, 0] : [0, 110]);
  const visualOpacity = useTransform(scrollYProgress, [0, 0.72, 1], reduceMotion ? [0.82, 0.82, 0.82] : [0.88, 0.58, 0]);
  const gridOpacity = useTransform(scrollYProgress, [0, 1], reduceMotion ? [0.35, 0.35] : [0.62, 0.16]);

  return (
    <motion.section id={id} ref={ref} className={className}>
      {children({ ref, progress: scrollYProgress, copyY, copyOpacity, visualY, visualOpacity, gridOpacity })}
    </motion.section>
  );
}
