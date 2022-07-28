import styled, { css } from "styled-components";

export const BtnWrap = styled.div`
  & > * {
    transition: var(--trans_a3);
    display: inline-flex;
    letter-spacing: 0.5px;
    justify-content: center;
    align-items: center;
    border: 2px solid rgba(var(--blackTurmeric));
    border-radius: 0;
    color: rgba(var(--white));
    background-color: rgba(var(--blackTurmeric));
    padding: 0;
    min-height: 60px;
    font-size: 20px;
    font-weight: 600;
    padding: 10px 40px;
    text-decoration: none;
    @media (max-width: ${({ theme }) => theme.media.deskstop1440}) {
      padding: 10px 30px;
      min-height: 55px;
      font-size: 18px;
    }
    & svg {
      margin: 0 0 0 15px;
      font-size: 22px;
      @media (max-width: ${({ theme }) => theme.media.deskstop1440}) {
        font-size: 20px;
      }
    }
    &:hover,
    &:focus {
      background-color: transparent;
      color: rgba(var(--blackTurmeric));
      box-shadow: none;
    }
    ${({ BtnTransparent }) =>
      BtnTransparent &&
      css`
        background-color: transparent;
        color: rgba(var(--blackTurmeric));
        &:hover {
          color: rgba(var(--white));
          background-color: rgba(var(--blackTurmeric));
        }
      `}
  }
`;
