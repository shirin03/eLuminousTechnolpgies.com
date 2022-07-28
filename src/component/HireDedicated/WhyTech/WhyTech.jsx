import React from "react";
import Image from "next/image";
import { Container, Row, Col } from "react-bootstrap";

import LinkCustom from "../../Button/LinkCustom";
// import svg1 from "../../../assets/images/HireDedicated/icons/cross-platform.svg";
import { IoIosCheckmarkCircleOutline } from "react-icons/io";
import {
  WhyTechWrapper,
  TextWrapper,
  GreyWrapper,
  SmallTitle,
  Title,
  Paragraph,
  BlueParagraph,
  ImgWrapper,
  List,
  LogoWrapper,
  CircleWrapper,
  BottomListWrapper,
} from "./WhyTech.style";
const WhyTech = ({ whyTechData }) => {
  // const filePath = window.location.origin + "/images/HireDedicated/";
  // const fileIconsPath = window.location.origin + "/images/HireDedicated/icons/";
  return (
    <>
      <WhyTechWrapper>
        <Container>
          <GreyWrapper>
            <Row>
              <Col>
                <TextWrapper>
                  <SmallTitle className="subTitle fw400 black">
                    {whyTechData.whyTechs.subTitle}
                  </SmallTitle>
                  <Title
                    className="black fw700"
                    dangerouslySetInnerHTML={{
                      __html: whyTechData.whyTechs.title,
                    }}
                  ></Title>
                  <Paragraph>{whyTechData.whyTechs.paragraph}</Paragraph>
                  <BlueParagraph className="btnTitle fw700 blue">
                    Let’s innovate together.
                  </BlueParagraph>
                  <LinkCustom
                    ParentClass=""
                    BtnTransparent={true}
                    linkUrl={whyTechData.btnLink}
                    titleText={whyTechData.btnText}
                    colorChange=""
                  />
                </TextWrapper>
              </Col>
              <Col>
                <ImgWrapper>
                  <Image
                    src={whyTechData.whyTechs.imgSrc}
                    alt={whyTechData.whyTechs.imgAlt}
                    className="img-fluid"
                    height={462}
                    width={565}
                    priority={false}
                  />
                  <List className="whiteBg d-flex flex-column justify-content-center">
                    {whyTechData.whyTechs.imgListTexts.map(
                      (imgListText, index) => {
                        return (
                          <li key={imgListText.text}>
                            <IoIosCheckmarkCircleOutline className="black3" />
                            <span
                              dangerouslySetInnerHTML={{
                                __html: imgListText.text,
                              }}
                            ></span>
                          </li>
                        );
                      }
                    )}
                  </List>
                  <LogoWrapper>
                    <div className="logo d-flex justify-content-center align-items-center">
                      <Image
                        src={whyTechData.whyTechs.imgLogo}
                        alt={whyTechData.whyTechs.imgLogoAlt}
                        className="img-fluid"
                        width={89}
                        height={95}
                        // layout="fill"
                        layout="responsive"
                      />
                    </div>
                    <CircleWrapper>
                      {[1, 2, 3, 4].map((value, index) => {
                        return <div className="circle" key={index}></div>;
                      })}
                    </CircleWrapper>
                  </LogoWrapper>
                </ImgWrapper>
              </Col>
            </Row>
            {/* <BottomListWrapper>
              <Row>
                {whyTechData.whyTechs.WhyTechLists.map((WhyTechList, index) => {
                  return (
                    <Col xxl={3} className="d-flex" key={WhyTechList.icon}>
                      <div className="box whiteBg black">
                        <span>
                          <object
                            data={WhyTechList.icon}
                            className="w-100"
                            width={65}
                            height={70}
                          />
                        </span>
                        <h3
                          dangerouslySetInnerHTML={{
                            __html: WhyTechList.title,
                          }}
                          className="title fw700"
                        ></h3>
                        <p
                          className="fw400"
                          dangerouslySetInnerHTML={{
                            __html: WhyTechList.paragraph,
                          }}
                        ></p>
                      </div>
                    </Col>
                  );
                })}
              </Row>
            </BottomListWrapper> */}
          </GreyWrapper>
        </Container>
      </WhyTechWrapper>
    </>
  );
};

export default WhyTech;
