import Reveal from '@/components/motion/Reveal';
import SectionLabel from '@/components/ui/SectionLabel';
import { showcases } from '@/data/siteContent';

export default function ShowcaseSection() {
  return (
    <section id="showcase" className="section-shell bg-paper text-ink">
      <div className="section-inner">
        <div className="protected-copy mb-16 grid gap-8 md:mb-24 md:grid-cols-[minmax(160px,0.32fr)_1fr]">
          <SectionLabel index="03" label="Cities" />
          <h2 className="max-w-4xl text-[clamp(2rem,4.8vw,5.2rem)] font-semibold leading-[0.98]">
            A tournament told through arrival, pressure, and the glow of night matches.
          </h2>
        </div>
        <div className="grid gap-6 md:gap-8">
          {showcases.map((item, index) => (
            <Reveal
              as="article"
              delay={index * 0.05}
              className="group grid min-h-[420px] overflow-hidden rounded-card border border-slate-950/10 bg-white/62 md:grid-cols-[0.92fr_1fr]"
              key={item.title}
            >
              <div className="relative min-h-[260px] overflow-hidden bg-[linear-gradient(135deg,#07140f,#143a28_46%,#f1ead3_100%)] md:min-h-full">
                <span className="absolute left-5 top-5 text-xs uppercase text-white/52">{String(index + 1).padStart(2, '0')}</span>
                <div className="absolute inset-x-[12%] top-1/2 h-px bg-white/70 shadow-[0_0_24px_rgba(238,205,120,0.26)]" />
                <div className="absolute bottom-[18%] left-[12%] right-[12%] h-[38%] rounded-[8px] border border-white/26 opacity-70" />
                <div className="absolute right-[14%] top-[22%] aspect-square w-[42%] rounded-full border border-white/38 transition-transform duration-700 group-hover:scale-105" />
                <div className="absolute right-[24%] top-[34%] aspect-square w-[20%] rounded-full border border-amber-950/18" />
              </div>
              <div className="grid content-center p-6 md:p-10 lg:p-14">
                <p className="light-eyebrow">{item.kicker}</p>
                <h3 className="mt-4 max-w-2xl text-[clamp(1.9rem,3.4vw,4.1rem)] font-semibold leading-[1.02]">{item.title}</h3>
                <p className="mt-6 max-w-xl text-base leading-7 text-slate-600 md:text-lg md:leading-8">{item.copy}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
