'use client';

import type { Transition, Variants } from 'framer-motion';

type MotionEase = readonly number[] | string;

export const motionEase = {
  standard: [0.16, 1, 0.3, 1],
  precise: [0.22, 1, 0.36, 1],
  soft: [0.19, 1, 0.22, 1],
  linear: 'linear'
} as const;

export const gsapEase = {
  standard: 'power3.out',
  precise: 'power2.out',
  soft: 'expo.out',
  linear: 'none'
} as const;

export const motionDuration = {
  instant: 0.18,
  fast: 0.38,
  base: 0.72,
  slow: 1,
  cinematic: 1.35,
  hero: 1.65
} as const;

export const motionDelay = {
  none: 0,
  xs: 0.08,
  sm: 0.16,
  md: 0.34,
  lg: 0.62,
  xl: 1.08
} as const;

export const motionStagger = {
  tight: 0.04,
  base: 0.08,
  line: 0.16,
  loose: 0.22
} as const;

export const motionSpring = {
  magnetic: { stiffness: 160, damping: 18, mass: 0.35 },
  hover: { stiffness: 220, damping: 22, mass: 0.4 }
} as const;

export const scrollMotion = {
  scrub: 0.8,
  slowScrub: 1,
  conceptStart: 'top 78%',
  conceptEnd: 'top 42%',
  pinStart: 'top top'
} as const;

export const viewportOnce = {
  once: true,
  margin: '-12% 0px'
} as const;

export function transition(
  duration: number = motionDuration.base,
  delay: number = motionDelay.none,
  ease: MotionEase = motionEase.standard
): Transition {
  return { duration, delay, ease };
}

export function fadeInVariants(distance = 28): Variants {
  return {
    hidden: { y: distance, opacity: 0 },
    visible: { y: 0, opacity: 1 }
  };
}

export function revealLineVariants(distance = '118%'): Variants {
  return {
    hidden: { y: distance, opacity: 0, filter: 'blur(10px)' },
    visible: { y: 0, opacity: 1, filter: 'blur(0px)' }
  };
}

export function reducedTransition(): Transition {
  return { duration: 0.01, delay: 0 };
}
