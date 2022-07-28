import styled from "styled-components";

export const Wrapper = styled.section`
  margin: 30px 0;
  .accordion-item {
    margin: 0 0 15px 0;
    button {
      padding: 20px 50px 20px 30px;
      font-size: 18px;
      font-weight: 700;
      border: 0;
      color: rgba(var(--black));
      width: 100%;
      text-align: left;
      background-color: rgba(var(--white));
      transition: var(--trans_a3);
      svg {
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
        right: 30px;
        font-size: 30px;
        transition: var(--trans_a3);
      }
      &:focus,
      &:hover,
      &[aria-expanded="true"] {
        text-decoration: none;
        background-color: rgba(var(--blackTurmeric));
        color: rgba(var(--white));
        box-shadow: none;
      }
      &[aria-expanded="true"] {
        svg {
          transform: translateY(-50%) rotate(180deg);
        }
      }
      &:after {
        content: none;
      }
    }
    .accordion-body {
      padding: 20px 30px;
      p {
        font-size: 16px;
        line-height: 25px;
        font-weight: 400;
        color: rgba(var(--black));
        margin-bottom: 10px;
        &:last-child {
          /* margin: 0 0 0 0; */
        }
      }
      ul {
        padding: 0 0 0 15px;
        li {
          list-style-type: disc;
          font-size: 16px;
          line-height: 25px;
          font-weight: 400;
          color: rgba(var(--black));
        }
      }
    }
  }
`;
