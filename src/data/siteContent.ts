import { CalendarDays, CircleGauge, Globe2, MapPinned, ShieldCheck, Sparkles } from 'lucide-react';

export const navItems = [
  { label: 'Pulse', href: '#concept' },
  { label: 'Tournament', href: '#system' },
  { label: 'Cities', href: '#showcase' },
  { label: 'Finale', href: '#signal' }
];

export const principles = [
  {
    id: '01',
    title: '48 Teams',
    copy: 'A larger field turns the group stage into a wider global opening act.',
    metric: 'global'
  },
  {
    id: '02',
    title: '104 Matches',
    copy: 'Every fixture becomes part of a long-form summer rhythm, from first whistle to final.',
    metric: '104'
  },
  {
    id: '03',
    title: 'Three Nations',
    copy: 'Canada, Mexico, and the United States carry one tournament across a continent.',
    metric: 'CAN / MEX / USA'
  },
  {
    id: '04',
    title: 'One Trophy',
    copy: 'The noise resolves into a single object: gold, pressure, memory, and the final touch.',
    metric: 'final'
  }
];

export const showcases = [
  {
    kicker: 'Opening Night',
    title: 'The first whistle becomes a cinematic ignition.',
    copy: 'Dark stadium air, broadcast light, and a single ball establish the scale before the crowd takes over.'
  },
  {
    kicker: 'Host Cities',
    title: 'A continent-wide stage, connected by matchday energy.',
    copy: 'Each card carries the feeling of travel, arrival, and the precise geometry of the pitch.'
  },
  {
    kicker: 'Knockout Pressure',
    title: 'The pace narrows as the stakes become heavier.',
    copy: 'The design shifts from open space to focused tension, mirroring the tournament path.'
  },
  {
    kicker: 'Final Signal',
    title: 'All routes collapse into one golden frame.',
    copy: 'The closing visual brings the ball, trophy light, and crowd pulse back into a single poster-like moment.'
  }
];

export const detailItems = [
  {
    title: 'Host Nations',
    copy: 'Canada, Mexico, and the United States shape the tournament as a North American summer event.',
    icon: MapPinned
  },
  {
    title: 'Tournament Scale',
    copy: 'The 48-team format gives the campaign a broader opening rhythm and more national storylines.',
    icon: CircleGauge
  },
  {
    title: 'Match Calendar',
    copy: 'The experience is paced around a long tournament arc, with quiet build, matchday surge, and final release.',
    icon: CalendarDays
  },
  {
    title: 'Global Audience',
    copy: 'Visual language stays legible across cultures: field lines, trophy light, flags, and broadcast rhythm.',
    icon: Globe2
  },
  {
    title: 'Access',
    copy: 'Reduced-motion visitors receive the same story in a calmer editorial sequence.',
    icon: ShieldCheck
  },
  {
    title: 'Atmosphere',
    copy: 'Fine grain, restrained gold, and pitch geometry keep the campaign premium rather than noisy.',
    icon: Sparkles
  }
];
