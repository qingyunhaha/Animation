'use client';

import { useCallback } from 'react';
import { gsap } from '@/lib/gsap';
import ScrollScrub from '@/components/motion/ScrollScrub';
import SectionLabel from '@/components/ui/SectionLabel';
import { gsapEase, motionDuration, scrollMotion } from '@/lib/motionSystem';

export default function ImmersiveSection() {
  const animation = useCallback((root: HTMLElement) => {
    const timeline = gsap.timeline({
      scrollTrigger: {
        trigger: root,
        start: scrollMotion.pinStart,
        end: '+=240%',
        pin: true,
        scrub: scrollMotion.slowScrub
      }
    });

    timeline
      .to('[data-immersive-core]', { scale: 1.18, rotate: 18, duration: motionDuration.slow, ease: gsapEase.linear })
      .to('[data-layer="one"]', { xPercent: -34, yPercent: -18, opacity: 0.72, duration: motionDuration.slow }, '<')
      .to('[data-layer="two"]', { xPercent: 30, yPercent: 16, opacity: 0.72, duration: motionDuration.slow }, '<')
      .to('[data-copy="one"]', { opacity: 0, y: -34, duration: motionDuration.fast }, '<0.35')
      .to('[data-copy="two"]', { opacity: 1, y: 0, duration: motionDuration.fast }, '<0.1')
      .to('[data-immersive-core]', { scale: 0.94, rotate: 0, duration: motionDuration.slow, ease: gsapEase.linear })
      .to('[data-layer]', { xPercent: 0, yPercent: 0, opacity: 1, duration: motionDuration.slow }, '<')
      .to('[data-copy="two"]', { opacity: 0, y: -34, duration: motionDuration.fast }, '<0.35')
      .to('[data-copy="three"]', { opacity: 1, y: 0, duration: motionDuration.fast }, '<0.1');
  }, []);

  return (
    <ScrollScrub animation={animation} className="section-shell grid min-h-screen items-center gap-12 overflow-hidden bg-[radial-gradient(circle_at_50%_30%,#16231a_0%,#07100c_44%,#040504_100%)] px-[var(--page-pad)] py-24 text-white md:grid-cols-[minmax(280px,0.82fr)_1.18fr]">
      <div className="grain-layer" />
      <div className="protected-copy protected-copy--dark relative z-10">
        <SectionLabel index="04" label="Match Path" dark />
        <div className="relative mt-8 min-h-[230px] md:min-h-[300px]">
          <p data-copy="one" className="absolute max-w-2xl text-[clamp(2rem,4.8vw,5.2rem)] font-semibold leading-[0.98]">
            The ball begins as a quiet center of gravity.
          </p>
          <p data-copy="two" className="absolute max-w-2xl text-[clamp(2rem,4.8vw,5.2rem)] font-semibold leading-[0.98] opacity-0">
            Scroll opens the route: group stage, knockout path, pressure lines.
          </p>
          <p data-copy="three" className="absolute max-w-2xl text-[clamp(2rem,4.8vw,5.2rem)] font-semibold leading-[0.98] opacity-0">
            Everything returns to the final frame: one crowd, one trophy, one shot.
          </p>
        </div>
      </div>
      <div data-immersive-core className="relative z-10 aspect-square w-[min(92vw,760px)] justify-self-center">
        <div data-layer="one" className="absolute inset-[17%] rounded-full border border-ice/25 [transform:rotateX(66deg)_rotateZ(12deg)]" />
        <div data-layer="two" className="absolute inset-[26%] rounded-full border border-ice/25 [transform:rotateX(58deg)_rotateZ(-28deg)]" />
        <div className="absolute inset-[18%] rounded-full bg-[radial-gradient(circle_at_45%_38%,rgba(255,240,190,0.88),rgba(238,205,120,0.18)_24%,transparent_58%)]" />
        <div className="absolute inset-[28%] rounded-full border border-white/20 bg-white/[0.03] shadow-[inset_0_0_60px_rgba(238,205,120,0.1)]" />
        <div className="absolute left-1/2 top-1/2 h-3 w-3 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#eecd78] shadow-[0_0_40px_rgba(238,205,120,0.95)]" />
      </div>
    </ScrollScrub>
  );
}
