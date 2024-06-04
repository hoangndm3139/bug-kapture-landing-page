import FeatureSection from "@/components/home/FeatureSection";
import GenerationStep from "@/components/home/GenerationStep";
import Hero from "@/components/home/Hero";
import Pricing from "@/components/home/Pricing";
import Testimonials from "@/components/home/Testimonials";
import PageMetaTags from "@/containers/PageMetaTags";
import { Inter } from "@next/font/google";

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
})

export default function Home() {
  return (
    <>
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

      <Testimonials />
      <Pricing />
    </>
  );
}
