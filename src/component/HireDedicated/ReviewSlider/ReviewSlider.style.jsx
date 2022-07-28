import styled from "styled-components";

import { StarWrap } from "../TopBanner/TopBanner.style";
export const WhyTechWrapper = styled.section`
  .row {
    margin: 0 0 60px;
  }
`;
export const BlueWrapper = styled.div`
  .carousel-root {
    padding: 80px 220px;
    background: linear-gradient(45deg, #0b2757 0, #01317b 42%, #01317b 100%);
    .carousel-slider {
      display: flex;
      flex-direction: column-reverse;
    }
  }
  .control-dots {
    display: flex;
    column-gap: 12px;
    margin-top: 0px;
    /* padding: 0px 220px; */
    margin-top: 60px;
    bottom: 70px;
    position: static;
    .dot {
      width: 18px;
      height: 18px;
      display: inline-block;
      background-color: #6a6a6a;
      border-radius: 50px;
      transition: var(--trans_a3);
      margin: 0;
      opacity: 1;
      box-shadow: none;
    }
    .dot.selected {
      background-color: rgb(var(--blue));
    }
  }
`;

export const Box = styled.div`
  display: flex;
  flex-wrap: wrap;
`;
export const Left = styled.div`
  color: rgb(var(--white));
  max-width: calc(74% - 0px);
  width: 100%;
  flex: 0 0 auto;
  margin-right: 0;
  border-right: 1px solid rgba(var(--white), 0.32);
  padding-right: 70px;
  text-align: left;
`;

export const SliderHeading = styled.h5`
  font: 18px / normal "Inter", sans-serif;
  letter-spacing: 1px;
  margin: 0 0 15px;
  display: inline-block;
`;
export const ReviewText = styled.div`
  font: 28px / 40px "Inter", sans-serif;
  color: rgb(var(--black_normal));
`;

export const AvtarReviewWrapper = styled.div`
  margin-top: 55px;
`;
export const Heading = styled.div`
  margin: 0 0 15px;
  display: inline-block;
  text-transform: capitalize;
  font-weight: 400;
  letter-spacing: 1px;
  font-size: 16px;
  padding-left: 118px;
  position: relative;
  &:before {
    content: "";
    position: absolute;
    top: 50%;
    left: 0;
    max-width: 67px;
    width: 100%;
    height: 1px;
    max-width: 106px;
    background-color: rgba(var(--white), 0.32);
  }
`;
export const AvtarWrapper = styled.div``;
export const AvtarWrap = styled.div`
  display: flex;
  column-gap: 28px;
`;
export const Avtar = styled.div`
  width: 100%;
  max-width: 92px;
  height: 92px;
  border-radius: 50%;
  overflow: hidden;
  img {
    height: 100%;
    width: 100%;
  }
`;
export const AvtarDetails = styled.div`
  display: flex;
  flex-direction: column;
  padding: 5px 0 0;
  justify-content: center;
  max-width: 240px;
  .name {
    font-size: 24px;
    color: rgb(var(--white));
  }
  .name__details {
    font: 16px / 22px "Inter", sans-serif;
    color: rgb(var(--white));
  }
`;
export const Right = styled.div`
  flex: 0 0 25%;
  width: auto;
  padding-left: 75px;
  margin-left: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-right: 0;
  hr {
    margin: 12px 0 25px;
  }
`;
export const StarWrapper = styled(StarWrap)`
  font-size: 30px;
  color: rgb(var(--white));
  ul {
    li {
      font: 40px / normal "Inter", sans-serif;
      color: #fd3e2f;
    }
  }
`;
export const RatingPoint = styled.ul`
  li {
    color: rgb(var(--white));
    font-size: 18px;
    margin-left: 0;
    margin-bottom: 5px;
    padding-bottom: 5px;
    display: flex;
    span {
      font-weight: 600;
      margin-left: auto;
      line-height: 18px;
      font-size: 18px;
      padding-left: 5px;
      color: rgb(var(--white));
    }
  }
`;
