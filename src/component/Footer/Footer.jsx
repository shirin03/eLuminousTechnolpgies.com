import React from "react";
import Image from "next/image";
import { Container, Row, Col } from "react-bootstrap";
import BottomeFooter from "./BottomFooter";
import { IoMdCall } from "react-icons/io";
import { IoLocationSharp } from "react-icons/io5";
import { AiFillSkype } from "react-icons/ai";
import { MdEmail } from "react-icons/md";
import FooterLinks from "./FooterLinks";

import {
  FooterWrapper,
  GreyWrapper,
  Wrap,
  Heading,
  FooterLogoWrapper,
  Clutch,
  MobileApp,
  ItFirms,
  GoodFirms,
  Gartner,
  Dmca,
  CompanyInfo,
  CompanyMail,
  DigitalVirtual,
  Mail,
} from "./Footer.style";
import {
  footerServicesMenus,
  footerhireDedicatedMenus,
  footerknowMoreMenus,
} from "../../data/FooterMenuData";

function Footer({ footerMenuDatas, xl, lg, md, sm }) {
  return (
    <>
      <FooterWrapper>
        <Container>
          <GreyWrapper>
            <Row className="justify-content-center">
              <FooterLinks
                xl={2}
                lg={3}
                md={4}
                sm={6}
                footerMenuDatas={footerServicesMenus}
              />
              <FooterLinks
                xl={3}
                lg={3}
                md={4}
                sm={6}
                footerMenuDatas={footerhireDedicatedMenus}
              />
              <FooterLinks
                xl={2}
                lg={3}
                md={4}
                sm={3}
                footerMenuDatas={footerknowMoreMenus}
              />
              <Col xl={3} lg={3} md={12} sm={9}>
                <Wrap>
                  <Heading>Our Esteemed Partners</Heading>
                  <FooterLogoWrapper className="footer-logos-wrapper">
                    <Clutch>
                      <iframe
                        id="iframe-0.6771806529285832"
                        src="https://widget.clutch.co/widgets/get/2?ref_domain=eluminoustechnologies.com&amp;uid=432429&amp;ref_path=/hire-dedicated-developer/hire-angular-developers/"
                        title='{"type":"iframe-resize","data":{"width":276,"height":246},"uuid":"bd8ea10c813649e7b23853e745720318"}2'
                        width="100%"
                        height="50px"
                      ></iframe>
                    </Clutch>
                    <MobileApp>
                      <a
                        href="https://www.topdevelopers.co/directory/mobile-app-developers"
                        target="_blank"
                        rel="noreferrer"
                      >
                        <Image
                          src="/images/logos/Badges-Mobile-App-Developers-2020.webp"
                          alt="MobileApp"
                          // layout="fill"
                          width={130}
                          height={130}
                          layout="responsive"
                          // layout="fill"
                        />
                      </a>
                    </MobileApp>
                    <ItFirms>
                      <a
                        href="https://www.itfirms.co/top-web-development-companies/"
                        target="_blank"
                        rel="noreferrer"
                      >
                        <Image
                          src="/images/logos/app-developers-usa-2020.png"
                          alt="ITFirms-Top-App-Developers-USA"
                          width={130}
                          height={130}
                          // layout="fill"
                        />
                      </a>
                    </ItFirms>
                    <GoodFirms>
                      <a
                        target="_blank"
                        rel="noreferrer"
                        href="https://www.goodfirms.co/companies/view/6738/eluminous-technologies-pvt-ltd"
                      >
                        <Image
                          src="https://assets.goodfirms.co/categories/goodfirms-blue.svg"
                          alt="GoodFirms Badge"
                          width={130}
                          height={20}
                          // layout="fill"
                        />
                      </a>
                    </GoodFirms>
                    <Gartner>
                      <span>
                        <Image
                          src="/images/logos/gartner-logo.webp"
                          alt="Gartner"
                          width={130}
                          height={45}
                          // layout="fill"
                        />
                      </span>
                    </Gartner>
                    <Dmca>
                      <a
                        href="//www.dmca.com/Protection/Status.aspx?ID=1e206da3-3a6c-47fe-9d2b-8bbff60cd8b7"
                        title="DMCA.com Protection Status"
                        className="dmca-badge"
                        target="_blank"
                        rel="noreferrer"
                      >
                        <Image
                          src="/images/logos/dmca_protected_sml_120l.png"
                          alt="DMCA.com Protection Status"
                          width={130}
                          height={24}
                          // layout="fill"
                        />
                      </a>
                    </Dmca>
                  </FooterLogoWrapper>
                </Wrap>
              </Col>
              <Col xl={10} lg={12} md={12} sm={12}>
                <Wrap>
                  <Heading>Contact</Heading>
                  <CompanyInfo>
                    <li>
                      <IoLocationSharp />
                      IT Park-29/7, Near Power House, MIDC Ambad, Ambad
                      Industrial Area, Nashik, Maharashtra, India - 422010
                    </li>
                    <li>
                      <IoMdCall />
                      <a
                        href="tel:912532382566"
                        id="phone-contact-number"
                        data-ccw="phone-contact-number"
                      >
                        +91 253 238 2566 ,
                      </a>
                      <a href="tel:918208222939">+91 8208222939</a>
                    </li>
                  </CompanyInfo>
                  <CompanyMail>
                    <Mail>
                      <b>Web Application Development</b>
                      <a
                        href="mailto:sales@eluminoustechnologies.com"
                        id="mail-contact"
                        data-ccw="mail-contact"
                      >
                        <MdEmail />
                        sales@eluminoustechnologies.com
                      </a>
                      <a
                        href="skype:eluminoustechnologies?chat"
                        id="skype-contact"
                        data-ccw="skype-contact"
                      >
                        <AiFillSkype />
                        eluminoustechnologies
                      </a>
                    </Mail>
                    <DigitalVirtual>
                      <Mail>
                        <b>Digital Marketing</b>
                        <a
                          href="mailto:sam@eluminoustechnologies.com"
                          id="mail-contact"
                          data-ccw="mail-contact"
                        >
                          <MdEmail />
                          sam@eluminoustechnologies.com
                        </a>
                        <a
                          href="skype:el_sysadmin?chat"
                          id="skype-contact"
                          data-ccw="skype-contact"
                        >
                          <AiFillSkype />
                          DM_BDM
                        </a>
                      </Mail>
                      <Mail>
                        <b>Virtual Assistance</b>
                        <a
                          href="mailto:sales@eluminousva.com"
                          id="mail-contact"
                          data-ccw="mail-contact"
                        >
                          <MdEmail />
                          sales@eluminousva.com{" "}
                        </a>
                        <a
                          href="skype:cid.d0af7eb429b962d6?chat"
                          id="skype-contact"
                          data-ccw="skype-contact"
                        >
                          <AiFillSkype />
                          VA_BDM
                        </a>
                      </Mail>
                    </DigitalVirtual>
                  </CompanyMail>
                </Wrap>
              </Col>
            </Row>
          </GreyWrapper>
        </Container>
      </FooterWrapper>
      <BottomeFooter />
    </>
  );
}

export default Footer;
