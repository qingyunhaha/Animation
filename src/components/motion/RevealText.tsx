'use client';

import { motion } from 'framer-motion';
import usePrefersReducedMotion from '@/hooks/usePrefersReducedMotion';
import { motionDelay, motionDuration, motionEase, motionStagger, revealLineVariants, transition } from '@/lib/motionSystem';

type RevealTextProps = {
  text: string;
  lines?: string[];
  className?: string;
  delay?: number;
};

export default function RevealText({ text, lines, className, delay = motionDelay.md }: RevealTextProps) {
  const reduceMotion = usePrefersReducedMotion();
  const displayLines = lines ?? [text];

  if (reduceMotion) {
    return (
      <span className={className} aria-label={text} role="text">
        {displayLines.map((line, lineIndex) => (
          <span className="block" aria-hidden="true" key={line}>
            {line}
            {lineIndex < displayLines.length - 1 ? ' ' : ''}
          </span>
        ))}
      </span>
    );
  }

  return (
    <span className={className} aria-label={text} role="text">
      {displayLines.map((line, lineIndex) => (
        <span className="block overflow-hidden pb-[0.08em]" aria-hidden="true" key={line}>
          <motion.span
            className="block will-change-transform"
            initial="hidden"
            animate="visible"
            variants={revealLineVariants()}
            transition={transition(motionDuration.cinematic, delay + lineIndex * motionStagger.line, motionEase.standard)}
          >
            {line}
          </motion.span>
          {lineIndex < displayLines.length - 1 ? ' ' : ''}
        </span>
      ))}
    </span>
  );
}
