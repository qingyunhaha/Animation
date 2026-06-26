import ConceptSection from '@/components/sections/ConceptSection';
import DetailsSection from '@/components/sections/DetailsSection';
import FinalCTASection from '@/components/sections/FinalCTASection';
import HeroSection from '@/components/sections/HeroSection';
import ImmersiveSection from '@/components/sections/ImmersiveSection';
import MotionSystemSection from '@/components/sections/MotionSystemSection';
import ShowcaseSection from '@/components/sections/ShowcaseSection';

export default function Home() {
  return (
    <main className="overflow-hidden">
      <HeroSection />
      <ConceptSection />
      <MotionSystemSection />
      <ShowcaseSection />
      <ImmersiveSection />
      <DetailsSection />
      <FinalCTASection />
    </main>
  );
}
