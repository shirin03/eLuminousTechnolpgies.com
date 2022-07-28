import React from "react";
import Head from "next/head";
import {
  HireAngularData,
  HireCaseStudiesData,
  HireReviewData,
} from "../../data/hireDedicatedDevelopers";
import TopBanner from "../../component/HireDedicated/TopBanner/TopBanner";
import Expertise from "../../component/HireDedicated/Expertise/Expertise";
import WhyTech from "../../component/HireDedicated/WhyTech/WhyTech";
import ReviewSlider from "../../component/HireDedicated/ReviewSlider/ReviewSlider";
// import CaseStudies from "../../component/CaseStudies/CaseStudies";
// import Faq from "../../component/HireDedicated/Faq/Faq";
// import Contact from "../../component/HireDedicated/Contact/Contact";
const HireDedicatedAngular = () => {
  return (
    <>
      {/* <Head>
        <title>Hire Angular Developers | Hire AngularJS Developers</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta
          name="description"
          content="Hire Angular Developers to have seamless visulizations across all devices and help you to build high performace scalable apps to enhance productivity by 70%."
        />
        <meta
          name="keywords"
          content="hire angular developers, hire angularjs developers,dedicated angular developers"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <TopBanner allData={HireAngularData} />
      <Expertise expertiseData={HireAngularData} />
      <WhyTech whyTechData={HireAngularData} />
      <ReviewSlider ReviewSliderData={HireReviewData} />
      <CaseStudies CaseStudyData={HireCaseStudiesData} />
      <Faq faqsData={HireAngularData} />
      <Contact /> */}
      <TopBanner allData={HireAngularData} />
      <Expertise expertiseData={HireAngularData} />
      <WhyTech whyTechData={HireAngularData} />
      <ReviewSlider ReviewSliderData={HireReviewData} />
    </>
  );
};

export default HireDedicatedAngular;
