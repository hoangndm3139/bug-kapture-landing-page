import FeatureSection from "@/components/home/FeatureSection";
import GenerationStep from "@/components/home/GenerationStep";
import Usecases from "@/components/home/Usecases";

import Hero from "@/components/home/Hero";
import Pricing from "@/components/home/Pricing";
import Testimonials from "@/components/home/Testimonials";
import PageMetaTags from "@/containers/PageMetaTags";
import { Inter } from "@next/font/google";
import { motion, useScroll, useSpring } from "framer-motion";

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
})

export default function Home() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });
  
  return (
    <>
      <motion.div className="fixed top-0 left-0 right-0 h-2 bg-orange z-[9999]" style={{ scaleX, transformOrigin: '0%' }} />
      <PageMetaTags title="Home" description={""} url="" />
      <div itemScope itemType="https://schema.org/WebSite">
        <meta itemProp="url" content="https://www.webdesignai.com/" />
        <meta itemProp="name" content="Web Design AI" />
      </div>
      <Hero />
      <GenerationStep />
      <FeatureSection showHeading={true} title="Feature title 1" />
      <FeatureSection title="Featuer title 2" leftText="1" />
      <FeatureSection title="Feature title 3" />
      <Usecases />
      <Testimonials />
      <Pricing />
    </>
  );
}
