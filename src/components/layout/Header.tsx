'use client';

import { ArrowUpRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { navItems } from '@/data/siteContent';
import { motionDuration, motionEase, transition } from '@/lib/motionSystem';

export default function Header() {
  return (
    <motion.header
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={transition(motionDuration.base, 0, motionEase.standard)}
      className="fixed left-0 top-0 z-50 grid w-full grid-cols-[auto_1fr_auto] items-center gap-4 px-[var(--page-pad)] py-5 text-white mix-blend-difference"
      aria-label="Primary navigation"
    >
      <a
        href="#top"
        aria-label="World Cup campaign home"
        className="grid h-10 w-10 place-items-center rounded-full border border-white/35 text-xs font-bold"
      >
        WC
      </a>
      <nav className="hidden justify-center gap-8 text-[0.72rem] font-medium uppercase text-white/65 md:flex lg:gap-12">
        {navItems.map((item) => (
          <a className="transition-colors duration-200 hover:text-white" href={item.href} aria-label={`Go to ${item.label} section`} key={item.href}>
            {item.label}
          </a>
        ))}
      </nav>
      <a className="inline-flex items-center gap-2 text-xs font-semibold uppercase text-white/80 hover:text-white" href="#signal" aria-label="Go to finale section">
        Finale
        <ArrowUpRight size={16} strokeWidth={1.8} />
      </a>
    </motion.header>
  );
}
