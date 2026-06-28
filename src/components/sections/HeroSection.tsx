'use client';

import { motion } from 'framer-motion';
import MagneticButton from '@/components/motion/MagneticButton';
import SplitHeadline from '@/components/motion/SplitHeadline';
import OrbitalCore from '@/components/visuals/OrbitalCore';
import ParallaxSection from '@/components/motion/ParallaxSection';
import usePrefersReducedMotion from '@/hooks/usePrefersReducedMotion';
import { motionDelay, motionDuration, motionEase, transition } from '@/lib/motionSystem';

export default function HeroSection() {
  const reduceMotion = usePrefersReducedMotion();

  return (
    <ParallaxSection
      id="top"
      className="hero-stage section-shell grid min-h-[100svh] place-items-center overflow-hidden px-[var(--page-pad)] pb-7 pt-20 md:min-h-[102svh] md:pt-24"
    >
      {({ copyY, copyOpacity, visualY, visualOpacity, gridOpacity }) => (
        <>
          <motion.div className="hero-grid-field" style={{ opacity: gridOpacity }} aria-hidden="true" />
          <div className="hero-measure-field" aria-hidden="true">
            <span />
            <span />
            <span />
          </div>
          <div className="grain-layer" />
          <motion.div
            className="hero-visual-field absolute z-10 will-change-transform"
            style={{ y: visualY, opacity: visualOpacity }}
            initial={reduceMotion ? false : { scale: 0.86, opacity: 0, filter: 'blur(18px)' }}
            animate={reduceMotion ? { opacity: 0.82 } : { scale: 1, opacity: 0.88, filter: 'blur(0px)' }}
            transition={transition(motionDuration.hero, 0, motionEase.standard)}
          >
            <OrbitalCore />
          </motion.div>
          <motion.div className="hero-copy-field relative z-30 w-full max-w-6xl self-start pt-[16vh] text-center will-change-transform md:self-center md:pt-0" style={{ y: copyY, opacity: copyOpacity }}>
            <motion.p
              className="eyebrow tracking-[0.28em] text-white/50"
              initial={reduceMotion ? false : { opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={transition(motionDuration.slow, motionDelay.md, motionEase.standard)}
            >
              WORLD CUP 2026 / NORTH AMERICA
            </motion.p>
            <h1 className="hero-title mx-auto mt-5 max-w-6xl text-[clamp(2.55rem,8.2vw,8.8rem)] font-bold leading-[1.02] text-white md:leading-[0.96]">
              <SplitHeadline
                text="The world arrives for one beautiful game."
                lines={['The world arrives', 'for one beautiful', 'game.']}
              />
            </h1>
            <motion.p
              className="mx-auto mt-6 max-w-2xl text-balance text-base leading-7 text-white/68 md:mt-9 md:text-lg"
              initial={reduceMotion ? false : { opacity: 0, y: 22, filter: 'blur(8px)' }}
              animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
              transition={transition(motionDuration.slow, motionDelay.xl, motionEase.standard)}
            >
              A cinematic campaign for the expanded tournament: 48 teams, three host nations, and one summer built around the ball.
            </motion.p>
            <motion.div
              className="mt-7 flex flex-col items-center justify-center gap-4 text-sm text-white/45 sm:flex-row md:mt-9"
              initial={reduceMotion ? false : { opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={transition(motionDuration.slow, 1.24, motionEase.standard)}
            >
              <MagneticButton href="#showcase" className="hero-cta" ariaLabel="Explore the showcase section">
                Enter the tournament
              </MagneticButton>
              <span className="hidden sm:inline">Canada / Mexico / United States</span>
            </motion.div>
          </motion.div>
          <div className="absolute bottom-8 left-[var(--page-pad)] right-[var(--page-pad)] z-20 hidden justify-between text-[0.72rem] uppercase text-white/40 md:flex">
            <span>Matchday atmosphere</span>
            <span>48 teams / 104 matches</span>
          </div>
        </>
      )}
    </ParallaxSection>
  );
}
