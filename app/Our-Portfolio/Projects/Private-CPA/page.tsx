import AboutProject from '@/components/OurPortfolio/CaseStudy/AboutProject';
import DesktopVersion from '@/components/OurPortfolio/CaseStudy/DesktopVersion';
import Hero from '@/components/OurPortfolio/CaseStudy/Hero';
import ProjectDetials from '@/components/OurPortfolio/CaseStudy/ProjectDetials';
import StyleGuide from '@/components/OurPortfolio/CaseStudy/StyleGuide';
import TechnologiesUsed from '@/components/OurPortfolio/CaseStudy/TechnologiesUsed';
import WhatMyClientSay from '@/components/OurPortfolio/CaseStudy/WhatMyClientSay';
import isaLogo from '../../../../assets/images/cpa Logo.webp';
import isaDesk from '../../../../assets/images/cpa-desktop.webp';
import isaDesk1 from '../../../../assets/images/cpa-desktop1.webp';
import light from '../../../../assets/images/cpa-light.webp';
import dark from '../../../../assets/images/cpa-dark.webp';

const page = () => {
  return (
    <>
      <Hero
        projectLogo={isaLogo}
        projectName="Private CPA"
        projectImg={isaDesk}
      />
      <AboutProject
        aboutProject="Welcome to Charm Ads, where every click ignites success. Are you looking to boost your team's alignment and efficiency? Charm Ads is the tool you need. It streamlines collaboration, ensuring the swift delivery of top-notch results. With customizable workflows tailored to your specific needs, Charm Ads helps align your team and boost productivity, making your path to success smoother and faster. Embrace the power of Charm Ads and watch your team's performance soar."
        projectImg={isaDesk1}
      />
      <StyleGuide
        projectName="Private CPA"
        fontName="Inter"
        fontBg="#7AD5D6"
        projectLogo={isaLogo}
        color1="#5024B3"
        color2="#01010C"
        color3="#00ECFF"
        color4="#FFFFFF"
      />
      <TechnologiesUsed />
      <ProjectDetials
        description="Private CPA leverages Charm Ads to enhance team alignment and efficiency by streamlining collaboration and customizing workflows, ensuring rapid delivery of high-quality outcomes. With its tailored tools, Private CPA empowers teams to boost productivity and achieve success efficiently, making it a pivotal asset for maximizing performance and achieving organizational goals."
        projectLogo={isaLogo}
        projectLink="https://isaconsulting.com/"
        projectName="Private CPA"
        deliverables="Website"
      />
      <DesktopVersion
        projectImg={light}
        projectLogo={isaLogo}
        title="Light Mode"
      />
      <DesktopVersion
        projectImg={dark}
        projectLogo={isaLogo}
        title="Dark Mode"
      />
      {/* <WhatMyClientSay /> */}
    </>
  );
};
export default page;
