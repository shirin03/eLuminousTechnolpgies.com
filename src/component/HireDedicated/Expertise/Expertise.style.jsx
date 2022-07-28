import styled from "styled-components";

export const ExpertiseWrapper = styled.section`
  padding-top: 0;
  .btn {
    margin: 60px 0 0 0;
  }
`;

// export const Title = styled.h2`
//   font: 700 46px / normal "Inter", sans-serif;
//   margin-bottom: 30px;
// `;

// export const HireSmallTitle = styled.h3`
//   font: 400 20px / 34px "Inter", sans-serif;
//   color: #000;
//   max-width: 872px;
//   margin-bottom: 90px;
// `;

export const ExpertiseBox = styled.div`
  margin-bottom: 60px;
  span {
    margin-bottom: 20px;
    display: inline-block;
    img,
    object {
      max-width: 80px;
      width: 100%;
    }
  }
`;

export const ExpertiseBoxTitle = styled.h3`
  font-size: 26px;
  font-weight: 700;
  margin-bottom: 40px;
  /* max-width: 280px; */
  min-height: 60px;
`;
export const ExpertiseBoxPara = styled.p`
  font-size: 20px;
  font-weight: 400;
  line-height: 34px;
  max-width: 370px;
  :last-child {
    margin-bottom: 0;
  }
`;
