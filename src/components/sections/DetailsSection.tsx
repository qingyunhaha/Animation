'use client';

import Reveal from '@/components/motion/Reveal';
import SectionLabel from '@/components/ui/SectionLabel';
import { detailItems } from '@/data/siteContent';

export default function DetailsSection() {
  return (
    <section id="details" className="bg-paper text-ink">
      <div className="section-inner">
        <div className="mb-12 grid gap-8 md:mb-20 md:grid-cols-[minmax(150px,0.4fr)_1fr]">
          <SectionLabel index="05" label="Guide" />
          <Reveal as="h2" className="max-w-5xl text-[clamp(2.1rem,6vw,6.5rem)] font-semibold leading-[0.96]">
            Built for fans who want the scale, story, and atmosphere at a glance.
          </Reveal>
        </div>
        <div className="grid border-l border-t border-ink/12 md:grid-cols-2 xl:grid-cols-3">
          {detailItems.map((item, index) => {
            const Icon = item.icon;
            return (
              <Reveal
                as="article"
                delay={index * 0.04}
                className="min-h-[240px] rounded-card border-b border-r border-ink/12 bg-white/35 p-7"
                key={item.title}
              >
                <Icon className="text-emerald-800" size={22} strokeWidth={1.5} />
                <h3 className="mt-14 text-2xl font-semibold">{item.title}</h3>
                <p className="mt-4 leading-7 text-slate-600">{item.copy}</p>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
