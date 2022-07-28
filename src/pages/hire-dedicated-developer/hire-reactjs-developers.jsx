import React from "react";
import Head from "next/head";
import {
  HireReactData,
  HireCaseStudiesData,
  HireReviewData,
} from "../../data/hireDedicatedDevelopers";
import TopBanner from "../../component/HireDedicated/TopBanner/TopBanner";
import Expertise from "../../component/HireDedicated/Expertise/Expertise";
import WhyTech from "../../component/HireDedicated/WhyTech/WhyTech";
// import ReviewSlider from "../../component/HireDedicated/ReviewSlider/ReviewSlider";
// import CaseStudies from "../../component/CaseStudies/CaseStudies";
// import Faq from "../../component/HireDedicated/Faq/Faq";
// import Contact from "../../component/HireDedicated/Contact/Contact";
const HireDedicatedReact = () => {
  return (
    <>
      <TopBanner allData={HireReactData} />
      <Expertise expertiseData={HireReactData} />
      <WhyTech whyTechData={HireReactData} />
      {/* <ReviewSlider ReviewSliderData={HireReviewData} /> */}
      {/* <CaseStudies CaseStudyData={HireCaseStudiesData} /> */}
      {/* <Faq faqsData={HireReactData} /> */}
      {/* <Contact /> */}
    </>
  );
};

export default HireDedicatedReact;
