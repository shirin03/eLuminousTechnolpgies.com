import styled from "styled-components";

export const NavigationToolbarWrapper = styled.div`
  padding: 7px 0;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  font-size: 12px;
  color: #414549;
  line-height: 1.2;
  letter-spacing: 0.6px;
  svg {
    font-size: 20px;
    margin-right: 6px;
  }
`;
export const NavigationWrapper = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 9990;
  background-color: rgba(var(--white));
  background-color: ${({ bg }) => bg};
  transition: var(--trans_a3);
  &.is-sticky {
    background-color: rgba(var(--white));
    -webkit-box-shadow: 0 2px 17px rgb(0 0 0 / 11%);
    box-shadow: 0 2px 17px rgb(0 0 0 / 11%);
    transition: var(--trans);
  }
  nav {
    padding: 0;
  }
  .container {
    max-width: 1730px;
  }
  .navbar-brand img {
    max-width: 220px;
    
  }
  .menus {
    display: flex;
    list-style: none;
    .menu-items {
      position: relative;
      font-size: 14px;
      padding-right: 18px;
      padding-left: 18px;
      a {
        display: block;
        font-size: inherit;
        color: inherit;
        text-decoration: none;
      }
      button {
        color: inherit;
        font-size: inherit;
        border: none;
        background-color: transparent;
        cursor: pointer;
        width: 100%;
        svg {
          transition: var(--trans_a3);
          font-size: 22px;
          width: auto;
          color: rgba(var(--black3));
        }
        &:hover svg {
          transform: rotate(180deg);
          color: rgba(var(--blue));
        }
      }
      a,
      button {
        font: 600 18px/75px "Inter", sans-serif;
        color: #22292f;
        text-transform: capitalize;
        border-bottom: 5px solid transparent;
        transition: var(--trans_a3);
        display: block;
      }
      &:hover > a,
      &:hover > button,
      &.active a,
      &.active button {
        text-decoration: none;
        border-bottom-color: #2166f3;
      }
    }
  }
  .dropdownMenu {
    list-style: none;
    position: absolute;
    width: 300px;
    background-color: #242d34;
    color: #fff;
    top: 47px;
    left: -20px;
    padding: 20px 0;
    opacity: 0;
    visibility: hidden;
    transition: all 0.2s;
    transform: translateY(100px);
    box-shadow: 0 12px 20px rgb(0 0 0/10%);
    z-index: 9999;
    background-color: #fff;
    border-top: 1px solid #e3e3e3;
    .dropdown-submenu {
      position: absolute;
      left: 100%;
      top: -7px;
    }
    .menu-items {
      padding: 0 30px;
      position: relative;
      a {
        border: 0;
        text-transform: capitalize;
        font: 400 16px/18px "Inter", sans-serif;
        position: relative;
        color: rgba(var(--black));
        margin: 0 0 6px 0;
        padding: 10px 0 10px 17px;
        &:last-child {
          margin-bottom: 0;
        }
        &::after {
          content: "\f0da";
          position: absolute;
          left: 0;
          font: normal normal normal 14px/1 FontAwesome;
          top: 12px;
          color: rgba(255, 255, 255, 0.2784313725490196);
        }
        &:hover {
          background-color: transparent;
          color: rgba(var(--blue));
        }
      }
    }
  }
  .dropdownMenu.show {
    display: block;
    visibility: visible;
    opacity: 1;
    -webkit-transform: translateY(33px);
    -ms-transform: translateY(33px);
    transform: translateY(33px);
  }
  .btn_wrap a{
    min-width: 250px;
    min-height: 52px;
    font-size: 18px;
    padding: 0 10px;
  }
`;
