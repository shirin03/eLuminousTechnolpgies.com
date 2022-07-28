import styled from "styled-components";

export const HireDedicatedBannerWrapper = styled.section`
  padding: 120px 0;
  @media (max-width: ${({ theme }) => theme.media.deskstop1600}) {
    padding: 80px 0;
  }
  @media (max-width: ${({ theme }) => theme.media.deskstop1440}) {
    padding: 60px 0 100px;
  }
`;

export const TitleWrap = styled.h1`
  font: 900 90px/95px "Inter", sans-serif;
  margin-bottom: 39px;
  @media (max-width: ${({ theme }) => theme.media.deskstop1600}) {
    font: 900 82px/95px "Inter", sans-serif;
  }
  @media (max-width: ${({ theme }) => theme.media.deskstop1440}) {
    font: 900 68px/82px "Inter", sans-serif;
  }
`;

export const SmallTitleWrap = styled.h2`
  font: 700 30px / normal "Inter", sans-serif;
  margin-bottom: 65px;
  @media (max-width: ${({ theme }) => theme.media.deskstop1600}) {
    font: 700 26px / normal "Inter", sans-serif;
  }
  @media (max-width: ${({ theme }) => theme.media.deskstop1440}) {
    font: 700 22px / normal "Inter", sans-serif;
    margin-bottom: 46px;
  }
`;

export const ParagraphWrap = styled.p`
  font: 400 24px/38px "Inter", sans-serif;
  margin: 0 0 77px 0;
  max-width: 780px;
  @media (max-width: ${({ theme }) => theme.media.deskstop1600}) {
    font: 400 20px/34px "Inter", sans-serif;
    margin: 0 0 65px 0;
  }
  @media (max-width: ${({ theme }) => theme.media.deskstop1440}) {
    font: 400 18px/30px "Inter", sans-serif;
    margin: 0 0 45px 0;
  }
`;

export const ImgWrapper = styled.div`
  margin: 0;
  max-width: 745px;
  margin-left: auto;
  transform: translate(0, 0);
  padding: 0 90px 0 0;
  position: relative;
  .fPMgBu {
    left: auto;
    right: 20%;
    top: 0;
  }
  @media (max-width: ${({ theme }) => theme.media.deskstop1440}) {
    padding: 0 90px 0 0;
  }
`;

export const ClutchReview = styled.div`
  border-radius: 10px;
  background-color: #fff;
  box-shadow: 0 0 39.48px 2.52px rgba(0, 0, 0, 0.08);
  width: 291px;
  height: 156px;
  position: absolute;
  right: -5px;
  top: 200px;
  padding: 15px 15px;
  @media (max-width: ${({ theme }) => theme.media.deskstop1440}) {
    transform: scale(0.85) translate(30px, -40px);
  }
  p {
    font: 14px / 22px "Inter", sans-serif;
    max-width: 255px;
    color: rgba(var(--black));
  }
`;

export const ClutchLogoRate = styled.div`
  margin: 0 0 17px 0;
  img {
    max-width: 65px;
  }
`;
export const StarWrap = styled.div`
  span {
    margin-right: 10px;
  }
  ul {
    li {
      display: flex;
      font: 22px / normal "Inter", sans-serif;
      margin: 0 -1px;
      color: #fd3e2f;
      @media (max-width: ${({ theme }) => theme.media.deskstop1440}) {
        font: 20px / normal "Inter", sans-serif;
      }
    }
  }
`;

export const List = styled.ul`
  border-radius: 10px;
  box-shadow: 0 0 39.48px 2.52px rgb(0 0 0 / 8%);
  max-width: 611px;
  display: flex;
  padding: 35px 10px 25px;
  margin: 0 0 0 45px;
  @media (max-width: ${({ theme }) => theme.media.deskstop1440}) {
    margin: 0;
  }
  li {
    flex: 1;
    .icon {
      max-width: 61px;
      width: 100%;
      margin: 0 auto 20px;
      height: 50px;
    }
    .text {
      font-size: 18px;
      @media (max-width: ${({ theme }) => theme.media.deskstop1440}) {
        font-size: 16px;
        text-align: center;
      }
    }
  }
`;
