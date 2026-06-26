'use client';

import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { gsapEase, motionDuration } from './motionSystem';

gsap.registerPlugin(ScrollTrigger);
gsap.defaults({
  duration: motionDuration.base,
  ease: gsapEase.standard
});

ScrollTrigger.config({
  ignoreMobileResize: true
});

export { gsap, ScrollTrigger };
