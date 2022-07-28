import React from "react";
import Image from "next/image";
import { Container, Row, Col } from "react-bootstrap";

import HireForm from "./Form/HireForm";
import { WhyTechWrapper, ImgBox, TextBox } from "./Contact.style";
const Contact = ({ whyTechData }) => {
  // const filePath = window.location.origin + "/images/HireDedicated/";
  // const fileIconsPath = window.location.origin + "/images/HireDedicated/icons/";
  return (
    <>
      <WhyTechWrapper>
        <Container>
          <Row>
            <Col xxl={6}>
              <ImgBox>
                <Image
                  src="/images/HireDedicated/contact-bg.webp"
                  alt="Contact Banner"
                  className="w-100"
                  // layout="fill"
                  // layout="fill"
                  // objectFit="none"
                  // objectFit="contain"
                  // quality={100}
                  width={771}
                  height={927}
                />
                <TextBox></TextBox>
              </ImgBox>
            </Col>
            <Col xxl={6} className="d-flex align-items-center">
              <HireForm />
            </Col>
          </Row>
        </Container>
      </WhyTechWrapper>
    </>
  );
};

export default Contact;
