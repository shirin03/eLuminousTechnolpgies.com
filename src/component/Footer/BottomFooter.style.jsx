import styled from "styled-components";
export const BottomFooter = styled.div`
  padding: 20px 0;
`;
export const FooterSocialLinks = styled.ul`
  display: flex;
  li {
    margin-right: 8px;
    &:hover a {
      color: rgba(var(--white));
    }
    &.facebook:hover a {
      background-color: #365899;
      border-color: #365899 !important;
    }
    &.twitter:hover a {
      background-color: #1da1f2;
      border-color: #1da1f2 !important;
    }
    &.google-plus a:hover {
      background-color: #db4437;
      border-color: #db4437 !important;
    }
    &.linkedin:hover a {
      background-color: #007bb5;
      border-color: #007bb5 !important;
    }
    &.youtube:hover a {
      background-color: red;
      border-color: red !important;
    }
    a {
      display: block;
      border: 2px solid rgba(var(--black3));
      border-radius: 50%;
      width: 38px;
      height: 38px;
      line-height: 35px;
      font-size: 16px;
      /* color: #7d7d7d; */
      color: rgba(var(--black3));
      transition: all 0.5s;
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }
`;

export const Copyright = styled.div`
  text-align: right;
  font-size: 13px;
  letter-spacing: 1px;
  color: #8d8d8d;
  a {
    color: rgba(var(--black));
    text-decoration: none;
    transition: var(--trans_a3);
    &:hover {
      color: rgba(var(--blue));
    }
  }
  ul {
    li {
      display: inline-block;
      border-right: 1px solid #363636;
      padding: 0 10px;
      line-height: 12px;
      margin-top: 12px;
      letter-spacing: 0;
      &:last-child {
        border: 0;
        padding-right: 0;
      }
      a {
        color: #363636;
      }
    }
  }
`;
