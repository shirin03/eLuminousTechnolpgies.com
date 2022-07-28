import React from "react";
import Link from "next/link";
// import FooterLink from "./FooterLink";
import { Col } from "react-bootstrap";
import { Wrap, Heading, LinkList } from "./Footer.style";

function FooterLinks({ footerMenuDatas, xl, lg, md, sm }) {
  return (
    <Col xl={xl} lg={lg} md={md} sm={sm}>
      <Wrap>
        <Heading>{footerMenuDatas.title}</Heading>
        <LinkList>
          {footerMenuDatas.menus.map((menu, index) => {
            return (
              <li key={menu.path}>
                <Link href={menu.path}>
                  <a dangerouslySetInnerHTML={{
                      __html: menu.title,
                    }}></a>
                </Link>
              </li>
            );
          })}
        </LinkList>
      </Wrap>
    </Col>
  );
}

export default FooterLinks;
