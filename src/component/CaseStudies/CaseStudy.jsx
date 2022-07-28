import React from "react";
import Image from "next/image";
import LinkCustom from "../Button/LinkCustom";
import { Col } from "react-bootstrap";
import {
  CaseBox,
  CaseImg,
  CaseText,
  Title,
  Paragraph,
} from "./CaseStudy.style";
const CaseStudy = ({ CaseStudyData }) => {
  return (
    <>
      {CaseStudyData.caseSudies.map((CaseSudie, index) => {
        return (
          <Col className="d-flex" key={CaseSudie.id}>
            <CaseBox key={index} className="d-flex flex-column">
              <CaseImg>
                <Image
                  src={CaseSudie.image}
                  alt="Title"
                  className="w-100"
                  layout="fill"
                />
              </CaseImg>
              <CaseText>
                <Title
                  className="black fw600"
                  dangerouslySetInnerHTML={{
                    __html: CaseSudie.title,
                  }}
                ></Title>
                <Paragraph>{CaseSudie.paragraph}</Paragraph>
                <LinkCustom
                  ParentClass="text-center mt-auto"
                  BtnTransparent={false}
                  target="_blank"
                  linkUrl={CaseSudie.pdfLink}
                  titleText="Download PDF"
                  colorChange=""
                />
              </CaseText>
            </CaseBox>
          </Col>
        );
      })}
    </>
  );
};

export default CaseStudy;
