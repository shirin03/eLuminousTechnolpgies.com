import styled from "styled-components";

export const FormTitle = styled.h2`
  font-size: 60px;
  margin-bottom: 38px;
`;
export const FormSubTitle = styled.p`
  font-size: 18px;
`;
export const FromWrap = styled.div`
  color: rgba(var(--black));
  max-width: 655px;
  margin: 0 auto;
  form {
    margin: 85px 0 0;
    .form-group {
      margin-bottom: 35px;
      .form-control,
      .PhoneInput input {
        border: 0;
        border-bottom: 1px solid #dedede !important;
        border-radius: 0;
        background-color: transparent;
        height: 42px;
        font-size: 14px !important;
        font-weight: 400;
        color: rgb(var(--black));
        font-family: var(--inter) !important;
        padding-left: 0 !important;
        padding-right: 0 !important;
        &:focus,
        &:focus-visible {
          -webkit-box-shadow: none;
          box-shadow: none;
          background-color: transparent;
        }
        &:focus:placeholder {
          opacity: 0;
          background-color: transparent;
        }
        &::placeholder {
          color: rgb(var(--black));
        }
        &::-webkit-input-placeholder {
          color: rgb(var(--black));
        }
        &:-ms-input-placeholder {
          color: rgb(var(--black));
        }
        &::-moz-placeholder {
          color: rgb(var(--black));
        }
        &::-ms-input-placeholder {
          color: rgb(var(--black));
        }
      }
      textarea.form-control {
        min-height: 140px;
        max-height: 140px;
      }
      .PhoneInput {
        input {
          color: rgba(var(--black));
          padding: 0 15px !important;
          &:focus-visible {
            border: 0 !important;
          }
        }
        .PhoneInputCountry {
          background-color: #dedede;
          color: rgb(var(--black));
          padding: 0 5px 0 10px;
          min-width: 65px;
          margin-right: 0;
          .PhoneInputCountryIcon--border {
            width: 100%;
            max-width: 35px;
            box-shadow: none;
            height: 100%;
            background-color: transparent;
          }
          input {
            border: 0 !important;
            color: rgba(var(--black));
            &:focus:placeholder {
              opacity: 0;
              background-color: transparent;
            }
            &::placeholder {
              color: rgb(var(--black));
            }
            &::-webkit-input-placeholder {
              color: rgb(var(--black));
            }
            &:-ms-input-placeholder {
              color: rgb(var(--black));
            }
            &::-moz-placeholder {
              color: rgb(var(--black));
            }
            &::-ms-input-placeholder {
              color: rgb(var(--black));
            }
          }
        }
      }
    }
  }
`;
