'use client';

import { useCallback } from 'react';
import { gsap } from '@/lib/gsap';
import ScrollScrub from '@/components/motion/ScrollScrub';
import SectionLabel from '@/components/ui/SectionLabel';
import { scrollMotion } from '@/lib/motionSystem';

const lines = [
  'Motion should feel inevitable.',
  'Space should hold attention, not decorate it.',
  'Every reveal should clarify the next decision.',
  'Silence is part of the interface.'
];

export default function ConceptSection() {
  const animation = useCallback((root: HTMLElement) => {
    const items = gsap.utils.toArray<HTMLElement>('[data-concept-line]', root);

    items.forEach((item) => {
      gsap.to(item, {
        opacity: 1,
        color: '#0b0d11',
        scrollTrigger: {
          trigger: item,
          start: scrollMotion.conceptStart,
          end: scrollMotion.conceptEnd,
          scrub: true
        }
      });
    });
  }, []);

  return (
    <ScrollScrub animation={animation} className="section-shell min-h-[170vh] bg-paper text-ink" id="concept">
      <div className="section-inner grid gap-14 pt-[clamp(130px,22vw,280px)] md:grid-cols-[minmax(160px,0.32fr)_1fr]">
        <div className="grid content-start gap-8">
          <SectionLabel index="01" label="Concept" />
          <p className="hidden max-w-[220px] text-sm leading-6 text-slate-500 md:block">
            The page should move like a controlled camera, not a slideshow of effects.
          </p>
        </div>
        <div className="protected-copy grid gap-7 md:gap-12">
          {lines.map((line) => (
            <p
              className="max-w-5xl text-[clamp(2rem,5.9vw,6.8rem)] font-semibold leading-[1.02] text-slate-400 opacity-25"
              data-concept-line
              key={line}
            >
              {line}
            </p>
          ))}
        </div>
      </div>
    </ScrollScrub>
  );
}
