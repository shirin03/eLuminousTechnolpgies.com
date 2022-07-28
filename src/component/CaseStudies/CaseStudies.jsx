import React from "react";
import { Container, Row } from "react-bootstrap";
import CaseStudy from "./CaseStudy";
import { HireTitle } from "../../styles/GlobalStyle.style";
import { Wrapper } from "./CaseStudies.style";
const CaseStudies = ({ col,CaseStudyData }) => {
  // const fileIconsPath = window.location.origin + "/images/HireDedicated/icons/";
  // const filePath = window.location.origin + "/images/HireDedicated/";
  return (
    <>
      <Wrapper className="black">
        <Container>
          <HireTitle>Case Studies</HireTitle>
          <Row xxl={4} xl={4} lg={4} md={2} sm={2} xs={1}>
            <CaseStudy CaseStudyData={CaseStudyData} />
          </Row>
        </Container>
      </Wrapper>
    </>
  );
};

export default CaseStudies;
