import styled from "styled-components";

export const CaseBox = styled.div`
  background-color: rgb(241 241 241);
  border: 1px solid #d8d8d8;
  border-radius: 9px;
  overflow: hidden;
  border-radius: 0;
`;
export const CaseImg = styled.div`
  padding-top: 66.25%; /* 16:9 Aspect Ratio (divide 9 by 16 = 0.5625) */
  position: relative;
  img {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
  }
`;
export const CaseText = styled.div`
  padding: 35px 30px 30px;
  display: flex;
  flex-direction: column;
  flex: 1;
  /* height: 100%; */
  .btn_wrap a{
    width: 100%;
    font-size: 18px;
    min-height: 51px;
    svg {
      display: none;
    }
  }
`;
export const Title = styled.h4`
  font: 22px/30px "Inter", sans-serif;
  min-height: 77px;
  margin-bottom: 14px;
`;
export const Paragraph = styled.p`
  color: rgba(var(--black), 0.7);
  font-size: 18px;
  font-weight: 400;
  margin-bottom: 27px;
`;
