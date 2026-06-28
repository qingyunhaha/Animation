'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import MagneticButton from '@/components/motion/MagneticButton';
import OrbitalCore from '@/components/visuals/OrbitalCore';
import usePrefersReducedMotion from '@/hooks/usePrefersReducedMotion';
import { motionDelay, motionDuration, motionEase, transition, viewportOnce } from '@/lib/motionSystem';
import finalGoldImage from '../../../public/images/world-cup/final-gold.webp';

export default function FinalCTASection() {
  const reduceMotion = usePrefersReducedMotion();

  return (
    <section id="signal" className="final-stage section-shell">
      <Image src={finalGoldImage} alt="" fill sizes="100vw" className="final-stage__image object-cover" />
      <div className="grain-layer" />
      <motion.div
        className="final-stage__visual"
        initial={reduceMotion ? false : { scale: 0.88, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 0.22 }}
        viewport={viewportOnce}
        transition={transition(motionDuration.slow, 0, motionEase.standard)}
        aria-hidden="true"
      >
        <OrbitalCore compact />
      </motion.div>
      <div className="final-stage__copy">
        <motion.p
          className="final-stage__eyebrow"
          initial={reduceMotion ? false : { opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewportOnce}
          transition={transition(motionDuration.base)}
        >
          Final whistle
        </motion.p>
        <motion.h2
          className="final-stage__title"
          initial={reduceMotion ? false : { opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewportOnce}
          transition={transition(motionDuration.slow, motionDelay.xs, motionEase.standard)}
        >
          The world does not just watch. It gathers.
        </motion.h2>
        <MagneticButton href="#top" variant="light" className="final-stage__button" ariaLabel="Restart the page sequence from the top">
          Replay the journey
        </MagneticButton>
      </div>
    </section>
  );
}
