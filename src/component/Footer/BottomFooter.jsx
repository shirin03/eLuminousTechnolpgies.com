import React from "react";
import Link from "next/link";
import { Container, Row, Col } from "react-bootstrap";
import { GrFacebookOption } from "react-icons/gr";
// import { RiCopyrightLine } from "react-icons/gr";
import { FaTwitter, FaLinkedinIn, FaYoutube } from "react-icons/fa";
import { RiCopyrightLine } from "react-icons/ri";
import {
  BottomFooter,
  FooterSocialLinks,
  Copyright,
} from "./BottomFooter.style";

export const BottomeFooter = (props) => {
  return (
    <>
      <BottomFooter>
        <Container>
          <Row className="justify-content-center">
            <Col xxl={5}>
              <FooterSocialLinks>
                <li className="facebook">
                  <a href="#" target="_blank">
                    <GrFacebookOption />
                  </a>
                </li>
                <li className="twitter">
                  <a href="#" target="_blank">
                    <FaTwitter />
                  </a>
                </li>
                <li className="linkedin">
                  <a href="#" target="_blank">
                    <FaLinkedinIn />
                  </a>
                </li>
                <li className="youtube">
                  <a href="#" target="_blank">
                    <FaYoutube />
                  </a>
                </li>
              </FooterSocialLinks>
            </Col>
            <Col xxl={5} className="text-right">
              <Copyright>
                <a
                  href="https://eluminoustechnologies.com"
                  target="_blank"
                  rel="noreferrer"
                >
                  eLuminous Technologies
                </a>
                <span className="mx-1 d-inline-block">
                  <RiCopyrightLine />
                </span>
                2022 All Rights Reserved
                <ul>
                  <li>
                    <a
                      href="https://eluminoustechnologies.com/terms-and-conditions/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Terms &amp; Conditions
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://eluminoustechnologies.com/privacy-policy/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Privacy &amp; Policy
                    </a>
                  </li>
                </ul>
              </Copyright>
            </Col>
          </Row>
        </Container>
      </BottomFooter>
    </>
  );
};

export default BottomeFooter;
