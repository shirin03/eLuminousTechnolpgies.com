
import Link from "next/link";
import { CgArrowLongRight } from "react-icons/cg";
import { BtnWrap } from "./ButtonCustom.style.js";
// import './Button.css'

// className={`btn ${colorChange}`}
const ButtonCustom = ({
  titleText,
  colorChange,
  BtnTransparent,
  ParentClass,
}) => {
  return (
    <BtnWrap BtnTransparent={BtnTransparent} className={ParentClass}>
      <button className={`btn ${colorChange}`} type="submit">
        {titleText}
        <CgArrowLongRight />
      </button>
    </BtnWrap>
  );
};

export default ButtonCustom;
