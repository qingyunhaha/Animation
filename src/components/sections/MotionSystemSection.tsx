'use client';

import Reveal from '@/components/motion/Reveal';
import SectionLabel from '@/components/ui/SectionLabel';
import { principles } from '@/data/siteContent';

export default function MotionSystemSection() {
  return (
    <section id="system" className="section-shell bg-[#050608] text-white">
      <div className="grain-layer" />
      <div className="section-inner relative z-10">
        <div className="protected-copy protected-copy--dark mb-16 grid gap-8 md:mb-24 md:grid-cols-[minmax(160px,0.34fr)_1fr]">
          <SectionLabel index="02" label="Tournament" dark />
          <Reveal as="h2" className="max-w-5xl text-[clamp(2.1rem,5.4vw,6rem)] font-semibold leading-[0.98]">
            Bigger scale, sharper stakes, and one continent carrying the sound.
          </Reveal>
        </div>
        <div className="border-t border-white/12">
          {principles.map((principle, index) => (
            <Reveal
              as="article"
              delay={index * 0.06}
              key={principle.id}
              className="group grid gap-8 border-b border-white/12 py-8 md:grid-cols-[0.18fr_0.34fr_1fr_0.18fr] md:items-center md:py-11"
            >
              <span className="text-xs uppercase text-cyanline/80">{principle.id}</span>
              <h3 className="text-[clamp(1.7rem,3.2vw,3.4rem)] font-semibold leading-none text-white">{principle.title}</h3>
              <p className="max-w-2xl text-base leading-7 text-white/56">{principle.copy}</p>
              <span className="justify-self-start text-xs uppercase text-white/36 md:justify-self-end">{principle.metric}</span>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
