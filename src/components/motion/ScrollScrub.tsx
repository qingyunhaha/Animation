'use client';

import { HTMLAttributes, ReactNode, RefObject, useEffect, useRef } from 'react';
import { gsap } from '@/lib/gsap';
import { scrollMotion } from '@/lib/motionSystem';

type ScrollScrubProps = {
  children: ReactNode;
  className?: string;
  animation: (root: HTMLElement) => gsap.core.Tween | gsap.core.Timeline | void;
} & Omit<HTMLAttributes<HTMLElement>, 'children'>;

export default function ScrollScrub({ children, className, animation, ...props }: ScrollScrubProps) {
  const rootRef = useRef<HTMLElement>(null);

  useGsapScope(rootRef, animation);

  return (
    <section className={className} ref={rootRef} {...props}>
      {children}
    </section>
  );
}

export function useGsapScope<T extends HTMLElement>(
  ref: RefObject<T>,
  animation: (root: T) => gsap.core.Tween | gsap.core.Timeline | void
) {
  useEffect(() => {
    const root = ref.current;
    if (!root) {
      return undefined;
    }

    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (reduceMotion) {
      return undefined;
    }

    const ctx = gsap.context(() => {
      animation(root);
    }, root);

    return () => {
      ctx.revert();
    };
  }, [animation, ref]);
}

export { scrollMotion };
