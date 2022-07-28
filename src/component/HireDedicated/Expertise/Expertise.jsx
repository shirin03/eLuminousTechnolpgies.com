import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import LinkCustom from "../../Button/LinkCustom";
// import { Title } from "../WhyTech/WhyTech.style";
// import svg1 from "../../../assets/images/HireDedicated/icons/cross-platform.svg";
import { HireTitle, HireSmallTitle } from "../../../styles/GlobalStyle.style"
import {
  ExpertiseWrapper,
  ExpertiseBox,
  ExpertiseBoxTitle,
  ExpertiseBoxPara,
} from "./Expertise.style";
const Expertise = ({ expertiseData }) => {
  // const fileIconsPath = window.location.origin + "/images/HireDedicated/icons/";
  // const filePath = window.location.origin + "/images/HireDedicated/";
  return (
    <>
      <ExpertiseWrapper className="black">
        <Container>
          <HireTitle>{expertiseData.expertiseIns.title}</HireTitle>
          <HireSmallTitle>{expertiseData.expertiseIns.subTitle}</HireSmallTitle>
          <Row className="justify-content-center">
            {expertiseData.expertiseIns.expertLists.map((expertList, index) => {
              return (
                <Col
                  xxl={3}
                  xl={3}
                  lg={5}
                  md={6}
                  sm={6}
                  key={expertList.expertTitle}
                >
                  <ExpertiseBox>
                    <span>
                    <object data={expertList.expertImage} type="image/svg+xml">{expertList.title}</object>
                      {/* <img
                        src={expertList.expertImage}
                        alt="Title"
                      /> */}
                    </span>
                    <ExpertiseBoxTitle
                      className="title"
                      dangerouslySetInnerHTML={{
                        __html: expertList.expertTitle,
                      }}
                    >
                      {/* {expertList.expertTitle} */}
                    </ExpertiseBoxTitle>
                    <ExpertiseBoxPara
                      dangerouslySetInnerHTML={{
                        __html: expertList.expertSubTitle,
                      }}
                    >
                      {/* {expertList.expertSubTitle} */}
                    </ExpertiseBoxPara>
                  </ExpertiseBox>
                </Col>
              );
            })}
          </Row>
          <LinkCustom
            ParentClass="text-center"
            BtnTransparent={true}
            linkUrl={expertiseData.btnLink}
            titleText={expertiseData.btnText}
            colorChange=""
          />
        </Container>
      </ExpertiseWrapper>
    </>
  );
};

export default Expertise;
