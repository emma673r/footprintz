import React from "react";
import Image from "next/image";
import svgwhitearrow from "../svg/white-arrow.svg";
const WhiteArrow = ({ loadBeanResult }) => {
  return (
    <Image
      onClick={() => {
        loadBeanResult(true);
      }}
      src={svgwhitearrow}
      alt="single bean"
      width="100px"
      height="100px"
    />
  );
};
export default WhiteArrow;
