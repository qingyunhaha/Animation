import { CircleGauge, Layers3, MousePointer2, ScanLine, ShieldCheck, Sparkles } from 'lucide-react';

export const navItems = [
  { label: 'Concept', href: '#concept' },
  { label: 'System', href: '#system' },
  { label: 'Showcase', href: '#showcase' },
  { label: 'Signal', href: '#signal' }
];

export const principles = [
  {
    id: '01',
    title: 'Precision',
    copy: 'Every transition is measured around hierarchy, focus, and pace.',
    metric: '0.38s'
  },
  {
    id: '02',
    title: 'Depth',
    copy: 'Layered movement creates spatial tension without ornamental noise.',
    metric: '4 layers'
  },
  {
    id: '03',
    title: 'Flow',
    copy: 'Scroll becomes a camera move, not a stack of disconnected sections.',
    metric: 'scrub'
  },
  {
    id: '04',
    title: 'Silence',
    copy: 'Motion steps back when clarity needs the foreground.',
    metric: 'reduced'
  }
];

export const showcases = [
  {
    kicker: 'Launch System',
    title: 'A product reveal paced like a studio film.',
    copy: 'Pinning, scale, and restrained light movement turn one message into a complete opening sequence.'
  },
  {
    kicker: 'Interface Depth',
    title: 'Quiet controls with responsive physicality.',
    copy: 'Cards, buttons, and panels react with subtle material changes instead of loud UI tricks.'
  },
  {
    kicker: 'Scroll Narrative',
    title: 'A linear story users can control.',
    copy: 'Each viewport carries one idea, and each transition prepares the next one.'
  },
  {
    kicker: 'Performance Pass',
    title: 'High-fidelity motion that still feels instant.',
    copy: 'Transforms stay cheap, heavy scenes stay isolated, and small screens receive a cleaner rhythm.'
  }
];

export const detailItems = [
  {
    title: 'Rendering',
    copy: 'Visual layers use transform and opacity first, with expensive effects isolated from layout flow.',
    icon: CircleGauge
  },
  {
    title: 'Timing',
    copy: 'Reusable timelines keep page entrances, scrubbed sequences, and hover states rhythmically aligned.',
    icon: Layers3
  },
  {
    title: 'Interaction',
    copy: 'Pointer parallax and magnetic motion stay below the threshold where they distract.',
    icon: MousePointer2
  },
  {
    title: 'Accessibility',
    copy: 'Reduced-motion users receive a stable editorial version with the same content hierarchy.',
    icon: ShieldCheck
  },
  {
    title: 'Layout',
    copy: 'Responsive sections use bounded type scales and fixed-format visual areas to prevent overlap.',
    icon: ScanLine
  },
  {
    title: 'Finish',
    copy: 'Subtle lines, material shifts, and calibrated contrast carry the premium feel.',
    icon: Sparkles
  }
];
