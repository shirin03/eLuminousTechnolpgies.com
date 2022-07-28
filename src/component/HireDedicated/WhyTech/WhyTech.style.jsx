import styled, { keyframes } from "styled-components";

export const WhyTechWrapper = styled.section``;
export const GreyWrapper = styled.div`
  background-color: rgb(var(--grey));
  padding: 105px 150px 90px;
`;
export const TextWrapper = styled.div`
  padding: 0 0 0 110px;
`;
export const SmallTitle = styled.h6`
  font-size: 20px;
  position: relative;
  margin: 0 0 10px;
  &::before {
    content: "";
    width: 50px;
    height: 1px;
    position: absolute;
    top: 12px;
    left: calc(-50px - 20px);
    background-color: rgba(var(--red));
  }
`;

export const Title = styled.h2`
  font: 26px / 38px "Inter", sans-serif;
  font-size: 26px;
  margin: 0 0 45px;
`;
export const Paragraph = styled.p`
  font: 18px / 28px "Inter", sans-serif;
  margin: 0 0 45px;
`;
export const BlueParagraph = styled(Paragraph)`
  font: 22px / normal "Inter", sans-serif;
  margin: 0 0 30px;
`;

export const ImgWrapper = styled.div`
  position: relative;
  max-width: 565px;
`;
export const List = styled.ul`
  border-radius: 10px;
  box-shadow: 0 0 39.48px 2.52px rgba(0, 0, 0, 0.08);
  width: 291px;
  height: 156px;
  position: absolute;
  right: -100px;
  bottom: 100px;
  padding: 15px 25px;
  min-width: 360px;
  li {
    margin: 0 0 10px 0;
    svg {
      margin: 0 10px 0 0;
      font-size: 20px;
    }
    b {
      color: rgba(var(--blue));
    }
    &:last-child {
      margin: 0;
    }
  }
`;

export const CircleWave = keyframes`
from {
    transform:  scale(1, 1);
    opacity: .5;
  }
  to {
    transform:  scale(2.5, 2.5);
    opacity: 0;
  }
`;
export const LogoWrapper = styled.div`
  position: absolute;
  z-index: 1;
  width: 120px;
  height: 120px;
  border-radius: 50%;
  background-color: rgba(var(--white));
  bottom: 100px;
  left: 0;
  .logo {
    width: 120px;
    height: 120px;
    border-radius: 50%;
    padding: 15px;
    position: relative;
    display: inline-block !important;
  }
`;
export const CircleWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  .circle {
    border-radius: 50%;
    background-color: rgba(var(--white));
    width: 100%;
    height: 100%;
    opacity: 0;
    z-index: -1;
    top: 0;
    left: 0;
    position: absolute;
    animation: ${CircleWave} 3s infinite cubic-bezier(0.36, 0.11, 0.89, 0.32);
    box-shadow: 10px 10px 10px rgb(0 0 0 / 10%);
    &:nth-child(1) {
      animation-delay: 0s;
    }
    &:nth-child(2) {
      animation-delay: 0.6s;
    }
    &:nth-child(3) {
      animation-delay: 1.2s;
    }
    &:nth-child(4) {
      animation-delay: 1.8s;
    }
  }
`;

export const BottomListWrapper = styled.div`
  .box {
    width: 100%;
    background-color: rgb(var(--white));
    padding: 35px;
    span {
      margin: 0 0 33px;
      display: inline-block;
    }
    .title {
      font: 22px / 25px "Inter", sans-serif;
      margin: 0 0 22px;
    }
    p {
      font: 16px / 25px "Inter", sans-serif;
    }
  }
`;
