'use client';

import { motion, type HTMLMotionProps } from 'framer-motion';
import { ReactNode } from 'react';
import usePrefersReducedMotion from '@/hooks/usePrefersReducedMotion';
import { fadeInVariants, motionDuration, motionEase, transition, viewportOnce } from '@/lib/motionSystem';

type MotionTag = 'div' | 'p' | 'span' | 'h1' | 'h2' | 'h3' | 'article';

type FadeInProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
  distance?: number;
  duration?: number;
  as?: MotionTag;
} & Omit<HTMLMotionProps<'div'>, 'children'>;

export default function FadeIn({
  children,
  className,
  delay = 0,
  distance = 28,
  duration = motionDuration.base,
  as = 'div',
  ...props
}: FadeInProps) {
  const reduceMotion = usePrefersReducedMotion();
  const Component = motion[as];

  if (reduceMotion) {
    return (
      <Component className={className} {...props}>
        {children}
      </Component>
    );
  }

  return (
    <Component
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={viewportOnce}
      variants={fadeInVariants(distance)}
      transition={transition(duration, delay, motionEase.standard)}
      {...props}
    >
      {children}
    </Component>
  );
}
