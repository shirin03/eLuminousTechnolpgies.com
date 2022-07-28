import React, { useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Nav, Navbar, Container } from "react-bootstrap";
import { MdEmail } from "react-icons/md";
import MenuList from "./MenuList";
import LinkCustom from "../Button/LinkCustom";
import {
  NavigationWrapper,
  NavigationToolbarWrapper,
} from "./Navigation.style";

const Navigation = () => {
  // Sticky Menu Area
  useEffect(() => {
    window.addEventListener("scroll", isSticky);
    return () => {
      window.removeEventListener("scroll", isSticky);
    };
  });
  const isSticky = (e) => {
    const header = document.querySelector("header");
    const scrollTop = window.scrollY;
    scrollTop >= 10
      ? header.classList.add("is-sticky")
      : header.classList.remove("is-sticky");
  };
  return (
    <NavigationWrapper>
      <Container>
        <NavigationToolbarWrapper>
          <MdEmail /> biz@eluminoustechnologies.com
        </NavigationToolbarWrapper>
      </Container>
      <Navbar expand="lg">
        <Container>
          <Navbar.Brand>
            <Link href="/">
              <a>
                <Image
                  src="/images/eluminous-pvt-ltd_black.svg"
                  alt="eLuminous Logo"
                  width={224}
                  height={45}
                />
              </a>
            </Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav className=" w-100 d-flex justify-content-center" navbarScroll>
              <MenuList />
            </Nav>
          </Navbar.Collapse>
          <LinkCustom
            BtnTransparent={false}
            linkUrl="/about-us"
            titleText="Get a Quote"
          />
        </Container>
      </Navbar>
    </NavigationWrapper>
  );
};

export default Navigation;
