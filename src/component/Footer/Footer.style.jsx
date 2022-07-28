import styled from "styled-components";
export const FooterWrapper = styled.section`
  padding-bottom: 0;
`;
export const GreyWrapper = styled.div`
  background-color: rgb(var(--grey));
  padding: 105px 150px 90px;
  a {
    transition: var(--trans_a3);
    &:hover {
      color: rgba(var(--blue));
    }
  }
`;
export const Wrap = styled.div``;
export const Heading = styled.h6`
  font-size: 16px;
  color: rgba(var(--black));
  text-transform: uppercase;
  position: relative;
  padding-bottom: 12px;
  margin-bottom: 24px;
  font-weight: 700;
  letter-spacing: 0.5px;
  &:after {
    content: "";
    position: absolute;
    left: 0;
    bottom: 0;
    height: 3px;
    width: 29px;
    background-color: #2166f3;
  }
`;
export const LinkList = styled.ul`
  li {
    a {
      display: inline-block;
      font-size: 14px;
      color: #000;
      line-height: 28px;
      text-decoration: none;
    }
  }
`;

export const FooterLogoWrapper = styled.div`
  max-width: 372px;
  display: flex;
  flex-wrap: wrap;
  margin-top: 0;
  div {
    width: 50% !important;
    display: flex;
    align-items: center;
    justify-content: center;
    a,span {
      display: inline-block;
      width: 100%;
      /* height: 100%; */
      text-align: center;
      position: relative;
    }
    img {
      width: 100%;
      max-width: 130px;
      margin: 0 auto !important;
    }
  }
`;
export const Clutch = styled.div`
  &:first-child {
    width: 100% !important;
    max-width: 100%;
    justify-content: center !important;
    padding: 12px 10px 5px 58px;
    border-radius: 5px;
  }
  .content {
    display: flex;
  }
`;
export const MobileApp = styled.div``;
export const ItFirms = styled.div``;
export const GoodFirms = styled.div`
  max-width: 210px;
  margin: 0 auto;
`;
export const Gartner = styled.div`
  margin-bottom: 0;
  text-align: center;
`;
export const Dmca = styled.div`
  flex: 0 0 100%;
  margin-top: 10px;
`;

export const CompanyInfo = styled.ul`
  font-size: 13px;
  line-height: 22px;
  color: #212529;
  li {
    margin-bottom: 10px;
    display: flex;
    svg {
      color: grey;
      font-size: 21px !important;
      margin-right: 16px;
      flex: 0 0 auto;
    }
    a {
      display: flex;
      align-items: center;
      color: rgba(var(--black));
      text-decoration: none;
    }
  }
`;

export const CompanyMail = styled.div`
  font-size: 13px;
  line-height: 22px;
  color: #212529;
  max-width: 550px;
  flex-wrap: wrap;
  margin-bottom: 0;
  display: flex;
  a {
    display: flex;
    align-items: center;
    color: rgba(var(--black));
    text-decoration: none;
  }
`;
export const Mail = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  border-top: 1px solid #dbdbdb;
  border-bottom: 1px solid #dbdbdb;
  margin: 6px 0 12px;
  padding: 12px 0;
  b {
    width: 100%;
    color: #333;
    margin-bottom: 5px;
    text-transform: uppercase;
    font-weight: 700;
  }
  a {
    width: 100%;
    align-items: center;
    font-size: 12px;
    flex-wrap: wrap;
    line-height: 1.2;
    margin-bottom: 5px;
    svg {
      width: 23px;
      color: grey;
      font-size: 18px !important;
      margin-right: 8px;
      text-align: center;
    }
  }
`;

export const DigitalVirtual = styled.div`
  margin-bottom: 10px;
  display: flex;
  & > div {
    padding: 0;
    margin: 0;
    border: 0;
  }
`;
